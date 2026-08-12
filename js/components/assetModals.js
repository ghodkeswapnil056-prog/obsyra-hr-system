// Enterprise Asset Allocation, Transfer, Return & Handover Modals for Obsyra HRMS
import { store } from '../context.js';

// 1. Assign New Asset Form Modal
export function renderAssignAssetModal() {
  const state = store.getState();
  const employees = state.employees || [];

  return `
    <div class="modal-overlay" id="assignAssetModalOverlay" style="display: none; z-index: 10000; background: rgba(15, 23, 42, 0.88); backdrop-filter: blur(12px); align-items: center; justify-content: center;">
      <div class="modal-container glass-card" style="width: 640px; max-width: 94vw; padding: 32px; border-radius: 20px; border: 1px solid var(--border-color); background: rgba(30, 41, 59, 0.98); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);">
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid var(--border-color); padding-bottom: 12px;">
          <div>
            <h2 style="font-size: 1.4rem; color: var(--primary-light);">💻 Assign Company Hardware Asset</h2>
            <small style="color: var(--text-muted);">Issue hardware, SIM cards, telecom kits or property with digital handover slip</small>
          </div>
          <button type="button" style="background: none; border: none; color: var(--text-muted); font-size: 1.5rem; cursor: pointer;" onclick="window.hrApp.closeAssignAssetModal()">✕</button>
        </div>

        <form onsubmit="window.hrApp.handleAssignAssetSubmit(event)" style="display: flex; flex-direction: column; gap: 16px;">
          
          <div class="grid-2">
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Select Employee *</label>
              <select id="assignEmployeeSelect" class="form-control" required>
                ${employees.map(emp => `
                  <option value="${emp.employeeId}">${emp.fullName} (${emp.employeeId}) — ${emp.employment?.designation}</option>
                `).join('')}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Asset Type Master *</label>
              <select id="assignAssetType" class="form-control" required>
                <option value="Laptop">Computers ➔ Laptop / Workstation</option>
                <option value="Mobile">Mobile ➔ Mobile Phone / Tablet</option>
                <option value="SIM">Mobile ➔ SIM Card / Data Dongle</option>
                <option value="Telecom Kit">Telecom ➔ 5G Testing Equipment / Fiber Kit</option>
                <option value="Network">Network ➔ Router / Switch / Firewall</option>
                <option value="ID Card">Office ➔ ID Card / Corporate Access Badge</option>
              </select>
            </div>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Asset Tag ID *</label>
              <input type="text" id="assignAssetTag" class="form-control" value="OBS-LAP-0024" required style="font-family: monospace; font-weight: 700; color: var(--primary);">
            </div>
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Asset Name / Model *</label>
              <input type="text" id="assignAssetName" class="form-control" value="Dell Latitude 5440 i7 16GB" required>
            </div>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Serial Number / IMEI *</label>
              <input type="text" id="assignSerial" class="form-control" value="DLXPS20269912" required style="font-family: monospace;">
            </div>
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Assignment Date *</label>
              <input type="date" id="assignIssueDate" class="form-control" value="${new Date().toISOString().split('T')[0]}" required>
            </div>
          </div>

          <!-- Physical Condition Selection -->
          <div class="form-group">
            <label class="form-label" style="font-weight: 600;">Physical Issue Condition</label>
            <div style="display: flex; gap: 20px; margin-top: 4px;">
              <label style="cursor: pointer;"><input type="radio" name="assetCondition" value="New"> 🟢 Brand New (Sealed)</label>
              <label style="cursor: pointer;"><input type="radio" name="assetCondition" value="Good" checked> 🔵 Good Condition</label>
              <label style="cursor: pointer;"><input type="radio" name="assetCondition" value="Used"> 🟡 Used (Refurbished)</label>
            </div>
          </div>

          <!-- Accessories Checkboxes -->
          <div class="form-group">
            <label class="form-label" style="font-weight: 600;">Issued Accessories</label>
            <div style="display: flex; gap: 20px; flex-wrap: wrap; margin-top: 4px;">
              <label style="cursor: pointer;"><input type="checkbox" id="accCharger" checked> 🔌 140W Charger</label>
              <label style="cursor: pointer;"><input type="checkbox" id="accMouse" checked> 🖱️ Wireless Mouse</label>
              <label style="cursor: pointer;"><input type="checkbox" id="accBag" checked> 🎒 Laptop Bag</label>
              <label style="cursor: pointer;"><input type="checkbox" id="accDock"> 🖥️ Thunderbolt Dock</label>
            </div>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Assignment Purpose</label>
              <select id="assignPurpose" class="form-control">
                <option value="Project Deployment">Project Field Deployment</option>
                <option value="Corporate Office">Corporate Office Work</option>
                <option value="Field Duty">5G Testing Field Duty</option>
                <option value="Remote WFH">Remote Work From Home</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Assigned Location / Site</label>
              <select id="assignLocation" class="form-control">
                <option value="Wagholi HQ, Pune">Wagholi HQ, Pune</option>
                <option value="Navi Mumbai 5G Hub">Navi Mumbai 5G Core Site</option>
                <option value="Airtel Hinjewadi Site">Airtel Hinjewadi Site</option>
                <option value="Jodhpur Field Tower">Jodhpur Field Tower Site</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" style="font-weight: 600;">Handover Remarks & Notes</label>
            <textarea id="assignNotes" class="form-control" rows="2" placeholder="e.g. Issued for Reliance Jio 5G Testing Project. Requires employee digital acknowledgement."></textarea>
          </div>

          <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 10px;">
            <button type="button" class="btn btn-secondary" onclick="window.hrApp.closeAssignAssetModal()">Cancel</button>
            <button type="submit" class="btn btn-primary" style="font-weight: 700; width: 220px;">
              📋 Assign Asset & Issue Slip
            </button>
          </div>
        </form>

      </div>
    </div>
  `;
}

