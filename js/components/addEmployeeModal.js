// 5-Step Add Employee Wizard Modal Component
import { store } from '../context.js';

export function renderAddEmployeeModal() {
  return `
    <div class="modal-overlay" id="addEmployeeModalOverlay" role="dialog" aria-modal="true" aria-hidden="true" style="display: none; z-index: 10000;">
      <div class="modal-container" style="max-width: 750px;">
        <div class="modal-header">
          <div>
            <h2 style="font-size: 1.25rem; margin: 0;">Add New Employee to Master</h2>
            <small style="color: var(--text-muted);">Enter employee profile information once for universal document generation</small>
          </div>
          <button class="modal-close" onclick="window.hrApp.closeAddEmployeeModal()">&times;</button>
        </div>

        <form id="addEmployeeForm" onsubmit="window.hrApp.submitNewEmployee(event)">
          <!-- Wizard Stepper Indicators -->
          <div class="stepper-header">
            <div class="step-item active" id="stepIndicator1">
              <div class="step-number">1</div>
              <span style="font-size: 0.8rem; font-weight: 600;">Personal</span>
            </div>
            <div class="step-item" id="stepIndicator2">
              <div class="step-number">2</div>
              <span style="font-size: 0.8rem; font-weight: 600;">Employment</span>
            </div>
            <div class="step-item" id="stepIndicator3">
              <div class="step-number">3</div>
              <span style="font-size: 0.8rem; font-weight: 600;">Salary</span>
            </div>
            <div class="step-item" id="stepIndicator4">
              <div class="step-number">4</div>
              <span style="font-size: 0.8rem; font-weight: 600;">Bank & Statutory</span>
            </div>
          </div>

          <!-- Step 1: Personal Info -->
          <div class="wizard-step-pane" id="wizardStep1">
            <div class="grid-2">
              <div class="form-group">
                <label class="form-label">First Name *</label>
                <input type="text" id="newFirstName" class="form-control" required placeholder="e.g. Swapnil">
              </div>
              <div class="form-group">
                <label class="form-label">Last Name *</label>
                <input type="text" id="newLastName" class="form-control" required placeholder="e.g. Ghodke">
              </div>
            </div>
            <div class="grid-2">
              <div class="form-group">
                <label class="form-label">Gender *</label>
                <select id="newGender" class="form-control" required>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Date of Birth *</label>
                <input type="date" id="newDob" class="form-control" required value="1995-01-01">
              </div>
            </div>
            <div class="grid-2">
              <div class="form-group">
                <label class="form-label">Mobile Number *</label>
                <input type="text" id="newMobile" class="form-control" required placeholder="+91 98230 00000">
              </div>
              <div class="form-group">
                <label class="form-label">Personal Email *</label>
                <input type="email" id="newEmail" class="form-control" required placeholder="employee@email.com">
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Permanent Address</label>
              <textarea id="newAddress" class="form-control" placeholder="Street address, City, Pincode..."></textarea>
            </div>
          </div>

          <!-- Step 2: Employment Info -->
          <div class="wizard-step-pane" id="wizardStep2" style="display: none;">
            <div class="grid-2">
              <div class="form-group">
                <label class="form-label">Employee ID Code *</label>
                <input type="text" id="newEmployeeId" class="form-control" value="OBS-OPS-26-006" style="font-family: monospace;">
              </div>
              <div class="form-group">
                <label class="form-label">Date of Joining *</label>
                <input type="date" id="newDoj" class="form-control" required value="${new Date().toISOString().split('T')[0]}">
              </div>
            </div>
            <div class="grid-2">
              <div class="form-group">
                <label class="form-label">Department *</label>
                <select id="newDept" class="form-control" required>
                  <option value="IT & Operations">IT & Operations</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Human Resources">Human Resources</option>
                  <option value="Finance & Accounts">Finance & Accounts</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Designation *</label>
                <input type="text" id="newDesignation" class="form-control" required placeholder="e.g. Senior Project Manager">
              </div>
            </div>
            <div class="grid-2">
              <div class="form-group">
                <label class="form-label">Reporting Manager</label>
                <input type="text" id="newManager" class="form-control" value="Swapnil Ghodke (Head of HR)">
              </div>
              <div class="form-group">
                <label class="form-label">Work Location</label>
                <input type="text" id="newLocation" class="form-control" value="Hinjewadi HQ, Pune">
              </div>
            </div>
          </div>

          <!-- Step 3: Salary Info -->
          <div class="wizard-step-pane" id="wizardStep3" style="display: none;">
            <div class="grid-2">
              <div class="form-group">
                <label class="form-label">Basic Salary (Monthly INR) *</label>
                <input type="number" id="newBasicSalary" class="form-control" value="45000" oninput="window.hrApp.recalcSalaryForm()">
              </div>
              <div class="form-group">
                <label class="form-label">HRA (50% of Basic) *</label>
                <input type="number" id="newHraSalary" class="form-control" value="22500" readonly>
              </div>
            </div>
            <div class="grid-2">
              <div class="form-group">
                <label class="form-label">Gross Monthly Salary *</label>
                <input type="number" id="newGrossSalary" class="form-control" value="90000" oninput="window.hrApp.recalcSalaryForm()">
              </div>
              <div class="form-group">
                <label class="form-label">Calculated Annual CTC</label>
                <input type="text" id="newCtcAnnual" class="form-control" value="₹ 10,80,000" readonly style="font-weight: bold; color: var(--accent-teal);">
              </div>
            </div>
          </div>

          <!-- Step 4: Bank Details -->
          <div class="wizard-step-pane" id="wizardStep4" style="display: none;">
            <div class="grid-2">
              <div class="form-group">
                <label class="form-label">Bank Name</label>
                <input type="text" id="newBankName" class="form-control" value="HDFC Bank">
              </div>
              <div class="form-group">
                <label class="form-label">Account Number</label>
                <input type="text" id="newAccountNo" class="form-control" placeholder="Account Number">
              </div>
            </div>
            <div class="grid-2">
              <div class="form-group">
                <label class="form-label">IFSC Code</label>
                <input type="text" id="newIfsc" class="form-control" placeholder="HDFC0000123">
              </div>
              <div class="form-group">
                <label class="form-label">PAN Card Number</label>
                <input type="text" id="newPan" class="form-control" placeholder="ABCDE1234F">
              </div>
            </div>
          </div>

          <!-- Wizard Navigation Controls -->
          <div style="display: flex; justify-content: space-between; margin-top: 25px; border-top: 1px solid var(--border-color); padding-top: 15px;">
            <button type="button" class="btn btn-secondary" id="wizPrevBtn" onclick="window.hrApp.wizardStepPrev()" style="display: none;">
              ← Previous
            </button>
            <div style="margin-left: auto; display: flex; gap: 10px;">
              <button type="button" class="btn btn-primary" id="wizNextBtn" onclick="window.hrApp.wizardStepNext()">
                Next Step →
              </button>
              <button type="submit" class="btn btn-success" id="wizSubmitBtn" style="display: none;">
                Save Employee Record
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `;
}
