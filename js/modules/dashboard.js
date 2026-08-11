// Dashboard Module View (Updated with Ethics Code Quick Action)
import { store } from '../context.js';

export function renderDashboard() {
  const state = store.getState();
  const employees = state.employees || [];
  const history = state.history || [];
  const activeCount = employees.filter(e => e.employment?.status === 'Active').length;
  const probationCount = employees.filter(e => e.employment?.status === 'On Probation' || e.employment?.probationPeriodMonths > 0).length;

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>HR Dashboard</h1>
        <p class="page-subtitle">Welcome back, ${state.currentUser.name} (${state.currentUser.role}) • ${state.company.name}</p>
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn btn-primary" onclick="window.hrApp.navigate('generator')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
          Generate Document
        </button>
        <button class="btn btn-secondary" onclick="window.hrApp.openAddEmployeeModal()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
          Add Employee
        </button>
      </div>
    </div>

    <!-- Stat Cards Row -->
    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card">
        <div class="stat-icon-wrapper" style="background: rgba(99, 102, 241, 0.15); color: #818cf8;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        </div>
        <div>
          <div class="stat-value">${employees.length}</div>
          <div class="stat-label">Total Employees</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon-wrapper" style="background: rgba(16, 185, 129, 0.15); color: #34d399;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <div>
          <div class="stat-value">${activeCount}</div>
          <div class="stat-label">Active Staff</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon-wrapper" style="background: rgba(245, 158, 11, 0.15); color: #fbbf24;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        </div>
        <div>
          <div class="stat-value">${history.length}</div>
          <div class="stat-label">Documents Issued</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon-wrapper" style="background: rgba(139, 92, 246, 0.15); color: #a78bfa;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
        </div>
        <div>
          <div class="stat-value">${probationCount}</div>
          <div class="stat-label">Under Probation</div>
        </div>
      </div>
    </div>

    <!-- Quick Action Launchpad -->
    <div class="glass-card" style="margin-bottom: 25px;">
      <h3 style="margin-bottom: 15px; font-size: 1.1rem;">Quick Action Launchpad</h3>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <button class="btn btn-secondary" onclick="window.hrApp.navigate('generator', { templateId: 'TPL-ETHICS-01' })">
          📜 Code of Ethics Sign-Off
        </button>
        <button class="btn btn-secondary" onclick="window.hrApp.navigate('generator', { templateId: 'TPL-APPT-01' })">
          📄 Generate Appointment Letter
        </button>
        <button class="btn btn-secondary" onclick="window.hrApp.navigate('generator', { templateId: 'TPL-OFFER-01' })">
          ✉️ Generate Offer Letter
        </button>
        <button class="btn btn-secondary" onclick="window.hrApp.navigate('generator', { templateId: 'TPL-INCR-01' })">
          📈 Generate Increment Letter
        </button>
        <button class="btn btn-secondary" onclick="window.hrApp.navigate('generator', { templateId: 'TPL-EXP-01' })">
          🎖️ Experience Certificate
        </button>
        <button class="btn btn-secondary" onclick="window.hrApp.navigate('employees')">
          👥 Employee Directory
        </button>
        <button class="btn btn-secondary" onclick="window.hrApp.navigate('history')">
          📜 Document Vault
        </button>
      </div>
    </div>

    <!-- Dashboard Content Split -->
    <div class="grid-2">
      <!-- Recent Document Activity Stream -->
      <div class="glass-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
          <h3 style="font-size: 1.1rem;">Recent Document Generations</h3>
          <a href="#" onclick="window.hrApp.navigate('history'); return false;" style="font-size: 0.85rem;">View All Vault</a>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Doc Serial Number</th>
                <th>Employee</th>
                <th>Document Title</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              ${history.slice(0, 5).map(doc => `
                <tr>
                  <td><span style="font-family: monospace; color: var(--primary); font-weight: 600;">${doc.docNumber}</span></td>
                  <td><strong>${doc.employeeName}</strong><br><small style="color: var(--text-muted);">${doc.employeeId}</small></td>
                  <td><span class="badge badge-primary">${doc.title}</span></td>
                  <td><small>${doc.generatedDate}</small></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Quick Employee Roster -->
      <div class="glass-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
          <h3 style="font-size: 1.1rem;">Recent Employee Master</h3>
          <a href="#" onclick="window.hrApp.navigate('employees'); return false;" style="font-size: 0.85rem;">Manage Employees</a>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${employees.slice(0, 4).map(emp => `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div class="avatar-badge" style="width: 34px; height: 34px; font-size: 0.8rem;">
                  ${emp.firstName[0]}${emp.lastName[0]}
                </div>
                <div>
                  <strong style="font-size: 0.9rem;">${emp.fullName}</strong>
                  <div style="font-size: 0.78rem; color: var(--text-muted);">${emp.employment.designation} • ${emp.employment.department}</div>
                </div>
              </div>
              <button class="btn btn-sm btn-secondary" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}' })">
                View Profile
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
