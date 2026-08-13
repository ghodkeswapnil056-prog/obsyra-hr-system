// Enterprise Asset Allocation, Transfer, Return & Handover Modals for Obsyra HRMS
import { store } from '../context.js';

// 1. Handover New Asset Form Modal
export function renderAssignAssetModal() {
  const state = store.getState();
  const employees = state.employees || [];

  return `
    <div class="modal-overlay" id="assignAssetModalOverlay" role="dialog" aria-modal="true" aria-hidden="true" style="display: none; z-index: 10000; background: rgba(15, 23, 42, 0.88); backdrop-filter: blur(12px); align-items: center; justify-content: center;">
      <div class="modal-container glass-card" style="width: 640px; max-width: 94vw; padding: 32px; border-radius: 20px; border: 1px solid var(--border-color); background: rgba(30, 41, 59, 0.98); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);">
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid var(--border-color); padding-bottom: 12px;">
          <div>
            <h2 style="font-size: 1.4rem; color: var(--primary-light);">💻 Handover Company Hardware & Asset</h2>
            <small style="color: var(--text-muted);">Issue hardware, SIM cards, telecom 5G kits or company property with signed digital handover slip</small>
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
              <label class="form-label" style="font-weight: 600;">Asset Category *</label>
              <select id="assignCategorySelect" class="form-control" required>
                <option value="Laptop">💻 Laptop / Workstation</option>
                <option value="Mobile">📱 Mobile Phone / Tablet</option>
                <option value="SIM">📶 Corporate SIM / 5G Data Card</option>
                <option value="Telecom Kit">📡 Telecom 5G Field Tool Kit</option>
                <option value="Network">🔌 Router / Switch / Dongle</option>
                <option value="ID Badge">💳 Corporate ID Badge / Access Key</option>
              </select>
            </div>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Asset Tag ID *</label>
              <input type="text" id="assignAssetTagInput" class="form-control" value="OBS-LAP-0024" placeholder="e.g. OBS-LAP-0024" required>
            </div>
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Model & Specs *</label>
              <input type="text" id="assignModelInput" class="form-control" value="Dell Latitude 5440 i7 16GB RAM 512GB SSD" placeholder="e.g. Dell Latitude 5440" required>
            </div>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Serial Number / IMEI</label>
              <input type="text" id="assignSerialInput" class="form-control" value="DL5440202699" placeholder="e.g. DL5440202699">
            </div>
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Physical Condition</label>
              <select id="assignConditionSelect" class="form-control">
                <option value="Brand New">✨ Brand New (Sealed Pack)</option>
                <option value="Good Condition" selected>🟢 Good Condition (Fully Operational)</option>
                <option value="Used Refurbished">🟡 Used / Refurbished</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" style="font-weight: 600;">Issued Accessories Included</label>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; font-size: 0.85rem;">
              <label><input type="checkbox" checked> 🔌 140W Charger</label>
              <label><input type="checkbox" checked> 🖱️ Wireless Mouse</label>
              <label><input type="checkbox" checked> 🎒 Laptop Bag</label>
              <label><input type="checkbox"> 🖥️ Docking Station</label>
            </div>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Handover Purpose</label>
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
            <button type="submit" class="btn btn-primary" style="font-weight: 700; width: 240px;">
              📋 Handover Asset & Issue Slip
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
    <div class="modal-overlay" id="registerHardwareModalOverlay" role="dialog" aria-modal="true" aria-hidden="true" style="display: none; z-index: 10000; background: rgba(15, 23, 42, 0.88); backdrop-filter: blur(12px); align-items: center; justify-content: center;">
      <div class="modal-container glass-card" style="width: 620px; max-width: 94vw; padding: 30px; border-radius: 20px; border: 1px solid var(--border-color); background: rgba(30, 41, 59, 0.98);">
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid var(--border-color); padding-bottom: 12px;">
          <div>
            <h2 style="font-size: 1.35rem; color: var(--accent-emerald);">📦 Register Hardware Asset to Inventory</h2>
            <small style="color: var(--text-muted);">Add new laptops, 5G field kits, SIM cards, or routers into Corporate Storage Vault</small>
          </div>
          <button type="button" style="background: none; border: none; color: var(--text-muted); font-size: 1.5rem; cursor: pointer;" onclick="window.hrApp.closeRegisterHardwareModal()">✕</button>
        </div>

        <form onsubmit="window.hrApp.handleRegisterHardwareSubmit(event)" style="display: flex; flex-direction: column; gap: 14px;">
          <div class="grid-2">
            <div class="form-group">
              <label class="form-label">Asset Category</label>
              <select id="regCategory" class="form-control">
                <option value="Laptop / Workstation">💻 Laptop / Workstation</option>
                <option value="Telecom Tool Kit">📡 Telecom 5G Field Tool Kit</option>
                <option value="SIM / Data Card">📶 Corporate SIM Card</option>
                <option value="Desktop / Server">🖥️ Desktop / Server</option>
                <option value="Network Router">🔌 Router / Switch / Dongle</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Generated Asset Tag ID</label>
              <input type="text" id="regTagId" class="form-control" value="AST-LAP-2026-005" readonly>
            </div>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label">Model Name & Specs</label>
              <input type="text" id="regModel" class="form-control" value="Dell Latitude 5440 i7 16GB RAM 512GB SSD" required>
            </div>
            <div class="form-group">
              <label class="form-label">Serial Number / IMEI</label>
              <input type="text" id="regSerial" class="form-control" value="DL5440202688" required>
            </div>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label">Purchase Price (₹ INR)</label>
              <input type="number" id="regPrice" class="form-control" value="125000" required>
            </div>
            <div class="form-group">
              <label class="form-label">Storage Vault Location</label>
              <select id="regVault" class="form-control">
                <option value="Pune Corporate HQ Vault">Pune Corporate HQ Vault</option>
                <option value="Navi Mumbai 5G Hub Vault">Navi Mumbai 5G Hub Vault</option>
                <option value="Jodhpur Field Site Vault">Jodhpur Field Site Vault</option>
              </select>
            </div>
          </div>

          <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 10px;">
            <button type="button" class="btn btn-secondary" onclick="window.hrApp.closeRegisterHardwareModal()">Cancel</button>
            <button type="submit" class="btn btn-success" style="font-weight: 700;">
              📦 Save Asset into Storage Vault
            </button>
          </div>
        </form>

      </div>
    </div>
  `;
}

