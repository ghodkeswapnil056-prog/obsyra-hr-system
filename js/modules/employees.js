// Employee Master Module View
import { store } from '../context.js';

export function renderEmployees() {
  const state = store.getState();
  const employees = state.employees || [];

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Employee Master</h1>
        <p class="page-subtitle">Central source of truth for all employee profiles & digital HR files</p>
      </div>
      <button class="btn btn-primary" onclick="window.hrApp.openAddEmployeeModal()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
        Add New Employee
      </button>
    </div>

    <!-- Filter & Search Controls -->
    <div class="glass-card" style="margin-bottom: 20px; padding: 16px;">
      <div style="display: flex; gap: 15px; flex-wrap: wrap; align-items: center; justify-content: space-between;">
        <div style="display: flex; gap: 12px; flex: 1; min-width: 300px;">
          <input type="text" id="empSearchInput" class="form-control" placeholder="Search by name, ID, designation, email..." onkeyup="window.hrApp.filterEmployeesTable()" style="flex: 1;">
          <select id="deptFilterSelect" class="form-control" onchange="window.hrApp.filterEmployeesTable()" style="width: 200px;">
            <option value="">All Departments</option>
            <option value="IT & Operations">IT & Operations</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Finance & Accounts">Finance & Accounts</option>
          </select>
        </div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">
          Showing <strong id="empCountLabel" style="color: var(--text-main);">${employees.length}</strong> Employees
        </div>
      </div>
    </div>

    <!-- Employee Master Data Table -->
    <div class="glass-card">
      <div class="table-responsive">
        <table class="data-table" id="employeeDataTable">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Date of Joining</th>
              <th>Annual CTC</th>
              <th>Status</th>
              <th style="text-align: right;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${employees.map(emp => `
              <tr class="emp-row" data-name="${emp.fullName.toLowerCase()}" data-id="${emp.employeeId.toLowerCase()}" data-dept="${emp.employment.department}">
                <td><span style="font-family: monospace; font-weight: 600; color: var(--primary);">${emp.employeeId}</span></td>
                <td>
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <div class="avatar-badge" style="width: 32px; height: 32px; font-size: 0.75rem;">
                      ${emp.firstName[0]}${emp.lastName[0]}
                    </div>
                    <div>
                      <strong>${emp.fullName}</strong><br>
                      <small style="color: var(--text-muted);">${emp.email}</small>
                    </div>
                  </div>
                </td>
                <td>${emp.employment.department}</td>
                <td>${emp.employment.designation}</td>
                <td><small>${emp.employment.dateOfJoining}</small></td>
                <td><strong>₹ ${(emp.salary?.ctcAnnual || 0).toLocaleString('en-IN')}</strong></td>
                <td><span class="badge badge-active">${emp.employment.status}</span></td>
                <td style="text-align: right;">
                  <div style="display: flex; gap: 6px; justify-content: flex-end;">
                    <button class="btn btn-sm btn-secondary" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}' })">
                      Profile
                    </button>
                    <button class="btn btn-sm btn-primary" onclick="window.hrApp.navigate('generator', { employeeId: '${emp.id}' })">
                      Generate Letter
                    </button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
