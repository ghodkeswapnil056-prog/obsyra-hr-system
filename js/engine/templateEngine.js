// Template Engine Parser & Formatter Utilities (Supports Level 1/2/3/4 Variables & Section Blocks)
export function formatCurrency(amount) {
  if (amount === undefined || amount === null || isNaN(amount)) return "₹ 0";
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

export function formatDate(dateString) {
  if (!dateString) return new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
}

export function numberToWords(num) {
  if (!num || isNaN(num)) return "Zero Rupees";
  const a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
  const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  
  function inWords(n) {
    if (n < 20) return a[n];
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + a[n % 10] : ' ');
    if (n < 1000) return a[Math.floor(n / 100)] + 'Hundred ' + (n % 100 !== 0 ? 'and ' + inWords(n % 100) : '');
    if (n < 100000) return inWords(Math.floor(n / 1000)) + 'Thousand ' + (n % 1000 !== 0 ? inWords(n % 1000) : '');
    if (n < 10000000) return inWords(Math.floor(n / 100000)) + 'Lakh ' + (n % 100000 !== 0 ? inWords(n % 100000) : '');
    return inWords(Math.floor(num)).trim() + ' Rupees Only';
  }
  
  return inWords(Math.floor(num)).trim() + ' Rupees Only';
}

