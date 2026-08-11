// Template Manager & Editor Module View
import { store } from '../context.js';

export function renderTemplates() {
  const state = store.getState();
  const templates = state.templates || [];
  const selectedId = state.viewParams.templateId || templates[0]?.id;
  const currentTpl = templates.find(t => t.id === selectedId) || templates[0];

  const availableVars = [
    '{{employee_name}}', '{{first_name}}', '{{employee_id}}', '{{gender_prefix}}',
    '{{designation}}', '{{department}}', '{{date_of_joining}}', '{{work_location}}',
    '{{reporting_manager}}', '{{basic_monthly}}', '{{hra_monthly}}', '{{gross_monthly}}',
    '{{ctc_annual}}', '{{ctc_words}}', '{{doc_number}}', '{{issue_date}}',
    '{{effective_date}}', '{{company_name}}', '{{company_address}}', '{{authorized_signatory}}'
  ];

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>HR Template Manager</h1>
        <p class="page-subtitle">Create, customize, and edit dynamic document templates using {{variables}}</p>
      </div>
      <button class="btn btn-primary" onclick="window.hrApp.createNewTemplate()">
        + Create New Template
      </button>
    </div>

    <div class="grid-2" style="grid-template-columns: 320px 1fr;">
      <!-- Template Library Navigation -->
      <div class="glass-card">
        <h3 style="font-size: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 15px;">Template Library</h3>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${templates.map(t => `
            <div onclick="window.hrApp.navigate('templates', { templateId: '${t.id}' })" style="padding: 12px; border-radius: var(--radius-md); border: 1px solid ${t.id === currentTpl?.id ? 'var(--primary)' : 'var(--border-color)'}; background: ${t.id === currentTpl?.id ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255,255,255,0.02)'}; cursor: pointer; transition: var(--transition);">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <strong style="font-size: 0.9rem; color: ${t.id === currentTpl?.id ? 'var(--primary)' : 'var(--text-main)'}">${t.name}</strong>
                <span class="badge badge-primary" style="font-size: 0.65rem;">${t.code}</span>
              </div>
              <small style="color: var(--text-muted); display: block; margin-top: 4px;">Category: ${t.category}</small>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Live Template Editor -->
      <div class="glass-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
          <h3 style="font-size: 1.1rem;">Template Editor: ${currentTpl?.name}</h3>
          <button class="btn btn-primary btn-sm" onclick="window.hrApp.saveTemplateChanges('${currentTpl?.id}')">
            💾 Save Template
          </button>
        </div>

        <div class="grid-2">
          <div class="form-group">
            <label class="form-label">Template Name</label>
            <input type="text" id="tplEditName" class="form-control" value="${currentTpl?.name || ''}">
          </div>
          <div class="form-group">
            <label class="form-label">Category</label>
            <select id="tplEditCategory" class="form-control">
              <option value="Recruitment" ${currentTpl?.category === 'Recruitment' ? 'selected' : ''}>Recruitment</option>
              <option value="Onboarding" ${currentTpl?.category === 'Onboarding' ? 'selected' : ''}>Onboarding</option>
              <option value="Employment" ${currentTpl?.category === 'Employment' ? 'selected' : ''}>Employment</option>
              <option value="Salary" ${currentTpl?.category === 'Salary' ? 'selected' : ''}>Salary</option>
              <option value="Performance" ${currentTpl?.category === 'Performance' ? 'selected' : ''}>Performance</option>
              <option value="Exit" ${currentTpl?.category === 'Exit' ? 'selected' : ''}>Exit</option>
              <option value="Certificates" ${currentTpl?.category === 'Certificates' ? 'selected' : ''}>Certificates</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Available Variable Tags (Click tag to insert into content)</label>
          <div class="variable-chips-container">
            ${availableVars.map(v => `
              <span class="var-chip" onclick="window.hrApp.insertVariableToTemplate('${v}')">${v}</span>
            `).join('')}
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">HTML Letter Body Code</label>
          <textarea id="tplEditBody" class="form-control" style="font-family: monospace; font-size: 0.85rem; height: 350px;">${currentTpl?.body || ''}</textarea>
        </div>
      </div>
    </div>
  `;
}
