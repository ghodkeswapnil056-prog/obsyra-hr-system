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
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <button class="btn btn-primary" onclick="window.hrApp.showAssignAssetModal()">
          💻 Handover / Transfer Asset
        </button>
        <button class="btn btn-secondary" onclick="window.hrApp.showRegisterAssetModal()">
          📦 + Register Hardware
        </button>
        <button class="btn btn-secondary" onclick="window.hrApp.showReturnAssetModal()">
          🛑 Asset Return Clearance
        </button>
      </div>
    </div>

    <!-- Sub-Navigation Menu Bar (Asset Module Architecture) -->
    <div class="glass-card" style="margin-bottom: 20px; padding: 12px 20px; border-left: 4px solid var(--primary);">
      <div style="display: flex; gap: 10px; overflow-x: auto; font-weight: 600; font-size: 0.85rem;" id="assetFilterToolbar">
        <button class="btn btn-sm btn-primary asset-filter-btn active" onclick="window.filterAssetTable('ALL', this)">📊 All Assets (385)</button>
        <button class="btn btn-sm btn-secondary asset-filter-btn" onclick="window.filterAssetTable('ASSIGNED', this)">🟢 Assigned (278)</button>
        <button class="btn btn-sm btn-secondary asset-filter-btn" onclick="window.filterAssetTable('AVAILABLE', this)">🔵 Available Vault (72)</button>
        <button class="btn btn-sm btn-secondary asset-filter-btn" onclick="window.filterAssetTable('IN_REPAIR', this)">🔧 In Repair (15)</button>
        <button class="btn btn-sm btn-secondary asset-filter-btn" onclick="window.filterAssetTable('DAMAGED', this)">⚠️ Damaged / Lost (12)</button>
        <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showAssignAssetModal()">💻 Handover / Transfer Asset</button>
        <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showRegisterAssetModal()">📦 Register Hardware</button>
        <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showReturnAssetModal()">🛑 Asset Return</button>
      </div>
    </div>

    <!-- Asset Summary KPI Cards -->
    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card" onclick="window.filterAssetTable('ALL')" style="cursor: pointer;">
        <div class="stat-value">385 Total</div>
        <div class="stat-label">₹ 42.8L Inventory Value</div>
      </div>
      <div class="stat-card" onclick="window.filterAssetTable('ASSIGNED')" style="cursor: pointer;">
        <div class="stat-value" style="color: var(--accent-emerald);">278 Assigned</div>
        <div class="stat-label">72 Available in Pune Vault</div>
      </div>
      <div class="stat-card" onclick="window.filterAssetTable('IN_REPAIR')" style="cursor: pointer;">
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
          <input type="text" id="assetSearchInput" placeholder="Search Tag ID, Serial Number or Employee..." class="form-control" style="width: 280px; font-size: 0.85rem;" onkeyup="window.searchAssetTable(this.value)">
        </div>
      </div>

      <div class="table-responsive">
        <table class="data-table" id="assetMasterTable">
          <thead>
            <tr>
              <th>Asset Tag ID</th>
              <th>Category & Model</th>
              <th>Serial Number / IMEI</th>
              <th>Assigned Employee</th>
              <th>Assigned Location</th>
              <th>Status</th>
              <th>Condition</th>
              <th>Action Buttons Setup</th>
            </tr>
          </thead>
          <tbody>
            <tr data-status="ASSIGNED">
              <td><strong style="font-family: monospace; color: var(--primary);">OBS-LAP-0024</strong></td>
              <td><strong>Dell Latitude 5440 i7</strong><br><small style="color: var(--text-muted);">Laptop / Workstation</small></td>
              <td><code>DL5440202699</code></td>
              <td><strong>Rahul Sharma</strong><br><small style="color: var(--text-muted);">OBS-ENG-26-002</small></td>
              <td>📍 Kharadi, Pune</td>
              <td><span class="badge badge-active">ASSIGNED</span></td>
              <td><span class="badge badge-active">Good</span></td>
              <td>
                <div style="display: flex; gap: 6px;">
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Generated Asset Handover Slip for OBS-LAP-0024')">📄 Handover Slip</button>
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showTransferAssetModal('OBS-LAP-0024')">🔄 Transfer</button>
                  <button class="btn btn-sm btn-primary" onclick="window.hrApp.showReturnAssetModal('OBS-LAP-0024')">🛑 Return</button>
                </div>
              </td>
            </tr>
            <tr data-status="ASSIGNED">
              <td><strong style="font-family: monospace; color: var(--primary);">AST-LAP-2026-001</strong></td>
              <td><strong>MacBook Pro 16" M3 Max</strong><br><small style="color: var(--text-muted);">Laptop / Workstation</small></td>
              <td><code>C02GX001MD68</code></td>
              <td><strong>Swapnil Ghodke</strong><br><small style="color: var(--text-muted);">OBS-OPS-26-001</small></td>
              <td>📍 Wagholi HQ, Pune</td>
              <td><span class="badge badge-active">ASSIGNED</span></td>
              <td><span class="badge badge-active">Excellent</span></td>
              <td>
                <div style="display: flex; gap: 6px;">
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Generated Asset Handover Slip for AST-LAP-2026-001')">📄 Handover Slip</button>
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showTransferAssetModal('AST-LAP-2026-001')">🔄 Transfer</button>
                  <button class="btn btn-sm btn-primary" onclick="window.hrApp.showReturnAssetModal('AST-LAP-2026-001')">🛑 Return</button>
                </div>
              </td>
            </tr>
            <tr data-status="ASSIGNED">
              <td><strong style="font-family: monospace; color: var(--primary);">OBS-KIT-0089</strong></td>
              <td><strong>5G Core Drive Test Analyzer Kit</strong><br><small style="color: var(--text-muted);">Telecom Field Tool Kit</small></td>
              <td><code>5G-KIT-PUNE-0992</code></td>
              <td><strong>Swapnil Ghodke</strong><br><small style="color: var(--text-muted);">OBS-OPS-26-001</small></td>
              <td>📍 Navi Mumbai 5G Core Hub</td>
              <td><span class="badge badge-active">ASSIGNED</span></td>
              <td><span class="badge badge-active">Good</span></td>
              <td>
                <div style="display: flex; gap: 6px;">
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Generated Asset Handover Slip for OBS-KIT-0089')">📄 Handover Slip</button>
                  <button class="btn btn-sm btn-primary" onclick="window.hrApp.showReturnAssetModal('OBS-KIT-0089')">🛑 Return</button>
                </div>
              </td>
            </tr>
            <tr data-status="AVAILABLE">
              <td><strong style="font-family: monospace; color: var(--accent-sky);">AST-LAP-2026-005</strong></td>
              <td><strong>Lenovo ThinkPad P1 Gen 6</strong><br><small style="color: var(--text-muted);">Laptop / Workstation</small></td>
              <td><code>LENV20269981</code></td>
              <td><em>Unassigned</em><br><small style="color: var(--text-muted);">Storage Vault</small></td>
              <td>📍 Pune HQ Vault Storage</td>
              <td><span class="badge badge-pending">AVAILABLE</span></td>
              <td><span class="badge badge-active">Brand New</span></td>
              <td>
                <div style="display: flex; gap: 6px;">
                  <button class="btn btn-sm btn-primary" onclick="window.hrApp.showAssignAssetModal()">💻 Handover Asset</button>
                </div>
              </td>
            </tr>
            <tr data-status="IN_REPAIR">
              <td><strong style="font-family: monospace; color: var(--accent-amber);">OBS-ROUT-0102</strong></td>
              <td><strong>Cisco Industrial 5G Router</strong><br><small style="color: var(--text-muted);">Network Hardware</small></td>
              <td><code>CSC5G991204</code></td>
              <td><em>IT Repairs Desk</em><br><small style="color: var(--text-muted);">Under Maintenance</small></td>
              <td>📍 Service Center Pune</td>
              <td><span class="badge badge-pending" style="color: #fbbf24;">IN REPAIR</span></td>
              <td><span class="badge badge-pending">Damaged Firmware</span></td>
              <td>
                <div style="display: flex; gap: 6px;">
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Repair Inspection Status: Hardware Diagnostic Passed')">🔧 Diagnostic</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Client-side Asset Filter Script -->
    <script>
      window.filterAssetTable = function(status, btnEl) {
        if (btnEl) {
          document.querySelectorAll('.asset-filter-btn').forEach(b => {
            b.classList.remove('btn-primary');
            b.classList.add('btn-secondary');
          });
          btnEl.classList.remove('btn-secondary');
          btnEl.classList.add('btn-primary');
        }

        const rows = document.querySelectorAll('#assetMasterTable tbody tr');
        rows.forEach(r => {
          const rowStatus = r.getAttribute('data-status');
          if (status === 'ALL' || rowStatus === status) {
            r.style.display = '';
          } else {
            r.style.display = 'none';
          }
        });

        if (window.hrApp && typeof window.hrApp.showToast === 'function') {
          window.hrApp.showToast('Filtered Asset Register: ' + status);
        }
      };

      window.searchAssetTable = function(query) {
        const q = query.toLowerCase();
        const rows = document.querySelectorAll('#assetMasterTable tbody tr');
        rows.forEach(r => {
          const text = r.textContent.toLowerCase();
          r.style.display = text.includes(q) ? '' : 'none';
        });
      };
    </script>
  `;
}