export function compileTemplate(rawHtml, employee, company, overrides = {}) {
  if (!rawHtml) return "";

  const genderPrefix = employee.gender === "Female" ? "Ms." : "Mr.";
  const genderPronounSmall = employee.gender === "Female" ? "she" : "he";

  // Calculate annual breakdown if salary present
  const basicMonthly = overrides.basicSalary !== undefined ? parseFloat(overrides.basicSalary) : (employee.salary?.basic || 0);
  const hraMonthly = overrides.hraSalary !== undefined ? parseFloat(overrides.hraSalary) : (employee.salary?.hra || Math.round(basicMonthly * 0.5));
  const grossMonthly = overrides.grossSalary !== undefined ? parseFloat(overrides.grossSalary) : (employee.salary?.grossMonthly || (basicMonthly + hraMonthly));
  const allowancesMonthly = Math.max(0, grossMonthly - basicMonthly - hraMonthly);
  const ctcAnnual = overrides.annualCtc !== undefined ? parseFloat(overrides.annualCtc) : (employee.salary?.ctcAnnual || (grossMonthly * 12));
  const pfMonthly = employee.salary?.pfDeduction || 1800;

  const defaultSub = overrides.subjectLine || overrides.subject_line || `Confirmation of Employment`;

  // Comprehensive Base Variable Dictionary
  const variables = {
    // Subject Line Alias Keys (snake_case and camelCase)
    subject_line: defaultSub,
    subjectLine: defaultSub,

    // Level 1: Company Details
    company_name: company.name,
    company_short: company.shortName,
    company_cin: company.cin,
    company_gstin: company.gstin,
    company_email: company.email,
    company_phone: company.phone,
    company_website: company.website,
    company_hr_email: company.hrEmail,
    company_address: company.corporateAddress,
    authorized_signatory: company.authorizedSignatoryName,
    authorized_person_name: company.authorizedSignatoryName,
    signatory_designation: company.authorizedSignatoryDesignation,
    authorized_person_designation: company.authorizedSignatoryDesignation,

    // Document Metadata & Dates
    doc_number: overrides.docNumber || "OBSYRA/HR/CONF/2026/0001",
    docNumber: overrides.docNumber || "OBSYRA/HR/CONF/2026/0001",
    confirmation_letter_number: overrides.docNumber || "OBSYRA/HR/CONF/2026/0001",
    confirmation_date: formatDate(overrides.confirmationDate || overrides.issueDate || new Date()),
    joining_report_number: overrides.docNumber || "OBSYRA/HR/JOIN/2026/0001",
    manager_confirmation_date: formatDate(overrides.managerConfirmationDate || overrides.issueDate || new Date()),
    hr_representative: overrides.hrRepresentative || "Aisha Verma (Senior HR Specialist)",
    records_verified: overrides.recordsVerified || "Verified & Uploaded to HRMS",
    joining_formalities_status: overrides.joiningFormalitiesStatus || "Completed 100% (ID, PF/ESIC, Bank, NDA Signed)",
    hr_verification_date: formatDate(overrides.hrVerificationDate || overrides.issueDate || new Date()),
    relieving_order_number: overrides.docNumber || "OBSYRA/HR/REL/2026/0001",
    relieving_date: formatDate(overrides.issueDate || new Date()),
    clearance_date: formatDate(overrides.clearanceDate || overrides.issueDate || new Date()),
    nda_number: overrides.docNumber || "OBSYRA/HR/NDA/2026/0001",
    agreement_date: formatDate(overrides.issueDate || new Date()),
    company_signature_date: formatDate(overrides.issueDate || new Date()),
    employee_signature_date: formatDate(overrides.issueDate || new Date()),
    witness_1_name: overrides.witness1Name || "Aisha Verma (Senior HR Specialist)",
    witness_1_date: formatDate(overrides.issueDate || new Date()),
    witness_2_name: overrides.witness2Name || "Siddharth Mehta (Lead Systems Engineer)",
    witness_2_date: formatDate(overrides.issueDate || new Date()),
    promotion_letter_number: overrides.docNumber || "OBSYRA/HR/PROM/2026/0001",
    certificate_number: overrides.docNumber || "OBSYRA/HR/EXP/2026/0001",
    certificate_date: formatDate(overrides.issueDate || new Date()),
    transfer_order_number: overrides.docNumber || "OBSYRA/HR/TRANS/2026/0001",
    order_date: formatDate(overrides.issueDate || new Date()),
    warning_letter_number: overrides.docNumber || "OBSYRA/HR/WARN/2026/0001",
    appointment_letter_no: overrides.docNumber || "OBSYRA/HR/APPT/2026/0001",
    termination_letter_no: overrides.docNumber || "OBSYRA/HR/TERM/2026/0001",
    issue_date: formatDate(overrides.issueDate || new Date()),
    issueDate: formatDate(overrides.issueDate || new Date()),
    offer_date: formatDate(overrides.issueDate || new Date()),
    appointment_letter_date: formatDate(overrides.issueDate || new Date()),
    appointment_date: formatDate(overrides.appointmentDate || overrides.issueDate || new Date()),
    letter_date: formatDate(overrides.issueDate || new Date()),
    termination_letter_date: formatDate(overrides.issueDate || new Date()),
    effective_date: formatDate(overrides.effectiveDate || new Date()),
    effectiveDate: formatDate(overrides.effectiveDate || new Date()),
    effective_termination_date: formatDate(overrides.effectiveDate || new Date()),
    termination_date: formatDate(overrides.effectiveDate || new Date()),
    last_working_day: formatDate(overrides.lastWorkingDay || overrides.effectiveDate || new Date()),
    last_working_date: formatDate(overrides.lastWorkingDay || overrides.effectiveDate || new Date()),
    final_working_date: formatDate(overrides.lastWorkingDay || overrides.effectiveDate || new Date()),
    acknowledgement_date: formatDate(overrides.signatureDate || overrides.issueDate || new Date()),
    employee_acknowledgement_date: formatDate(overrides.signatureDate || overrides.issueDate || new Date()),
    document_version: overrides.documentVersion || "v1.0 (Final Approved)",
    confidentiality_level: overrides.confidentialityLevel || "STRICTLY CONFIDENTIAL",
    signature_date: formatDate(overrides.issueDate || new Date()),
    signature_place: company.city || "Wagholi, Pune",

    // Employee / Candidate Details
    employee_id: employee.employeeId || "N/A",
    employee_code: employee.employeeId || "N/A",
    employee_name: employee.fullName || `${employee.firstName} ${employee.lastName}`,
    candidate_name: employee.fullName || `${employee.firstName} ${employee.lastName}`,
    candidateName: employee.fullName || `${employee.firstName} ${employee.lastName}`,
    first_name: employee.firstName || "Employee",
    gender_prefix: genderPrefix,
    gender_pronoun_small: genderPronounSmall,
    address: employee.address || "",
    employee_address: employee.address || "",
    candidate_address: employee.address || "",
    mobile: employee.mobile || "",
    employee_mobile: employee.mobile || "",
    candidate_mobile: employee.mobile || "",
    email: employee.email || "",
    employee_email: employee.email || "",
    candidate_email: employee.email || "",
    employee_city: "Pune",
    employee_state: "Maharashtra",
    employee_pincode: "412207",

    // Promotion & Revision Specific Variables
    current_designation: overrides.currentDesignation || employee.employment?.designation || "Senior 5G Telecom Network Engineer",
    new_designation: overrides.newDesignation || "Principal 5G Telecom Solutions Architect",
    current_department: overrides.currentDepartment || employee.employment?.department || "5G Telecom Operations",
    new_department: overrides.newDepartment || overrides.department || employee.employment?.department || "5G Telecom Operations",
    current_location: overrides.currentLocation || "Wagholi, Pune, Maharashtra",
    new_location: overrides.newLocation || overrides.workLocation || "Wagholi, Pune, Maharashtra",
    current_project: overrides.currentProject || "PAN-India 5G Telecom Infrastructure Deployment",
    new_project: overrides.newProject || "Enterprise 5G & Private LTE Solutions Architecture",
    current_manager: overrides.currentManager || employee.employment?.reportingManager || "Avinash Dagdu Aade (Director)",
    new_manager: overrides.newManager || "Surekha Avinash Aade (Director)",
    certificate_purpose: overrides.certificatePurpose || "official background verification, employment history proof, and visa / higher studies processing",
    verification_id: overrides.verificationId || "OBSYRA-QR-VRF-2026-889012",
    reporting_date: formatDate(overrides.reportingDate || overrides.effectiveDate || new Date(Date.now() + 7 * 86400000)),
    handover_person: overrides.handoverPerson || "Siddharth Mehta (Lead Systems Engineer)",
    employee_remarks: overrides.employeeRemarks || "Confirmation letter received with gratitude.",

    // Position & Appointment Specific Terms
    designation: overrides.designation || employee.employment?.designation || "N/A",
    department: overrides.department || employee.employment?.department || "N/A",
    job_grade: overrides.jobGrade || "Grade L4 - Mid Senior",
    employment_level: overrides.employmentLevel || "Level M2 - Management",
    employment_type: overrides.employmentType || employee.employment?.employmentType || "Full-Time Permanent",
    employmentType: overrides.employmentType || employee.employment?.employmentType || "Full-Time Permanent",
    project_name: overrides.projectClient || "PAN-India 5G Telecom Infrastructure Deployment",
    project_client: overrides.projectClient || "PAN-India 5G Telecom Infrastructure Deployment",
    reporting_manager: overrides.reportingManager || employee.employment?.reportingManager || "Avinash Dagdu Aade (Director)",
    reporting_designation: overrides.reportingDesignation || "Director (Technical & Operations)",
    reporting_location: overrides.workLocation || employee.employment?.workLocation || company.corporateAddress,
    work_location: overrides.workLocation || employee.employment?.workLocation || company.corporateAddress,
    workLocation: overrides.workLocation || employee.employment?.workLocation || company.corporateAddress,
    date_of_joining: formatDate(overrides.joiningDate || employee.employment?.dateOfJoining),
    joining_date: formatDate(overrides.joiningDate || employee.employment?.dateOfJoining),
    joiningDate: formatDate(overrides.joiningDate || employee.employment?.dateOfJoining),
    joining_time: overrides.joiningTime || "9:30 AM",
    joiningTime: overrides.joiningTime || "9:30 AM",
    probation_period: overrides.probationPeriod || `${employee.employment?.probationPeriodMonths || 6} Months`,
    probationPeriod: overrides.probationPeriod || `${employee.employment?.probationPeriodMonths || 6} Months`,
    probation_months: overrides.probationMonths || employee.employment?.probationPeriodMonths || 6,
    working_days: overrides.workingDays || "Monday – Saturday",
    workingDays: overrides.workingDays || "Monday – Saturday",
    working_hours: overrides.workingHours || "9:30 AM – 6:30 PM",
    workingHours: overrides.workingHours || "9:30 AM – 6:30 PM",
    shift: overrides.shift || "General Day Shift (09:30 AM - 06:30 PM)",
    weekly_off: overrides.weeklyOff || "Sunday Fixed Off",
    notice_period: overrides.noticePeriod || "30 Days (1 Month)",
    noticePeriod: overrides.noticePeriod || "30 Days (1 Month)",
    notice_period_applicable: overrides.noticePeriod || "30 Days (1 Month)",
    pay_in_lieu: overrides.payInLieu || "Applicable (1 Month Notice Salary Included in F&F)",
    acceptance_deadline: formatDate(overrides.acceptanceDeadline || new Date(Date.now() + 7 * 86400000)),
    acceptanceDeadline: formatDate(overrides.acceptanceDeadline || new Date(Date.now() + 7 * 86400000)),
    offer_expiry_date: formatDate(overrides.offerExpiryDate || new Date(Date.now() + 10 * 86400000)),
    offerExpiryDate: formatDate(overrides.offerExpiryDate || new Date(Date.now() + 10 * 86400000)),

    // Warning & PIP Structured Variables
    review_period_start: formatDate(overrides.reviewPeriodStart || new Date(Date.now() - 60 * 86400000)),
    review_period_end: formatDate(overrides.reviewPeriodEnd || new Date(Date.now() - 5 * 86400000)),
    performance_issue_1: overrides.performanceIssue1 || "Inability to meet agreed-upon SLA delivery timelines on 5G network site deployments.",
    performance_issue_2: overrides.performanceIssue2 || "Variance in quality audit reports and technical configuration documentation.",
    performance_issue_3: overrides.performanceIssue3 || "Irregular attendance patterns and unauthorized shift tardiness during peak deployment schedules.",
    performance_issue_4: overrides.performanceIssue4 || "Delay in submitting weekly progress reports and client escalation notices.",
    previous_discussion_or_notice: overrides.previousDiscussion || "verbal feedback sessions and 1-on-1 performance review meetings held with your Reporting Manager",
    improvement_requirement_1: overrides.improvementReq1 || "Achieve 100% SLA timeline compliance on all assigned site deployments.",
    improvement_requirement_2: overrides.improvementReq2 || "Maintain 0% audit defect score across technical configuration deliverables.",
    improvement_requirement_3: overrides.improvementReq3 || "Ensure strict adherence to designated shift timings and 100% attendance.",
    improvement_requirement_4: overrides.improvementReq4 || "Submit daily shift handover logs and weekly status reports by 6:00 PM every Friday.",
    pip_start_date: formatDate(overrides.effectiveDate || new Date()),
    pip_end_date: formatDate(new Date(Date.parse(overrides.effectiveDate || new Date()) + 30 * 86400000)),
    employee_comments: overrides.employeeComments || "Acknowledged receipt. PIP action plan reviewed with Manager.",

    // Salary Revision & Increment Variables
    ctc: formatCurrency(ctcAnnual),
    annual_ctc: formatCurrency(ctcAnnual),
    ctc_annual: formatCurrency(ctcAnnual),
    annualCtc: formatCurrency(ctcAnnual),
    ctcAnnual: formatCurrency(ctcAnnual),
    revised_ctc: formatCurrency(ctcAnnual),
    revisedCtc: formatCurrency(ctcAnnual),
    previous_ctc: formatCurrency(Math.round(ctcAnnual * 0.85)),
    previousCtc: formatCurrency(Math.round(ctcAnnual * 0.85)),
    previous_monthly_salary: formatCurrency(Math.round(grossMonthly * 0.85)),
    revised_monthly_salary: formatCurrency(grossMonthly),
    increment_percentage: overrides.incrementPercentage || "15.0",

    // Departmental Clearance Status & Remarks
    manager_clearance: overrides.managerClearance || "Approved & Cleared",
    manager_remarks: overrides.managerRemarks || "All project deliverables & technical documentation handed over",
    hr_clearance: overrides.hrClearance || "Approved & Cleared",
    hr_remarks: overrides.hrRemarks || "Service record closed & ID badge returned",
    finance_clearance: overrides.financeClearance || "Cleared & Settled",
    finance_remarks: overrides.financeRemarks || "F&F payout calculated and approved",
    it_clearance: overrides.itClearance || "Revoked & Cleared",
    it_remarks: overrides.itRemarks || "Laptop hardware, VPN access & email credentials revoked",
    admin_clearance: overrides.adminClearance || "Approved & Cleared",
    admin_remarks: overrides.adminRemarks || "Access card, parking pass & company keys returned",
    project_clearance: overrides.projectClearance || "Approved & Cleared",
    project_remarks: overrides.projectRemarks || "Client sign-off obtained on active modules",

    // Full & Final Settlement Breakdown Items
    salary_payable: formatCurrency(overrides.salaryPending || 45000),
    salary_pending: formatCurrency(overrides.salaryPending || 45000),
    leave_encashment: formatCurrency(overrides.leaveEncashment || 15000),
    incentive_amount: formatCurrency(overrides.incentivesBonus || 10000),
    incentives_bonus: formatCurrency(overrides.incentivesBonus || 10000),
    other_payables: formatCurrency(overrides.otherPayables || 0),
    gross_settlement: formatCurrency(overrides.grossSettlement || (45000 + 15000 + 10000)),
    deductions: formatCurrency(overrides.deductions || 2000),
    net_settlement: formatCurrency(overrides.netSettlement || (45000 + 15000 + 10000 - 2000)),
    total_settlement_amount: formatCurrency(overrides.totalSettlementAmount || (45000 + 15000 + 10000 - 2000)),
    settlement_status: overrides.ffStatus || "Completed & Disbursed",
    ff_status: overrides.ffStatus || "Completed & Disbursed",
    settlement_date: formatDate(overrides.settlementDate || new Date()),
    payment_reference: overrides.paymentReference || "HDFC-NEFT-20260811-098231",

    // Termination Specific Details
    termination_type: overrides.terminationType || "Business / Operational Requirement",
    termination_reason: overrides.terminationReason || "Operational restructuring of regional technical deployment teams.",
    warning_reference: overrides.warningReference || "N/A — Operational Realignment",
    handover_status: overrides.handoverStatus || "Completed & Verified by Manager",
    it_clearance_status: overrides.itClearanceStatus || "Revoked & IT Hardware Returned",
    manager_clearance_status: overrides.managerClearanceStatus || "Approved & Signed",
    hr_clearance_status: overrides.hrClearanceStatus || "Verified & Archival Completed",
    finance_clearance_status: overrides.financeClearanceStatus || "Full & Final Settlement Processed",

    // Document Approvals & Audit Trail
    hr_prepared_by: overrides.hrPreparedBy || "Aisha Verma (Senior HR Specialist)",
    manager_approval: overrides.managerApproval || "Approved by Avinash Dagdu Aade (Director)",

    // Modular Clause Section Switches
    showSalaryTable: overrides.showSalaryTable !== undefined ? Boolean(overrides.showSalaryTable) : true,
    showProbation: overrides.showProbation !== undefined ? Boolean(overrides.showProbation) : true,
    showConfidentiality: overrides.showConfidentiality !== undefined ? Boolean(overrides.showConfidentiality) : true,
    showIpClause: overrides.showIpClause !== undefined ? Boolean(overrides.showIpClause) : true,
    showBackgroundCheck: overrides.showBackgroundCheck !== undefined ? Boolean(overrides.showBackgroundCheck) : true,
    showDocsChecklist: overrides.showDocsChecklist !== undefined ? Boolean(overrides.showDocsChecklist) : true,
    showNoticePeriod: overrides.showNoticePeriod !== undefined ? Boolean(overrides.showNoticePeriod) : true,
    showAcceptanceSheet: overrides.showAcceptanceSheet !== undefined ? Boolean(overrides.showAcceptanceSheet) : true,

    // Financial Breakdown
    basic_salary: formatCurrency(basicMonthly),
    basic_monthly: formatCurrency(basicMonthly),
    basic_annual: formatCurrency(basicMonthly * 12),
    hra: formatCurrency(hraMonthly),
    hra_monthly: formatCurrency(hraMonthly),
    hra_annual: formatCurrency(hraMonthly * 12),
    special_allowance: formatCurrency(allowancesMonthly),
    allowances_monthly: formatCurrency(allowancesMonthly),
    allowances_annual: formatCurrency(allowancesMonthly * 12),
    monthly_gross: formatCurrency(grossMonthly),
    gross_salary: formatCurrency(grossMonthly),
    gross_monthly: formatCurrency(grossMonthly),
    gross_annual: formatCurrency(grossMonthly * 12),
    employer_contribution: formatCurrency(pfMonthly),
    employer_contribution_annual: formatCurrency(pfMonthly * 12),
    ctc_words: numberToWords(ctcAnnual)
  };

  // Merge custom overrides
  Object.assign(variables, overrides);

  // Guarantee snake_case subject_line sync if subjectLine passed
  if (overrides.subjectLine) variables.subject_line = overrides.subjectLine;
  if (overrides.subject_line) variables.subjectLine = overrides.subject_line;

  let compiled = rawHtml;

  // Process conditional blocks: {{#if conditionKey}}...{{/if}}
  compiled = compiled.replace(/\{\{#if\s+([a-zA-Z0-9_]+)\}\}([\s\S]*?)\{\{\/if\}\}/gi, (match, conditionKey, innerContent) => {
    const isTrue = Boolean(variables[conditionKey]);
    return isTrue ? innerContent : '';
  });

  // Process handlebar variable replacements
  for (const [key, value] of Object.entries(variables)) {
    const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'gi');
    compiled = compiled.replace(regex, value !== undefined && value !== null ? value : '');
  }

  return compiled;
}
