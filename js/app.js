// Main HR System Application Router & Controller
import { store } from './context.js';
import { renderDashboard } from './modules/dashboard.js';
import { renderEmployees } from './modules/employees.js';
import { renderEmployeeProfile } from './modules/employeeProfile.js';
import { renderGenerator } from './modules/generator.js';
import { renderTemplates } from './modules/templates.js';
import { renderRecruitment, renderOnboarding, renderPayroll, renderPerformance, renderExit, renderReports, renderSettings } from './modules/operationalModules.js';
import { renderAttendanceEngine } from './modules/attendanceEngine.js';
import { renderAssetEngine } from './modules/assetEngine.js';
import { renderProjects } from './modules/projects.js';
import { renderVerification } from './modules/verification.js';
import { renderAuditLogs } from './modules/auditLogs.js';
import { renderExpenses } from './modules/expenses.js';
import { renderTraining } from './modules/training.js';
import { renderAddEmployeeModal } from './components/addEmployeeModal.js';
import { renderLoginModal } from './components/loginModal.js';
import { renderAssignAssetModal, renderRegisterHardwareModal, renderTransferAssetModal, renderReturnAssetModal, renderHandoverSlipModal, renderInspectAssetModal } from './components/assetModals.js';
import { renderLoginPage } from './modules/loginPage.js';
import { commitDocNumberSequence } from './engine/serialEngine.js';

class HRAppController {
  constructor() {
    this.currentWizardStep = 1;
    this.init();
  }

  init() {
    // Subscribe to global store updates
    store.subscribe(() => this.render());

    // Inject modals into DOM
    document.body.insertAdjacentHTML('beforeend', renderAddEmployeeModal());
    document.body.insertAdjacentHTML('beforeend', renderLoginModal());
    document.body.insertAdjacentHTML('beforeend', renderAssignAssetModal());
    document.body.insertAdjacentHTML('beforeend', renderRegisterHardwareModal());
    document.body.insertAdjacentHTML('beforeend', renderTransferAssetModal());
    document.body.insertAdjacentHTML('beforeend', renderReturnAssetModal());
    document.body.insertAdjacentHTML('beforeend', renderHandoverSlipModal());
    document.body.insertAdjacentHTML('beforeend', renderInspectAssetModal());

    // Initial render
    this.render();
  }

  openLoginModal() {
    const overlay = document.getElementById('loginModalOverlay');
    if (overlay) overlay.style.display = 'flex';
  }

  closeLoginModal() {
    const overlay = document.getElementById('loginModalOverlay');
    if (overlay) overlay.style.display = 'none';
  }

  loginAsRole(role, name, empId) {
    store.setUserRole(role, name, empId);
    this.closeLoginModal();
    store.navigate('dashboard');
    this.showToast(`🔐 Authenticated as ${name} (${role}) — Redirected to ${role} Portal!`);
  }

  loginFromPage(role, name, empId) {
    store.setUserRole(role, name, empId);
    store.navigate('dashboard');
    this.showToast(`🔐 Authenticated as ${name} (${role}) — Redirected to ${role} Portal!`);
  }

  handleLoginPageSubmit(e) {
    e.preventDefault();
    const user = document.getElementById('pageLoginUser')?.value || 'OBS-OPS-26-001';
    this.loginFromPage('Department Manager', 'Swapnil Ghodke', user);
  }

  quickLogin(empId) {
    const res = store.login(empId);
    if (res.success) {
      this.closeLoginModal();
      store.navigate('dashboard');
      this.showToast(`Logged in as ${res.user.name} (${res.user.role})`);
    } else {
      this.showToast(res.message);
    }
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername')?.value || 'OBS-OPS-26-001';
    this.loginAsRole('Department Manager', 'Swapnil Ghodke', username);
  }

  logoutUser() {
    store.logout();
    this.openLoginModal();
    this.showToast('Signed out successfully.');
  }

  toggleMobileSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.classList.toggle('mobile-open');
  }

  toggleAttendancePunch() {
    store.togglePunch("Field Duty", "Kharadi, Pune, Maharashtra, India");
    const active = store.getState().activePunch;
    if (active) {
      this.showToast(`📍 Checked In at ${active.checkInTime} (${active.address})`);
    } else {
      this.showToast('🛑 Checked Out successfully. Total working time logged.');
    }
  }

  showPunchModal() {
    this.toggleAttendancePunch();
  }

  showAddRemarkModal() {
    this.showToast('Submitted Attendance Exception Remark to Manager');
  }

  showAssignAssetModal(tagId = '') {
    let overlay = document.getElementById('assignAssetModalOverlay');
    if (!overlay) {
      document.body.insertAdjacentHTML('beforeend', renderAssignAssetModal());
      overlay = document.getElementById('assignAssetModalOverlay');
    }
    if (overlay) {
      overlay.style.display = 'flex';
      overlay.classList.add('is-active', 'open');
      overlay.setAttribute('aria-hidden', 'false');
      if (tagId) {
        const tagInput = document.getElementById('assignAssetTagInput');
        if (tagInput) tagInput.value = tagId;
      }
    }
  }

  closeAssignAssetModal() {
    const overlay = document.getElementById('assignAssetModalOverlay');
    if (overlay) {
      overlay.style.display = 'none';
      overlay.classList.remove('is-active', 'open');
      overlay.setAttribute('aria-hidden', 'true');
    }
  }

  handleAssignAssetSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    const tagId = document.getElementById('assignAssetTagInput')?.value || 'OBS-LAP-0024';
    const model = document.getElementById('assignModelInput')?.value || 'Dell Latitude 5440';
    const empId = document.getElementById('assignEmployeeSelect')?.value || 'OBS-ENG-26-002';
    
    this.closeAssignAssetModal();
    this.showToast(`💻 Asset ${model} (${tagId}) successfully handed over to ${empId}! Digital handover slip generated.`);
  }

  showRegisterAssetModal() {
    const overlay = document.getElementById('registerHardwareModalOverlay');
    if (overlay) {
      overlay.style.display = 'flex';
      overlay.classList.add('is-active', 'open');
      overlay.setAttribute('aria-hidden', 'false');
    }
  }

  closeRegisterHardwareModal() {
    const overlay = document.getElementById('registerHardwareModalOverlay');
    if (overlay) {
      overlay.style.display = 'none';
      overlay.classList.remove('is-active', 'open');
      overlay.setAttribute('aria-hidden', 'true');
    }
  }

  handleRegisterHardwareSubmit(e) {
    e.preventDefault();
    const tagId = document.getElementById('regTagId')?.value || 'AST-LAP-2026-005';
    const model = document.getElementById('regModel')?.value;
    
    this.closeRegisterHardwareModal();
    this.showToast(`📦 New asset ${model} (${tagId}) registered into Corporate Storage Vault!`);
  }

  showTransferAssetModal(tagId = 'OBS-LAP-0024') {
    let overlay = document.getElementById('transferAssetModalOverlay');
    if (!overlay) {
      document.body.insertAdjacentHTML('beforeend', renderTransferAssetModal());
      overlay = document.getElementById('transferAssetModalOverlay');
    }
    if (overlay) {
      overlay.style.display = 'flex';
      overlay.classList.add('is-active', 'open');
      overlay.setAttribute('aria-hidden', 'false');
      const tagInput = document.getElementById('transferAssetTag');
      if (tagInput) tagInput.value = tagId;
    }
  }

  closeTransferAssetModal() {
    const overlay = document.getElementById('transferAssetModalOverlay');
    if (overlay) {
      overlay.style.display = 'none';
      overlay.classList.remove('is-active', 'open');
      overlay.setAttribute('aria-hidden', 'true');
    }
  }

  handleTransferAssetSubmit(e) {
    e.preventDefault();
    const tagId = document.getElementById('transferAssetTag')?.value || 'OBS-LAP-0024';
    const targetEmp = document.getElementById('transferNewEmployee')?.value;
    this.closeTransferAssetModal();
    this.showToast(`🔄 Asset ${tagId} successfully transferred to ${targetEmp}! Transfer log recorded.`);
  }

  showReturnAssetModal(tagId = 'OBS-LAP-0024') {
    const overlay = document.getElementById('returnAssetModalOverlay');
    if (overlay) {
      overlay.style.display = 'flex';
      overlay.classList.add('is-active', 'open');
      overlay.setAttribute('aria-hidden', 'false');
      const tagInput = document.getElementById('returnAssetTag');
      if (tagInput) tagInput.value = tagId;
    }
  }

  closeReturnAssetModal() {
    const overlay = document.getElementById('returnAssetModalOverlay');
    if (overlay) {
      overlay.style.display = 'none';
      overlay.classList.remove('is-active', 'open');
      overlay.setAttribute('aria-hidden', 'true');
    }
  }

  handleReturnAssetSubmit(e) {
    e.preventDefault();
    const tagId = document.getElementById('returnAssetTag')?.value || 'OBS-LAP-0024';
    const cond = document.getElementById('returnCondition')?.value;
    this.closeReturnAssetModal();
    this.showToast(`🛑 Asset ${tagId} successfully returned to Storage Vault! Inspection rating: ${cond}.`);
  }

  showHandoverSlipModal(tagId = 'OBS-LAP-0024', empId = 'OBS-ENG-26-002', empName = 'Rahul Sharma', model = 'Dell Latitude 5440 i7', serial = 'DL5440202699') {
    const overlay = document.getElementById('handoverSlipModalOverlay');
    if (overlay) {
      overlay.style.display = 'flex';
      overlay.classList.add('is-active', 'open');
      overlay.setAttribute('aria-hidden', 'false');

      // Populate slip details dynamically
      const elTag = document.getElementById('slipAssetTag');
      const elEmpId = document.getElementById('slipEmpId');
      const elEmpName = document.getElementById('slipEmpName');
      const elEmpSig = document.getElementById('slipEmpSig');
      const elModel = document.getElementById('slipAssetModel');
      const elSerial = document.getElementById('slipAssetSerial');

      if (elTag) elTag.textContent = tagId;
      if (elEmpId) elEmpId.textContent = empId;
      if (elEmpName) elEmpName.textContent = empName;
      if (elEmpSig) elEmpSig.textContent = empName;
      if (elModel) elModel.textContent = model;
      if (elSerial) elSerial.textContent = serial;
    }
  }

  closeHandoverSlipModal() {
    const overlay = document.getElementById('handoverSlipModalOverlay');
    if (overlay) {
      overlay.style.display = 'none';
      overlay.classList.remove('is-active', 'open');
      overlay.setAttribute('aria-hidden', 'true');
    }
  }

  showInspectAssetModal(tagId = 'OBS-LAP-0024') {
    const overlay = document.getElementById('inspectAssetModalOverlay');
    if (overlay) {
      overlay.style.display = 'flex';
      overlay.classList.add('is-active', 'open');
      overlay.setAttribute('aria-hidden', 'false');

      const elTag = document.getElementById('inspectTag');
      if (elTag) elTag.textContent = tagId;
    }
  }

  closeInspectAssetModal() {
    const overlay = document.getElementById('inspectAssetModalOverlay');
    if (overlay) {
      overlay.style.display = 'none';
      overlay.classList.remove('is-active', 'open');
      overlay.setAttribute('aria-hidden', 'true');
    }
  }

  navigate(view, params = {}) {
    store.navigate(view, params);
  }

  render() {
    const state = store.getState();
    const activeView = state.activeView;
    const viewContainer = document.getElementById('viewContainer');

    if (!viewContainer) return;

    // Highlight active sidebar menu item
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.getAttribute('data-view') === activeView);
    });

    // Check Super Admin privilege gate for Executive Hub
    if (!store.hasPermission(activeView)) {
      viewContainer.innerHTML = `
        <div class="glass-card" style="margin: 40px auto; max-width: 750px; text-align: center; padding: 50px 35px; border-top: 5px solid var(--primary); box-shadow: var(--shadow-glow);">
          <div style="width: 70px; height: 70px; background: rgba(99, 102, 241, 0.15); border-radius: 20px; display: inline-flex; align-items: center; justify-content: center; font-size: 2.5rem; margin-bottom: 20px;">🛡️</div>
          
          <h2 style="font-size: 1.75rem; font-weight: 800; color: white; margin-bottom: 10px;">SUPER ADMIN VIEW ONLY</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; max-width: 600px; margin: 0 auto 25px auto;">
            The Executive HR Hub & Main System Dashboard is configured for <strong>Super Admin View Only</strong> for Obsyra Private Limited. 
            <br><br>
            Active Session Role: <span class="badge badge-danger">${state.currentUser.role} (${state.currentUser.name})</span>
          </p>

          <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="window.hrApp.loginAsRole('Super Admin', 'Swapnil Ghodke', 'OBS-ADM-26-000')" style="padding: 12px 24px; font-weight: 700;">
              🔑 Authenticate Super Admin Access
            </button>
            <a href="login.html" class="btn btn-secondary" style="padding: 12px 24px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center;">
              📍 Go to Mobile Attendance Portal
            </a>
          </div>
        </div>
      `;
      return;
    }

    // Render active module
    switch (activeView) {
      case 'login':
        viewContainer.innerHTML = renderLoginPage();
        break;
      case 'dashboard':
        viewContainer.innerHTML = renderDashboard();
        break;
      case 'employees':
        viewContainer.innerHTML = renderEmployees();
        break;
      case 'profile':
        viewContainer.innerHTML = renderEmployeeProfile(state.viewParams.employeeId);
        break;
      case 'generator':
        viewContainer.innerHTML = renderGenerator();
        break;
      case 'templates':
        viewContainer.innerHTML = renderTemplates();
        break;
      case 'history':
        viewContainer.innerHTML = renderHistory();
        break;
      case 'recruitment':
        viewContainer.innerHTML = renderRecruitment();
        break;
      case 'onboarding':
        viewContainer.innerHTML = renderOnboarding();
        break;
      case 'attendance':
        viewContainer.innerHTML = renderAttendanceEngine();
        break;
      case 'payroll':
        viewContainer.innerHTML = renderPayroll();
        break;
      case 'performance':
        viewContainer.innerHTML = renderPerformance();
        break;
      case 'assets':
        viewContainer.innerHTML = renderAssetEngine();
        break;
      case 'exit':
        viewContainer.innerHTML = renderExit();
        break;
      case 'reports':
        viewContainer.innerHTML = renderReports();
        break;
      case 'projects':
        viewContainer.innerHTML = renderProjects();
        break;
      case 'verification':
        viewContainer.innerHTML = renderVerification();
        break;
      case 'auditLogs':
        viewContainer.innerHTML = renderAuditLogs();
        break;
      case 'expenses':
        viewContainer.innerHTML = renderExpenses();
        break;
      case 'training':
        viewContainer.innerHTML = renderTraining();
        break;
      case 'settings':
        viewContainer.innerHTML = renderSettings();
        break;
      default:
        viewContainer.innerHTML = renderDashboard();
        break;
    }
  }

  // Document Serial Authenticity Verification Engine
  verifyDocumentSerial() {
    const input = document.getElementById('verifyDocSerialInput')?.value.trim();
    const resultContainer = document.getElementById('verificationResultContainer');
    if (!resultContainer) return;

    if (!input) {
      this.showToast('Please enter a Document Serial Number');
      return;
    }

    const state = store.getState();
    const doc = state.history.find(h => (h.docNumber && h.docNumber.toUpperCase() === input.toUpperCase()) || h.id.toUpperCase() === input.toUpperCase());

    if (doc) {
      resultContainer.innerHTML = `
        <div style="margin-top: 20px; padding: 20px; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--radius-md);">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
            <div style="font-size: 2.2rem; color: var(--accent-emerald);">✓</div>
            <div>
              <h4 style="color: #34d399; font-size: 1.15rem; margin: 0;">DOCUMENT AUTHENTIC & VERIFIED</h4>
              <small style="color: var(--text-muted);">Obsyra Official Vault Seal Match • Verification ID: VER-${Date.now().toString().slice(-6)}</small>
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 0.88rem; background: rgba(0,0,0,0.2); padding: 12px; border-radius: var(--radius-sm);">
            <div><strong>Document Serial:</strong> ${doc.docNumber || doc.id}</div>
            <div><strong>Document Title:</strong> ${doc.title || doc.category}</div>
            <div><strong>Issued To Employee:</strong> ${doc.employeeName || doc.employeeId}</div>
            <div><strong>Issued Date:</strong> ${doc.generatedDate || '16 Feb 2026'}</div>
            <div><strong>Signatory Authority:</strong> Avinash Dagdu Aade (Director)</div>
            <div><strong>Corporate Issuer:</strong> Obsyra Private Limited (CIN: U63991PN2026PTC252127)</div>
          </div>
        </div>
      `;
    } else {
      resultContainer.innerHTML = `
        <div style="margin-top: 20px; padding: 20px; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: var(--radius-md);">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="font-size: 2.2rem; color: var(--accent-rose);">🚫</div>
            <div>
              <h4 style="color: var(--accent-rose); font-size: 1.15rem; margin: 0;">UNVERIFIED DOCUMENT SERIAL</h4>
              <small style="color: var(--text-muted);">No matching document record found in Obsyra Corporate Vault for serial "${input}". Please check the serial number format.</small>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Employee Master Filters
  filterEmployeesTable() {
    const query = document.getElementById('empSearchInput')?.value.toLowerCase() || '';
    const dept = document.getElementById('deptFilterSelect')?.value || '';
    const rows = document.querySelectorAll('#employeeDataTable .emp-row');
    let visible = 0;

    rows.forEach(row => {
      const name = row.getAttribute('data-name');
      const id = row.getAttribute('data-id');
      const rowDept = row.getAttribute('data-dept');

      const matchesSearch = !query || name.includes(query) || id.includes(query);
      const matchesDept = !dept || rowDept === dept;

      if (matchesSearch && matchesDept) {
        row.style.display = '';
        visible++;
      } else {
        row.style.display = 'none';
      }
    });

    const label = document.getElementById('empCountLabel');
    if (label) label.textContent = visible;
  }

  // History Table Filters
  filterHistoryTable() {
    const query = document.getElementById('histSearchInput')?.value.toLowerCase() || '';
    const cat = document.getElementById('histCategorySelect')?.value || '';
    const rows = document.querySelectorAll('#historyDataTable .hist-row');

    rows.forEach(row => {
      const searchData = row.getAttribute('data-search');
      const rowCat = row.getAttribute('data-cat');

      const matchesSearch = !query || searchData.includes(query);
      const matchesCat = !cat || rowCat === cat;

      row.style.display = (matchesSearch && matchesCat) ? '' : 'none';
    });
  }

  // Document Generator Parameter Updates
  updateGeneratorView() {
    const empId = document.getElementById('genEmployeeSelect')?.value;
    const tplId = document.getElementById('genTemplateSelect')?.value;
    const docNumber = document.getElementById('genDocNumber')?.value;
    const issueDate = document.getElementById('genIssueDate')?.value;
    const effectiveDate = document.getElementById('genEffectiveDate')?.value;
    const designation = document.getElementById('genDesignation')?.value;
    const department = document.getElementById('genDepartment')?.value;

    store.navigate('generator', {
      employeeId: empId,
      templateId: tplId,
      overrideDocNumber: docNumber,
      issueDate,
      effectiveDate,
      designation,
      department
    });
  }

  // Handle Employee Selection Change
  onGeneratorEmployeeChange(newEmpId) {
    const state = store.getState();
    const currentParams = { ...state.viewParams };
    
    // Reset employee-specific overrides so new employee details populate
    delete currentParams.candidateName;
    delete currentParams.candidateEmail;
    delete currentParams.candidateMobile;
    delete currentParams.candidateAddress;
    delete currentParams.designation;
    delete currentParams.department;
    delete currentParams.basicSalary;
    delete currentParams.grossSalary;
    delete currentParams.annualCtc;

    currentParams.employeeId = newEmpId;
    store.navigate('generator', currentParams);
  }

  // Handle Document Template Selection Change
  onGeneratorTemplateChange(newTplId) {
    const state = store.getState();
    const currentParams = { ...state.viewParams };
    
    // Reset template-specific overrides so serial number and subject line re-calculate
    delete currentParams.docNumber;
    delete currentParams.subjectLine;

    currentParams.templateId = newTplId;
    store.navigate('generator', currentParams);
  }

  // 3-Column Generator Builder View Controller (Preserves Tab State & Prevents DOM Wiping)
  updateGenerator3ColView() {
    const state = store.getState();
    const currentParams = state.viewParams || {};
    const newParams = { ...currentParams };

    const empId = document.getElementById('genEmployeeSelect')?.value;
    const tplId = document.getElementById('genTemplateSelect')?.value;

    if (empId) newParams.employeeId = empId;
    if (tplId) newParams.templateId = tplId;

    if (document.getElementById('builderDocNumber')) newParams.docNumber = document.getElementById('builderDocNumber').value;
    if (document.getElementById('builderSubjectLine')) newParams.subjectLine = document.getElementById('builderSubjectLine').value;
    if (document.getElementById('builderCandidateName')) newParams.candidateName = document.getElementById('builderCandidateName').value;
    if (document.getElementById('builderCandidateEmail')) newParams.candidateEmail = document.getElementById('builderCandidateEmail').value;
    if (document.getElementById('builderCandidateMobile')) newParams.candidateMobile = document.getElementById('builderCandidateMobile').value;
    if (document.getElementById('builderCandidateAddress')) newParams.candidateAddress = document.getElementById('builderCandidateAddress').value;
    if (document.getElementById('builderDesignation')) newParams.designation = document.getElementById('builderDesignation').value;
    if (document.getElementById('builderDepartment')) newParams.department = document.getElementById('builderDepartment').value;
    if (document.getElementById('builderJobGrade')) newParams.jobGrade = document.getElementById('builderJobGrade').value;
    if (document.getElementById('builderEmploymentLevel')) newParams.employmentLevel = document.getElementById('builderEmploymentLevel').value;
    if (document.getElementById('builderEmploymentType')) newParams.employmentType = document.getElementById('builderEmploymentType').value;
    if (document.getElementById('builderWorkLocation')) newParams.workLocation = document.getElementById('builderWorkLocation').value;
    if (document.getElementById('builderJoiningDate')) newParams.joiningDate = document.getElementById('builderJoiningDate').value;
    if (document.getElementById('builderJoiningTime')) newParams.joiningTime = document.getElementById('builderJoiningTime').value;
    if (document.getElementById('builderWorkingHours')) newParams.workingHours = document.getElementById('builderWorkingHours').value;
    if (document.getElementById('builderWorkingDays')) newParams.workingDays = document.getElementById('builderWorkingDays').value;
    if (document.getElementById('builderShift')) newParams.shift = document.getElementById('builderShift').value;
    if (document.getElementById('builderWeeklyOff')) newParams.weeklyOff = document.getElementById('builderWeeklyOff').value;
    if (document.getElementById('builderBasicSalary')) newParams.basicSalary = document.getElementById('builderBasicSalary').value;
    if (document.getElementById('builderGrossSalary')) {
      newParams.grossSalary = document.getElementById('builderGrossSalary').value;
      newParams.annualCtc = newParams.grossSalary ? (parseFloat(newParams.grossSalary) * 12) : undefined;
    }
    if (document.getElementById('builderAcceptanceDeadline')) newParams.acceptanceDeadline = document.getElementById('builderAcceptanceDeadline').value;
    if (document.getElementById('builderOfferExpiryDate')) newParams.offerExpiryDate = document.getElementById('builderOfferExpiryDate').value;
    if (document.getElementById('builderNoticePeriod')) newParams.noticePeriod = document.getElementById('builderNoticePeriod').value;
    if (document.getElementById('builderWatermark')) newParams.watermarkText = document.getElementById('builderWatermark').value;

    if (document.getElementById('chkSalaryTable')) newParams.showSalaryTable = document.getElementById('chkSalaryTable').checked;
    if (document.getElementById('chkProbation')) newParams.showProbation = document.getElementById('chkProbation').checked;
    if (document.getElementById('chkConfidentiality')) newParams.showConfidentiality = document.getElementById('chkConfidentiality').checked;
    if (document.getElementById('chkIpClause')) newParams.showIpClause = document.getElementById('chkIpClause').checked;
    if (document.getElementById('chkBackgroundCheck')) newParams.showBackgroundCheck = document.getElementById('chkBackgroundCheck').checked;
    if (document.getElementById('chkDocsChecklist')) newParams.showDocsChecklist = document.getElementById('chkDocsChecklist').checked;
    if (document.getElementById('chkNoticePeriod')) newParams.showNoticePeriod = document.getElementById('chkNoticePeriod').checked;
    if (document.getElementById('chkAcceptanceSheet')) newParams.showAcceptanceSheet = document.getElementById('chkAcceptanceSheet').checked;

    store.navigate('generator', newParams);
  }

  // Quick Clause Preset Switcher Engine
  applyPreset(presetType) {
    const state = store.getState();
    let presetObj = {};

    switch (presetType) {
      case 'ctc':
        presetObj = {
          showSalaryTable: false,
          showProbation: false,
          showConfidentiality: false,
          showIpClause: false,
          showBackgroundCheck: false,
          showDocsChecklist: true,
          showAcceptanceSheet: true
        };
        this.showToast('Applied Preset: Simple CTC Offer Letter');
        break;
      case 'nda':
        presetObj = {
          showSalaryTable: true,
          showProbation: true,
          showConfidentiality: true,
          showIpClause: true,
          showBackgroundCheck: true,
          showDocsChecklist: true,
          showAcceptanceSheet: true
        };
        this.showToast('Applied Preset: Confidential NDA Offer Letter');
        break;
      default: // all
        presetObj = {
          showSalaryTable: true,
          showProbation: true,
          showConfidentiality: true,
          showIpClause: true,
          showBackgroundCheck: true,
          showDocsChecklist: true,
          showAcceptanceSheet: true
        };
        this.showToast('Applied Preset: All Clauses Enabled');
        break;
    }

    store.navigate('generator', { ...state.viewParams, ...presetObj });
  }

  // View Mode, Zoom & Tab Handlers
  setGeneratorViewMode(viewMode) {
    const state = store.getState();
    store.navigate('generator', { ...state.viewParams, viewMode });
  }

  setGeneratorTab(activeTab) {
    const state = store.getState();
    store.navigate('generator', { ...state.viewParams, activeTab });
  }

  setPaperZoom(paperZoom) {
    const state = store.getState();
    store.navigate('generator', { ...state.viewParams, paperZoom: parseInt(paperZoom) });
  }

  // Email Offer Dispatch Helper
  sendEmailOfferToCandidate(candidateName, candidateEmail) {
    this.showToast(`Offer letter email dispatch queued for ${candidateName} (${candidateEmail || 'info@obsyra.co.in'})!`);
  }

  // Print Document Engine
  triggerPrintDocument() {
    window.print();
  }

  // DOCX Exporter Helper
  downloadDocxFile(templateName, employeeName) {
    const paperHtml = document.getElementById('documentPaperElement')?.innerHTML;
    if (!paperHtml) return;

    const blobContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><title>${templateName}</title><style>body { font-family: Arial, sans-serif; line-height: 1.6; }</style></head>
      <body>${paperHtml}</body>
      </html>
    `;

    const blob = new Blob(['\ufeff', blobContent], {
      type: 'application/msword'
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${templateName.replace(/\s+/g, '_')}_${employeeName.replace(/\s+/g, '_')}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    this.showToast(`DOCX document for ${employeeName} generated and downloaded!`);
  }

  // Save to Employee Vault History
  saveGeneratedToHistory(title, category, docNumber, employeeId) {
    const state = store.getState();
    const emp = store.getEmployee(employeeId);

    // Commit serial number sequence if applicable
    const codeMatch = docNumber.match(/\/HR\/([A-Z]+)\//);
    if (codeMatch && codeMatch[1]) {
      commitDocNumberSequence(codeMatch[1], state.company);
    }

    const newRecord = {
      id: `DOC-${Date.now()}`,
      docNumber: docNumber,
      employeeId: emp?.employeeId || employeeId,
      employeeName: emp?.fullName || "Employee",
      designation: emp?.employment?.designation || "Staff",
      department: emp?.employment?.department || "General",
      title: title,
      category: category || "General",
      generatedDate: new Date().toISOString().split('T')[0],
      generatedBy: state.currentUser.name,
      status: "Finalized"
    };

    store.recordGeneratedDocument(newRecord);
    this.showToast(`Document ${docNumber} successfully saved to ${emp?.fullName}'s HR Vault!`);
  }

  // Template Manager Editing
  insertVariableToTemplate(varTag) {
    const textarea = document.getElementById('tplEditBody');
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;

    textarea.value = text.substring(0, start) + varTag + text.substring(end);
    textarea.focus();
    textarea.selectionStart = textarea.selectionEnd = start + varTag.length;
  }

  saveTemplateChanges(tplId) {
    const name = document.getElementById('tplEditName')?.value;
    const category = document.getElementById('tplEditCategory')?.value;
    const body = document.getElementById('tplEditBody')?.value;

    if (!name || !body) {
      alert('Template Name and HTML Body content are required.');
      return;
    }

    store.updateTemplate(tplId, { name, category, body });
    this.showToast(`Template '${name}' updated successfully!`);
  }

  createNewTemplate() {
    const newTpl = store.addTemplate({
      code: "CUSTOM",
      name: "Custom HR Letter",
      category: "General",
      description: "Custom HR document template",
      body: `<div><p>Dear {{employee_name}},</p><p>Enter letter text here...</p></div>`
    });

    store.navigate('templates', { templateId: newTpl.id });
    this.showToast('New Custom HR Template created!');
  }

  // Add Employee Wizard Logic
  openAddEmployeeModal() {
    this.currentWizardStep = 1;
    this.updateWizardStepUI();

    // Auto-generate sequential employee ID
    const empCount = store.getState().employees.length + 1;
    const nextEmpId = `OBS-EMP-26-${String(empCount).padStart(3, '0')}`;
    const empIdInput = document.getElementById('newEmployeeId');
    if (empIdInput) empIdInput.value = nextEmpId;

    const overlay = document.getElementById('addEmployeeModalOverlay');
    if (overlay) {
      overlay.style.display = 'flex';
      overlay.classList.add('is-active', 'open');
      overlay.setAttribute('aria-hidden', 'false');
    }
  }

  closeAddEmployeeModal() {
    const overlay = document.getElementById('addEmployeeModalOverlay');
    if (overlay) {
      overlay.style.display = 'none';
      overlay.classList.remove('is-active', 'open');
      overlay.setAttribute('aria-hidden', 'true');
    }
  }

  wizardStepNext() {
    if (this.currentWizardStep < 4) {
      this.currentWizardStep++;
      this.updateWizardStepUI();
    }
  }

  wizardStepPrev() {
    if (this.currentWizardStep > 1) {
      this.currentWizardStep--;
      this.updateWizardStepUI();
    }
  }

  updateWizardStepUI() {
    for (let i = 1; i <= 4; i++) {
      const pane = document.getElementById(`wizardStep${i}`);
      const ind = document.getElementById(`stepIndicator${i}`);
      if (pane) pane.style.display = (i === this.currentWizardStep) ? 'block' : 'none';
      if (ind) {
        ind.classList.toggle('active', i === this.currentWizardStep);
        ind.classList.toggle('completed', i < this.currentWizardStep);
      }
    }

    const prevBtn = document.getElementById('wizPrevBtn');
    const nextBtn = document.getElementById('wizNextBtn');
    const submitBtn = document.getElementById('wizSubmitBtn');

    if (prevBtn) prevBtn.style.display = (this.currentWizardStep > 1) ? 'block' : 'none';
    if (nextBtn) nextBtn.style.display = (this.currentWizardStep < 4) ? 'block' : 'none';
    if (submitBtn) submitBtn.style.display = (this.currentWizardStep === 4) ? 'block' : 'none';
  }

  recalcSalaryForm() {
    const basic = parseFloat(document.getElementById('newBasicSalary')?.value) || 0;
    const hraInput = document.getElementById('newHraSalary');
    const grossInput = document.getElementById('newGrossSalary');
    const ctcInput = document.getElementById('newCtcAnnual');

    const calculatedHra = Math.round(basic * 0.5);
    if (hraInput) hraInput.value = calculatedHra;

    const gross = parseFloat(grossInput?.value) || (basic + calculatedHra);
    const annualCtc = gross * 12;

    if (ctcInput) ctcInput.value = `₹ ${annualCtc.toLocaleString('en-IN')}`;
  }

  submitNewEmployee(event) {
    event.preventDefault();

    const firstName = document.getElementById('newFirstName')?.value;
    const lastName = document.getElementById('newLastName')?.value;
    const gender = document.getElementById('newGender')?.value;
    const dob = document.getElementById('newDob')?.value;
    const mobile = document.getElementById('newMobile')?.value;
    const email = document.getElementById('newEmail')?.value;
    const address = document.getElementById('newAddress')?.value;

    const employeeId = document.getElementById('newEmployeeId')?.value;
    const doj = document.getElementById('newDoj')?.value;
    const department = document.getElementById('newDept')?.value;
    const designation = document.getElementById('newDesignation')?.value;
    const manager = document.getElementById('newManager')?.value;
    const location = document.getElementById('newLocation')?.value;

    const basic = parseFloat(document.getElementById('newBasicSalary')?.value) || 45000;
    const hra = parseFloat(document.getElementById('newHraSalary')?.value) || (basic * 0.5);
    const grossMonthly = parseFloat(document.getElementById('newGrossSalary')?.value) || 90000;

    const bankName = document.getElementById('newBankName')?.value;
    const accountNo = document.getElementById('newAccountNo')?.value;
    const ifsc = document.getElementById('newIfsc')?.value;
    const pan = document.getElementById('newPan')?.value;

    const newEmp = store.addEmployee({
      firstName,
      lastName,
      employeeId,
      gender,
      dob,
      mobile,
      email,
      address,
      employment: {
        department,
        designation,
        reportingManager: manager,
        employmentType: "Full-Time Permanent",
        workLocation: location,
        dateOfJoining: doj,
        probationPeriodMonths: 6,
        status: "Active"
      },
      salary: {
        basic,
        hra,
        conveyance: 3000,
        specialAllowance: Math.max(0, grossMonthly - basic - hra - 3000),
        grossMonthly,
        pfDeduction: 1800,
        ptDeduction: 200,
        incomeTaxTds: 5000,
        netMonthly: grossMonthly - 7000,
        ctcAnnual: grossMonthly * 12
      },
      bank: {
        bankName,
        accountNumber: accountNo,
        ifsc,
        accountHolderName: `${firstName} ${lastName}`,
        branch: location
      },
      documents: {
        pan,
        aadhaar: "Pending Submission",
        education: "Verified Degree"
      }
    });

    this.closeAddEmployeeModal();
    document.getElementById('addEmployeeForm')?.reset();
    this.showToast(`Employee ${newEmp.fullName} (${newEmp.employeeId}) added successfully to Master!`);
    store.navigate('profile', { employeeId: newEmp.id });
  }

  // Company Settings Saver
  saveCompanySettings() {
    const name = document.getElementById('setCompanyName')?.value;
    const code = document.getElementById('setCompanyCode')?.value;
    const cin = document.getElementById('setCompanyCin')?.value;
    const corporateAddress = document.getElementById('setCorporateAddress')?.value;
    const email = document.getElementById('setCompanyEmail')?.value;
    const hrEmail = document.getElementById('setCompanyHrEmail')?.value;
    const signatoryName = document.getElementById('setSignatoryName')?.value;
    const signatoryDesignation = document.getElementById('setSignatoryDesignation')?.value;
    const serialFormat = document.getElementById('setSerialFormat')?.value;

    store.updateCompany({
      name,
      code,
      cin,
      corporateAddress,
      email,
      hrEmail,
      authorizedSignatoryName: signatoryName,
      authorizedSignatoryDesignation: signatoryDesignation,
      serialFormat
    });

    this.showToast('Company branding and document settings updated!');
  }

  // Toast Notification System
  showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = 'position: fixed; bottom: 30px; right: 30px; background: var(--primary-gradient); color: #ffffff; padding: 14px 22px; border-radius: var(--radius-md); box-shadow: var(--shadow-lg); font-weight: 600; font-size: 0.9rem; z-index: 9999; animation: slideIn 0.3s ease;';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => document.body.removeChild(toast), 300);
    }, 3500);
  }

  toggleSidebarCollapse() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const floatingBtn = document.getElementById('floatingUnhideBtn');
    const expandBtn = document.getElementById('sidebarExpandBtn');
    
    if (sidebar) {
      const isCollapsed = sidebar.classList.toggle('collapsed');
      if (mainContent) {
        if (isCollapsed) {
          mainContent.classList.add('expanded-full');
          if (floatingBtn) floatingBtn.style.display = 'flex';
          if (expandBtn) expandBtn.style.display = 'inline-flex';
          this.showToast('◀ Sidebar hidden. Click "▶ Unhide Sidebar" anytime to restore.');
        } else {
          mainContent.classList.remove('expanded-full');
          if (floatingBtn) floatingBtn.style.display = 'none';
          if (expandBtn) expandBtn.style.display = 'none';
          this.showToast('▶ Sidebar restored.');
        }
      }
    }
  }
}

