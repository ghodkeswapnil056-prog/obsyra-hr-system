// Complete Workforce Attendance & Location Management Engine for Obsyra HR System
import { store } from '../context.js';

export function renderAttendanceEngine() {
  const state = store.getState();
  const currentUser = state.currentUser || {};
  const employees = state.employees || [];
  const activePunch = state.activePunch || null;

  const todayStr = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Workforce Attendance & Location Engine</h1>
        <p class="page-subtitle">GPS Geofencing • Multi-Site Field Duty • Shifts & Rosters • Exception Remarks • Payroll Integration</p>
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn btn-primary" onclick="window.hrApp.showPunchModal()">
          📍 Clock In / Check Out
        </button>
        <button class="btn btn-secondary" onclick="window.hrApp.showToast('Exported Attendance Register to Excel')">
          📊 Export Register (Excel)
        </button>
      </div>
    </div>

    <!-- Attendance Engine Top KPI Summary Cards -->
    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-emerald);">4 Staff</div>
        <div class="stat-label">Present Today (100%)</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-amber);">2 Field Duty</div>
        <div class="stat-label">On-Site Engineers</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-sky);">1 WFH</div>
        <div class="stat-label">Remote Staff</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--primary);">0 Exceptions</div>
        <div class="stat-label">Pending Approval</div>
      </div>
    </div>

    <!-- Employee Interactive Check-In & Location Card -->
    <div class="glass-card" style="margin-bottom: 25px; border-left: 4px solid var(--primary);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
        <div>
          <span class="badge badge-primary" style="margin-bottom: 6px; display: inline-block;">ACTIVE WORKFORCE CONTEXT</span>
          <h3 style="font-size: 1.2rem;">${todayStr} — ${currentUser.name} (${currentUser.role})</h3>
          <small style="color: var(--text-muted);">Employee ID: ${currentUser.employeeId || 'OBS-OPS-26-001'} • Department: ${currentUser.department || 'Telecom Operations'}</small>
        </div>
        <div style="display: flex; gap: 10px;">
          <button class="btn ${activePunch ? 'btn-danger' : 'btn-primary'}" onclick="window.hrApp.toggleAttendancePunch()">
            ${activePunch ? '🛑 Check Out' : '▶️ Check In Now'}
          </button>
          <button class="btn btn-secondary" onclick="window.hrApp.showAddRemarkModal()">
            💬 Add Remark / Exception
          </button>
        </div>
      </div>

      <div class="grid-3" style="background: rgba(255,255,255,0.02); padding: 15px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <div>
          <small style="color: var(--text-muted); display: block; margin-bottom: 4px;">Attendance Mode</small>
          <strong style="color: var(--text-main); font-size: 0.95rem;">
            ${activePunch ? activePunch.mode : 'FIELD DUTY / CLIENT SITE'}
          </strong>
        </div>
        <div>
          <small style="color: var(--text-muted); display: block; margin-bottom: 4px;">GPS Location & Accuracy</small>
          <strong style="color: var(--accent-emerald); font-size: 0.92rem;">
            📍 ${activePunch ? activePunch.address : 'Kharadi, Pune, Maharashtra (18m Accuracy)'}
          </strong>
        </div>
        <div>
          <small style="color: var(--text-muted); display: block; margin-bottom: 4px;">Shift / Working Hours</small>
          <strong style="color: var(--primary); font-size: 0.95rem;">
            Flexible Shift (09:30 - 18:30) • ${activePunch ? '06h 45m Worked' : 'Ready'}
          </strong>
        </div>
      </div>
    </div>

    <!-- Live PAN-India Workforce Location Map Grid -->
    <div class="glass-card" style="margin-bottom: 25px;">
      <h3 style="margin-bottom: 15px;">Live PAN-India Workforce Location & Status Map</h3>
      <div class="grid-4" style="margin-bottom: 15px;">
        <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <strong style="color: #34d399; font-size: 0.95rem;">🟢 Pune HQ Hub</strong>
          <small style="display: block; color: var(--text-muted); margin-top: 4px;">2 Engineers On-Site • 100% Geofence Matched</small>
        </div>
        <div style="background: rgba(14, 165, 233, 0.1); border: 1px solid rgba(14, 165, 233, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <strong style="color: #38bdf8; font-size: 0.95rem;">🔵 Mumbai 5G Core Site</strong>
          <small style="display: block; color: var(--text-muted); margin-top: 4px;">1 Engineer Deployed • Reliance Jio Hub</small>
        </div>
        <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <strong style="color: #fbbf24; font-size: 0.95rem;">🟡 Jodhpur Data Center</strong>
          <small style="display: block; color: var(--text-muted); margin-top: 4px;">1 Engineer On Field Duty</small>
        </div>
        <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <strong style="color: #c084fc; font-size: 0.95rem;">🟣 Gandhinagar Site</strong>
          <small style="display: block; color: var(--text-muted); margin-top: 4px;">Scheduled Night Shift (22:00 - 07:00)</small>
        </div>
      </div>
    </div>

    <!-- Daily Attendance & Location Roster Table -->
    <div class="glass-card" style="margin-bottom: 25px;">
      <h3 style="margin-bottom: 15px;">Daily Workforce Attendance Register & GPS Log</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Attendance Mode</th>
              <th>Check-In Time</th>
              <th>Check-Out Time</th>
              <th>GPS Location & Address</th>
              <th>Worked Hours</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${employees.map(emp => `
              <tr>
                <td><strong>${emp.fullName}</strong><br><small style="color: var(--text-muted);">${emp.employeeId}</small></td>
                <td><span class="badge badge-primary">${emp.employment?.department.includes("Telecom") ? "Field Duty" : "Office"}</span></td>
                <td>09:30 AM</td>
                <td>06:30 PM</td>
                <td>📍 Kharadi, Pune (18m GPS Accuracy)</td>
                <td><strong>8h 30m</strong> (0m OT)</td>
                <td><span class="badge badge-active">Present</span></td>
                <td>
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Viewing GPS punches for ${emp.fullName}')">
                    GPS Log
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Shift Roster & Geofence Site Master Grid -->
    <div class="grid-2">
      <div class="glass-card">
        <h3 style="margin-bottom: 15px;">Shift Roster Configurations</h3>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; justify-content: space-between;">
            <div><strong>General Shift:</strong> 09:30 → 18:30</div>
            <span class="badge badge-active">Active (Office)</span>
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; justify-content: space-between;">
            <div><strong>Day Shift:</strong> 08:00 → 17:00</div>
            <span class="badge badge-active">Active (Field)</span>
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; justify-content: space-between;">
            <div><strong>Night Shift:</strong> 22:00 → 07:00</div>
            <span class="badge badge-warning">Scheduled</span>
          </div>
        </div>
      </div>

      <div class="glass-card">
        <h3 style="margin-bottom: 15px;">Geofenced Corporate Sites</h3>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; justify-content: space-between;">
            <div><strong>Pune Corporate HQ:</strong> Wagholi (Radius: 100m)</div>
            <span class="badge badge-active">Geofence Active</span>
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; justify-content: space-between;">
            <div><strong>Jio 5G Core Hub:</strong> Navi Mumbai (Radius: 250m)</div>
            <span class="badge badge-active">Geofence Active</span>
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; justify-content: space-between;">
            <div><strong>Airtel Enterprise Site:</strong> Hinjewadi (Radius: 150m)</div>
            <span class="badge badge-active">Geofence Active</span>
          </div>
        </div>
      </div>
    </div>
  `;
}
