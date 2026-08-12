// Role-Specific Portals & Dashboards for Obsyra HRMS (Employee, Manager, HR, Admin, Payroll, Site Coordinator)
import { store } from '../context.js';

// 1. Employee Portal (Self-Service)
export function renderEmployeePortal() {
  const state = store.getState();
  const currentUser = state.currentUser || {};
  const activePunch = state.activePunch;

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>👋 Good Morning, ${currentUser.name}</h1>
        <p class="page-subtitle">Employee Self-Service Portal • ${currentUser.designation || 'Staff Member'} (${currentUser.employeeId})</p>
      </div>
      <button class="btn btn-primary" onclick="window.hrApp.toggleAttendancePunch()">
        ${activePunch ? '🛑 Check Out' : '📍 Check In Now'}
      </button>
    </div>

    <!-- Mobile-First Clock-In & Location Card -->
    <div class="grid-2" style="margin-bottom: 25px;">
      <div class="glass-card" style="border-left: 4px solid var(--accent-emerald);">
        <span class="badge badge-active" style="margin-bottom: 10px; display: inline-block;">TODAY'S ATTENDANCE</span>
        <h2 style="font-size: 1.8rem; margin-bottom: 6px; color: #34d399;">
          ${activePunch ? `Checked In: ${activePunch.checkInTime}` : '09:42 AM (Expected)'}
        </h2>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 15px;">
          📍 <strong>Current Location:</strong> ${activePunch ? activePunch.address : 'Kharadi, Pune, Maharashtra (18m Accuracy)'}
        </p>
        <div style="display: flex; gap: 10px;">
          <button class="btn ${activePunch ? 'btn-danger' : 'btn-primary'}" onclick="window.hrApp.toggleAttendancePunch()">
            ${activePunch ? '🛑 CHECK OUT' : '📍 CHECK IN NOW'}
          </button>
          <button class="btn btn-secondary" onclick="window.hrApp.showAddRemarkModal()">
            💬 Add Remark
          </button>
        </div>
      </div>

      <div class="glass-card">
        <h3>My Quick Actions</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 15px;">
          <button class="btn btn-secondary" onclick="window.store.navigate('attendance')">📅 My Attendance</button>
          <button class="btn btn-secondary" onclick="window.store.navigate('payroll')">💵 My Payslips</button>
          <button class="btn btn-secondary" onclick="window.store.navigate('expenses')">💸 Submit Claim</button>
          <button class="btn btn-secondary" onclick="window.store.navigate('assets')">💻 My Assets</button>
        </div>
      </div>
    </div>
  `;
}

// 2. Manager Portal (Team Supervision)
export function renderManagerPortal() {
  const state = store.getState();
  const currentUser = state.currentUser || {};
  const employees = state.employees || [];

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>👥 Obsyra Manager Supervision Portal</h1>
        <p class="page-subtitle">Team Lead Workspace • ${currentUser.name} (${currentUser.department || 'Telecom Operations'})</p>
      </div>
      <button class="btn btn-primary" onclick="window.store.navigate('attendance')">
        📋 Team Attendance Roster
      </button>
    </div>

    <!-- Team Overview KPI Cards -->
    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card">
        <div class="stat-value">25 Team Staff</div>
        <div class="stat-label">Direct Reports</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-emerald);">21 Present</div>
        <div class="stat-label">On-Site & Field</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-amber);">2 Leave</div>
        <div class="stat-label">1 WFH • 1 Field Duty</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--primary);">4 Pending</div>
        <div class="stat-label">Approvals Queue</div>
      </div>
    </div>

    <!-- Team Attendance Table -->
    <div class="glass-card">
      <h3 style="margin-bottom: 15px;">My Direct Reports Attendance Status</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Designation</th>
              <th>Today's Status</th>
              <th>Check-In Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${employees.map(emp => `
              <tr>
                <td><strong>${emp.fullName}</strong><br><small style="color: var(--text-muted);">${emp.employeeId}</small></td>
                <td>${emp.employment?.designation}</td>
                <td><span class="badge badge-active">Present (09:30 AM)</span></td>
                <td>📍 Kharadi, Pune (Geofenced)</td>
                <td>
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Approving remark for ${emp.fullName}')">
                    Approve Exception
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 3. HR Portal (Operations & Approvals)
export function renderHRPortal() {
  const state = store.getState();

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>🏢 Obsyra HR Operations Portal</h1>
        <p class="page-subtitle">Full Workforce Management, Document Vault & Operational Administration</p>
      </div>
      <button class="btn btn-primary" onclick="window.store.navigate('generator')">
        📄 + Generate Document
      </button>
    </div>

    <!-- HR KPI Cards -->
    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card"><div class="stat-value">250 Staff</div><div class="stat-label">Total Workforce</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--accent-emerald);">196 Present</div><div class="stat-label">14 Absent • 22 Leave</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--accent-amber);">42 Field Duty</div><div class="stat-label">18 WFH • 17 On Duty</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--primary);">14 Remarks</div><div class="stat-label">11 OT Approvals Pending</div></div>
    </div>
  `;
}

// 4. Admin Portal (Platform Owner & System Config)
export function renderAdminPortal() {
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>⚙ Super Admin System Platform</h1>
        <p class="page-subtitle">System Overview, Security Audit Logs, Organizations & Global RBAC Configuration</p>
      </div>
      <button class="btn btn-primary" onclick="window.store.navigate('auditLogs')">
        🛡️ View Security Audit Logs
      </button>
    </div>

    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card"><div class="stat-value">250 Employees</div><div class="stat-label">Total Users</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--accent-emerald);">18 Managers</div><div class="stat-label">Team Supervisors</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--accent-sky);">6 HR Admins</div><div class="stat-label">Operations Staff</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--primary);">ONLINE</div><div class="stat-label">System Backend Status</div></div>
    </div>
  `;
}

// 5. Payroll Portal (Compensation & Salary Processing)
export function renderPayrollPortal() {
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>💵 Payroll & Compensation Portal</h1>
        <p class="page-subtitle">Monthly Salary Rolls, Statutory PF/PT Deductions & Payslip Disbursement</p>
      </div>
      <button class="btn btn-primary" onclick="window.store.navigate('payroll')">
        💵 Process Payroll Roll
      </button>
    </div>

    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card"><div class="stat-value">₹ 3.85L</div><div class="stat-label">Monthly Payroll</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--accent-emerald);">4 Slips</div><div class="stat-label">Processed Slips</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--accent-amber);">₹ 21,600</div><div class="stat-label">PF/PT Deductions</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--primary);">LOCKED</div><div class="stat-label">Attendance Input Status</div></div>
    </div>
  `;
}

// 6. Site Coordinator Portal (Field Project Supervision)
export function renderSiteCoordinatorPortal() {
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>🏗️ Site & Project Coordinator Portal</h1>
        <p class="page-subtitle">Telecom 5G Core & Data Center Field Site Operations</p>
      </div>
      <button class="btn btn-primary" onclick="window.store.navigate('projects')">
        🏗️ View Active Project Sites
      </button>
    </div>

    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card"><div class="stat-value">5 Sites</div><div class="stat-label">Active Deployments</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--accent-emerald);">4 Staff</div><div class="stat-label">Field Engineers On-Site</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--accent-sky);">98.4%</div><div class="stat-label">SLA Execution Rate</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--primary);">PAN India</div><div class="stat-label">Field Coverage</div></div>
    </div>
  `;
}
