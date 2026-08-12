// Project & Manpower Deployment Module (Telecom Core, 5G Testing, IT & Infrastructure)
import { store } from '../context.js';

export function renderProjects() {
  const state = store.getState();
  const employees = state.employees || [];

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Project & Manpower Deployments</h1>
        <p class="page-subtitle">Track client sites, 5G core testing projects, field deployment allocation & site timesheets</p>
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn btn-primary" onclick="window.hrApp.showToast('Initiated New Project Deployment modal')">
          🏗️ + Create Project Deployment
        </button>
        <button class="btn btn-secondary" onclick="window.hrApp.showToast('Exported Deployment Schedule to Excel')">
          📊 Export Site Roster
        </button>
      </div>
    </div>

    <!-- Top Project Deployment KPI Cards -->
    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card">
        <div class="stat-value">5 Client Sites</div>
        <div class="stat-label">Active Deployments</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-emerald);">4 Staff</div>
        <div class="stat-label">Deployed Field Engineers</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-teal);">98.4%</div>
        <div class="stat-label">SLA Execution Rate</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--primary);">PAN India</div>
        <div class="stat-label">Service Reach</div>
      </div>
    </div>

    <!-- Active Client Projects Grid -->
    <div class="grid-2" style="margin-bottom: 25px;">
      <div class="glass-card" style="border-left: 4px solid var(--primary);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
          <div>
            <span class="badge badge-primary" style="margin-bottom: 6px; display: inline-block;">TELECOM 5G CORE</span>
            <h3 style="font-size: 1.15rem;">Reliance Jio 5G Core Network Testing & Drive Audit</h3>
            <small style="color: var(--text-muted);">Client: Reliance Jio Infocomm Ltd • Location: Pune & Mumbai Hubs</small>
          </div>
          <span class="badge badge-active">Active Site</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 15px;">
          Deployment of specialized testing teams for 5G standalone core integration, rack mounting validation, throughput optimization, and site clearance.
        </p>
        <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; justify-content: space-between; font-size: 0.82rem;">
          <div><strong>Lead Specialist:</strong> Swapnil Ghodke</div>
          <div><strong>Engineers Deployed:</strong> 2 Staff</div>
          <div><strong>Site Shift:</strong> Day Roster (09:00 - 18:00)</div>
        </div>
      </div>

      <div class="glass-card" style="border-left: 4px solid var(--accent-teal);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
          <div>
            <span class="badge badge-secondary" style="margin-bottom: 6px; display: inline-block; background: rgba(20, 184, 166, 0.15); color: #2dd4bf;">IT INFRASTRUCTURE</span>
            <h3 style="font-size: 1.15rem;">Airtel Enterprise Rack & Server Decommissioning</h3>
            <small style="color: var(--text-muted);">Client: Bharti Airtel Ltd • Location: Hinjewadi IT Park, Pune</small>
          </div>
          <span class="badge badge-active">Active Site</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 15px;">
          Complete site clearance, fiber patch panel labeling, hardware rack decommissioning, and asset audit logging across data center facilities.
        </p>
        <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; justify-content: space-between; font-size: 0.82rem;">
          <div><strong>Lead Specialist:</strong> Rahul Sharma</div>
          <div><strong>Engineers Deployed:</strong> 2 Staff</div>
          <div><strong>Site Shift:</strong> Night Roster (22:00 - 06:00)</div>
        </div>
      </div>
    </div>

    <!-- Employee Site Deployment Assignment Table -->
    <div class="glass-card">
      <h3 style="margin-bottom: 15px;">Field Engineer & Site Assignment Roster</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Designation</th>
              <th>Assigned Client & Site</th>
              <th>Deployment Role</th>
              <th>Start Date</th>
              <th>Shift & Accommodation</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${employees.map(emp => `
              <tr>
                <td><strong>${emp.fullName}</strong><br><small style="color: var(--text-muted);">${emp.employeeId}</small></td>
                <td>${emp.employment?.designation}</td>
                <td><strong>${emp.employment?.department.includes("Telecom") ? "Reliance Jio 5G Core Hub" : "Airtel Enterprise Data Center"}</strong></td>
                <td>${emp.employment?.designation.includes("Manager") ? "Site Supervisor" : "Deployment Engineer"}</td>
                <td>${emp.employment?.dateOfJoining}</td>
                <td>General Shift (Company Transit Provided)</td>
                <td><span class="badge badge-active">Deployed On-Site</span></td>
                <td>
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Viewing deployment details for ${emp.fullName}')">
                    View Site Assignment
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
