// Interactive Asset Management Modals: Assign Asset & Register Hardware Asset
import { store } from '../context.js';

export function renderAssignAssetModal() {
  const state = store.getState();
  const employees = state.employees || [];

  return `
    <div class="modal-overlay" id="assignAssetModalOverlay" style="display: none; z-index: 10000; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(10px); align-items: center; justify-content: center;">
      <div class="modal-container glass-card" style="width: 580px; max-width: 92vw; padding: 30px; border-radius: 16px; border: 1px solid var(--border-color); background: rgba(30, 41, 59, 0.98);">
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid var(--border-color); padding-bottom: 12px;">
          <div>
            <h2 style="font-size: 1.35rem; color: var(--primary-light);">💻 Assign Hardware Asset to Employee</h2>
            <small style="color: var(--text-muted);">Issue company property with digital handover acknowledgement</small>
          </div>
          <button type="button" style="background: none; border: none; color: var(--text-muted); font-size: 1.5rem; cursor: pointer;" onclick="window.hrApp.closeAssignAssetModal()">✕</button>
        </div>

        <form onsubmit="window.hrApp.handleAssignAssetSubmit(event)" style="display: flex; flex-direction: column; gap: 16px;">
          
          <div class="form-group">
            <label class="form-label" style="font-weight: 600;">Select Hardware Asset from Storage Vault</label>
            <select id="assignAssetSelect" class="form-control" required style="font-family: monospace;">
              <option value="AST-LAP-2026-003">AST-LAP-2026-003 — Lenovo ThinkPad P1 Gen 6 (Available)</option>
              <option value="AST-KIT-2026-090">AST-KIT-2026-090 — 5G Antenna Splicing & Fiber Tool Kit (Available)</option>
              <option value="AST-SIM-2026-043">AST-SIM-2026-043 — Airtel 5G Data SIM (Available)</option>
              <option value="AST-LAP-2026-001">AST-LAP-2026-001 — MacBook Pro 16" M3 Max (Re-assign)</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" style="font-weight: 600;">Assign to Employee</label>
            <select id="assignEmployeeSelect" class="form-control" required>
              ${employees.map(emp => `
                <option value="${emp.employeeId}">${emp.fullName} (${emp.employeeId}) — ${emp.employment?.designation}</option>
              `).join('')}
            </select>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Handover / Issue Date</label>
              <input type="date" id="assignIssueDate" class="form-control" value="${new Date().toISOString().split('T')[0]}" required>
            </div>
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Expected Return Date</label>
              <input type="date" id="assignReturnDate" class="form-control" value="2027-12-31">
            </div>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Issue Condition</label>
              <select id="assignCondition" class="form-control">
                <option value="Brand New (Sealed)">Brand New (Sealed)</option>
                <option value="Excellent (Refurbished)" selected>Excellent (Refurbished)</option>
                <option value="Good (Minor Wear)">Good (Minor Wear)</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Handover Location</label>
              <input type="text" id="assignLocation" class="form-control" value="Wagholi HQ, Pune">
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" style="font-weight: 600;">Handover Remarks & Accessories Issued</label>
            <textarea id="assignRemarks" class="form-control" rows="2" placeholder="e.g. Issued with 140W USB-C Charger, Laptop Sleeve & Corporate Access Badge"></textarea>
          </div>

          <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 10px;">
            <button type="button" class="btn btn-secondary" onclick="window.hrApp.closeAssignAssetModal()">Cancel</button>
            <button type="submit" class="btn btn-primary" style="font-weight: 700;">
              📋 Confirm Asset Handover & Issue Slip
            </button>
          </div>
        </form>

      </div>
    </div>
  `;
}

export function renderRegisterHardwareModal() {
  return `
    <div class="modal-overlay" id="registerHardwareModalOverlay" style="display: none; z-index: 10000; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(10px); align-items: center; justify-content: center;">
      <div class="modal-container glass-card" style="width: 620px; max-width: 92vw; padding: 30px; border-radius: 16px; border: 1px solid var(--border-color); background: rgba(30, 41, 59, 0.98);">
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid var(--border-color); padding-bottom: 12px;">
          <div>
            <h2 style="font-size: 1.35rem; color: var(--accent-emerald);">📦 Register New Company Hardware Asset</h2>
            <small style="color: var(--text-muted);">Add new laptops, 5G field kits, SIM cards, or equipment to corporate inventory</small>
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
                <option value="Company Vehicle">Company Vehicle / Transit</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Generated Asset Tag ID</label>
              <input type="text" id="regTagId" class="form-control" value="AST-LAP-2026-005" readonly style="font-family: monospace; font-weight: 700; color: var(--primary);">
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" style="font-weight: 600;">Model Name & Specs</label>
            <input type="text" id="regModel" class="form-control" placeholder="e.g. MacBook Pro 16 M3 Max 36GB RAM 1TB SSD" required>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Serial Number / IMEI</label>
              <input type="text" id="regSerial" class="form-control" placeholder="e.g. C02GX001MD99" required style="font-family: monospace;">
            </div>
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Purchase Cost (₹ INR)</label>
              <input type="number" id="regCost" class="form-control" placeholder="245000" required>
            </div>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Purchase / Invoice Date</label>
              <input type="date" id="regPurchaseDate" class="form-control" value="${new Date().toISOString().split('T')[0]}" required>
            </div>
            <div class="form-group">
              <label class="form-label" style="font-weight: 600;">Warranty Expiry Date</label>
              <input type="date" id="regWarrantyDate" class="form-control" value="2027-12-31" required>
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
              <label class="form-label" style="font-weight: 600;">Initial Physical Condition</label>
              <select id="regInitialCondition" class="form-control">
                <option value="Brand New (Sealed)" selected>Brand New (Sealed)</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
              </select>
            </div>
          </div>

          <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 10px;">
            <button type="button" class="btn btn-secondary" onclick="window.hrApp.closeRegisterHardwareModal()">Cancel</button>
            <button type="submit" class="btn btn-primary" style="font-weight: 700;">
              📦 Register Asset into Vault
            </button>
          </div>
        </form>

      </div>
    </div>
  `;
}
