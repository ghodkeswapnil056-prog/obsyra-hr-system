// Gemini AI Voice & Chat Assistant Floating Widget for Obsyra HRMS
export function renderAICopilotWidget() {
  return `
    <!-- Floating AI Assistant Trigger Button -->
    <button id="aiCopilotTrigger" class="ai-copilot-trigger" onclick="window.toggleAICopilotModal()" title="Ask Gemini AI HR Copilot">
      <span class="ai-pulse-dot"></span>
      🤖 Ask Gemini AI
    </button>

    <!-- AI Copilot Glassmorphism Chat Modal -->
    <div id="aiCopilotModalOverlay" class="modal-overlay" style="display: none; z-index: 10002; background: rgba(15, 23, 42, 0.75); backdrop-filter: blur(12px); align-items: flex-end; justify-content: flex-end; padding: 25px;">
      <div class="glass-card" style="width: 420px; max-width: 95vw; height: 580px; max-height: 85vh; border-radius: 20px; display: flex; flex-direction: column; border: 1px solid rgba(99, 102, 241, 0.4); background: rgba(30, 41, 59, 0.96); box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
        
        <!-- Modal Header -->
        <div style="padding: 16px 20px; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; background: rgba(99, 102, 241, 0.12); border-radius: 20px 20px 0 0;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 36px; height: 36px; border-radius: 10px; background: var(--primary-gradient); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">🤖</div>
            <div>
              <strong style="color: white; font-size: 1rem; display: block;">Gemini AI HR Copilot</strong>
              <small style="color: #60a5fa; font-size: 0.72rem; font-weight: 600;">⚡ Powered by Google Gemini 1.5 Pro</small>
            </div>
          </div>
          <button onclick="window.toggleAICopilotModal()" style="background: none; border: none; color: var(--text-muted); font-size: 1.4rem; cursor: pointer;">✕</button>
        </div>

        <!-- Chat Output Stream -->
        <div id="aiChatStream" style="flex: 1; padding: 16px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; font-size: 0.85rem;">
          <div class="ai-msg-box" style="background: rgba(99, 102, 241, 0.12); border: 1px solid rgba(99, 102, 241, 0.25); padding: 12px 14px; border-radius: 12px; color: var(--text-main);">
            👋 Hello! I am your <strong>Obsyra Gemini AI Copilot</strong>. How can I help you today?
            <div style="margin-top: 8px; display: flex; flex-wrap: wrap; gap: 6px;">
              <button class="btn btn-xs btn-secondary" onclick="window.askAICopilotPrompt('How many hardware assets are currently assigned?')">💻 Active Assets?</button>
              <button class="btn btn-xs btn-secondary" onclick="window.askAICopilotPrompt('Calculate total monthly gross payroll output')">💰 Payroll Summary?</button>
              <button class="btn btn-xs btn-secondary" onclick="window.askAICopilotPrompt('Draft a 3-day paternity leave approval email')">📄 Draft Leave Email?</button>
            </div>
          </div>
        </div>

        <!-- Input Box & Actions -->
        <div style="padding: 14px 16px; border-top: 1px solid var(--border-color); background: rgba(15, 23, 42, 0.6); border-radius: 0 0 20px 20px;">
          <form onsubmit="window.handleAICopilotSubmit(event)" style="display: flex; gap: 8px;">
            <input type="text" id="aiChatInput" placeholder="Ask Gemini AI policy, payroll, assets..." class="form-control" style="flex: 1; font-size: 0.85rem; padding: 10px 14px; border-radius: 10px;" required>
            <button type="submit" class="btn btn-primary" style="padding: 0 16px; border-radius: 10px;">Send</button>
          </form>
        </div>

      </div>
    </div>
  `;
}
