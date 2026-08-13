// Real-Time Notification & Pending Approvals Drawer Component
export function renderNotificationDrawer() {
  return `
    <!-- Notifications Bell Icon Widget in Navbar -->
    <button id="notificationBellBtn" class="btn btn-secondary" onclick="window.toggleNotificationDrawer()" title="View Notifications & Approvals" style="position: relative; padding: 8px 12px; font-weight: 600;">
      🔔 <span style="background: var(--accent-rose); color: white; border-radius: 9999px; padding: 2px 6px; font-size: 0.7rem; position: absolute; top: -4px; right: -4px; font-weight: 800;" id="unreadNotifCount">3</span>
    </button>

    <!-- Slide-Out Notification Drawer -->
    <div id="notificationDrawerOverlay" class="modal-overlay" style="display: none; z-index: 10002; background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(8px); justify-content: flex-end; align-items: stretch;">
      <div class="glass-card" style="width: 380px; max-width: 90vw; height: 100vh; border-radius: 0; border-left: 1px solid var(--border-color-light); background: rgba(30, 41, 59, 0.98); display: flex; flex-direction: column; padding: 0;">
        
        <!-- Header -->
        <div style="padding: 20px; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; background: rgba(15, 23, 42, 0.5);">
          <div>
            <h3 style="color: white; font-size: 1.1rem; margin-bottom: 2px;">🔔 Notifications & Action Center</h3>
            <span style="font-size: 0.78rem; color: var(--text-muted);">Real-time pending HR approvals & system alerts</span>
          </div>
          <button onclick="window.toggleNotificationDrawer()" style="background: none; border: none; color: var(--text-muted); font-size: 1.4rem; cursor: pointer;">✕</button>
        </div>

        <!-- Notification List -->
        <div style="flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 14px;">
          
          <!-- Item 1 -->
          <div style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid var(--accent-amber); padding: 12px 14px; border-radius: var(--radius-sm);">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <strong style="font-size: 0.85rem; color: #fbbf24;">💻 Asset Transfer Request</strong>
              <small style="color: var(--text-muted); font-size: 0.7rem;">10m ago</small>
            </div>
            <p style="font-size: 0.8rem; color: var(--text-main); margin-bottom: 8px;">Dell Latitude 5440 i7 transfer request from Rahul Sharma to Swapnil Ghodke.</p>
            <div style="display: flex; gap: 6px;">
              <button class="btn btn-xs btn-primary" onclick="window.hrApp.showToast('✅ Approved Asset Transfer Request'); this.parentElement.parentElement.style.opacity='0.5';">Approve</button>
              <button class="btn btn-xs btn-secondary" onclick="window.hrApp.showToast('Rejected Request'); this.parentElement.parentElement.style.display='none';">Decline</button>
            </div>
          </div>

          <!-- Item 2 -->
          <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid var(--accent-emerald); padding: 12px 14px; border-radius: var(--radius-sm);">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <strong style="font-size: 0.85rem; color: #34d399;">📍 Mobile Attendance Punch</strong>
              <small style="color: var(--text-muted); font-size: 0.7rem;">25m ago</small>
            </div>
            <p style="font-size: 0.8rem; color: var(--text-main); margin-bottom: 4px;">Swapnil Ghodke punched IN from Wagholi HQ Geofence (18.5529° N, 73.9468° E).</p>
            <span class="badge badge-active" style="font-size: 0.7rem;">Geo-Fence Verified</span>
          </div>

          <!-- Item 3 -->
          <div style="background: rgba(14, 165, 233, 0.1); border-left: 4px solid var(--accent-sky); padding: 12px 14px; border-radius: var(--radius-sm);">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <strong style="font-size: 0.85rem; color: #38bdf8;">📑 No Dues Clearance Signed</strong>
              <small style="color: var(--text-muted); font-size: 0.7rem;">1h ago</small>
            </div>
            <p style="font-size: 0.8rem; color: var(--text-main);">IT & Finance clearance certificate approved for doc TPL-REL-01.</p>
          </div>

        </div>

      </div>
    </div>
  `;
}
