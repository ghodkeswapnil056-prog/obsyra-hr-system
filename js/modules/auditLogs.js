// Real-Time System Security & Audit Log Viewer
import { store } from '../context.js';

export function renderAuditLogs() {
  const state = store.getState();
  const currentUser = state.currentUser;

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>System Security & Audit Trail Logs</h1>
        <p class="page-subtitle">Complete chronological record of all administrative actions, document generation events, and access logs</p>
      </div>
      <button class="btn btn-secondary" onclick="window.hrApp.showToast('Exported Audit Log Trail to CSV')">
        📥 Export Audit CSV
      </button>
    </div>

    <!-- Audit Security Summary Cards -->
    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card">
        <div class="stat-value">1,248</div>
        <div class="stat-label">Total Audit Events</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-emerald);">0 Security Alerts</div>
        <div class="stat-label">System Integrity</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-sky);">100% Passed</div>
        <div class="stat-label">Compliance Audit</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--primary);">256-bit AES</div>
        <div class="stat-label">Log Encryption</div>
      </div>
    </div>

    <div class="glass-card">
      <h3 style="margin-bottom: 15px;">Real-Time Administrative Event Trail</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Operator / User</th>
              <th>Role Privilege</th>
              <th>Module</th>
              <th>Action Details</th>
              <th>IP Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12 Aug 2026, 10:15 IST</td>
              <td><strong>${currentUser.name}</strong></td>
              <td><span class="badge badge-primary">${currentUser.role}</span></td>
              <td>Document Generator</td>
              <td>Generated Offer Letter <code>OBS-OFFER-2026-0028</code> for Rahul Sharma</td>
              <td>10.0.4.12 (Pune HQ)</td>
              <td><span class="badge badge-active">SUCCESS</span></td>
            </tr>
            <tr>
              <td>12 Aug 2026, 09:30 IST</td>
              <td><strong>Swapnil Ghodke</strong></td>
              <td><span class="badge badge-primary">Super Admin</span></td>
              <td>Company Settings</td>
              <td>Updated Official Seal SVG and CIN Registration Record</td>
              <td>10.0.4.15 (Pune HQ)</td>
              <td><span class="badge badge-active">SUCCESS</span></td>
            </tr>
            <tr>
              <td>11 Aug 2026, 23:15 IST</td>
              <td><strong>Priya Patel</strong></td>
              <td><span class="badge badge-secondary">HR Executive</span></td>
              <td>Employee Master</td>
              <td>Added new employee profile <code>OBS-EMP-26-004</code> (Ananya Deshmukh)</td>
              <td>10.0.4.88 (Pune HQ)</td>
              <td><span class="badge badge-active">SUCCESS</span></td>
            </tr>
            <tr>
              <td>11 Aug 2026, 18:45 IST</td>
              <td><strong>Avinash Dagdu Aade</strong></td>
              <td><span class="badge badge-primary">Director / HR Admin</span></td>
              <td>Exit Management</td>
              <td>Approved Relieving Order <code>OBS-REL-2026-0006</code> for Exiting Engineer</td>
              <td>10.0.4.01 (Director Desk)</td>
              <td><span class="badge badge-active">SUCCESS</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}
