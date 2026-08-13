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
            <h2 style="font-size: 1.4rem; color: var(--primary-light);">💻 Handover & Transfer Company Hardware Asset</h2>
            <small style="color: var(--text-muted);">Issue or transfer hardware, SIM cards, telecom 5G kits or property with digital handover slip</small>
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

// 5. Official Asset Handover Slip Modal Component
export function renderHandoverSlipModal() {
  return `
    <div class="modal-overlay" id="handoverSlipModalOverlay" role="dialog" aria-modal="true" aria-hidden="true" style="display: none; z-index: 10000; background: rgba(15, 23, 42, 0.92); backdrop-filter: blur(14px); align-items: center; justify-content: center; padding: 20px;">
      <div class="modal-container glass-card" style="width: 760px; max-width: 95vw; max-height: 90vh; overflow-y: auto; padding: 36px; border-radius: 20px; border: 1px solid var(--border-color); background: rgba(30, 41, 59, 0.98); color: white;">
        
        <!-- Header Controls -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 2px dashed rgba(255,255,255,0.15); padding-bottom: 15px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 44px; height: 44px; background: var(--primary-gradient); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.3rem;">O</div>
            <div>
              <strong style="font-size: 1.25rem; font-family: var(--font-heading);">OBSYRA PRIVATE LIMITED</strong>
              <span style="display: block; font-size: 0.78rem; color: var(--text-muted);">CIN: U63991PN2026PTC252127 • Wagholi, Pune HQ</span>
            </div>
          </div>
          <div style="display: flex; gap: 10px;">
            <button class="btn btn-sm btn-primary" onclick="window.print()" style="display: flex; align-items: center; gap: 6px; font-weight: 700;">
              🖨️ Print Slip
            </button>
            <button type="button" style="background: none; border: none; color: var(--text-muted); font-size: 1.6rem; cursor: pointer; line-height: 1;" onclick="window.hrApp.closeHandoverSlipModal()">✕</button>
          </div>
        </div>

        <!-- Official Document Certificate Container -->
        <div id="printableHandoverSlip" style="background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border-color); padding: 28px; border-radius: 16px; margin-bottom: 20px;">
          
          <div style="text-align: center; margin-bottom: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 15px;">
            <span class="badge badge-active" style="margin-bottom: 8px; letter-spacing: 1px;">OFFICIAL PROPERTY ISSUANCE</span>
            <h2 style="font-size: 1.5rem; color: var(--primary-light); font-weight: 800; text-transform: uppercase;">Corporate Asset Handover Certificate</h2>
            <p style="font-size: 0.82rem; color: var(--text-muted);">Ref Serial: <code id="slipSerialNo" style="color: var(--accent-sky); font-weight: 700;">ACK-AST-2026-00042</code> • Issued Date: <span id="slipDate">12 Aug 2026</span></p>
          </div>

          <!-- Grid: Employee & Asset Details -->
          <div class="grid-2" style="gap: 20px; margin-bottom: 24px;">
            <div style="background: rgba(30, 41, 59, 0.6); padding: 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
              <h4 style="color: var(--accent-emerald); font-size: 0.92rem; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px;">👤 Recipient Employee</h4>
              <p style="margin-bottom: 4px; font-weight: 700; font-size: 1.05rem;" id="slipEmpName">Rahul Sharma</p>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 4px;">Employee ID: <strong id="slipEmpId" style="color: white;">OBS-ENG-26-002</strong></p>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 4px;">Designation: <span id="slipEmpDesignation">Software Engineer</span></p>
              <p style="font-size: 0.85rem; color: var(--text-muted);">Department: <span id="slipEmpDept">Engineering</span></p>
            </div>

            <div style="background: rgba(30, 41, 59, 0.6); padding: 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
              <h4 style="color: var(--accent-sky); font-size: 0.92rem; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px;">💻 Hardware Details</h4>
              <p style="margin-bottom: 4px; font-weight: 700; font-size: 1.05rem;" id="slipAssetModel">Dell Latitude 5440 i7 16GB RAM</p>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 4px;">Asset Tag ID: <strong id="slipAssetTag" style="color: var(--primary-light);">OBS-LAP-0024</strong></p>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 4px;">Serial / IMEI: <code id="slipAssetSerial">DL5440202699</code></p>
              <p style="font-size: 0.85rem; color: var(--text-muted);">Condition: <span class="badge badge-active" id="slipCondition">Good Condition</span></p>
            </div>
          </div>

          <!-- Included Accessories Checklist -->
          <div style="background: rgba(30, 41, 59, 0.6); padding: 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 24px;">
            <h4 style="color: var(--accent-amber); font-size: 0.92rem; margin-bottom: 10px; text-transform: uppercase;">🔌 Issued Accessories Checklist</h4>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; font-size: 0.85rem; font-weight: 600;">
              <div>✅ 140W Adapter</div>
              <div>✅ Wireless Mouse</div>
              <div>✅ Laptop Bag</div>
              <div>✅ Security Lock</div>
            </div>
          </div>

          <!-- Undertaking Statement & Digital Signature -->
          <div style="background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.25); padding: 18px; border-radius: 12px; margin-bottom: 25px;">
            <strong style="font-size: 0.88rem; color: var(--primary-light); display: block; margin-bottom: 6px;">Legal Undertaking & Property Ownership:</strong>
            <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5;">
              I hereby acknowledge physical receipt of the company hardware and accessories listed above in fully operational condition. I agree to safeguard this property for business duties at Obsyra Private Limited and surrender it upon demand or employment separation in accordance with IT Policy.
            </p>
          </div>

          <!-- Signatures Footer Grid -->
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; text-align: center; border-top: 1px dashed rgba(255,255,255,0.15); padding-top: 25px;">
            <div>
              <div style="height: 40px; font-family: 'Brush Script MT', cursive, sans-serif; font-size: 1.4rem; color: #818cf8;">Swapnil Ghodke</div>
              <strong style="font-size: 0.85rem; display: block;">Authorized Handover Officer</strong>
              <small style="color: var(--text-muted); font-size: 0.75rem;">Swapnil Ghodke • HR & Operations Lead</small>
            </div>
            <div>
              <div style="height: 40px; font-family: 'Brush Script MT', cursive, sans-serif; font-size: 1.4rem; color: #34d399;" id="slipEmpSig">Rahul Sharma</div>
              <strong style="font-size: 0.85rem; display: block;">Employee Acknowledgement Signature</strong>
              <small style="color: var(--text-muted); font-size: 0.75rem;">Digitally Verified via Obsyra HR Portal</small>
            </div>
          </div>

        </div>

        <div style="display: flex; gap: 12px; justify-content: flex-end;">
          <button class="btn btn-secondary" onclick="window.hrApp.closeHandoverSlipModal()">Close</button>
          <button class="btn btn-primary" onclick="window.print()" style="font-weight: 700;">
            🖨️ Print Official Handover Slip
          </button>
        </div>

      </div>
    </div>
  `;
}

