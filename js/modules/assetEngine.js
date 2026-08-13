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

    <!-- Enhanced Asset Summary KPI Grid (6 Modern Glass Cards) -->
    <div class="grid-4" style="margin-bottom: 25px; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));">
      <div class="stat-card" onclick="window.filterAssetTable('ALL')" style="cursor: pointer; border-left: 4px solid var(--primary);">
        <div class="stat-value" style="color: white;">385 Items</div>
        <div class="stat-label">₹ 42.8L Inventory Value</div>
      </div>
      <div class="stat-card" onclick="window.filterAssetTable('ASSIGNED')" style="cursor: pointer; border-left: 4px solid var(--accent-emerald);">
        <div class="stat-value" style="color: var(--accent-emerald);">278 Assigned</div>
        <div class="stat-label">72.2% Active Utilization</div>
      </div>
      <div class="stat-card" onclick="window.filterAssetTable('AVAILABLE')" style="cursor: pointer; border-left: 4px solid var(--accent-sky);">
        <div class="stat-value" style="color: var(--accent-sky);">72 Vault</div>
        <div class="stat-label">Ready for Immediate Issue</div>
      </div>
      <div class="stat-card" onclick="window.filterAssetTable('IN_REPAIR')" style="cursor: pointer; border-left: 4px solid var(--accent-amber);">
        <div class="stat-value" style="color: var(--accent-amber);">15 Repair</div>
        <div class="stat-label">IT Maintenance & Diagnostics</div>
      </div>
      <div class="stat-card" onclick="window.filterAssetTable('DAMAGED')" style="cursor: pointer; border-left: 4px solid var(--accent-rose);">
        <div class="stat-value" style="color: #fb7185;">10 Damaged</div>
        <div class="stat-label">8 Damaged • 2 Missing</div>
      </div>
      <div class="stat-card" style="border-left: 4px solid #c084fc;">
        <div class="stat-value" style="color: #c084fc;">100%</div>
        <div class="stat-label">Digital Ack Compliance</div>
      </div>
    </div>

    <!-- Interactive Category Quick Filter Bar Toolbar -->
    <div class="glass-card" style="margin-bottom: 20px; padding: 14px 22px; border-left: 4px solid var(--primary-light);">
      <div style="display: flex; gap: 10px; overflow-x: auto; font-weight: 600; font-size: 0.85rem; align-items: center;" id="assetFilterToolbar">
        <span style="color: var(--text-muted); font-size: 0.8rem; margin-right: 6px; white-space: nowrap;">Category Filters:</span>
        <button class="btn btn-sm btn-primary asset-filter-btn active" onclick="window.filterAssetTable('ALL', this)">📊 All Assets (385)</button>
        <button class="btn btn-sm btn-secondary asset-filter-btn" onclick="window.filterAssetTable('ASSIGNED', this)">🟢 Assigned (278)</button>
        <button class="btn btn-sm btn-secondary asset-filter-btn" onclick="window.filterAssetTable('AVAILABLE', this)">🔵 Vault (72)</button>
        <button class="btn btn-sm btn-secondary asset-filter-btn" onclick="window.filterAssetTable('LAPTOP', this)">💻 Laptops (142)</button>
        <button class="btn btn-sm btn-secondary asset-filter-btn" onclick="window.filterAssetTable('MOBILE', this)">📱 SIM & Mobile (110)</button>
        <button class="btn btn-sm btn-secondary asset-filter-btn" onclick="window.filterAssetTable('KIT', this)">📡 5G Field Kits (48)</button>
        <button class="btn btn-sm btn-secondary asset-filter-btn" onclick="window.filterAssetTable('IN_REPAIR', this)">🔧 Repair (15)</button>
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
        <div>
          <h3 style="font-size: 1.15rem; color: white;">Hardware Property Register & Assignment Logs</h3>
          <span style="font-size: 0.78rem; color: var(--text-muted);">Real-time asset state tracking with digital handover certificate linkage</span>
        </div>
        <div style="display: flex; gap: 10px;">
          <input type="text" id="assetSearchInput" placeholder="Search Tag ID, Serial Number or Employee..." class="form-control" style="width: 300px; font-size: 0.85rem;" onkeyup="window.searchAssetTable(this.value)">
        </div>
      </div>

      <div class="table-responsive">
        <table class="data-table" id="assetMasterTable">
          <thead>
            <tr>
              <th>Asset Tag ID</th>
              <th>Category & Model</th>
              <th>Serial / IMEI</th>
              <th>Assigned Employee</th>
              <th>Assigned Location</th>
              <th>Status</th>
              <th>Condition</th>
              <th>Action Setup</th>
            </tr>
          </thead>
          <tbody>
            <tr data-status="ASSIGNED" data-category="LAPTOP">
              <td><strong style="font-family: monospace; color: var(--primary);">OBS-LAP-0024</strong></td>
              <td><strong>Dell Latitude 5440 i7</strong><br><small style="color: var(--text-muted);">Laptop / Workstation</small></td>
              <td><code>DL5440202699</code></td>
              <td><strong>Rahul Sharma</strong><br><small style="color: var(--text-muted);">OBS-ENG-26-002</small></td>
              <td>📍 Kharadi Site, Pune</td>
              <td><span class="badge badge-active">ASSIGNED</span></td>
              <td><span class="badge badge-active">🟢 Good (95%)</span></td>
              <td>
                <div style="display: flex; gap: 5px;">
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showHandoverSlipModal('OBS-LAP-0024', 'OBS-ENG-26-002', 'Rahul Sharma', 'Dell Latitude 5440 i7', 'DL5440202699')">📄 Handover Slip</button>
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showTransferAssetModal('OBS-LAP-0024')">💻 Transfer</button>
                  <button class="btn btn-sm btn-primary" onclick="window.hrApp.showReturnAssetModal('OBS-LAP-0024')">🛑 Return</button>
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showInspectAssetModal('OBS-LAP-0024')">🔍 Audit</button>
                </div>
              </td>
            </tr>
            <tr data-status="ASSIGNED" data-category="LAPTOP">
              <td><strong style="font-family: monospace; color: var(--primary);">AST-LAP-2026-001</strong></td>
              <td><strong>MacBook Pro 16" M3 Max</strong><br><small style="color: var(--text-muted);">Laptop / Workstation</small></td>
              <td><code>C02GX001MD68</code></td>
              <td><strong>Swapnil Ghodke</strong><br><small style="color: var(--text-muted);">OBS-OPS-26-001</small></td>
              <td>📍 Wagholi HQ, Pune</td>
              <td><span class="badge badge-active">ASSIGNED</span></td>
              <td><span class="badge badge-active">✨ Excellent (99%)</span></td>
              <td>
                <div style="display: flex; gap: 5px;">
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showHandoverSlipModal('AST-LAP-2026-001', 'OBS-OPS-26-001', 'Swapnil Ghodke', 'MacBook Pro 16 M3 Max', 'C02GX001MD68')">📄 Handover Slip</button>
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showTransferAssetModal('AST-LAP-2026-001')">💻 Transfer</button>
                  <button class="btn btn-sm btn-primary" onclick="window.hrApp.showReturnAssetModal('AST-LAP-2026-001')">🛑 Return</button>
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showInspectAssetModal('AST-LAP-2026-001')">🔍 Audit</button>
                </div>
              </td>
            </tr>
            <tr data-status="ASSIGNED" data-category="KIT">
              <td><strong style="font-family: monospace; color: var(--primary);">OBS-KIT-0089</strong></td>
              <td><strong>5G Core Drive Test Analyzer Kit</strong><br><small style="color: var(--text-muted);">Telecom Field Tool Kit</small></td>
              <td><code>5G-KIT-PUNE-0992</code></td>
              <td><strong>Swapnil Ghodke</strong><br><small style="color: var(--text-muted);">OBS-OPS-26-001</small></td>
              <td>📍 Navi Mumbai 5G Core Hub</td>
              <td><span class="badge badge-active">ASSIGNED</span></td>
              <td><span class="badge badge-active">🟢 Good (90%)</span></td>
              <td>
                <div style="display: flex; gap: 5px;">
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showHandoverSlipModal('OBS-KIT-0089', 'OBS-OPS-26-001', 'Swapnil Ghodke', '5G Core Drive Test Analyzer Kit', '5G-KIT-PUNE-0992')">📄 Handover Slip</button>
                  <button class="btn btn-sm btn-primary" onclick="window.hrApp.showReturnAssetModal('OBS-KIT-0089')">🛑 Return</button>
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showInspectAssetModal('OBS-KIT-0089')">🔍 Audit</button>
                </div>
              </td>
            </tr>
            <tr data-status="ASSIGNED" data-category="MOBILE">
              <td><strong style="font-family: monospace; color: var(--primary);">OBS-SIM-1044</strong></td>
              <td><strong>Jio 5G Testing Dual SIM Card</strong><br><small style="color: var(--text-muted);">Corporate SIM / Data</small></td>
              <td><code>8991002345678912</code></td>
              <td><strong>Priya Patel</strong><br><small style="color: var(--text-muted);">OBS-HR-26-003</small></td>
              <td>📍 Wagholi HQ, Pune</td>
              <td><span class="badge badge-active">ASSIGNED</span></td>
              <td><span class="badge badge-active">✨ Brand New</span></td>
              <td>
                <div style="display: flex; gap: 5px;">
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showHandoverSlipModal('OBS-SIM-1044', 'OBS-HR-26-003', 'Priya Patel', 'Jio 5G Dual SIM Card', '8991002345678912')">📄 Handover Slip</button>
                  <button class="btn btn-sm btn-primary" onclick="window.hrApp.showReturnAssetModal('OBS-SIM-1044')">🛑 Return</button>
                </div>
              </td>
            </tr>
            <tr data-status="AVAILABLE" data-category="LAPTOP">
              <td><strong style="font-family: monospace; color: var(--accent-sky);">AST-LAP-2026-005</strong></td>
              <td><strong>Lenovo ThinkPad P1 Gen 6</strong><br><small style="color: var(--text-muted);">Laptop / Workstation</small></td>
              <td><code>LENV20269981</code></td>
              <td><em>Unassigned</em><br><small style="color: var(--text-muted);">Storage Vault</small></td>
              <td>📍 Pune HQ Vault Storage</td>
              <td><span class="badge badge-pending">AVAILABLE</span></td>
              <td><span class="badge badge-active">✨ Sealed (100%)</span></td>
              <td>
                <div style="display: flex; gap: 5px;">
                  <button class="btn btn-sm btn-primary" onclick="window.hrApp.showAssignAssetModal()">💻 Handover Asset</button>
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showInspectAssetModal('AST-LAP-2026-005')">🔍 Audit</button>
                </div>
              </td>
            </tr>
            <tr data-status="IN_REPAIR" data-category="KIT">
              <td><strong style="font-family: monospace; color: var(--accent-amber);">OBS-ROUT-0102</strong></td>
              <td><strong>Cisco Industrial 5G Router</strong><br><small style="color: var(--text-muted);">Network Hardware</small></td>
              <td><code>CSC5G991204</code></td>
              <td><em>IT Repairs Desk</em><br><small style="color: var(--text-muted);">Under Maintenance</small></td>
              <td>📍 Service Center Pune</td>
              <td><span class="badge badge-pending" style="color: #fbbf24;">IN REPAIR</span></td>
              <td><span class="badge badge-pending">🟡 Firmware Repair</span></td>
              <td>
                <div style="display: flex; gap: 5px;">
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Repair Inspection Status: Hardware Diagnostic Passed')">🔧 Diagnostic</button>
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showInspectAssetModal('OBS-ROUT-0102')">🔍 Audit</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Client-side Asset Filter & Search Script -->
    <script>
      window.filterAssetTable = function(filterVal, btnEl) {
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
          const rowCat = r.getAttribute('data-category');

          if (filterVal === 'ALL' || rowStatus === filterVal || rowCat === filterVal) {
            r.style.display = '';
          } else {
            r.style.display = 'none';
          }
        });

        if (window.hrApp && typeof window.hrApp.showToast === 'function') {
          window.hrApp.showToast('Filtered Asset Inventory: ' + filterVal);
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