// 3. Asset Transfer Form Modal
export function renderTransferAssetModal() {
  const state = store.getState();
  const employees = state.employees || [];

  return `
    <div class="modal-overlay" id="transferAssetModalOverlay" role="dialog" aria-modal="true" aria-hidden="true" style="display: none; z-index: 10000; background: rgba(15, 23, 42, 0.88); backdrop-filter: blur(12px); align-items: center; justify-content: center;">
      <div class="modal-container glass-card" style="width: 600px; max-width: 94vw; padding: 30px; border-radius: 20px; border: 1px solid var(--border-color); background: rgba(30, 41, 59, 0.98);">
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid var(--border-color); padding-bottom: 12px;">
          <div>
            <h2 style="font-size: 1.35rem; color: var(--accent-amber);">🔄 Asset Transfer & Re-Assignment</h2>
            <small style="color: var(--text-muted);">Transfer company property from current holder to new employee</small>
          </div>
          <button type="button" style="background: none; border: none; color: var(--text-muted); font-size: 1.5rem; cursor: pointer;" onclick="window.hrApp.closeTransferAssetModal()">✕</button>
        </div>

        <form onsubmit="window.hrApp.handleTransferAssetSubmit(event)" style="display: flex; flex-direction: column; gap: 14px;">
          <div class="form-group">
            <label class="form-label">Asset Tag to Transfer</label>
            <input type="text" id="transferAssetTag" class="form-control" value="OBS-LAP-0024 (Dell Latitude 5440)" readonly>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label">Current Holder</label>
              <input type="text" class="form-control" value="Rahul Sharma (OBS-ENG-26-002)" readonly>
            </div>
            <div class="form-group">
              <label class="form-label">Transfer Target Employee *</label>
              <select id="transferNewEmployee" class="form-control" required>
                ${employees.map(emp => `
                  <option value="${emp.employeeId}">${emp.fullName} (${emp.employeeId})</option>
                `).join('')}
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Transfer Reason & Notes</label>
            <textarea id="transferNotes" class="form-control" rows="2" placeholder="e.g. Employee transferred from Pune HQ to Navi Mumbai 5G Hub Project."></textarea>
          </div>

          <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 10px;">
            <button type="button" class="btn btn-secondary" onclick="window.hrApp.closeTransferAssetModal()">Cancel</button>
            <button type="submit" class="btn btn-primary" style="font-weight: 700;">
              🔄 Execute Asset Transfer
            </button>
          </div>
        </form>

      </div>
    </div>
  `;
}