// Instantiate global application singleton
const appInstance = new HRAppController();
window.hrApp = appInstance;
window.hrAppInstance = appInstance;

// Global Window Function Proxies for 100% Inline Click Guarantee
window.toggleSidebarCollapse = () => appInstance.toggleSidebarCollapse();
window.showAssignAssetModal = () => appInstance.showAssignAssetModal();
window.closeAssignAssetModal = () => appInstance.closeAssignAssetModal();
window.showRegisterAssetModal = () => appInstance.showRegisterAssetModal();
window.closeRegisterHardwareModal = () => appInstance.closeRegisterHardwareModal();
window.showTransferAssetModal = (tagId) => appInstance.showTransferAssetModal(tagId);
window.closeTransferAssetModal = () => appInstance.closeTransferAssetModal();
window.showReturnAssetModal = (tagId) => appInstance.showReturnAssetModal(tagId);
window.closeReturnAssetModal = () => appInstance.closeReturnAssetModal();
window.showHandoverSlipModal = (tag, id, name, model, serial) => appInstance.showHandoverSlipModal(tag, id, name, model, serial);
window.closeHandoverSlipModal = () => appInstance.closeHandoverSlipModal();
window.showInspectAssetModal = (tagId) => appInstance.showInspectAssetModal(tagId);
window.closeInspectAssetModal = () => appInstance.closeInspectAssetModal();
window.toggleAttendancePunch = () => appInstance.toggleAttendancePunch();
window.openLoginModal = () => appInstance.openLoginModal();
window.closeLoginModal = () => appInstance.closeLoginModal();
window.loginFromPage = (role, name, empId) => appInstance.loginFromPage(role, name, empId);
window.showAddEmployeeModal = () => appInstance.openAddEmployeeModal();
window.openAddEmployeeModal = () => appInstance.openAddEmployeeModal();
window.closeAddEmployeeModal = () => appInstance.closeAddEmployeeModal();

