// Comprehensive Asset Management & Property Tracking Engine for Obsyra HRMS
import { store } from '../context.js';

export function renderAssetEngine() {
  const state = store.getState();
  const employees = state.employees || [];

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Obsyra Enterprise Asset Management Suite</h1>
        <p class="page-subtitle">Hardware Inventory • 5G Telecom Field Toolkits • SIM Cards • Asset Lifecycle • Digital Handover Slips</p>
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn btn-primary" onclick="window.hrApp.showAssignAssetModal()">
          💻 Handover Asset
        </button>
        <button class="btn btn-secondary" onclick="window.hrApp.showRegisterAssetModal()">
          📦 + Register Hardware
        </button>
      </div>
    </div>

    <!-- Sub-Navigation Menu Bar (Asset Module Architecture) -->
    <div class="glass-card" style="margin-bottom: 20px; padding: 12px 20px; border-left: 4px solid var(--primary);">
      <div style="display: flex; gap: 12px; overflow-x: auto; font-weight: 600; font-size: 0.88rem;">
        <button class="btn btn-sm btn-primary" onclick="window.hrApp.showToast('Viewing Asset Dashboard')">📊 Dashboard</button>
        <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Viewing All Hardware Assets')">🖥️ All Assets (385)</button>
        <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showAssignAssetModal()">💻 Handover Asset</button>
        <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showRegisterAssetModal()">📦 + Register Hardware</button>
        <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Viewing Assigned Assets (278)')">🟢 Assigned (278)</button>
        <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Viewing Available Storage Vault (72)')">🔵 Available (72)</button>
        <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Viewing Asset Transfers Log')">🔄 Transfers</button>
        <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Viewing Asset Returns Log')">🛑 Returns</button>
        <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Viewing Repair & Maintenance (15)')">🔧 In Repair (15)</button>
      </div>
    </div>

    <!-- Asset Summary KPI Cards -->
    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card">
        <div class="stat-value">385 Total</div>
        <div class="stat-label">₹ 42.8L Inventory Value</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-emerald);">278 Assigned</div>
        <div class="stat-label">72 Available in Pune Vault</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-amber);">15 In Repair</div>
        <div class="stat-label">8 Damaged • 2 Lost</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--primary);">100%</div>
        <div class="stat-label">Digital Ack Compliance</div>
      </div>
    </div>

    <!-- 7-Step Asset Lifecycle & Clearance Stepper -->
    <div class="glass-card" style="margin-bottom: 25px; border-left: 4px solid var(--accent-amber);">
      <h3 style="margin-bottom: 12px; color: var(--accent-amber);">Standard Asset Allocation & Clearance Stepper</h3>
      <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; text-align: center;">
        <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 10px; border-radius: var(--radius-sm);">
          <strong style="font-size: 0.78rem; color: #34d399; display: block;">1. Vault Storage</strong>
          <small style="font-size: 0.7rem; color: var(--text-muted);">AVAILABLE</small>
        </div>
        <div style="background: rgba(14, 165, 233, 0.1); border: 1px solid rgba(14, 165, 233, 0.3); padding: 10px; border-radius: var(--radius-sm);">
          <strong style="font-size: 0.78rem; color: #38bdf8; display: block;">2. Requisition</strong>
          <small style="font-size: 0.7rem; color: var(--text-muted);">HR Form</small>
        </div>
        <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); padding: 10px; border-radius: var(--radius-sm);">
          <strong style="font-size: 0.78rem; color: #fbbf24; display: block;">3. Manager Signoff</strong>
          <small style="font-size: 0.7rem; color: var(--text-muted);">APPROVED</small>
        </div>
        <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); padding: 10px; border-radius: var(--radius-sm);">
          <strong style="font-size: 0.78rem; color: #c084fc; display: block;">4. Hardware Issue</strong>
          <small style="font-size: 0.7rem; color: var(--text-muted);">ASSIGNED</small>
        </div>
        <div style="background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); padding: 10px; border-radius: var(--radius-sm);">
          <strong style="font-size: 0.78rem; color: #818cf8; display: block;">5. Employee Ack</strong>
          <small style="font-size: 0.7rem; color: var(--text-muted);">Signed Form</small>
        </div>
        <div style="background: rgba(236, 72, 153, 0.1); border: 1px solid rgba(236, 72, 153, 0.3); padding: 10px; border-radius: var(--radius-sm);">
          <strong style="font-size: 0.78rem; color: #f472b6; display: block;">6. Return Clearance</strong>
          <small style="font-size: 0.7rem; color: var(--text-muted);">RETURNED</small>
        </div>
        <div style="background: rgba(100, 116, 139, 0.1); border: 1px solid rgba(100, 116, 139, 0.3); padding: 10px; border-radius: var(--radius-sm);">
          <strong style="font-size: 0.78rem; color: #cbd5e1; display: block;">7. Inspection</strong>
          <small style="font-size: 0.7rem; color: var(--text-muted);">Vault Check</small>
        </div>
      </div>
    </div>

    <!-- Main Hardware Inventory Roster Table -->
    <div class="glass-card" style="margin-bottom: 25px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
        <h3>Hardware Property Register & Assignment Logs</h3>
        <div style="display: flex; gap: 10px;">
          <input type="text" placeholder="Search Tag ID, Serial Number or Employee..." class="form-control" style="width: 280px; font-size: 0.85rem;">
        </div>
      </div>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Asset Tag ID</th>
              <th>Category & Model</th>
              <th>Serial Number / IMEI</th>
              <th>Assigned Employee</th>
              <th>Assigned Location</th>
              <th>Status</th>
              <th>Condition</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong style="font-family: monospace; color: var(--primary);">OBS-LAP-0024</strong></td>
              <td><strong>Dell Latitude 5440 i7</strong><br><small style="color: var(--text-muted);">Laptop / Workstation</small></td>
              <td><code>DL5440202699</code></td>
              <td><strong>Rahul Sharma</strong><br><small style="color: var(--text-muted);">OBS-ENG-26-002</small></td>
              <td>📍 Kharadi, Pune</td>
              <td><span class="badge badge-active">ASSIGNED</span></td>
              <td><span class="badge badge-active">Good</span></td>
              <td>
                <div style="display: flex; gap: 6px;">
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Generated Asset Ack Slip for OBS-LAP-0024')">Slip</button>
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Initiating Asset Transfer for OBS-LAP-0024')">Transfer</button>
                  <button class="btn btn-sm btn-primary" onclick="window.hrApp.showToast('Initiating Asset Return Inspection')">Return</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><strong style="font-family: monospace; color: var(--primary);">AST-LAP-2026-001</strong></td>
              <td><strong>MacBook Pro 16" M3 Max</strong><br><small style="color: var(--text-muted);">Laptop / Workstation</small></td>
              <td><code>C02GX001MD68</code></td>
              <td><strong>Swapnil Ghodke</strong><br><small style="color: var(--text-muted);">OBS-OPS-26-001</small></td>
              <td>📍 Wagholi HQ, Pune</td>
              <td><span class="badge badge-active">ASSIGNED</span></td>
              <td><span class="badge badge-active">Excellent</span></td>
              <td>
                <div style="display: flex; gap: 6px;">
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Generated Asset Ack Slip for AST-LAP-2026-001')">Slip</button>
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Initiating Asset Transfer for AST-LAP-2026-001')">Transfer</button>
                  <button class="btn btn-sm btn-primary" onclick="window.hrApp.showToast('Initiating Asset Return Inspection')">Return</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><strong style="font-family: monospace; color: var(--primary);">OBS-KIT-0089</strong></td>
              <td><strong>5G Core Drive Test Analyzer Kit</strong><br><small style="color: var(--text-muted);">Telecom Field Tool Kit</small></td>
              <td><code>5G-KIT-PUNE-0992</code></td>
              <td><strong>Swapnil Ghodke</strong><br><small style="color: var(--text-muted);">OBS-OPS-26-001</small></td>
              <td>📍 Navi Mumbai 5G Core Hub</td>
              <td><span class="badge badge-active">ASSIGNED</span></td>
              <td><span class="badge badge-active">Good</span></td>
              <td>
                <div style="display: flex; gap: 6px;">
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Generated Asset Ack Slip for OBS-KIT-0089')">Slip</button>
                  <button class="btn btn-sm btn-primary" onclick="window.hrApp.showToast('Initiating Asset Return Inspection')">Return</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><strong style="font-family: monospace; color: var(--primary);">OBS-SIM-1044</strong></td>
              <td><strong>Jio 5G Testing Dual SIM Card</strong><br><small style="color: var(--text-muted);">Corporate SIM / Data</small></td>
              <td><code>8991002345678912</code></td>
              <td><strong>Priya Patel</strong><br><small style="color: var(--text-muted);">OBS-HR-26-003</small></td>
              <td>📍 Wagholi HQ, Pune</td>
              <td><span class="badge badge-active">ASSIGNED</span></td>
              <td><span class="badge badge-active">New</span></td>
              <td>
                <div style="display: flex; gap: 6px;">
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Viewing SIM details')">View SIM</button>
                  <button class="btn btn-sm btn-primary" onclick="window.hrApp.showToast('Initiating SIM Return')">Return</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}
