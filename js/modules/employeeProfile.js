// Employee Profile Module View (12-Tab Digital HR File)
import { store } from '../context.js';
import { formatCurrency } from '../engine/templateEngine.js';

export function renderEmployeeProfile(employeeId) {
  const state = store.getState();
  const emp = state.employees.find(e => e.id === employeeId || e.employeeId === employeeId) || state.employees[0];

  if (!emp) {
    return `<div class="glass-card"><h3>Employee not found.</h3></div>`;
  }

  const activeTab = state.viewParams.tab || 'overview';

  return `
    <div class="page-header">
      <div style="display: flex; align-items: center; gap: 15px;">
        <button class="btn btn-secondary btn-sm" onclick="window.hrApp.navigate('employees')">
          ← Back to Employees
        </button>
        <div>
          <h1 style="margin: 0; font-size: 1.5rem;">${emp.fullName}</h1>
          <p class="page-subtitle" style="margin: 0;">${emp.employeeId} • ${emp.employment.designation} • ${emp.employment.department}</p>
        </div>
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn btn-primary" onclick="window.hrApp.navigate('generator', { employeeId: '${emp.id}' })">
          📄 Generate HR Document
        </button>
      </div>
    </div>

    <!-- Profile Header Summary Banner -->
    <div class="glass-card" style="margin-bottom: 20px; background: linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%); border-left: 4px solid var(--primary);">
      <div style="display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
        <div class="avatar-badge" style="width: 64px; height: 64px; font-size: 1.5rem; font-weight: 700;">
          ${emp.firstName[0]}${emp.lastName[0]}
        </div>
        <div style="flex: 1;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 4px;">
            <h2 style="font-size: 1.3rem; margin: 0;">${emp.fullName}</h2>
            <span class="badge badge-active">${emp.employment.status}</span>
          </div>
          <div style="display: flex; gap: 20px; font-size: 0.88rem; color: var(--text-muted); flex-wrap: wrap;">
            <span>📧 ${emp.email}</span>
            <span>📱 ${emp.mobile}</span>
            <span>📍 ${emp.employment.workLocation}</span>
            <span>📅 Joined: ${emp.employment.dateOfJoining}</span>
          </div>
        </div>
        <div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">Annual CTC</div>
          <div style="font-size: 1.3rem; font-weight: 700; color: var(--accent-teal);">${formatCurrency(emp.salary?.ctcAnnual)}</div>
        </div>
      </div>
    </div>

    <!-- 12-Tab Profile Navigation Bar -->
    <div class="tabs-nav">
      <button class="tab-btn ${activeTab === 'overview' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'overview' })">Overview</button>
      <button class="tab-btn ${activeTab === 'personal' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'personal' })">Personal Info</button>
      <button class="tab-btn ${activeTab === 'employment' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'employment' })">Employment Details</button>
      <button class="tab-btn ${activeTab === 'salary' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'salary' })">Salary Breakdown</button>
      <button class="tab-btn ${activeTab === 'bank' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'bank' })">Bank Details</button>
      <button class="tab-btn ${activeTab === 'documents' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'documents' })">ID & Uploads</button>
      <button class="tab-btn ${activeTab === 'letters' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'letters' })">Generated Letters (${emp.generatedLetters?.length || 0})</button>
      <button class="tab-btn ${activeTab === 'attendance' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'attendance' })">Attendance & Leave</button>
      <button class="tab-btn ${activeTab === 'performance' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'performance' })">Performance</button>
      <button class="tab-btn ${activeTab === 'assets' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'assets' })">Assets</button>
      <button class="tab-btn ${activeTab === 'exit' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'exit' })">Exit Record</button>
    </div>

    <!-- Active Tab Content Area -->
    <div class="profile-tab-content">
      ${renderTabContent(activeTab, emp)}
    </div>
  `;
}

