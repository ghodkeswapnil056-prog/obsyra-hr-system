// Login System Modal with Demo Quick-Logins & RBAC Authentication
import { store } from '../context.js';

export function renderLoginModal() {
  return `
    <div class="modal-overlay active" id="loginModalOverlay" style="z-index: 10000; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(12px); display: flex; align-items: center; justify-content: center;">
      <div class="modal-container glass-card" style="width: 540px; max-width: 92vw; padding: 35px; border-radius: 16px; border: 1px solid var(--border-color); box-shadow: var(--shadow-glow); background: rgba(30, 41, 59, 0.95);">
        
        <div style="text-align: center; margin-bottom: 25px;">
          <img src="assets/obsyra_logo.jpg" alt="Obsyra Logo" style="width: 60px; height: 60px; border-radius: 12px; margin-bottom: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); background: #ffffff; padding: 2px;" />
          <h2 style="font-family: var(--font-heading); font-size: 1.6rem; margin-bottom: 4px; background: var(--primary-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Obsyra Enterprise HR Portal</h2>
          <p style="color: var(--text-muted); font-size: 0.88rem;">Role-Based Access Control (RBAC) System & Authentication</p>
        </div>

        <!-- Role Quick-Login Selector Badges -->
        <div style="margin-bottom: 25px; background: rgba(255,255,255,0.03); padding: 15px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <small style="display: block; color: var(--text-subtle); font-weight: 700; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.08em; margin-bottom: 10px; text-align: center;">⚡ Demo Quick-Login by Role</small>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
            <button class="btn btn-sm btn-primary" onclick="window.hrApp.quickLogin('OBS-OPS-26-001')">
              👑 Super Admin
            </button>
            <button class="btn btn-sm btn-secondary" onclick="window.hrApp.quickLogin('OBS-DIR-26-000')">
              🏢 HR Admin
            </button>
            <button class="btn btn-sm btn-secondary" onclick="window.hrApp.quickLogin('OBS-HR-26-003')">
              📝 HR Executive
            </button>
            <button class="btn btn-sm btn-secondary" onclick="window.hrApp.quickLogin('OBS-ENG-26-002')">
              👥 Dept Manager
            </button>
            <button class="btn btn-sm btn-secondary" onclick="window.hrApp.quickLogin('OBS-EMP-26-004')">
              👤 Employee (Self)
            </button>
          </div>
        </div>

        <form onsubmit="window.hrApp.handleLoginSubmit(event)" style="display: flex; flex-direction: column; gap: 16px;">
          <div class="form-group">
            <label class="form-label" style="font-weight: 600;">Employee ID / Corporate Email</label>
            <input type="text" id="loginEmpId" class="form-control" placeholder="e.g. OBS-OPS-26-001 or swapnil.ghodke@obsyra.com" value="OBS-OPS-26-001" required style="font-family: monospace; font-size: 0.95rem;">
          </div>

          <div class="form-group">
            <label class="form-label" style="font-weight: 600;">Security Password / Passcode</label>
            <input type="password" id="loginPassword" class="form-control" placeholder="••••••••••••" value="Obsyra2026@" required>
          </div>

          <button type="submit" class="btn btn-primary btn-lg" style="width: 100%; margin-top: 10px; font-weight: 700; font-size: 1rem; padding: 12px;">
            🔒 Secure Sign In to HR Portal
          </button>
        </form>

        <div style="margin-top: 20px; text-align: center; color: var(--text-subtle); font-size: 0.78rem;">
          Obsyra Private Limited • CIN: U63991PN2026PTC252127 • Wagholi, Pune 412207
        </div>
      </div>
    </div>
  `;
}