// 6. Complete Hardware Asset Inspection & Audit Trail Modal
export function renderInspectAssetModal() {
  return `
    <div class="modal-overlay" id="inspectAssetModalOverlay" role="dialog" aria-modal="true" aria-hidden="true" style="display: none; z-index: 10000; background: rgba(15, 23, 42, 0.92); backdrop-filter: blur(14px); align-items: center; justify-content: center; padding: 20px;">
      <div class="modal-container glass-card" style="width: 720px; max-width: 95vw; max-height: 90vh; overflow-y: auto; padding: 32px; border-radius: 20px; border: 1px solid var(--border-color); background: rgba(30, 41, 59, 0.98); color: white;">
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid var(--border-color); padding-bottom: 14px;">
          <div>
            <h2 style="font-size: 1.4rem; color: var(--accent-sky); font-weight: 800;">🔍 Hardware Asset Inspection & Audit Trail</h2>
            <small style="color: var(--text-muted);">Complete Lifecycle Timeline • Maintenance Logs • Custody Audit</small>
          </div>
          <button type="button" style="background: none; border: none; color: var(--text-muted); font-size: 1.5rem; cursor: pointer;" onclick="window.hrApp.closeInspectAssetModal()">✕</button>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 24px;">
          <div style="background: rgba(15, 23, 42, 0.6); padding: 15px; border-radius: 12px; border: 1px solid var(--border-color);">
            <small style="color: var(--text-muted); display: block;">Asset Tag ID</small>
            <strong id="inspectTag" style="font-size: 1.1rem; color: var(--primary-light); font-family: monospace;">OBS-LAP-0024</strong>
          </div>
          <div style="background: rgba(15, 23, 42, 0.6); padding: 15px; border-radius: 12px; border: 1px solid var(--border-color);">
            <small style="color: var(--text-muted); display: block;">Current Custodian</small>
            <strong id="inspectHolder" style="font-size: 1rem; color: #34d399;">Rahul Sharma (OBS-ENG-26-002)</strong>
          </div>
          <div style="background: rgba(15, 23, 42, 0.6); padding: 15px; border-radius: 12px; border: 1px solid var(--border-color);">
            <small style="color: var(--text-muted); display: block;">Storage Location</small>
            <strong id="inspectLocation" style="font-size: 0.95rem; color: white;">📍 Kharadi Site, Pune</strong>
          </div>
        </div>

        <!-- Audit Timeline History -->
        <h4 style="font-size: 1rem; color: var(--accent-amber); margin-bottom: 14px; text-transform: uppercase;">📜 Asset Lifecycle Audit Logs</h4>
        
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 25px;">
          <div style="display: flex; gap: 15px; background: rgba(15, 23, 42, 0.5); padding: 14px 18px; border-radius: 12px; border-left: 4px solid var(--accent-emerald);">
            <div style="font-size: 1.3rem;">💻</div>
            <div style="flex: 1;">
              <div style="display: flex; justify-content: space-between;">
                <strong>Digital Handover Slip Generated</strong>
                <small style="color: var(--text-muted);">15 Feb 2026</small>
              </div>
              <p style="font-size: 0.83rem; color: var(--text-muted); margin-top: 2px;">Handed over to Rahul Sharma (\`OBS-ENG-26-002\`). Slip Ref: \`ACK-AST-2026-00042\`</p>
            </div>
          </div>

          <div style="display: flex; gap: 15px; background: rgba(15, 23, 42, 0.5); padding: 14px 18px; border-radius: 12px; border-left: 4px solid var(--accent-sky);">
            <div style="font-size: 1.3rem;">🔧</div>
            <div style="flex: 1;">
              <div style="display: flex; justify-content: space-between;">
                <strong>Routine IT Diagnostic Passed</strong>
                <small style="color: var(--text-muted);">04 Jun 2026</small>
              </div>
              <p style="font-size: 0.83rem; color: var(--text-muted); margin-top: 2px;">Hardware diagnostics & antivirus compliance verified by IT Desk.</p>
            </div>
          </div>

          <div style="display: flex; gap: 15px; background: rgba(15, 23, 42, 0.5); padding: 14px 18px; border-radius: 12px; border-left: 4px solid var(--primary);">
            <div style="font-size: 1.3rem;">📦</div>
            <div style="flex: 1;">
              <div style="display: flex; justify-content: space-between;">
                <strong>Registered into Storage Vault</strong>
                <small style="color: var(--text-muted);">12 Jan 2026</small>
              </div>
              <p style="font-size: 0.83rem; color: var(--text-muted); margin-top: 2px;">Asset registered into Pune Vault Storage by System Administrator.</p>
            </div>
          </div>
        </div>

        <div style="display: flex; gap: 12px; justify-content: flex-end;">
          <button class="btn btn-secondary" onclick="window.hrApp.closeInspectAssetModal()">Close</button>
          <button class="btn btn-primary" onclick="window.hrApp.showHandoverSlipModal('OBS-LAP-0024', 'OBS-ENG-26-002', 'Rahul Sharma', 'Dell Latitude 5440 i7', 'DL5440202699')">
            📄 View Digital Handover Slip
          </button>
        </div>

      </div>
    </div>
  `;
}
