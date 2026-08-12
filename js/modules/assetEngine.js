// Comprehensive Asset Management & Property Tracking Engine for Obsyra HR System
import { store } from '../context.js';

export function renderAssetEngine() {
  const state = store.getState();
  const employees = state.employees || [];

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Asset & Company Property Register</h1>
        <p class="page-subtitle">Hardware inventory, 5G Telecom field toolkits, SIM cards, laptops & asset lifecycle clearance</p>
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn btn-primary" onclick="window.hrApp.showAssignAssetModal()">
          💻 + Assign New Asset
        </button>
        <button class="btn btn-secondary" onclick="window.hrApp.showRegisterAssetModal()">
          📦 + Register Hardware
        </button>
      </div>
    </div>

    <!-- Asset Summary KPI Cards -->
    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card">
        <div class="stat-value">₹ 18.5L</div>
        <div class="stat-label">Total Inventory Value</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-emerald);">4 Deployed</div>
        <div class="stat-label">Assigned to Staff</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-sky);">3 Available</div>
        <div class="stat-label">In Pune Storage Vault</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--primary);">100%</div>
        <div class="stat-label">Asset Audit Compliance</div>
      </div>
    </div>

    <!-- 7-Step Asset Lifecycle & Allocation Stepper -->
    <div class="glass-card" style="margin-bottom: 25px; border-left: 4px solid var(--accent-amber);">
      <h3 style="margin-bottom: 12px; color: var(--accent-amber);">Standard Asset Lifecycle & Clearance Stepper</h3>
      <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; text-align: center;">
        <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 10px; border-radius: var(--radius-sm);">
          <strong style="font-size: 0.78rem; color: #34d399; display: block;">1. In Inventory</strong>
          <small style="font-size: 0.7rem; color: var(--text-muted);">Available</small>
        </div>
        <div style="background: rgba(14, 165, 233, 0.1); border: 1px solid rgba(14, 165, 233, 0.3); padding: 10px; border-radius: var(--radius-sm);">
          <strong style="font-size: 0.78rem; color: #38bdf8; display: block;">2. Requisition</strong>
          <small style="font-size: 0.7rem; color: var(--text-muted);">HR Request</small>
        </div>
        <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); padding: 10px; border-radius: var(--radius-sm);">
          <strong style="font-size: 0.78rem; color: #fbbf24; display: block;">3. Manager Approval</strong>
          <small style="font-size: 0.7rem; color: var(--text-muted);">Signed Off</small>
        </div>
        <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); padding: 10px; border-radius: var(--radius-sm);">
          <strong style="font-size: 0.78rem; color: #c084fc; display: block;">4. Hardware Issued</strong>
          <small style="font-size: 0.7rem; color: var(--text-muted);">Tag Handover</small>
        </div>
        <div style="background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); padding: 10px; border-radius: var(--radius-sm);">
          <strong style="font-size: 0.78rem; color: #818cf8; display: block;">5. Employee Ack</strong>
          <small style="font-size: 0.7rem; color: var(--text-muted);">Signed Form</small>
        </div>
        <div style="background: rgba(236, 72, 153, 0.1); border: 1px solid rgba(236, 72, 153, 0.3); padding: 10px; border-radius: var(--radius-sm);">
          <strong style="font-size: 0.78rem; color: #f472b6; display: block;">6. Return Clearance</strong>
          <small style="font-size: 0.7rem; color: var(--text-muted);">Exit Handover</small>
        </div>
        <div style="background: rgba(100, 116, 139, 0.1); border: 1px solid rgba(100, 116, 139, 0.3); padding: 10px; border-radius: var(--radius-sm);">
          <strong style="font-size: 0.78rem; color: #cbd5e1; display: block;">7. Inspection</strong>
          <small style="font-size: 0.7rem; color: var(--text-muted);">Vault Check</small>
        </div>
      </div>
    </div>

    <!-- Main Hardware Inventory Roster -->
    <div class="glass-card" style="margin-bottom: 25px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
        <h3>Hardware & Field Property Register</h3>
        <div style="display: flex; gap: 10px;">
          <input type="text" placeholder="Search Tag ID or Serial Number..." class="form-control" style="width: 260px; font-size: 0.85rem;">
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
              <th>Purchase Date & Cost</th>
              <th>Warranty Status</th>
              <th>Condition</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong style="font-family: monospace; color: var(--primary);">AST-LAP-2026-001</strong></td>
              <td><strong>MacBook Pro 16" M3 Max</strong><br><small style="color: var(--text-muted);">Laptop / Workstation</small></td>
              <td><code>C02GX001MD68</code></td>
              <td><strong>Swapnil Ghodke</strong><br><small style="color: var(--text-muted);">OBS-OPS-26-001</small></td>
              <td>01 Sep 2024 (₹ 2.45L)</td>
              <td><span class="badge badge-active">AppleCare (2027)</span></td>
              <td><span class="badge badge-active">Excellent</span></td>
              <td><span class="badge badge-active">Assigned</span></td>
              <td>
                <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Generated Asset Ack Form for AST-LAP-2026-001')">
                  Ack Form
                </button>
              </td>
            </tr>
            <tr>
              <td><strong style="font-family: monospace; color: var(--primary);">AST-LAP-2026-002</strong></td>
              <td><strong>Dell XPS 15 9530 i9</strong><br><small style="color: var(--text-muted);">Laptop / Workstation</small></td>
              <td><code>DLXPS20269912</code></td>
              <td><strong>Rahul Sharma</strong><br><small style="color: var(--text-muted);">OBS-ENG-26-002</small></td>
              <td>15 Jan 2025 (₹ 1.85L)</td>
              <td><span class="badge badge-active">ProSupport (2028)</span></td>
              <td><span class="badge badge-active">Excellent</span></td>
              <td><span class="badge badge-active">Assigned</span></td>
              <td>
                <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Generated Asset Ack Form for AST-LAP-2026-002')">
                  Ack Form
                </button>
              </td>
            </tr>
            <tr>
              <td><strong style="font-family: monospace; color: var(--primary);">AST-KIT-2026-089</strong></td>
              <td><strong>5G Core Drive Test Analyzer Kit</strong><br><small style="color: var(--text-muted);">Telecom Field Tool Kit</small></td>
              <td><code>5G-KIT-PUNE-0992</code></td>
              <td><strong>Swapnil Ghodke</strong><br><small style="color: var(--text-muted);">OBS-OPS-26-001</small></td>
              <td>10 Oct 2024 (₹ 4.20L)</td>
              <td><span class="badge badge-active">Manufacturer (2026)</span></td>
              <td><span class="badge badge-active">Good</span></td>
              <td><span class="badge badge-active">Assigned</span></td>
              <td>
                <button class="btn btn-sm btn-primary" onclick="window.hrApp.showToast('Initiated Asset Return Inspection')">
                  Return Asset
                </button>
              </td>
            </tr>
            <tr>
              <td><strong style="font-family: monospace; color: var(--primary);">AST-SIM-2026-042</strong></td>
              <td><strong>Jio 5G Testing Dual SIM Card</strong><br><small style="color: var(--text-muted);">Corporate SIM / Data</small></td>
              <td><code>8991002345678912</code></td>
              <td><strong>Priya Patel</strong><br><small style="color: var(--text-muted);">OBS-HR-26-003</small></td>
              <td>01 Feb 2025 (₹ 500)</td>
              <td><span class="badge badge-active">Corporate Postpaid</span></td>
              <td><span class="badge badge-active">New</span></td>
              <td><span class="badge badge-active">Assigned</span></td>
              <td>
                <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Viewing SIM Card status')">
                  View SIM
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}