// 2. Register Hardware Asset Form Modal
export function renderRegisterHardwareModal() {
  return `
    <div class="modal-overlay" id="registerHardwareModalOverlay" style="display: none; z-index: 10000; background: rgba(15, 23, 42, 0.88); backdrop-filter: blur(12px); align-items: center; justify-content: center;">
      <div class="modal-container glass-card" style="width: 620px; max-width: 94vw; padding: 30px; border-radius: 20px; border: 1px solid var(--border-color); background: rgba(30, 41, 59, 0.98);">
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid var(--border-color); padding-bottom: 12px;">
          <div>
            <h2 style="font-size: 1.35rem; color: var(--accent-emerald);">📦 Register Hardware Asset to Inventory</h2>
            <small style="color: var(--text-muted);">Add new laptops, 5G field kits, SIM cards, or routers into Corporate Vault</small>
          </div>
          <button type="button" style="background: none; border: none; color: var(--text-muted); font-size: 1.5rem; cursor: pointer;" onclick="window.hrApp.closeRegisterHardwareModal()">✕</button>
        </div>

        <form onsubmit="window.hrApp.handleRegisterHardwareSubmit(event)" style="display: flex; flex-direction: column; gap: 16px;">
          <div class="grid-2">
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Asset Category</label>
              <select id="regCategory" class="form-control" required>
                <option value="Laptop / Workstation">Laptop / Workstation</option>
                <option value="Telecom Field Tool Kit">Telecom 5G Field Tool Kit</option>
                <option value="SIM Card / Data">Corporate SIM Card / Data</option>
                <option value="Desktop / Server">Desktop / Server Rack</option>
                <option value="Network Router / Switch">Network Router / Switch</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Asset Tag ID</label>
              <input type="text" id="regTagId" class="form-control" value="OBS-LAP-0025" readonly style="font-family: monospace; font-weight: 700; color: var(--primary);">
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" style="font-weight: 600;">Model Name & Specifications</label>
            <input type="text" id="regModel" class="form-control" placeholder="e.g. Dell Latitude 5440 i7 16GB RAM 512GB SSD" required>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Serial Number / IMEI</label>
              <input type="text" id="regSerial" class="form-control" placeholder="e.g. DL5440202688" required style="font-family: monospace;">
            </div>
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Purchase Price (₹ INR)</label>
              <input type="number" id="regCost" class="form-control" placeholder="125000" required>
            </div>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Storage Vault Location</label>
              <select id="regVault" class="form-control">
                <option value="Pune Corporate HQ Vault">Pune Corporate HQ Vault</option>
                <option value="Navi Mumbai 5G Hub Vault">Navi Mumbai 5G Hub Vault</option>
                <option value="Jodhpur Office Vault">Jodhpur Office Vault</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Initial Status</label>
              <input type="text" class="form-control" value="AVAILABLE" readonly style="font-weight: 700; color: #34d399;">
            </div>
          </div>

          <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 10px;">
            <button type="button" class="btn btn-secondary" onclick="window.hrApp.closeRegisterHardwareModal()">Cancel</button>
            <button type="submit" class="btn btn-primary" style="font-weight: 700;">
              📦 Save Asset into Inventory
            </button>
          </div>
        </form>

      </div>
    </div>
  `;
}
