// Standalone Production Login & Authentication Portal Page for Obsyra HRMS
import { store } from '../context.js';

export function renderLoginPage() {
  const state = store.getState();
  const company = state.company || {};

  return `
    <div style="min-height: 85vh; display: flex; align-items: center; justify-content: center; padding: 20px;">
      <div class="glass-card" style="width: 900px; max-width: 96vw; padding: 0; overflow: hidden; display: grid; grid-template-columns: 1.1fr 1fr; border-radius: 24px; border: 1px solid var(--border-color-light); box-shadow: var(--shadow-glow);">
        
        <!-- Left Branding & Corporate Identity Hero Panel -->
        <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80') center/cover; padding: 45px 35px; display: flex; flex-direction: column; justify-content: space-between; color: white; position: relative;">
          <div>
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
              <div style="width: 48px; height: 48px; background: white; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--primary); font-weight: 800; font-size: 1.5rem; box-shadow: var(--shadow-md);">O</div>
              <div>
                <h2 style="font-size: 1.6rem; font-weight: 800; tracking: -0.02em; margin: 0; color: white;">OBSYRA <span style="color: #cbd5e1;">HRMS</span></h2>
                <small style="color: rgba(255,255,255,0.8); font-size: 0.78rem;">v2.5 Enterprise Edition</small>
              </div>
            </div>

            <h1 style="font-size: 1.85rem; font-weight: 700; line-height: 1.3; margin-bottom: 15px;">Unified Workforce & Location Management System</h1>
            <p style="color: rgba(255,255,255,0.85); font-size: 0.92rem; line-height: 1.6;">
              GPS Geofencing, 5G Field Toolkits, Single Permanent Employee ID, 3-Section Statutory Payroll, and Secure HR Document Vault.
            </p>
          </div>

          <div style="margin-top: 30px; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 20px;">
            <div style="font-weight: 600; font-size: 0.9rem;">${company.name || 'Obsyra Private Limited'}</div>
            <small style="color: rgba(255,255,255,0.7); display: block; margin-top: 4px;">CIN: ${company.cin || 'U63991PN2026PTC252127'} • Wagholi, Pune HQ</small>
          </div>
        </div>

        <!-- Right Interactive Authentication Form Panel -->
        <div style="padding: 40px 35px; background: rgba(30, 41, 59, 0.95); display: flex; flex-direction: column; justify-content: center;">
          <div style="margin-bottom: 25px;">
            <h2 style="font-size: 1.45rem; font-weight: 700; color: var(--text-main); margin-bottom: 6px;">Sign In to Your Portal</h2>
            <p style="color: var(--text-muted); font-size: 0.88rem;">Select your role portal or enter employee credentials</p>
          </div>

          <!-- 1-Click Role Redirect Gateway Grid -->
          <div style="margin-bottom: 22px;">
            <small style="display: block; color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; margin-bottom: 10px;">⚡ Select Role Portal (1-Click Sign In):</small>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <button type="button" class="btn btn-secondary" style="font-size: 0.82rem; padding: 10px; text-align: left; display: flex; flex-direction: column; gap: 2px;" onclick="window.hrApp.loginFromPage('Employee', 'Rahul Sharma', 'OBS-ENG-26-002')">
                <span>👤 <strong>Employee Portal</strong></span>
                <small style="color: var(--text-muted); font-size: 0.72rem;">Self-Service ESS</small>
              </button>

              <button type="button" class="btn btn-secondary" style="font-size: 0.82rem; padding: 10px; text-align: left; display: flex; flex-direction: column; gap: 2px;" onclick="window.hrApp.loginFromPage('Department Manager', 'Swapnil Ghodke', 'OBS-OPS-26-001')">
                <span>👨‍💼 <strong>Manager Portal</strong></span>
                <small style="color: var(--text-muted); font-size: 0.72rem;">Team Roster</small>
              </button>

              <button type="button" class="btn btn-secondary" style="font-size: 0.82rem; padding: 10px; text-align: left; display: flex; flex-direction: column; gap: 2px;" onclick="window.hrApp.loginFromPage('HR Admin', 'Priya Patel', 'OBS-HR-26-003')">
                <span>👩‍💼 <strong>HR Portal</strong></span>
                <small style="color: var(--text-muted); font-size: 0.72rem;">Workforce Suite</small>
              </button>

              <button type="button" class="btn btn-secondary" style="font-size: 0.82rem; padding: 10px; text-align: left; display: flex; flex-direction: column; gap: 2px;" onclick="window.hrApp.loginFromPage('Payroll', 'Payroll Manager', 'OBS-PAY-26-004')">
                <span>💰 <strong>Payroll Portal</strong></span>
                <small style="color: var(--text-muted); font-size: 0.72rem;">Salary Payouts</small>
              </button>

              <button type="button" class="btn btn-secondary" style="font-size: 0.82rem; padding: 10px; text-align: left; display: flex; flex-direction: column; gap: 2px;" onclick="window.hrApp.loginFromPage('Site Coordinator', 'Ananya Deshmukh', 'OBS-SITE-26-005')">
                <span>📍 <strong>Site Portal</strong></span>
                <small style="color: var(--text-muted); font-size: 0.72rem;">Telecom 5G Sites</small>
              </button>

              <button type="button" class="btn btn-primary" style="font-size: 0.82rem; padding: 10px; text-align: left; display: flex; flex-direction: column; gap: 2px;" onclick="window.hrApp.loginFromPage('Super Admin', 'System Administrator', 'OBS-ADM-26-000')">
                <span>⚙️ <strong>Super Admin</strong></span>
                <small style="color: white; font-size: 0.72rem;">Full System Access</small>
              </button>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
            <div style="flex: 1; height: 1px; background: var(--border-color);"></div>
            <span style="font-size: 0.75rem; color: var(--text-subtle); text-transform: uppercase;">Or Employee ID Sign In</span>
            <div style="flex: 1; height: 1px; background: var(--border-color);"></div>
          </div>

          <!-- Credential Sign In Form -->
          <form onsubmit="window.hrApp.handleLoginPageSubmit(event)" style="display: flex; flex-direction: column; gap: 14px;">
            <div class="form-group">
              <label class="form-label" style="font-weight: 600; font-size: 0.85rem;">Employee ID / Email</label>
              <input type="text" id="pageLoginUser" class="form-control" value="OBS-OPS-26-001" placeholder="e.g. OBS-OPS-26-001" required>
            </div>

            <div class="form-group">
              <label class="form-label" style="font-weight: 600; font-size: 0.85rem;">Password</label>
              <input type="password" id="pageLoginPwd" class="form-control" value="••••••••••••" required>
            </div>

            <button type="submit" class="btn btn-primary" style="font-weight: 700; width: 100%; padding: 12px; margin-top: 6px;">
              🔐 Authenticate & Redirect
            </button>
          </form>

        </div>
      </div>
    </div>
  `;
}