function renderTabContent(tab, emp) {
  switch (tab) {
    case 'personal':
      return `
        <div class="glass-card">
          <h3 style="margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">Personal Information</h3>
          <div class="grid-2">
            <div><span class="form-label">First Name:</span> <strong>${emp.firstName}</strong></div>
            <div><span class="form-label">Middle Name:</span> <strong>${emp.middleName || '-'}</strong></div>
            <div><span class="form-label">Last Name:</span> <strong>${emp.lastName}</strong></div>
            <div><span class="form-label">Date of Birth:</span> <strong>${emp.dob}</strong></div>
            <div><span class="form-label">Gender:</span> <strong>${emp.gender}</strong></div>
            <div><span class="form-label">Mobile:</span> <strong>${emp.mobile}</strong></div>
            <div><span class="form-label">Personal Email:</span> <strong>${emp.email}</strong></div>
            <div><span class="form-label">Permanent Address:</span> <strong>${emp.address}</strong></div>
            <div><span class="form-label">Emergency Contact Person:</span> <strong>${emp.emergencyContact?.name} (${emp.emergencyContact?.relation})</strong></div>
            <div><span class="form-label">Emergency Phone:</span> <strong>${emp.emergencyContact?.phone}</strong></div>
          </div>
        </div>
      `;

    case 'employment':
      return `
        <div class="glass-card">
          <h3 style="margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">Employment Details</h3>
          <div class="grid-2">
            <div><span class="form-label">Employee ID:</span> <strong style="font-family: monospace; color: var(--primary);">${emp.employeeId}</strong></div>
            <div><span class="form-label">Date of Joining:</span> <strong>${emp.employment.dateOfJoining}</strong></div>
            <div><span class="form-label">Department:</span> <strong>${emp.employment.department}</strong></div>
            <div><span class="form-label">Designation:</span> <strong>${emp.employment.designation}</strong></div>
            <div><span class="form-label">Reporting Manager:</span> <strong>${emp.employment.reportingManager}</strong></div>
            <div><span class="form-label">Employment Type:</span> <strong>${emp.employment.employmentType}</strong></div>
            <div><span class="form-label">Work Location:</span> <strong>${emp.employment.workLocation}</strong></div>
            <div><span class="form-label">Probation Period:</span> <strong>${emp.employment.probationPeriodMonths} Months</strong></div>
            <div><span class="form-label">Confirmation Date:</span> <strong>${emp.employment.confirmationDate || 'Pending'}</strong></div>
            <div><span class="form-label">Status:</span> <span class="badge badge-active">${emp.employment.status}</span></div>
          </div>
        </div>
      `;

    case 'salary':
      return `
        <div class="glass-card">
          <h3 style="margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">Salary Structure Breakdown</h3>
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Salary Component</th>
                  <th style="text-align: right;">Monthly Amount (INR)</th>
                  <th style="text-align: right;">Annual Amount (INR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basic Salary</td>
                  <td style="text-align: right;">${formatCurrency(emp.salary?.basic)}</td>
                  <td style="text-align: right;">${formatCurrency((emp.salary?.basic || 0) * 12)}</td>
                </tr>
                <tr>
                  <td>House Rent Allowance (HRA)</td>
                  <td style="text-align: right;">${formatCurrency(emp.salary?.hra)}</td>
                  <td style="text-align: right;">${formatCurrency((emp.salary?.hra || 0) * 12)}</td>
                </tr>
                <tr>
                  <td>Conveyance Allowance</td>
                  <td style="text-align: right;">${formatCurrency(emp.salary?.conveyance || 0)}</td>
                  <td style="text-align: right;">${formatCurrency((emp.salary?.conveyance || 0) * 12)}</td>
                </tr>
                <tr>
                  <td>Special Allowance</td>
                  <td style="text-align: right;">${formatCurrency(emp.salary?.specialAllowance || 0)}</td>
                  <td style="text-align: right;">${formatCurrency((emp.salary?.specialAllowance || 0) * 12)}</td>
                </tr>
                <tr style="background: rgba(99, 102, 241, 0.1); font-weight: bold;">
                  <td>Gross Salary</td>
                  <td style="text-align: right; color: var(--primary);">${formatCurrency(emp.salary?.grossMonthly)}</td>
                  <td style="text-align: right; color: var(--primary);">${formatCurrency(emp.salary?.ctcAnnual)}</td>
                </tr>
                <tr>
                  <td>Provident Fund (PF) Deduction</td>
                  <td style="text-align: right; color: var(--accent-rose);">- ${formatCurrency(emp.salary?.pfDeduction)}</td>
                  <td style="text-align: right; color: var(--accent-rose);">- ${formatCurrency((emp.salary?.pfDeduction || 0) * 12)}</td>
                </tr>
                <tr>
                  <td>Professional Tax (PT) Deduction</td>
                  <td style="text-align: right; color: var(--accent-rose);">- ${formatCurrency(emp.salary?.ptDeduction)}</td>
                  <td style="text-align: right; color: var(--accent-rose);">- ${formatCurrency((emp.salary?.ptDeduction || 0) * 12)}</td>
                </tr>
                <tr style="background: rgba(16, 185, 129, 0.1); font-weight: bold;">
                  <td>Net Take-Home Salary</td>
                  <td style="text-align: right; color: var(--accent-teal);">${formatCurrency(emp.salary?.netMonthly)}</td>
                  <td style="text-align: right; color: var(--accent-teal);">${formatCurrency((emp.salary?.netMonthly || 0) * 12)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;

    case 'bank':
      return `
        <div class="glass-card">
          <h3 style="margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">Bank Account & Payment Details</h3>
          <div class="grid-2">
            <div><span class="form-label">Bank Name:</span> <strong>${emp.bank?.bankName || '-'}</strong></div>
            <div><span class="form-label">Account Holder Name:</span> <strong>${emp.bank?.accountHolderName || emp.fullName}</strong></div>
            <div><span class="form-label">Account Number:</span> <strong style="font-family: monospace;">${emp.bank?.accountNumber || '-'}</strong></div>
            <div><span class="form-label">IFSC Code:</span> <strong style="font-family: monospace;">${emp.bank?.ifsc || '-'}</strong></div>
            <div><span class="form-label">Branch Name:</span> <strong>${emp.bank?.branch || '-'}</strong></div>
          </div>
        </div>
      `;

    case 'letters':
      return `
        <div class="glass-card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <h3 style="margin: 0;">Generated Letters & Official HR Records</h3>
            <button class="btn btn-primary btn-sm" onclick="window.hrApp.navigate('generator', { employeeId: '${emp.id}' })">
              + Generate New Document
            </button>
          </div>
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Doc Number</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Generated Date</th>
                  <th>Issued By</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${(emp.generatedLetters || []).length > 0 ? emp.generatedLetters.map(letter => `
                  <tr>
                    <td><span style="font-family: monospace; color: var(--primary); font-weight: 600;">${letter.docNumber}</span></td>
                    <td><strong>${letter.title}</strong></td>
                    <td><span class="badge badge-primary">${letter.category}</span></td>
                    <td>${letter.generatedDate}</td>
                    <td>${letter.generatedBy}</td>
                    <td>
                      <button class="btn btn-sm btn-secondary" onclick="window.hrApp.navigate('history')">
                        View Record
                      </button>
                    </td>
                  </tr>
                `).join('') : `
                  <tr>
                    <td colspan="6" style="text-align: center; color: var(--text-muted); padding: 30px;">
                      No letters generated yet for this employee. Click above to generate one.
                    </td>
                  </tr>
                `}
              </tbody>
            </table>
          </div>
        </div>
      `;

    case 'assets':
      return `
        <div class="glass-card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <h3>Assigned Company Property & Hardware Register</h3>
            <button class="btn btn-sm btn-primary" onclick="window.hrApp.showAssignAssetModal()">
              💻 + Assign Asset to ${emp.firstName}
            </button>
          </div>

          <div class="table-responsive" style="margin-bottom: 20px;">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Asset Tag ID</th>
                  <th>Type</th>
                  <th>Hardware Name & Specs</th>
                  <th>Serial Number</th>
                  <th>Status</th>
                  <th>Ack Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong style="font-family: monospace; color: var(--primary);">OBS-LAP-0024</strong></td>
                  <td><span class="badge badge-primary">Laptop</span></td>
                  <td>Dell Latitude 5440 i7 16GB</td>
                  <td><code>DL5440202699</code></td>
                  <td><span class="badge badge-active">ASSIGNED</span></td>
                  <td><span class="badge badge-active">✓ Digital Ack Signed</span></td>
                  <td>
                    <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Generated Asset Ack Form')">Handover Form</button>
                  </td>
                </tr>
                <tr>
                  <td><strong style="font-family: monospace; color: var(--primary);">OBS-SIM-1044</strong></td>
                  <td><span class="badge badge-secondary">Corporate SIM</span></td>
                  <td>Jio 5G Testing SIM</td>
                  <td><code>8991002345678912</code></td>
                  <td><span class="badge badge-active">ASSIGNED</span></td>
                  <td><span class="badge badge-active">✓ Digital Ack Signed</span></td>
                  <td>
                    <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Viewing SIM Details')">View SIM</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style="background: rgba(255,255,255,0.02); padding: 15px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
            <h4 style="margin-bottom: 10px;">Digital Asset Handover Acknowledgement Status</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 10px;">Confirmed receipt of laptop & SIM card with accessories (140W Charger, Wireless Mouse, Bag).</p>
            <small style="color: var(--accent-emerald);">✓ Signed by ${emp.fullName} on 12 Aug 2026 (IP: 182.72.102.14)</small>
          </div>
        </div>
      `;

    default: // overview
      return `
        <div class="grid-2">
          <div class="glass-card">
            <h3 style="margin-bottom: 15px;">Quick Profile Overview</h3>
            <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.9rem;">
              <div><strong>Designation:</strong> ${emp.employment.designation}</div>
              <div><strong>Department:</strong> ${emp.employment.department}</div>
              <div><strong>Reporting To:</strong> ${emp.employment.reportingManager}</div>
              <div><strong>Work Email:</strong> ${emp.email}</div>
              <div><strong>Contact Phone:</strong> ${emp.mobile}</div>
              <div><strong>PAN Number:</strong> <span style="font-family: monospace;">${emp.documents?.pan || 'N/A'}</span></div>
              <div><strong>Aadhaar ID:</strong> <span style="font-family: monospace;">${emp.documents?.aadhaar || 'N/A'}</span></div>
            </div>
          </div>

          <div class="glass-card">
            <h3 style="margin-bottom: 15px;">Quick HR Document Actions</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 15px;">Instantly generate official HR documents with pre-filled employee data:</p>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <button class="btn btn-secondary" onclick="window.hrApp.navigate('generator', { employeeId: '${emp.id}', templateId: 'TPL-APPT-01' })">
                📄 Generate Appointment Letter
              </button>
              <button class="btn btn-secondary" onclick="window.hrApp.navigate('generator', { employeeId: '${emp.id}', templateId: 'TPL-INCR-01' })">
                📈 Generate Salary Increment Letter
              </button>
              <button class="btn btn-secondary" onclick="window.hrApp.navigate('generator', { employeeId: '${emp.id}', templateId: 'TPL-NDA-01' })">
                🔒 Generate NDA Agreement
              </button>
              <button class="btn btn-secondary" onclick="window.hrApp.navigate('generator', { employeeId: '${emp.id}', templateId: 'TPL-EXP-01' })">
                🎖️ Generate Experience Certificate
              </button>
            </div>
          </div>
        </div>
      `;
  }
}
