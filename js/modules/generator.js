// Enhanced Document Generator View (Responsive Layout & View Mode Switcher)
import { store } from '../context.js';
import { compileTemplate } from '../engine/templateEngine.js';
import { generateNextDocNumber } from '../engine/serialEngine.js';

export function renderGenerator() {
  const state = store.getState();
  const employees = state.employees || [];
  const templates = state.templates || [];
  const company = state.company;

  // Selected parameters from params or default to first
  const selectedEmpId = state.viewParams.employeeId || (employees[0]?.id);
  const selectedTplId = state.viewParams.templateId || (templates[0]?.id);

  const selectedEmp = employees.find(e => e.id === selectedEmpId || e.employeeId === selectedEmpId) || employees[0];
  const selectedTpl = templates.find(t => t.id === selectedTplId || t.code === selectedTplId) || templates[0];

  // View Mode: 'split' (default), '3col', 'paper', 'form'
  const viewMode = state.viewParams.viewMode || 'split';
  const activeTab = state.viewParams.activeTab || 'settings'; // 'settings' or 'fields'
  const paperZoom = state.viewParams.paperZoom || 100; // 75, 90, 100, 110, 120

  // Default dates
  const defaultIssueDate = new Date().toISOString().split('T')[0];
  const defaultJoiningDate = selectedEmp?.employment?.dateOfJoining || defaultIssueDate;
  const defaultAcceptanceDeadline = new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0];
  const defaultExpiryDate = new Date(Date.now() + 10 * 86400000).toISOString().split('T')[0];

  // Auto-generate serial number
  const serialObj = generateNextDocNumber(selectedTpl?.code, company);

  // Dynamic default subject line based on template code
  const defaultSubjectLine = selectedTpl?.code === 'OFFER' ? `Employment Offer for Position of ${selectedEmp?.employment?.designation}` :
    selectedTpl?.code === 'APPT' ? `Appointment Letter as ${selectedEmp?.employment?.designation}` :
    selectedTpl?.code === 'INCR' ? `Salary Revision & Increment Confirmation` :
    selectedTpl?.code === 'PROM' ? `Promotion to ${selectedEmp?.employment?.designation}` :
    selectedTpl?.code === 'WARN' ? `Official Warning Letter & PIP Notice` :
    selectedTpl?.code === 'TERM' ? `Notice of Termination of Employment` :
    selectedTpl?.code === 'CONF' ? `Employment Confirmation Letter` :
    selectedTpl?.code === 'TRANS' ? `Office Location Transfer Order` :
    selectedTpl?.code === 'REL' ? `Relieving Order & Service Release` :
    selectedTpl?.code === 'ETHICS' ? `Code of Business Conduct & Ethics Policy` :
    selectedTpl?.code === 'NDA' ? `Non-Disclosure & Confidentiality Agreement` :
    selectedTpl?.code === 'EXP' ? `Experience Certificate` :
    `${selectedTpl?.name} — ${selectedEmp?.fullName}`;

  // Field Overrides & Section Toggles State
  const overrides = {
    docNumber: state.viewParams.docNumber || serialObj.docNumber,
    issueDate: state.viewParams.issueDate || defaultIssueDate,
    candidateName: state.viewParams.candidateName !== undefined ? state.viewParams.candidateName : selectedEmp?.fullName,
    candidateEmail: state.viewParams.candidateEmail !== undefined ? state.viewParams.candidateEmail : selectedEmp?.email,
    candidateMobile: state.viewParams.candidateMobile !== undefined ? state.viewParams.candidateMobile : selectedEmp?.mobile,
    candidateAddress: state.viewParams.candidateAddress !== undefined ? state.viewParams.candidateAddress : selectedEmp?.address,
    designation: state.viewParams.designation !== undefined ? state.viewParams.designation : selectedEmp?.employment?.designation,
    department: state.viewParams.department !== undefined ? state.viewParams.department : selectedEmp?.employment?.department,
    jobGrade: state.viewParams.jobGrade || "Grade L4 - Mid Senior",
    employmentLevel: state.viewParams.employmentLevel || "Level M2 - Management",
    employmentType: state.viewParams.employmentType || selectedEmp?.employment?.employmentType || "Full-Time Permanent",
    workLocation: state.viewParams.workLocation || selectedEmp?.employment?.workLocation || company.corporateAddress,
    reportingManager: state.viewParams.reportingManager || selectedEmp?.employment?.reportingManager || "Avinash Dagdu Aade (Director)",
    joiningDate: state.viewParams.joiningDate || defaultJoiningDate,
    joiningTime: state.viewParams.joiningTime || "9:30 AM",
    probationPeriod: state.viewParams.probationPeriod || `${selectedEmp?.employment?.probationPeriodMonths || 6} Months`,
    noticePeriod: state.viewParams.noticePeriod || "30 Days (1 Month)",
    workingHours: state.viewParams.workingHours || "9:30 AM – 6:30 PM",
    workingDays: state.viewParams.workingDays || "Monday – Saturday",
    basicSalary: state.viewParams.basicSalary !== undefined ? state.viewParams.basicSalary : selectedEmp?.salary?.basic,
    hraSalary: state.viewParams.hraSalary !== undefined ? state.viewParams.hraSalary : selectedEmp?.salary?.hra,
    grossSalary: state.viewParams.grossSalary !== undefined ? state.viewParams.grossSalary : selectedEmp?.salary?.grossMonthly,
    annualCtc: state.viewParams.annualCtc !== undefined ? state.viewParams.annualCtc : selectedEmp?.salary?.ctcAnnual,
    acceptanceDeadline: state.viewParams.acceptanceDeadline || defaultAcceptanceDeadline,
    offerExpiryDate: state.viewParams.offerExpiryDate || defaultExpiryDate,
    subjectLine: state.viewParams.subjectLine !== undefined ? state.viewParams.subjectLine : defaultSubjectLine,
    watermarkText: state.viewParams.watermarkText || "OBSYRA OFFICIAL",

    // Modular Clauses Toggles
    showSalaryTable: state.viewParams.showSalaryTable !== undefined ? state.viewParams.showSalaryTable : true,
    showProbation: state.viewParams.showProbation !== undefined ? state.viewParams.showProbation : true,
    showConfidentiality: state.viewParams.showConfidentiality !== undefined ? state.viewParams.showConfidentiality : true,
    showIpClause: state.viewParams.showIpClause !== undefined ? state.viewParams.showIpClause : true,
    showBackgroundCheck: state.viewParams.showBackgroundCheck !== undefined ? state.viewParams.showBackgroundCheck : true,
    showDocsChecklist: state.viewParams.showDocsChecklist !== undefined ? state.viewParams.showDocsChecklist : true,
    showNoticePeriod: state.viewParams.showNoticePeriod !== undefined ? state.viewParams.showNoticePeriod : true,
    showAcceptanceSheet: state.viewParams.showAcceptanceSheet !== undefined ? state.viewParams.showAcceptanceSheet : true
  };

  // Compile template live
  const compiledContent = compileTemplate(selectedTpl?.body, selectedEmp, company, overrides);

  return `
    <div class="page-header" style="margin-bottom: 12px;">
      <div class="page-title-group">
        <h1>Universal Document Generator Workspace</h1>
        <p class="page-subtitle">Interactive Document Engine: Modular Clause Toggles • Live Overrides • High-Fidelity A4 Paper</p>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn btn-secondary btn-sm" onclick="window.hrApp.applyPreset('all')">⚡ All Clauses On</button>
        <button class="btn btn-secondary btn-sm" onclick="window.hrApp.applyPreset('ctc')">💼 Simple CTC Only</button>
        <button class="btn btn-secondary btn-sm" onclick="window.hrApp.applyPreset('nda')">🔒 NDA Offer</button>
      </div>
    </div>

    <!-- Viewport & Screen Mode Switcher Toolbar -->
    <div class="view-mode-toolbar">
      <div class="view-mode-btn-group">
        <button class="view-mode-btn ${viewMode === 'split' ? 'active' : ''}" onclick="window.hrApp.setGeneratorViewMode('split')">
          🖥️ Split View (Controls + Paper)
        </button>
        <button class="view-mode-btn ${viewMode === 'paper' ? 'active' : ''}" onclick="window.hrApp.setGeneratorViewMode('paper')">
          📄 Full Paper Preview
        </button>
        <button class="view-mode-btn ${viewMode === 'form' ? 'active' : ''}" onclick="window.hrApp.setGeneratorViewMode('form')">
          ⚙️ Full Form Controls
        </button>
        <button class="view-mode-btn ${viewMode === '3col' ? 'active' : ''}" onclick="window.hrApp.setGeneratorViewMode('3col')">
          📐 3-Column Pro Mode
        </button>
      </div>

      <!-- Action Export Buttons -->
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 0.8rem; color: var(--text-muted);">Paper Zoom:</span>
        <select onchange="window.hrApp.setPaperZoom(this.value)" class="form-control" style="width: auto; padding: 4px 8px; font-size: 0.8rem;">
          <option value="75" ${paperZoom == 75 ? 'selected' : ''}>75%</option>
          <option value="90" ${paperZoom == 90 ? 'selected' : ''}>90%</option>
          <option value="100" ${paperZoom == 100 ? 'selected' : ''}>100% (Default)</option>
          <option value="110" ${paperZoom == 110 ? 'selected' : ''}>110%</option>
        </select>

        <button class="btn btn-primary btn-sm" onclick="window.hrApp.triggerPrintDocument()">🖨️ Print / PDF</button>
        <button class="btn btn-success btn-sm" onclick="window.hrApp.downloadDocxFile('${selectedTpl?.name}', '${overrides.candidateName}')">📥 Word DOCX</button>
        <button class="btn btn-secondary btn-sm" onclick="window.hrApp.saveGeneratedToHistory('${selectedTpl?.name}', '${selectedTpl?.category}', '${overrides.docNumber}', '${selectedEmp?.id}')">💾 Save Vault</button>
      </div>
    </div>

    <!-- Main Workspace Container -->
    <div class="generator-layout-3col mode-${viewMode}">
      
      <!-- CONTROLS BUILDER PANEL -->
      ${viewMode !== 'paper' ? `
      <div class="builder-panel">
        
        <!-- Tab Navigation inside Builder Panel -->
        <div style="display: flex; gap: 8px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 10px;">
          <button class="btn btn-sm ${activeTab === 'settings' ? 'btn-primary' : 'btn-secondary'}" style="flex: 1;" onclick="window.hrApp.setGeneratorTab('settings')">
            ⚙️ Settings & Clauses
          </button>
          <button class="btn btn-sm ${activeTab === 'fields' ? 'btn-primary' : 'btn-secondary'}" style="flex: 1;" onclick="window.hrApp.setGeneratorTab('fields')">
            ✍️ Candidate & Job Details
          </button>
        </div>

        ${activeTab === 'settings' ? `
          <!-- TAB 1: OFFER SETTINGS & MODULAR CLAUSE TOGGLES -->
          <div class="form-group">
            <label class="form-label">Select Candidate / Employee</label>
            <select id="genEmployeeSelect" class="form-control" onchange="window.hrApp.onGeneratorEmployeeChange(this.value)">
              ${employees.map(e => `
                <option value="${e.id}" ${e.id === selectedEmp?.id ? 'selected' : ''}>
                  ${e.employeeId} - ${e.fullName}
                </option>
              `).join('')}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Document Template</label>
            <select id="genTemplateSelect" class="form-control" onchange="window.hrApp.onGeneratorTemplateChange(this.value)">
              ${templates.map(t => `
                <option value="${t.id}" ${t.id === selectedTpl?.id ? 'selected' : ''}>
                  [${t.category}] ${t.name}
                </option>
              `).join('')}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Watermark Label</label>
            <select id="builderWatermark" class="form-control" onchange="window.hrApp.updateGenerator3ColView()">
              <option value="OBSYRA OFFICIAL" ${overrides.watermarkText === 'OBSYRA OFFICIAL' ? 'selected' : ''}>OBSYRA OFFICIAL</option>
              <option value="DRAFT FOR REVIEW" ${overrides.watermarkText === 'DRAFT FOR REVIEW' ? 'selected' : ''}>DRAFT FOR REVIEW</option>
              <option value="CONFIDENTIAL" ${overrides.watermarkText === 'CONFIDENTIAL' ? 'selected' : ''}>CONFIDENTIAL</option>
              <option value="NONE" ${overrides.watermarkText === 'NONE' ? 'selected' : ''}>None (Clean Paper)</option>
            </select>
          </div>

          <h4 style="font-size: 0.85rem; color: var(--text-muted); margin-top: 5px;">Level 3: Modular Optional Clauses</h4>
          <div class="clause-toggle-group">
            <label class="clause-checkbox-item">
              <input type="checkbox" id="chkSalaryTable" ${overrides.showSalaryTable ? 'checked' : ''} onchange="window.hrApp.updateGenerator3ColView()">
              <span>☑ Show Salary Breakup Table</span>
            </label>

            <label class="clause-checkbox-item">
              <input type="checkbox" id="chkProbation" ${overrides.showProbation ? 'checked' : ''} onchange="window.hrApp.updateGenerator3ColView()">
              <span>☑ Include Probation Clause</span>
            </label>

            <label class="clause-checkbox-item">
              <input type="checkbox" id="chkConfidentiality" ${overrides.showConfidentiality ? 'checked' : ''} onchange="window.hrApp.updateGenerator3ColView()">
              <span>☑ Confidentiality & NDA Clause</span>
            </label>

            <label class="clause-checkbox-item">
              <input type="checkbox" id="chkIpClause" ${overrides.showIpClause ? 'checked' : ''} onchange="window.hrApp.updateGenerator3ColView()">
              <span>☑ Intellectual Property (IP) Clause</span>
            </label>

            <label class="clause-checkbox-item">
              <input type="checkbox" id="chkBackgroundCheck" ${overrides.showBackgroundCheck ? 'checked' : ''} onchange="window.hrApp.updateGenerator3ColView()">
              <span>☑ Background Check Required</span>
            </label>

            <label class="clause-checkbox-item">
              <input type="checkbox" id="chkDocsChecklist" ${overrides.showDocsChecklist ? 'checked' : ''} onchange="window.hrApp.updateGenerator3ColView()">
              <span>☑ Onboarding Docs Checklist</span>
            </label>

            <label class="clause-checkbox-item">
              <input type="checkbox" id="chkAcceptanceSheet" ${overrides.showAcceptanceSheet ? 'checked' : ''} onchange="window.hrApp.updateGenerator3ColView()">
              <span>☑ Candidate Acceptance Page</span>
            </label>
          </div>
        ` : `
          <!-- TAB 2: EDITABLE FIELD OVERRIDES -->
          <div class="form-group">
            <label class="form-label">Doc Serial Number</label>
            <input type="text" id="builderDocNumber" class="form-control" value="${overrides.docNumber}" onkeyup="window.hrApp.updateGenerator3ColView()" style="font-family: monospace;">
          </div>

          <div class="form-group">
            <label class="form-label">Subject Line</label>
            <input type="text" id="builderSubjectLine" class="form-control" value="${overrides.subjectLine || ''}" onkeyup="window.hrApp.updateGenerator3ColView()">
          </div>

          <div class="form-group">
            <label class="form-label">Candidate Name</label>
            <input type="text" id="builderCandidateName" class="form-control" value="${overrides.candidateName || ''}" onkeyup="window.hrApp.updateGenerator3ColView()">
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" id="builderCandidateEmail" class="form-control" value="${overrides.candidateEmail || ''}" onkeyup="window.hrApp.updateGenerator3ColView()">
            </div>
            <div class="form-group">
              <label class="form-label">Mobile</label>
              <input type="text" id="builderCandidateMobile" class="form-control" value="${overrides.candidateMobile || ''}" onkeyup="window.hrApp.updateGenerator3ColView()">
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Candidate Address</label>
            <input type="text" id="builderCandidateAddress" class="form-control" value="${overrides.candidateAddress || ''}" onkeyup="window.hrApp.updateGenerator3ColView()">
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label">Designation</label>
              <input type="text" id="builderDesignation" class="form-control" value="${overrides.designation || ''}" onkeyup="window.hrApp.updateGenerator3ColView()">
            </div>
            <div class="form-group">
              <label class="form-label">Department</label>
              <input type="text" id="builderDepartment" class="form-control" value="${overrides.department || ''}" onkeyup="window.hrApp.updateGenerator3ColView()">
            </div>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label">Employment Type</label>
              <select id="builderEmploymentType" class="form-control" onchange="window.hrApp.updateGenerator3ColView()">
                <option value="Full-Time Permanent" ${overrides.employmentType === 'Full-Time Permanent' ? 'selected' : ''}>Full-Time Permanent</option>
                <option value="Contract Staffing" ${overrides.employmentType === 'Contract Staffing' ? 'selected' : ''}>Contract Staffing</option>
                <option value="Internship" ${overrides.employmentType === 'Internship' ? 'selected' : ''}>Internship</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Work Location</label>
              <input type="text" id="builderWorkLocation" class="form-control" value="${overrides.workLocation || ''}" onkeyup="window.hrApp.updateGenerator3ColView()">
            </div>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label">Joining Date</label>
              <input type="date" id="builderJoiningDate" class="form-control" value="${overrides.joiningDate}" onchange="window.hrApp.updateGenerator3ColView()">
            </div>
            <div class="form-group">
              <label class="form-label">Joining Time</label>
              <input type="text" id="builderJoiningTime" class="form-control" value="${overrides.joiningTime}" onkeyup="window.hrApp.updateGenerator3ColView()" placeholder="e.g. 9:30 AM / Flexible">
            </div>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label">Job Working Hours (Flexible / Non-Fixed)</label>
              <input type="text" id="builderWorkingHours" class="form-control" value="${overrides.workingHours || ''}" onkeyup="window.hrApp.updateGenerator3ColView()" placeholder="e.g. Flexible Working Hours (8 Hrs/Day) or 9:30 AM – 6:30 PM">
            </div>
            <div class="form-group">
              <label class="form-label">Working Days Schedule</label>
              <input type="text" id="builderWorkingDays" class="form-control" value="${overrides.workingDays || ''}" onkeyup="window.hrApp.updateGenerator3ColView()" placeholder="e.g. Monday – Friday / Rotational Schedule">
            </div>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label">Shift Details</label>
              <input type="text" id="builderShift" class="form-control" value="${overrides.shift || ''}" onkeyup="window.hrApp.updateGenerator3ColView()" placeholder="e.g. General Day Shift / Rotational Shift">
            </div>
            <div class="form-group">
              <label class="form-label">Weekly Off</label>
              <input type="text" id="builderWeeklyOff" class="form-control" value="${overrides.weeklyOff || ''}" onkeyup="window.hrApp.updateGenerator3ColView()" placeholder="e.g. Sunday Fixed Off / Rotational Off">
            </div>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label">Basic Salary (Monthly)</label>
              <input type="number" id="builderBasicSalary" class="form-control" value="${overrides.basicSalary || 45000}" onkeyup="window.hrApp.updateGenerator3ColView()">
            </div>
            <div class="form-group">
              <label class="form-label">Gross Monthly CTC</label>
              <input type="number" id="builderGrossSalary" class="form-control" value="${overrides.grossSalary || 90000}" onkeyup="window.hrApp.updateGenerator3ColView()">
            </div>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label">Acceptance Deadline</label>
              <input type="date" id="builderAcceptanceDeadline" class="form-control" value="${overrides.acceptanceDeadline}" onchange="window.hrApp.updateGenerator3ColView()">
            </div>
            <div class="form-group">
              <label class="form-label">Offer Expiry Date</label>
              <input type="date" id="builderOfferExpiryDate" class="form-control" value="${overrides.offerExpiryDate}" onchange="window.hrApp.updateGenerator3ColView()">
            </div>
          </div>
        `}

      </div>
      ` : ''}

      <!-- REAL-TIME LIVE PREVIEW VIEWPORT -->
      ${viewMode !== 'form' ? `
      <div class="paper-viewport">
        <div class="document-paper" id="documentPaperElement" style="width: ${paperZoom == 100 ? '210mm' : (210 * paperZoom / 100) + 'mm'}; max-width: 100%;">
          
          <!-- Official Obsyra Header Block -->
          <div class="obsyra-header-container">
            <div class="obsyra-header-top">
              <div class="obsyra-brand-box">
                ${company.logoSvg}
              </div>
              
              <div class="obsyra-contact-box">
                <div class="obsyra-contact-separator"></div>
                <div class="obsyra-contact-list">
                  <div class="obsyra-contact-item">
                    <svg class="obsyra-icon-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span>${company.email}</span>
                  </div>
                  <div class="obsyra-contact-item">
                    <svg class="obsyra-icon-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <span>${company.phone}</span>
                  </div>
                  <div class="obsyra-contact-item">
                    <svg class="obsyra-icon-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z"></path></svg>
                    <span>${company.website}</span>
                  </div>
                  <div class="obsyra-contact-item">
                    <svg class="obsyra-icon-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span>${company.corporateAddress}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Dual Color Angled Header Ribbon Divider -->
            <div class="obsyra-header-ribbon">
              <div class="ribbon-gold-left"></div>
              <div class="ribbon-charcoal-center"></div>
              <div class="ribbon-gold-right"></div>
            </div>
          </div>

          <!-- Document Watermark -->
          ${overrides.watermarkText !== 'NONE' ? `<div class="watermark-overlay">${overrides.watermarkText}</div>` : ''}

          <!-- Main Compiled Letter Body -->
          <div class="paper-body">
            ${compiledContent}
          </div>

          <!-- Signatures & Stamp (Rendered when template body lacks inline signature block) -->
          ${(!compiledContent.includes('EMPLOYEE ACKNOWLEDGEMENT') && !compiledContent.includes('SIGNATURES') && !compiledContent.includes('Submitted by Employee') && !compiledContent.includes('Company Seal:')) ? `
          <div class="letterhead-footer-block">
            <div class="signatory-box">
              <div style="margin-bottom: 5px;">For <strong>${company.name}</strong></div>
              <div style="margin-bottom: 5px;">${company.signatureSvg}</div>
              <div><strong>${company.authorizedSignatoryName}</strong></div>
              <div style="color: #64748b; font-size: 11px;">${company.authorizedSignatoryDesignation}</div>
            </div>

            <div class="seal-stamp-box">
              ${company.stampSvg}
            </div>
          </div>
          ` : ''}

          <!-- Official Obsyra Footer Block -->
          <div class="obsyra-footer-container">
            <div class="obsyra-footer-top-line"></div>

            <div class="obsyra-footer-columns">
              <div class="obsyra-footer-col">
                <div class="obsyra-footer-circle-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <div class="obsyra-footer-col-title">REGISTERED OFFICE</div>
                  <div class="obsyra-footer-col-desc">${company.corporateAddress}</div>
                </div>
              </div>

              <div class="obsyra-footer-col">
                <div class="obsyra-footer-circle-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <div class="obsyra-footer-col-title">EMAIL</div>
                  <div class="obsyra-footer-col-desc">${company.email}</div>
                </div>
              </div>

              <div class="obsyra-footer-col">
                <div class="obsyra-footer-circle-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z"></path></svg>
                </div>
                <div>
                  <div class="obsyra-footer-col-title">WEBSITE</div>
                  <div class="obsyra-footer-col-desc">${company.website}</div>
                </div>
              </div>

              <div class="obsyra-footer-col">
                <div class="obsyra-footer-circle-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <div class="obsyra-footer-col-title">PHONE</div>
                  <div class="obsyra-footer-col-desc">${company.phone}</div>
                </div>
              </div>

              <div class="obsyra-footer-col">
                <div class="obsyra-footer-circle-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="6" x2="9" y2="6"></line><line x1="15" y1="6" x2="15" y2="6"></line><line x1="9" y1="10" x2="9" y2="10"></line><line x1="15" y1="10" x2="15" y2="10"></line><line x1="9" y1="14" x2="9" y2="14"></line><line x1="15" y1="14" x2="15" y2="14"></line><path d="M9 18h6v4H9z"></path></svg>
                </div>
                <div>
                  <div class="obsyra-footer-col-title">CIN</div>
                  <div class="obsyra-footer-col-desc">${company.cin}</div>
                </div>
              </div>
            </div>

            <!-- Tagline Bar -->
            <div class="obsyra-footer-tagline-bar">
              <div class="obsyra-footer-line-left"></div>
              <div class="obsyra-footer-tagline-text">${company.tagline}</div>
              <div class="obsyra-footer-line-right"></div>
            </div>

            <!-- Bottom Ribbon Bar -->
            <div class="obsyra-footer-bottom-ribbon">
              <div class="obsyra-footer-stripe-silver"></div>
              <div class="obsyra-footer-stripe-gold"></div>
            </div>
          </div>

        </div>
      </div>
      ` : ''}

    </div>
  `;
}
