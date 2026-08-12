// Production Single Sign-On (SSO) & Authentication Portal for Obsyra HRMS
import { store } from '../context.js';

export function renderLoginModal() {
  return `
    <div class="modal-overlay" id="loginModalOverlay" style="display: none; z-index: 10000; background: rgba(15, 23, 42, 0.92); backdrop-filter: blur(12px); align-items: center; justify-content: center;">
      <div class="modal-container glass-card" style="width: 540px; max-width: 92vw; padding: 35px; border-radius: 20px; border: 1px solid var(--border-color); background: rgba(30, 41, 59, 0.98); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);">
        
        <div style="text-align: center; margin-bottom: 25px;">
          <div style="display: inline-flex; align-items: center; gap: 10px; margin-bottom: 8px;">
            <div style="width: 42px; height: 42px; background: linear-gradient(135deg, var(--primary), var(--accent-emerald)); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 800; font-size: 1.3rem;">O</div>
            <span style="font-size: 1.6rem; font-weight: 800; tracking: -0.02em; color: white;">OBSYRA <span style="color: var(--primary-light);">HRMS</span></span>
          </div>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Enterprise Role-Based Access Control & Portal Gateway</p>
        </div>

        <!-- 1-Click Role Portal Quick Logins -->
        <div style="margin-bottom: 25px; background: rgba(255,255,255,0.03); padding: 16px; border-radius: 12px; border: 1px solid var(--border-color);">
          <small style="display: block; color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; margin-bottom: 12px; text-align: center;">⚡ Select Portal Demo Login (1-Click Redirect):</small>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <button type="button" class="btn btn-secondary" style="font-size: 0.85rem; padding: 8px 12px; text-align: left;" onclick="window.hrApp.loginAsRole('Employee', 'Rahul Sharma', 'OBS-ENG-26-002')">
              👤 <strong>Employee Portal</strong><br><small style="color: var(--text-muted);">Self-Service & Clock-In</small>
            </button>

            <button type="button" class="btn btn-secondary" style="font-size: 0.85rem; padding: 8px 12px; text-align: left;" onclick="window.hrApp.loginAsRole('Department Manager', 'Swapnil Ghodke', 'OBS-OPS-26-001')">
              👨‍💼 <strong>Manager Portal</strong><br><small style="color: var(--text-muted);">Team Roster & Approvals</small>
            </button>

            <button type="button" class="btn btn-secondary" style="font-size: 0.85rem; padding: 8px 12px; text-align: left;" onclick="window.hrApp.loginAsRole('HR Admin', 'Priya Patel', 'OBS-HR-26-003')">
              👩‍💼 <strong>HR Portal</strong><br><small style="color: var(--text-muted);">Workforce & Payroll</small>
            </button>

            <button type="button" class="btn btn-secondary" style="font-size: 0.85rem; padding: 8px 12px; text-align: left;" onclick="window.hrApp.loginAsRole('Payroll', 'Payroll Manager', 'OBS-PAY-26-004')">
              💰 <strong>Payroll Portal</strong><br><small style="color: var(--text-muted);">Salary & Compensation</small>
            </button>

            <button type="button" class="btn btn-secondary" style="font-size: 0.85rem; padding: 8px 12px; text-align: left;" onclick="window.hrApp.loginAsRole('Site Coordinator', 'Ananya Deshmukh', 'OBS-SITE-26-005')">
              📍 <strong>Site Portal</strong><br><small style="color: var(--text-muted);">Telecom Field Sites</small>
            </button>

            <button type="button" class="btn btn-primary" style="font-size: 0.85rem; padding: 8px 12px; text-align: left;" onclick="window.hrApp.loginAsRole('Super Admin', 'System Administrator', 'OBS-ADM-26-000')">
              ⚙️ <strong>Super Admin</strong><br><small style="color: white;">Full Platform Control</small>
            </button>
          </div>
        </div>

        <!-- Employee ID + Password Form -->
        <form onsubmit="window.hrApp.handleLoginSubmit(event)" style="display: flex; flex-direction: column; gap: 14px;">
          <div class="form-group">
            <label class="form-label" style="font-weight: 600;">Employee ID / Corporate Email</label>
            <input type="text" id="loginUsername" class="form-control" placeholder="e.g. OBS-OPS-26-001 or swapnil@obsyra.co.in" value="OBS-OPS-26-001" required>
          </div>

          <div class="form-group">
            <label class="form-label" style="font-weight: 600;">Password</label>
            <input type="password" id="loginPassword" class="form-control" value="••••••••••••" required>
          </div>

          <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 10px;">
            <button type="button" class="btn btn-secondary" onclick="window.hrApp.closeLoginModal()">Cancel</button>
            <button type="submit" class="btn btn-primary" style="font-weight: 700; width: 180px;">
              🔐 Sign In & Redirect
            </button>
          </div>
        </form>

      </div>
    </div>
  `;
}
