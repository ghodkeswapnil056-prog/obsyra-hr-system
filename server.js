// Obsyra HRMS Standalone Zero-Dependency Node.js REST API & Database Server
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'db', 'obsyra_database.json');

// Helper to read persistent database
function readDB() {
  try {
    if (fs.existsSync(DB_FILE)) {
      const raw = fs.readFileSync(DB_FILE, 'utf8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Error reading database file:', err);
  }
  return { company: {}, employees: [], history: [], audit_logs: [] };
}

// Helper to write persistent database
function writeDB(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error writing database file:', err);
    return false;
  }
}

// Enable CORS Headers
function setCORSHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

const server = http.createServer((req, res) => {
  setCORSHeaders(res);

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Static File Serving
  if (req.method === 'GET' && !pathname.startsWith('/api')) {
    let filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);
    const extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
      case '.js': contentType = 'text/javascript'; break;
      case '.css': contentType = 'text/css'; break;
      case '.json': contentType = 'application/json'; break;
      case '.png': contentType = 'image/png'; break;
      case '.jpg': contentType = 'image/jpeg'; break;
      case '.svg': contentType = 'image/svg+xml'; break;
    }

    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 Not Found</h1>', 'utf-8');
        } else {
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`);
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
    return;
  }

  // REST API Endpoints
  if (pathname.startsWith('/api')) {
    res.setHeader('Content-Type', 'application/json');

    // 1. GET /api/health
    if (pathname === '/api/health' && req.method === 'GET') {
      res.writeHead(200);
      res.end(JSON.stringify({ status: 'ONLINE', system: 'Obsyra HRMS Backend API Server', timestamp: new Date().toISOString() }));
      return;
    }

    // 2. GET /api/company
    if (pathname === '/api/company' && req.method === 'GET') {
      const db = readDB();
      res.writeHead(200);
      res.end(JSON.stringify({ success: true, company: db.company }));
      return;
    }

    // 3. GET /api/employees
    if (pathname === '/api/employees' && req.method === 'GET') {
      const db = readDB();
      res.writeHead(200);
      res.end(JSON.stringify({ success: true, employees: db.employees }));
      return;
    }

    // 4. GET /api/documents/history
    if (pathname === '/api/documents/history' && req.method === 'GET') {
      const db = readDB();
      res.writeHead(200);
      res.end(JSON.stringify({ success: true, history: db.history }));
      return;
    }

    // 5. GET /api/verify/:serial
    if (pathname.startsWith('/api/verify/') && req.method === 'GET') {
      const serial = pathname.replace('/api/verify/', '').toUpperCase();
      const db = readDB();
      const doc = db.history.find(h => (h.docNumber && h.docNumber.toUpperCase() === serial) || h.id.toUpperCase() === serial);

      if (doc) {
        res.writeHead(200);
        res.end(JSON.stringify({ success: true, verified: true, document: doc }));
      } else {
        res.writeHead(444);
        res.end(JSON.stringify({ success: false, verified: false, message: 'Document serial number not found' }));
      }
      return;
    }

    // Handle POST Requests with Body Parsing
    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk.toString(); });
      req.on('end', () => {
        let payload = {};
        try { payload = JSON.parse(body); } catch (e) {}

        const db = readDB();

        // POST /api/auth/login
        if (pathname === '/api/auth/login') {
          const emp = db.employees.find(e => e.employeeId === payload.employeeId || e.email === payload.employeeId);
          if (emp) {
            res.writeHead(200);
            res.end(JSON.stringify({ success: true, user: { name: emp.fullName, employeeId: emp.employeeId, role: 'Super Admin' } }));
          } else {
            res.writeHead(401);
            res.end(JSON.stringify({ success: false, message: 'Invalid credentials' }));
          }
          return;
        }

        // POST /api/employees
        if (pathname === '/api/employees') {
          const newEmp = { id: `EMP-${Date.now()}`, ...payload };
          db.employees.unshift(newEmp);
          writeDB(db);
          res.writeHead(201);
          res.end(JSON.stringify({ success: true, employee: newEmp }));
          return;
        }

        // Fallback for unknown API POST
        res.writeHead(404);
        res.end(JSON.stringify({ success: false, message: 'API Endpoint not found' }));
      });
      return;
    }
  }
});

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 Obsyra HRMS REST API Server Running at http://localhost:${PORT}`);
  console.log(`📁 Persistent Data Store: ${DB_FILE}`);
  console.log(`=======================================================`);
});