// 4. Asset Return Inspection Form Modal
export function renderReturnAssetModal() {
  return `
    <div class="modal-overlay" id="returnAssetModalOverlay" role="dialog" aria-modal="true" aria-hidden="true" style="display: none; z-index: 10000; background: rgba(15, 23, 42, 0.88); backdrop-filter: blur(12px); align-items: center; justify-content: center;">
      <div class="modal-container glass-card" style="width: 600px; max-width: 94vw; padding: 30px; border-radius: 20px; border: 1px solid var(--border-color); background: rgba(30, 41, 59, 0.98);">
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid var(--border-color); padding-bottom: 12px;">
          <div>
            <h2 style="font-size: 1.35rem; color: var(--accent-rose);">🛑 Asset Return & Clearance Inspection</h2>
            <small style="color: var(--text-muted);">Process hardware return, physical inspection rating, and return to storage vault</small>
          </div>
          <button type="button" style="background: none; border: none; color: var(--text-muted); font-size: 1.5rem; cursor: pointer;" onclick="window.hrApp.closeReturnAssetModal()">✕</button>
        </div>

        <form onsubmit="window.hrApp.handleReturnAssetSubmit(event)" style="display: flex; flex-direction: column; gap: 14px;">
          <div class="grid-2">
            <div class="form-group">
              <label class="form-label">Returning Asset Tag</label>
              <input type="text" id="returnAssetTag" class="form-control" value="OBS-LAP-0024" readonly>
            </div>
            <div class="form-group">
              <label class="form-label">Return Inspection Rating</label>
              <select id="returnCondition" class="form-control">
                <option value="Good Condition">🟢 Good Condition (Ready for Storage)</option>
                <option value="Minor Scratch">🟡 Minor Scratch (Needs Cleaning)</option>
                <option value="Damaged">🔴 Damaged (Requires Repair)</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Accessories Returned Checklist</label>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; font-size: 0.85rem;">
              <label><input type="checkbox" checked> 🔌 Charger</label>
              <label><input type="checkbox" checked> 🖱️ Mouse</label>
              <label><input type="checkbox" checked> 🎒 Bag</label>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Return Inspection Notes</label>
            <textarea id="returnNotes" class="form-control" rows="2" placeholder="e.g. Asset inspected by IT Desk. Hardware in working condition, returned to Pune HQ Vault."></textarea>
          </div>

          <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 10px;">
            <button type="button" class="btn btn-secondary" onclick="window.hrApp.closeReturnAssetModal()">Cancel</button>
            <button type="submit" class="btn btn-danger" style="font-weight: 700;">
              🛑 Approve Asset Clearance & Return
            </button>
          </div>
        </form>

      </div>
    </div>
  `;
}
