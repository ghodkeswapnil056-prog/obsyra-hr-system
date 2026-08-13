// Interactive Google Maps Field Workforce & Geofence Map Component
export function renderGoogleMapsWidget() {
  return `
    <div class="glass-card" style="margin-bottom: 25px; border-left: 4px solid var(--accent-sky);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
        <div>
          <h3 style="color: white; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="color: var(--accent-sky);"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            PAN-India Live Field Operations & Geofence GPS Map
          </h3>
          <span style="font-size: 0.78rem; color: var(--text-muted);">Real-time site coordinate pins & 200m geofence radius verification</span>
        </div>
        <div style="display: flex; gap: 8px;">
          <span class="badge badge-active" style="background: rgba(14, 165, 233, 0.2); color: #38bdf8; border: 1px solid rgba(14, 165, 233, 0.4);">
            ⚡ Powered by Google Maps Platform
          </span>
        </div>
      </div>

      <!-- Dark Mode Simulated Google Maps Canvas -->
      <div style="position: relative; width: 100%; height: 280px; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-color); background: #0f172a; display: flex; align-items: center; justify-content: center;">
        
        <!-- Map Grid Lines Overlay -->
        <div style="position: absolute; inset: 0; background-image: radial-gradient(rgba(56, 189, 248, 0.15) 1px, transparent 0); background-size: 24px 24px;"></div>
        
        <!-- Live Map Pins -->
        <!-- Site 1: Pune HQ -->
        <div style="position: absolute; top: 38%; left: 32%; display: flex; flex-direction: column; align-items: center; cursor: pointer;" onclick="window.hrApp.showToast('📍 Selected Location: Pune Wagholi HQ (18.5529° N, 73.9468° E)')">
          <div style="width: 24px; height: 24px; border-radius: 9999px; background: rgba(99, 102, 241, 0.3); border: 2px solid var(--primary); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 15px var(--primary); animation: pulse 2s infinite;">
            <div style="width: 10px; height: 10px; border-radius: 9999px; background: var(--primary);"></div>
          </div>
          <span style="background: rgba(15, 23, 42, 0.9); color: white; border: 1px solid var(--border-color); padding: 3px 8px; border-radius: 6px; font-size: 0.72rem; font-weight: 700; margin-top: 4px; white-space: nowrap;">📍 Pune HQ (145 Active)</span>
        </div>

        <!-- Site 2: Kharadi Site -->
        <div style="position: absolute; top: 46%; left: 45%; display: flex; flex-direction: column; align-items: center; cursor: pointer;" onclick="window.hrApp.showToast('📍 Selected Location: Kharadi Site Pune (18.5512° N, 73.9389° E)')">
          <div style="width: 20px; height: 20px; border-radius: 9999px; background: rgba(16, 185, 129, 0.3); border: 2px solid var(--accent-teal); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 12px var(--accent-teal);">
            <div style="width: 8px; height: 8px; border-radius: 9999px; background: var(--accent-teal);"></div>
          </div>
          <span style="background: rgba(15, 23, 42, 0.9); color: #34d399; border: 1px solid var(--border-color); padding: 3px 8px; border-radius: 6px; font-size: 0.72rem; font-weight: 700; margin-top: 4px; white-space: nowrap;">📍 Kharadi (84 Field Staff)</span>
        </div>

        <!-- Site 3: Navi Mumbai 5G Core Hub -->
        <div style="position: absolute; top: 25%; left: 62%; display: flex; flex-direction: column; align-items: center; cursor: pointer;" onclick="window.hrApp.showToast('📍 Selected Location: Navi Mumbai 5G Core Hub (19.0760° N, 72.8777° E)')">
          <div style="width: 20px; height: 20px; border-radius: 9999px; background: rgba(14, 165, 233, 0.3); border: 2px solid var(--accent-sky); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 12px var(--accent-sky);">
            <div style="width: 8px; height: 8px; border-radius: 9999px; background: var(--accent-sky);"></div>
          </div>
          <span style="background: rgba(15, 23, 42, 0.9); color: #38bdf8; border: 1px solid var(--border-color); padding: 3px 8px; border-radius: 6px; font-size: 0.72rem; font-weight: 700; margin-top: 4px; white-space: nowrap;">📡 Mumbai 5G Core (42 Engineers)</span>
        </div>

        <div style="position: absolute; bottom: 12px; left: 12px; background: rgba(15, 23, 42, 0.85); border: 1px solid var(--border-color); padding: 8px 12px; border-radius: 8px; font-size: 0.75rem; color: var(--text-muted);">
          📍 <strong>Active Geo-Fence Zone:</strong> 200 Meters Radius Verified • GPS High Accuracy Active
        </div>
      </div>
    </div>
  `;
}
