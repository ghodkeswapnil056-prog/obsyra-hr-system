// Operational HR Modules (Recruitment, Onboarding, Attendance/Leave, Payroll, Performance, Assets, Exit, Reports, Settings)
import { store } from '../context.js';

// 1. Recruitment & Manpower Staffing
export function renderRecruitment() {
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Recruitment & Manpower Staffing</h1>
        <p class="page-subtitle">Telecom, IT, Infrastructure, and Sectoral Manpower Deployment across PAN India</p>
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn btn-primary" onclick="window.store.navigate('generator', { templateId: 'TPL-OFFER-01' })">
          ✉️ Generate Offer Letter
        </button>
        <button class="btn btn-secondary" onclick="window.store.navigate('generator', { templateId: 'TPL-ETHICS-01' })">
          📜 Code of Ethics Sign-Off
        </button>
      </div>
    </div>

    <div class="grid-3" style="margin-bottom: 25px;">
      <div class="glass-card">
        <h3>Active Job Openings</h3>
        <div style="font-size: 2rem; font-weight: bold; color: var(--primary); margin: 10px 0;">4 Open Roles</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">5G Core Engineer, Rack Installation Lead, HR Executive, Finance Analyst</div>
      </div>

      <div class="glass-card">
        <h3>Candidates Pipeline</h3>
        <div style="font-size: 2rem; font-weight: bold; color: var(--accent-sky); margin: 10px 0;">18 Applicants</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">5 Technical Rounds, 3 Director Interview Stage</div>
      </div>

      <div class="glass-card">
        <h3>Offers Issued</h3>
        <div style="font-size: 2rem; font-weight: bold; color: var(--accent-teal); margin: 10px 0;">3 Offers</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">2 Accepted (Rahul Sharma, Priya Patel), 1 Pending</div>
      </div>
    </div>

    <!-- Candidate Recruitment Pipeline Board -->
    <div class="glass-card" style="margin-bottom: 25px;">
      <h3 style="margin-bottom: 15px;">Active Recruitment Candidates Stream</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Candidate Name</th>
              <th>Applied Role</th>
              <th>Department</th>
              <th>Experience</th>
              <th>Current Pipeline Stage</th>
              <th>Expected CTC</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Vikram Malhotra</strong><br><small style="color: var(--text-muted);">REQ-2026-089</small></td>
              <td>Senior 5G Test Engineer</td>
              <td>Telecom Operations</td>
              <td>6.5 Years</td>
              <td><span class="badge badge-primary">Director Interview</span></td>
              <td>₹ 14.5 LPA</td>
              <td>
                <button class="btn btn-sm btn-primary" onclick="window.store.navigate('generator', { templateId: 'TPL-OFFER-01' })">
                  Generate Offer
                </button>
              </td>
            </tr>
            <tr>
              <td><strong>Ananya Deshmukh</strong><br><small style="color: var(--text-muted);">REQ-2026-092</small></td>
              <td>HR Operations Executive</td>
              <td>Human Resources</td>
              <td>3.0 Years</td>
              <td><span class="badge badge-active">Offer Accepted</span></td>
              <td>₹ 6.5 LPA</td>
              <td>
                <button class="btn btn-sm btn-secondary" onclick="window.store.navigate('generator', { templateId: 'TPL-APPT-01' })">
                  Create Appt Letter
                </button>
              </td>
            </tr>
            <tr>
              <td><strong>Amitabh Joshi</strong><br><small style="color: var(--text-muted);">REQ-2026-095</small></td>
              <td>Network Rack Installation Lead</td>
              <td>Infrastructure</td>
              <td>5.2 Years</td>
              <td><span class="badge badge-warning">Technical Round 2</span></td>
              <td>₹ 9.0 LPA</td>
              <td>
                <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Scheduled Technical Round 2')">
                  Schedule Round
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 2. Employee Onboarding
export function renderOnboarding() {
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Employee Onboarding & Compliance</h1>
        <p class="page-subtitle">New joiner checklists, statutory document collection & appointment letter dispatch</p>
      </div>
      <button class="btn btn-primary" onclick="window.store.navigate('generator', { templateId: 'TPL-APPT-01' })">
        📄 Generate Appointment Letter
      </button>
    </div>

    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card"><div class="stat-value">4</div><div class="stat-label">Onboarding Total</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--accent-emerald);">4</div><div class="stat-label">Docs Verified</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--accent-amber);">0</div><div class="stat-label">Pending Verification</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--primary);">100%</div><div class="stat-label">Compliance Status</div></div>
    </div>

    <div class="glass-card">
      <h3 style="margin-bottom: 15px;">Onboarding Document Checklist & Verification Status</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>New Joiner</th>
              <th>Joining Date</th>
              <th>PAN & Aadhaar</th>
              <th>Experience Certs</th>
              <th>Appointment Letter</th>
              <th>Code of Ethics</th>
              <th>Bank Account</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Swapnil Ghodke</strong><br><small style="color: var(--text-muted);">OBS-OPS-26-001</small></td>
              <td>01 Sep 2024</td>
              <td><span class="badge badge-active">Verified</span></td>
              <td><span class="badge badge-active">Verified</span></td>
              <td><span class="badge badge-active">Issued (OBS-APPT-2026-0014)</span></td>
              <td><span class="badge badge-active">Signed (OBS-ETHICS-26-0001)</span></td>
              <td><span class="badge badge-active">HDFC Bank Verified</span></td>
            </tr>
            <tr>
              <td><strong>Rahul Sharma</strong><br><small style="color: var(--text-muted);">OBS-ENG-26-002</small></td>
              <td>15 Jan 2025</td>
              <td><span class="badge badge-active">Verified</span></td>
              <td><span class="badge badge-active">Verified</span></td>
              <td><span class="badge badge-active">Issued (OBS-APPT-2026-0015)</span></td>
              <td><span class="badge badge-active">Signed</span></td>
              <td><span class="badge badge-active">ICICI Bank Verified</span></td>
            </tr>
            <tr>
              <td><strong>Priya Patel</strong><br><small style="color: var(--text-muted);">OBS-HR-26-003</small></td>
              <td>01 Feb 2025</td>
              <td><span class="badge badge-active">Verified</span></td>
              <td><span class="badge badge-active">Verified</span></td>
              <td><span class="badge badge-active">Issued (OBS-APPT-2026-0016)</span></td>
              <td><span class="badge badge-active">Signed</span></td>
              <td><span class="badge badge-active">Axis Bank Verified</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 3. Attendance & Leave Management
export function renderAttendanceLeave() {
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Attendance & Leave Management</h1>
        <p class="page-subtitle">Track employee daily attendance, leave balances, and annual leave requests</p>
      </div>
      <button class="btn btn-primary" onclick="window.hrApp.showToast('Opened Leave Request Application modal')">
        🌴 Apply For Leave
      </button>
    </div>

    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card"><div class="stat-value">4</div><div class="stat-label">Total Active Staff</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--accent-emerald);">4</div><div class="stat-label">Present Today</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--accent-amber);">0</div><div class="stat-label">On Planned Leave</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--primary);">100%</div><div class="stat-label">Attendance Rate</div></div>
    </div>

    <div class="glass-card">
      <h3 style="margin-bottom: 15px;">Employee Annual Leave Balances & Status</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Casual Leave (CL)</th>
              <th>Sick Leave (SL)</th>
              <th>Earned Leave (EL)</th>
              <th>Total Available</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Swapnil Ghodke</strong><br><small style="color: var(--text-muted);">Head of HR</small></td>
              <td>8 / 12 Days</td>
              <td>6 / 7 Days</td>
              <td>12 / 15 Days</td>
              <td><strong>26 Days Available</strong></td>
              <td><span class="badge badge-active">Present</span></td>
            </tr>
            <tr>
              <td><strong>Rahul Sharma</strong><br><small style="color: var(--text-muted);">Senior Software Engineer</small></td>
              <td>10 / 12 Days</td>
              <td>7 / 7 Days</td>
              <td>14 / 15 Days</td>
              <td><strong>31 Days Available</strong></td>
              <td><span class="badge badge-active">Present</span></td>
            </tr>
            <tr>
              <td><strong>Priya Patel</strong><br><small style="color: var(--text-muted);">HR Operations Lead</small></td>
              <td>9 / 12 Days</td>
              <td>5 / 7 Days</td>
              <td>10 / 15 Days</td>
              <td><strong>24 Days Available</strong></td>
              <td><span class="badge badge-active">Present</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 4. Payroll & Salary Management
export function renderPayroll() {
  const state = store.getState();
  const employees = state.employees || [];

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Payroll & Salary Management</h1>
        <p class="page-subtitle">Monthly salary rolls, statutory PF/PT deductions & CTC structure management</p>
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn btn-primary" onclick="window.store.navigate('generator', { templateId: 'TPL-SLIP-01' })">
          💵 Generate Payslip
        </button>
        <button class="btn btn-secondary" onclick="window.store.navigate('generator', { templateId: 'TPL-INCR-01' })">
          📈 Issue Increment Letter
        </button>
      </div>
    </div>

    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card"><div class="stat-value">₹ 3.85L</div><div class="stat-label">Monthly Payroll</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--accent-emerald);">4</div><div class="stat-label">Processed Slips</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--accent-amber);">₹ 21,600</div><div class="stat-label">Statutory PF/PT Deductions</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--primary);">100%</div><div class="stat-label">Disbursement Status</div></div>
    </div>

    <div class="glass-card">
      <h3 style="margin-bottom: 15px;">Monthly Salary Roll & Payslip Issuance Roster</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Designation</th>
              <th>Monthly CTC</th>
              <th>Gross Earnings</th>
              <th>PF & Tax Deductions</th>
              <th>Net Salary Payout</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${employees.map(emp => {
              const annualCtc = emp.compensation?.ctcAnnual || 1080000;
              const monthlyCtc = Math.round(annualCtc / 12);
              const basic = Math.round(monthlyCtc * 0.5);
              const pf = Math.min(1800, Math.round(basic * 0.12));
              const pt = 200;
              const netPayout = monthlyCtc - pf - pt;

              return `
                <tr>
                  <td><strong>${emp.fullName}</strong><br><small style="color: var(--text-muted);">${emp.employeeId}</small></td>
                  <td>${emp.employment?.designation}</td>
                  <td>₹ ${monthlyCtc.toLocaleString('en-IN')}</td>
                  <td>₹ ${monthlyCtc.toLocaleString('en-IN')}</td>
                  <td>₹ ${(pf + pt).toLocaleString('en-IN')}</td>
                  <td><strong style="color: var(--accent-emerald);">₹ ${netPayout.toLocaleString('en-IN')}</strong></td>
                  <td>
                    <button class="btn btn-sm btn-primary" onclick="window.store.navigate('generator', { templateId: 'TPL-SLIP-01' })">
                      Generate Slip
                    </button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 5. Performance & Appraisals
export function renderPerformance() {
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Performance & Appraisals</h1>
        <p class="page-subtitle">Annual performance reviews, promotion recommendations, and rating metrics</p>
      </div>
      <button class="btn btn-primary" onclick="window.store.navigate('generator', { templateId: 'TPL-PROM-01' })">
        📈 Issue Promotion Letter
      </button>
    </div>

    <div class="grid-3" style="margin-bottom: 25px;">
      <div class="glass-card">
        <h3>Exceeds Expectations (A+)</h3>
        <div style="font-size: 2rem; font-weight: bold; color: var(--accent-emerald); margin: 10px 0;">2 Staff</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">Swapnil Ghodke, Rahul Sharma</div>
      </div>
      <div class="glass-card">
        <h3>Meets Standards (A)</h3>
        <div style="font-size: 2rem; font-weight: bold; color: var(--primary); margin: 10px 0;">2 Staff</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">Priya Patel, Amit Kumar</div>
      </div>
      <div class="glass-card">
        <h3>PIP Required</h3>
        <div style="font-size: 2rem; font-weight: bold; color: var(--accent-amber); margin: 10px 0;">0 Staff</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">All team members compliant</div>
      </div>
    </div>
  `;
}

// 6. Asset Management
export function renderAssets() {
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Asset Management</h1>
        <p class="page-subtitle">Track hardware, laptops, SIM cards, and software credentials assigned to staff</p>
      </div>
      <button class="btn btn-primary" onclick="window.hrApp.showToast('Opened Assign Asset modal')">
        💻 + Assign New Asset
      </button>
    </div>

    <div class="glass-card">
      <h3 style="margin-bottom: 15px;">Hardware & IT Assets Inventory Roster</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Asset Tag ID</th>
              <th>Item Description</th>
              <th>Serial Number</th>
              <th>Assigned Employee</th>
              <th>Issue Date</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span style="font-family: monospace; color: var(--primary); font-weight: 600;">AST-LAP-2026-001</span></td>
              <td>MacBook Pro 16" M3 Max</td>
              <td>C02GX001MD68</td>
              <td><strong>Swapnil Ghodke</strong></td>
              <td>01 Sep 2024</td>
              <td><span class="badge badge-active">Excellent</span></td>
            </tr>
            <tr>
              <td><span style="font-family: monospace; color: var(--primary); font-weight: 600;">AST-LAP-2026-002</span></td>
              <td>Dell XPS 15 9530 i9</td>
              <td>DLXPS20269912</td>
              <td><strong>Rahul Sharma</strong></td>
              <td>15 Jan 2025</td>
              <td><span class="badge badge-active">Excellent</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 7. Exit & Separation Management
export function renderExit() {
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Exit & Separation Management</h1>
        <p class="page-subtitle">Employer-Initiated Terminations • Employee Resignations • Handover & Asset Clearance • F&F Settlement</p>
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn btn-danger" onclick="window.store.navigate('generator', { templateId: 'TPL-TERM-01' })">
          🚫 Issue Termination Order
        </button>
        <button class="btn btn-primary" onclick="window.store.navigate('generator', { templateId: 'TPL-REL-01' })">
          📄 Issue Relieving Order
        </button>
        <button class="btn btn-secondary" onclick="window.store.navigate('generator', { templateId: 'TPL-NODUES-01' })">
          📑 No Dues Certificate
        </button>
      </div>
    </div>

    <!-- Official Separation Distinction Notice -->
    <div class="glass-card" style="margin-bottom: 20px; border-left: 4px solid var(--accent-rose);">
      <h3 style="color: var(--accent-rose); font-size: 1.1rem; margin-bottom: 8px;">Key Distinction: Termination vs. Relieving</h3>
      <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin: 0;">
        <strong style="color: var(--accent-rose);">Termination Order (TPL-TERM-01):</strong> Employer-initiated end of employment recording cause, effective date, notice pay in lieu, IT revocation, handover checklist, and F&F settlement status.<br>
        <strong style="color: var(--accent-blue);">Relieving Order (TPL-REL-01):</strong> Confirms the employee's service release after full & final clearance has been completed.
      </p>
    </div>

    <!-- 10-Step Recommended Termination Workflow Stepper -->
    <div class="glass-card" style="margin-bottom: 25px;">
      <h3 style="margin-bottom: 15px;">Standard 10-Step Termination Lifecycle Workflow</h3>
      <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; text-align: center;">
        <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 1.2rem; margin-bottom: 4px;">1️⃣</div>
          <strong style="font-size: 0.82rem; color: #fca5a5; display: block;">Termination Initiated</strong>
          <small style="font-size: 0.72rem; color: var(--text-muted);">Manager/HR Grounds</small>
        </div>
        <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 1.2rem; margin-bottom: 4px;">2️⃣</div>
          <strong style="font-size: 0.82rem; color: #fde68a; display: block;">HR Legal Review</strong>
          <small style="font-size: 0.72rem; color: var(--text-muted);">Policy Audit</small>
        </div>
        <div style="background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 1.2rem; margin-bottom: 4px;">3️⃣</div>
          <strong style="font-size: 0.82rem; color: #c7d2fe; display: block;">Director Approval</strong>
          <small style="font-size: 0.72rem; color: var(--text-muted);">Signatory Authorization</small>
        </div>
        <div style="background: rgba(14, 165, 233, 0.1); border: 1px solid rgba(14, 165, 233, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 1.2rem; margin-bottom: 4px;">4️⃣</div>
          <strong style="font-size: 0.82rem; color: #bae6fd; display: block;">Formal Notice Served</strong>
          <small style="font-size: 0.72rem; color: var(--text-muted);">Pay in Lieu Terms</small>
        </div>
        <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 1.2rem; margin-bottom: 4px;">5️⃣</div>
          <strong style="font-size: 0.82rem; color: #e9d5ff; display: block;">Project Handover</strong>
          <small style="font-size: 0.72rem; color: var(--text-muted);">Knowledge Transfer</small>
        </div>
        <div style="background: rgba(236, 72, 153, 0.1); border: 1px solid rgba(236, 72, 153, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 1.2rem; margin-bottom: 4px;">6️⃣</div>
          <strong style="font-size: 0.82rem; color: #fbcfe8; display: block;">Asset Clearance</strong>
          <small style="font-size: 0.72rem; color: var(--text-muted);">Laptop & ID Return</small>
        </div>
        <div style="background: rgba(225, 29, 72, 0.1); border: 1px solid rgba(225, 29, 72, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 1.2rem; margin-bottom: 4px;">7️⃣</div>
          <strong style="font-size: 0.82rem; color: #fecdd3; display: block;">Access Revocation</strong>
          <small style="font-size: 0.72rem; color: var(--text-muted);">IT & Email Deactivation</small>
        </div>
        <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 1.2rem; margin-bottom: 4px;">8️⃣</div>
          <strong style="font-size: 0.82rem; color: #a7f3d0; display: block;">Full & Final Settlement</strong>
          <small style="font-size: 0.72rem; color: var(--text-muted);">Payroll & Encashment</small>
        </div>
        <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 1.2rem; margin-bottom: 4px;">9️⃣</div>
          <strong style="font-size: 0.82rem; color: #bfdbfe; display: block;">Termination Letter Issued</strong>
          <small style="font-size: 0.72rem; color: var(--text-muted);">Signed Vault Copy</small>
        </div>
        <div style="background: rgba(100, 116, 139, 0.1); border: 1px solid rgba(100, 116, 139, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 1.2rem; margin-bottom: 4px;">🔟</div>
          <strong style="font-size: 0.82rem; color: #cbd5e1; display: block;">Employee Record Closed</strong>
          <small style="font-size: 0.72rem; color: var(--text-muted);">Archived Status</small>
        </div>
      </div>
    </div>
  `;
}

// 8. HR Reports & Analytics
export function renderReports() {
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>HR Reports & Analytics</h1>
        <p class="page-subtitle">Department headcount, salary expenditure distribution, and document issuance metrics</p>
      </div>
    </div>

    <div class="grid-3" style="margin-bottom: 25px;">
      <div class="glass-card">
        <h3>Department Headcount</h3>
        <div style="font-size: 1.8rem; font-weight: bold; color: var(--primary); margin: 10px 0;">4 Active Staff</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">Operations (2), HR (1), Engineering (1)</div>
      </div>
      <div class="glass-card">
        <h3>Monthly Document Issuance</h3>
        <div style="font-size: 1.8rem; font-weight: bold; color: var(--accent-teal); margin: 10px 0;">45 Issued</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">Offers (28), Appt (14), Ethics (1), Slips (2)</div>
      </div>
      <div class="glass-card">
        <h3>Compliance Rate</h3>
        <div style="font-size: 1.8rem; font-weight: bold; color: var(--accent-emerald); margin: 10px 0;">100% Audit Passed</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">Aadhaar, PAN, Bank, Ethics Code Verified</div>
      </div>
    </div>
  `;
}

// 9. Company & Admin Settings
export function renderSettings() {
  const state = store.getState();
  const company = state.company;

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Company & Admin Settings</h1>
        <p class="page-subtitle">Configure company legal identity, logo branding, leadership directors, and document serial formats</p>
      </div>
      <button class="btn btn-primary" onclick="window.hrApp.saveCompanySettings()">
        💾 Save Settings
      </button>
    </div>

    <!-- Company Overview & Leadership Cards (From Official Deck) -->
    <div class="glass-card" style="margin-bottom: 25px; border-left: 4px solid var(--accent-amber);">
      <h3 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--accent-amber);">Company Leadership & Board of Directors</h3>
      <div class="grid-2">
        <div style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <strong style="font-size: 1.05rem; color: var(--text-main);">Surekha Avinash Aade</strong>
          <div style="color: var(--accent-amber); font-weight: 600; font-size: 0.85rem;">Director</div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 6px;">Provides strategic direction and oversees business operations, ensuring organizational growth, compliance, and long-term sustainability.</p>
        </div>

        <div style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <strong style="font-size: 1.05rem; color: var(--text-main);">Avinash Dagdu Aade</strong>
          <div style="color: var(--accent-amber); font-weight: 600; font-size: 0.85rem;">Director</div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 6px;">Leads technical execution and project delivery with expertise in telecom networks, 5G testing, infrastructure deployment, and manpower management.</p>
        </div>
      </div>
    </div>

    <div class="grid-2">
      <!-- Company Branding & Contact Info -->
      <div class="glass-card">
        <h3 style="margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">Company Profile</h3>
        <div class="form-group">
          <label class="form-label">Company Legal Name</label>
          <input type="text" id="setCompanyName" class="form-control" value="${company.name}">
        </div>
        <div class="grid-2">
          <div class="form-group">
            <label class="form-label">Company Short Code</label>
            <input type="text" id="setCompanyCode" class="form-control" value="${company.code}">
          </div>
          <div class="form-group">
            <label class="form-label">CIN Number</label>
            <input type="text" id="setCompanyCin" class="form-control" value="${company.cin}" style="font-family: monospace;">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Registered Office Address</label>
          <textarea id="setCorporateAddress" class="form-control">${company.corporateAddress}</textarea>
        </div>
        <div class="grid-2">
          <div class="form-group">
            <label class="form-label">Official Email</label>
            <input type="text" id="setCompanyEmail" class="form-control" value="${company.email}">
          </div>
          <div class="form-group">
            <label class="form-label">Service Coverage</label>
            <input type="text" class="form-control" value="PAN India" readonly style="font-weight: bold; color: var(--accent-teal);">
          </div>
        </div>
      </div>

      <!-- Signatories, Stamp & Serial Rules -->
      <div class="glass-card">
        <h3 style="margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">Authorized Signatory & Serial Rules</h3>
        
        <div class="form-group">
          <label class="form-label">Authorized Signatory Name</label>
          <input type="text" id="setSignatoryName" class="form-control" value="${company.authorizedSignatoryName}">
        </div>
        <div class="form-group">
          <label class="form-label">Authorized Signatory Designation</label>
          <input type="text" id="setSignatoryDesignation" class="form-control" value="${company.authorizedSignatoryDesignation}">
        </div>

        <div class="form-group">
          <label class="form-label">Document Serial Number Rule Format</label>
          <input type="text" id="setSerialFormat" class="form-control" value="${company.serialFormat}" style="font-family: monospace;">
          <small style="color: var(--text-muted); font-size: 0.78rem;">Placeholders: {COMPANY}, {TYPE}, {YYYY}, {SEQ:4}</small>
        </div>

        <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.03); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <h4 style="margin-bottom: 10px; font-size: 0.95rem;">Current Seal Stamp & Digital Signature Assets</h4>
          <div style="display: flex; gap: 20px; align-items: center;">
            <div>
              <small style="display: block; color: var(--text-muted); margin-bottom: 4px;">Official Seal</small>
              ${company.stampSvg}
            </div>
            <div>
              <small style="display: block; color: var(--text-muted); margin-bottom: 4px;">Verified Signature</small>
              ${company.signatureSvg}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
