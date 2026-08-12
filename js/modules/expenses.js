// Expense Claims & Reimbursements Module
import { store } from '../context.js';

export function renderExpenses() {
  const state = store.getState();
  const employees = state.employees || [];

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Expense Reimbursements & Field Claims</h1>
        <p class="page-subtitle">Track travel allowances, client site expenses, tool procurement & employee reimbursement claims</p>
      </div>
      <button class="btn btn-primary" onclick="window.hrApp.showToast('Opened Expense Claim Submission modal')">
        💸 + Submit New Expense Claim
      </button>
    </div>

    <!-- Top Expense Summary Cards -->
    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card">
        <div class="stat-value">₹ 42,500</div>
        <div class="stat-label">Total Monthly Claims</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-emerald);">₹ 35,000</div>
        <div class="stat-label">Approved & Settled</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-amber);">₹ 7,500</div>
        <div class="stat-label">Pending Approval</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--primary);">2 Days</div>
        <div class="stat-label">Average Clearance SLA</div>
      </div>
    </div>

    <div class="glass-card">
      <h3 style="margin-bottom: 15px;">Employee Reimbursement Claims Register</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Claim ID</th>
              <th>Employee Name</th>
              <th>Category</th>
              <th>Expense Description</th>
              <th>Claim Date</th>
              <th>Amount</th>
              <th>Receipt</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong style="font-family: monospace; color: var(--primary);">EXP-2026-0811</strong></td>
              <td><strong>Swapnil Ghodke</strong><br><small style="color: var(--text-muted);">OBS-OPS-26-001</small></td>
              <td>Field Transit / Fuel</td>
              <td>5G Site Testing Travel (Pune to Mumbai Data Center)</td>
              <td>10 Aug 2026</td>
              <td><strong>₹ 4,500</strong></td>
              <td><span class="badge badge-active">Fuel_Receipt.pdf</span></td>
              <td><span class="badge badge-active">Approved</span></td>
              <td>
                <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Viewing claim EXP-2026-0811')">
                  View Receipt
                </button>
              </td>
            </tr>
            <tr>
              <td><strong style="font-family: monospace; color: var(--primary);">EXP-2026-0814</strong></td>
              <td><strong>Rahul Sharma</strong><br><small style="color: var(--text-muted);">OBS-ENG-26-002</small></td>
              <td>Hardware Procurement</td>
              <td>Cat6 Patch Cables & Fiber Splicing Kit for Airtel Site</td>
              <td>11 Aug 2026</td>
              <td><strong>₹ 3,000</strong></td>
              <td><span class="badge badge-warning">Bill_Invoice.pdf</span></td>
              <td><span class="badge badge-warning">Pending Manager Approval</span></td>
              <td>
                <button class="btn btn-sm btn-primary" onclick="window.hrApp.showToast('Approved claim EXP-2026-0814')">
                  Approve Claim
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}