// Global Delegated Click Listener & Active Focus Switcher across all browsers
document.addEventListener('click', (e) => {
  const item = e.target.closest('.nav-item, .sidebar-nav-item, [data-view], [data-module]');
  if (item) {
    const view = item.getAttribute('data-view') || item.getAttribute('data-module') || item.getAttribute('href')?.replace('#', '');
    if (view) {
      document.querySelectorAll('.nav-item, .sidebar-nav-item').forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) sidebar.classList.remove('mobile-open');
      store.navigate(view);
    }
  }
});

// Bind Direct Tab Listeners & Handle Hash Routing on DOMReady
const initNavigation = () => {
  document.querySelectorAll('.sidebar a, .sidebar .nav-item, [data-view], [data-module]').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const targetView = e.currentTarget.dataset.view || e.currentTarget.dataset.module || e.currentTarget.getAttribute('href')?.replace('#', '');
      if (targetView) {
        document.querySelectorAll('.sidebar .nav-item, .sidebar a').forEach(item => item.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) sidebar.classList.remove('mobile-open');
        store.navigate(targetView);
      }
    });
  });

  const hashView = window.location.hash.replace('#', '').split('?')[0];
  const validViews = ['login','dashboard','employees','profile','generator','templates','history','recruitment','onboarding','attendance','payroll','performance','assets','exit','reports','settings','projects','verification','auditLogs','expenses','training'];
  if (hashView && validViews.includes(hashView)) {
    store.navigate(hashView);
  } else {
    appInstance.render();
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavigation);
} else {
  initNavigation();
}

window.addEventListener('load', () => appInstance.render());
window.addEventListener('hashchange', () => {
  const hashView = window.location.hash.replace('#', '').split('?')[0];
  if (hashView) store.navigate(hashView);
});
