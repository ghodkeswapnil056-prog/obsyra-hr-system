// Document History & Vault Module View
import { store } from '../context.js';

export function renderHistory() {
  const state = store.getState();
  const history = state.history || [];

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Document History & Global Vault</h1>
        <p class="page-subtitle">Complete audit trail of all generated, issued, and archived HR documents</p>
      </div>
      <button class="btn btn-primary" onclick="window.hrApp.navigate('generator')">
        + Generate New Document
      </button>
    </div>

    <!-- Search & Filters -->
    <div class="glass-card" style="margin-bottom: 20px; padding: 16px;">
      <div style="display: flex; gap: 15px; flex-wrap: wrap;">
        <input type="text" id="histSearchInput" class="form-control" placeholder="Search by doc number, employee name..." onkeyup="window.hrApp.filterHistoryTable()" style="flex: 1;">
        <select id="histCategorySelect" class="form-control" onchange="window.hrApp.filterHistoryTable()" style="width: 200px;">
          <option value="">All Categories</option>
          <option value="Onboarding">Onboarding</option>
          <option value="Recruitment">Recruitment</option>
          <option value="Salary">Salary</option>
          <option value="Certificates">Certificates</option>
          <option value="Exit">Exit</option>
        </select>
      </div>
    </div>

    <!-- Document History Data Table -->
    <div class="glass-card">
      <div class="table-responsive">
        <table class="data-table" id="historyDataTable">
          <thead>
            <tr>
              <th>Doc Serial Number</th>
              <th>Employee Name</th>
              <th>Document Title</th>
              <th>Category</th>
              <th>Date Issued</th>
              <th>Issued By</th>
              <th>Status</th>
              <th style="text-align: right;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${history.map(doc => `
              <tr class="hist-row" data-search="${doc.docNumber.toLowerCase()} ${doc.employeeName.toLowerCase()} ${doc.title.toLowerCase()}" data-cat="${doc.category}">
                <td><span style="font-family: monospace; color: var(--primary); font-weight: 600;">${doc.docNumber}</span></td>
                <td>
                  <strong>${doc.employeeName}</strong><br>
                  <small style="color: var(--text-muted);">${doc.employeeId}</small>
                </td>
                <td><strong>${doc.title}</strong></td>
                <td><span class="badge badge-primary">${doc.category}</span></td>
                <td><small>${doc.generatedDate}</small></td>
                <td>${doc.generatedBy}</td>
                <td><span class="badge badge-active">${doc.status || 'Finalized'}</span></td>
                <td style="text-align: right;">
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.navigate('generator', { employeeId: '${doc.employeeId}', overrideDocNumber: '${doc.docNumber}' })">
                    Re-Open & Print
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
