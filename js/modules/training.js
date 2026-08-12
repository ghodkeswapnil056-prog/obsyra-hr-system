// Training, Skill Matrix & Certification Expiry Center
import { store } from '../context.js';

export function renderTraining() {
  const state = store.getState();
  const employees = state.employees || [];

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Training & Certification Center</h1>
        <p class="page-subtitle">Track employee technical certifications, 5G telecom safety compliance & skill matrices</p>
      </div>
      <button class="btn btn-primary" onclick="window.hrApp.showToast('Opened Add Employee Certification modal')">
        🎓 + Add Technical Certification
      </button>
    </div>

    <!-- Certification Expiry Alert Widgets -->
    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card">
        <div class="stat-value">6 Certs</div>
        <div class="stat-label">Active Certifications</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-emerald);">100% Verified</div>
        <div class="stat-label">Safety Compliance</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-amber);">1 Expiring Soon</div>
        <div class="stat-label">Renewal Window (30 Days)</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--primary);">Telecom & IT</div>
        <div class="stat-label">Skill Domains</div>
      </div>
    </div>

    <div class="glass-card">
      <h3 style="margin-bottom: 15px;">Employee Technical Certifications & Expiry Tracker</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Certification Name</th>
              <th>Issuing Authority</th>
              <th>Issue Date</th>
              <th>Expiry Date</th>
              <th>Compliance Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Swapnil Ghodke</strong><br><small style="color: var(--text-muted);">OBS-OPS-26-001</small></td>
              <td>Certified 5G Network Specialist (C5GNS)</td>
              <td>Telecom Sector Skill Council (TSSC)</td>
              <td>15 Oct 2024</td>
              <td>14 Oct 2027</td>
              <td><span class="badge badge-active">Valid (800 Days)</span></td>
              <td>
                <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Viewing Certificate C5GNS-2024-998')">
                  View Certificate
                </button>
              </td>
            </tr>
            <tr>
              <td><strong>Rahul Sharma</strong><br><small style="color: var(--text-muted);">OBS-ENG-26-002</small></td>
              <td>Cisco Certified Network Associate (CCNA)</td>
              <td>Cisco Systems</td>
              <td>10 Mar 2023</td>
              <td>09 Sep 2026</td>
              <td><span class="badge badge-warning">Expiring in 28 Days</span></td>
              <td>
                <button class="btn btn-sm btn-primary" onclick="window.hrApp.showToast('Initiated Renewal for Rahul Sharma CCNA')">
                  Initiate Renewal
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}
