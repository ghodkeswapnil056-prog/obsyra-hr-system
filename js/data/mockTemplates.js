// HR Document Templates Seed Library for Obsyra Private Limited (Updated with Modular Offer Letter)
export const initialTemplates = [
  {
    id: "TPL-OFFER-01",
    code: "OFFER",
    name: "Employment Offer Letter (3-Level Builder)",
    category: "Recruitment",
    description: "Modular Employment Offer Letter with customizable clause toggles and live field overrides",
    body: `<div style="font-family: 'Inter', Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Ref No:</strong> {{doc_number}}<br>
    <strong>Date:</strong> {{issue_date}}
  </div>

  <div style="margin-bottom: 20px; font-size: 13.5px;">
    <strong>To,</strong><br>
    <strong style="font-size: 16px; color: #0f172a;">{{candidate_name}}</strong><br>
    {{candidate_address}}<br>
    Email: {{candidate_email}} | Mobile: {{candidate_mobile}}
  </div>

  <h4 style="font-size: 15px; color: #4f46e5; margin: 20px 0 15px 0; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 6px;">
    {{subject_line}}
  </h4>

  <p>Dear <strong>{{first_name}}</strong>,</p>

  <p>We are pleased to offer you employment with <strong>{{company_name}}</strong> for the position of <strong>{{designation}}</strong> in the <strong>{{department}}</strong> department, subject to the terms and conditions outlined below.</p>

  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">1. Position & Employment Terms</h4>
  <table style="width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px;">
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 35%;">Designation:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{designation}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Department:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{department}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Employment Type:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{employment_type}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Work Location:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{work_location}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Reporting Manager:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{reporting_manager}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Proposed Date of Joining:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #4f46e5;">{{joining_date}} at {{joining_time}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Working Hours & Days:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{working_hours}} ({{working_days}})</td>
    </tr>
  </table>

  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">2. Compensation & Remuneration</h4>
  <p>Your total Annual Cost to Company (CTC) will be <strong>{{ctc_annual}}</strong> (<em>{{ctc_words}}</em>).</p>

  {{#if showSalaryTable}}
  <table style="width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px;">
    <thead>
      <tr style="background-color: #f8fafc; border-bottom: 2px solid #cbd5e1; text-align: left;">
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0;">Salary Components</th>
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0; text-align: right;">Monthly (INR)</th>
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0; text-align: right;">Annual (INR)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">Basic Salary</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{basic_monthly}}</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{basic_annual}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">House Rent Allowance (HRA)</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{hra_monthly}}</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{hra_annual}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">Special Allowances</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{allowances_monthly}}</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{allowances_annual}}</td>
      </tr>
      <tr style="background-color: #f1f5f9; font-weight: bold;">
        <td style="padding: 8px 10px; border: 1px solid #cbd5e1;">Gross CTC</td>
        <td style="padding: 8px 10px; border: 1px solid #cbd5e1; text-align: right; color: #4f46e5;">{{gross_monthly}}</td>
        <td style="padding: 8px 10px; border: 1px solid #cbd5e1; text-align: right; color: #4f46e5;">{{ctc_annual}}</td>
      </tr>
    </tbody>
  </table>
  {{/if}}

  {{#if showProbation}}
  <h4 style="color: #334155; margin-top: 18px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">3. Probation Period</h4>
  <p>You will be on probation for a period of <strong>{{probation_period}}</strong> from your date of joining. Confirmation of employment will be subject to satisfactory performance evaluation.</p>
  {{/if}}

  {{#if showConfidentiality}}
  <h4 style="color: #334155; margin-top: 18px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">4. Confidentiality & Non-Disclosure</h4>
  <p>You shall maintain strict confidentiality regarding all company trade secrets, source code, network specifications, customer data, and proprietary information accessed during employment.</p>
  {{/if}}

  {{#if showIpClause}}
  <h4 style="color: #334155; margin-top: 18px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">5. Intellectual Property</h4>
  <p>All work product, software developments, algorithms, and design documentation created during your employment shall remain the sole intellectual property of {{company_name}}.</p>
  {{/if}}

  {{#if showBackgroundCheck}}
  <h4 style="color: #334155; margin-top: 18px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">6. Background Verification</h4>
  <p>This offer is contingent upon satisfactory completion of background verification checks, educational credential validation, and past employment history audit.</p>
  {{/if}}

  {{#if showDocsChecklist}}
  <h4 style="color: #334155; margin-top: 18px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">7. Documents Required for Onboarding</h4>
  <p>Please submit self-attested copies of the following documents on or before your joining date:</p>
  <ul style="font-size: 12.5px; padding-left: 20px;">
    <li>Identity Proof (Aadhaar Card / Passport)</li>
    <li>Address Proof</li>
    <li>Educational Certificates & Transcripts</li>
    <li>Previous Employment Service / Relieving Certificates</li>
    <li>PAN Card & Bank Account Details</li>
    <li>Passport-size Photographs (4 Copies)</li>
  </ul>
  {{/if}}

  <h4 style="color: #334155; margin-top: 18px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">8. Offer Acceptance & Expiry</h4>
  <p>To accept this offer, please sign and return a duplicate copy of this letter on or before <strong>{{acceptance_deadline}}</strong>. This offer will remain valid until <strong>{{offer_expiry_date}}</strong>.</p>

  <p style="margin-top: 25px;">We look forward to welcoming you to the <strong>{{company_name}}</strong> team and wishing you a highly successful career with us!</p>

  {{#if showAcceptanceSheet}}
  <div class="document-page-break">
    <div style="text-align: center; margin-bottom: 25px; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
      <h3 style="font-family: 'Outfit', Arial, sans-serif; color: #4f46e5; text-transform: uppercase; letter-spacing: 1.5px; margin: 0; font-size: 18px;">FORMAL CANDIDATE ACCEPTANCE OF OFFER</h3>
      <div style="font-size: 12px; color: #64748b; margin-top: 4px;">Obsyra Private Limited • Duplicate Copy for HR Records</div>
    </div>

    <p style="font-size: 13.5px; line-height: 1.8;">I, <strong>{{candidate_name}}</strong>, hereby acknowledge that I have read, understood, and voluntarily accept the terms and conditions of employment offered to me for the position of <strong>{{designation}}</strong> in the <strong>{{department}}</strong> department at <strong>{{company_name}}</strong> as outlined in Offer Letter Ref No. <strong>{{doc_number}}</strong> dated <strong>{{issue_date}}</strong>.</p>

    <div style="margin-top: 50px; background: #f8fafc; border: 1.5px solid #cbd5e1; padding: 25px; border-radius: 8px;">
      <h4 style="margin: 0 0 20px 0; color: #334155; font-size: 14px; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">Candidate Sign-Off & Confirmation</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; font-size: 13px;">
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <div><strong>Candidate Full Name:</strong> {{candidate_name}}</div>
          <div><strong>Position Offered:</strong> {{designation}}</div>
          <div><strong>Confirmed Date of Joining:</strong> {{joining_date}}</div>
          <div><strong>Acceptance Date:</strong> ______________________</div>
          <div><strong>Place of Acceptance:</strong> ______________________</div>
        </div>
        <div style="text-align: right; display: flex; flex-direction: column; justify-content: flex-end;">
          <div style="margin-bottom: 50px;"><strong>Candidate Signature:</strong></div>
          <div style="border-bottom: 1.5px dashed #0f172a; width: 220px; display: inline-block;"></div>
        </div>
      </div>
    </div>
  </div>
  {{/if}}
</div>`
  },
  {
    id: "TPL-ETHICS-01",
    code: "ETHICS",
    name: "Code of Business Conduct & Ethics",
    category: "Onboarding",
    description: "Official company code of conduct policy document with mandatory employee sign-off form",
    body: `<div style="font-family: 'Inter', Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 15px;">
    <strong>Ref No:</strong> {{doc_number}}<br>
    <strong>Version:</strong> 1.0 • <strong>Effective Date:</strong> May 19, 2026
  </div>

  <h2 style="text-align: center; font-family: 'Outfit', Arial, sans-serif; color: #4f46e5; text-transform: uppercase; letter-spacing: 1px; margin: 20px 0 10px 0; font-size: 20px;">CODE OF BUSINESS CONDUCT AND ETHICS</h2>
  <div style="text-align: center; font-style: italic; color: #64748b; margin-bottom: 25px; font-size: 13px;">Dedicated to upholding the highest standards of integrity, professionalism, and compliance at <strong>{{company_name}}</strong>.</div>

  <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 6px; margin-bottom: 20px; font-size: 12.5px;">
    <strong>Document Scope & Applicability:</strong> This Code applies to all employees, contractors, field engineers, and members of the Board of Directors of {{company_name}}.
  </div>

  <h4 style="color: #334155; margin-top: 18px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">1. Introduction & Governance</h4>
  <p>At <strong>{{company_name}}</strong>, our commitment to integrity and ethical behavior is the foundation of everything we do. Every employee is required to read, understand, and comply with these standards.</p>

  <h4 style="color: #334155; margin-top: 18px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">2. Core Values & Professional Ethics</h4>
  <ul>
    <li><strong>Integrity & Honesty:</strong> Acting with integrity in all business dealings and client communications.</li>
    <li><strong>Technical Excellence:</strong> Delivering high-quality solutions across telecom networks, 5G testing, and IT services.</li>
  </ul>

  <div style="margin-top: 30px; background: #f0fdf4; border: 1.5px solid #10b981; padding: 20px; border-radius: 8px;">
    <h3 style="margin: 0 0 12px 0; color: #166534; font-family: 'Outfit', sans-serif; font-size: 16px; text-transform: uppercase;">10. Mandatory Employee Acknowledgment & Sign-Off</h3>
    <p style="font-size: 12.5px; margin-bottom: 15px;">I hereby confirm that I have read, understood, and agree to comply with the <strong>{{company_name}} Code of Business Conduct and Ethics</strong>.</p>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; font-size: 13px; margin-top: 15px;">
      <div>
        <div><strong>Employee Name:</strong> {{gender_prefix}} {{employee_name}}</div>
        <div><strong>Employee ID:</strong> {{employee_id}}</div>
        <div><strong>Designation:</strong> {{designation}}</div>
        <div><strong>Date of Agreement:</strong> {{issue_date}}</div>
      </div>
      <div style="text-align: right;">
        <div style="margin-bottom: 5px;"><strong>Employee Signature:</strong></div>
        <div style="border-bottom: 1px solid #059669; display: inline-block; width: 180px; height: 35px; text-align: center; font-family: cursive; font-size: 16px; color: #065f46; line-height: 35px;">
          {{employee_name}}
        </div>
      </div>
    </div>
  </div>
</div>`
  },
  {
    id: "TPL-APPT-01",
    code: "APPT",
    name: "Standard Appointment Letter",
    category: "Onboarding",
    description: "Comprehensive 37-point formal appointment letter with configurable legal clauses, Annexure A (Salary Breakdown) & Annexure B (Job Description)",
    body: `<div style="font-family: 'Inter', Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <!-- Letter Metadata Header -->
  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; font-size: 13px; color: #475569; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 10px;">
    <div>
      <strong>Ref No:</strong> {{appointment_letter_no}}<br>
      <strong>Employee ID:</strong> <span style="font-family: monospace; font-weight: bold; color: #4f46e5;">{{employee_id}}</span>
    </div>
    <div style="text-align: right;">
      <strong>Date of Issue:</strong> {{appointment_letter_date}}<br>
      <strong>Confidentiality:</strong> STRICTLY CONFIDENTIAL
    </div>
  </div>

  <!-- Employee Address Block -->
  <div style="margin-bottom: 20px; font-size: 13.5px;">
    <strong>To,</strong><br>
    <strong style="font-size: 16px; color: #0f172a;">{{gender_prefix}} {{employee_name}}</strong><br>
    {{employee_address}}<br>
    Email: {{employee_email}} | Mobile: {{employee_mobile}}
  </div>

  <!-- Subject Line -->
  <h3 style="text-align: center; font-family: 'Outfit', Arial, sans-serif; color: #4f46e5; text-transform: uppercase; letter-spacing: 1.5px; margin: 25px 0 15px 0; font-size: 18px; border-bottom: 2px solid #4f46e5; padding-bottom: 8px;">
    LETTER OF APPOINTMENT
  </h3>

  <p>Dear <strong>{{first_name}}</strong>,</p>

  <p>We are pleased to formally appoint you as <strong>{{designation}}</strong> in the <strong>{{department}}</strong> department with <strong>{{company_name}}</strong>, effective from <strong>{{joining_date}}</strong>. This appointment is subject to the terms and conditions outlined in this Appointment Letter, Annexures attached herewith, and applicable company policies.</p>

  <!-- Section 1: Appointment Details Table -->
  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">1. Appointment Summary & Position Details</h4>
  <table style="width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px;">
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 35%;">Employee Name:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{gender_prefix}} {{employee_name}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Employee ID:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #4f46e5;">{{employee_id}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Designation & Grade:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{designation}} ({{job_grade}})</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Department & Level:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{department}} ({{employment_level}})</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Employment Type:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{employment_type}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Date of Appointment:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{appointment_date}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Date of Joining:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #4f46e5;">{{joining_date}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Primary Work Location:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{work_location}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Reporting Manager:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{reporting_manager}} ({{reporting_designation}})</td>
    </tr>
  </table>

  <!-- Section 2: Probation & Confirmation -->
  {{#if showProbation}}
  <h4 style="color: #334155; margin-top: 18px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">2. Probation & Confirmation Terms</h4>
  <p>You will be on probation for a period of <strong>{{probation_period}}</strong> commencing from <strong>{{probation_start_date}}</strong> to <strong>{{probation_end_date}}</strong>. Confirmation of your employment is subject to written performance evaluation. Management reserves the right to extend the probation period if deemed necessary.</p>
  {{/if}}

  <!-- Section 3: Compensation & Benefits -->
  <h4 style="color: #334155; margin-top: 18px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">3. Remuneration & Benefits</h4>
  <p>Your total Annual Cost to Company (CTC) will be <strong>{{annual_ctc}}</strong> per annum (<em>{{ctc_words}}</em>). Detailed breakdown of your salary components and statutory contributions is specified in <strong>Annexure A</strong> attached herewith.</p>

  <!-- Section 4: Working Hours & Schedule -->
  <h4 style="color: #334155; margin-top: 18px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">4. Working Hours, Shift & Weekly Off</h4>
  <p>Your official working hours will be <strong>{{working_hours}}</strong> on <strong>{{working_days}}</strong>. You will be assigned to the <strong>{{shift}}</strong> with <strong>{{weekly_off}}</strong>. Business needs may require working additional hours or shifts as required.</p>

  <!-- Section 5: Place of Work & Mobility -->
  <h4 style="color: #334155; margin-top: 18px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">5. Place of Work & Transferability</h4>
  <p>Your initial place of work will be <strong>{{work_location}}</strong>. The company reserves the right to transfer or reassign your services to any department, branch, client site, or subsidiary of {{company_name}} anywhere in India.</p>

  <!-- Section 6: Confidentiality -->
  {{#if showConfidentiality}}
  <h4 style="color: #334155; margin-top: 18px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">6. Non-Disclosure & Confidentiality</h4>
  <p>You agree to maintain absolute confidentiality regarding all company trade secrets, source codes, 5G network architecture, client lists, and financial records. Disclosure of proprietary data shall attract immediate legal action.</p>
  {{/if}}

  <!-- Section 7: Intellectual Property -->
  {{#if showIpClause}}
  <h4 style="color: #334155; margin-top: 18px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">7. Intellectual Property Assignment</h4>
  <p>All work product, inventions, software, patents, technical designs, and algorithms created by you during employment shall belong exclusively to {{company_name}} without additional compensation.</p>
  {{/if}}

  <!-- Section 8: Company Assets -->
  <h4 style="color: #334155; margin-top: 18px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">8. Company Assets & IT Usage</h4>
  <p>Company equipment (laptops, mobile devices, ID badges, access tokens) provided to you must be handled responsibly and returned immediately upon cessation of employment.</p>

  <!-- Section 9: Information Security & Data Protection -->
  <h4 style="color: #334155; margin-top: 18px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">9. Information Security & Compliance</h4>
  <p>You must strictly adhere to the company's Information Security Policy, ISO/IEC compliance standards, and Data Protection regulations. Unauthorized network access is prohibited.</p>

  <!-- Section 10: Notice Period & Termination -->
  {{#if showNoticePeriod}}
  <h4 style="color: #334155; margin-top: 18px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">10. Notice Period & Service Termination</h4>
  <p>During probation, either party may terminate employment by giving <strong>15 Days</strong> notice in writing. Post-confirmation, the notice period shall be <strong>{{notice_period}}</strong> or salary in lieu thereof, subject to management approval.</p>
  {{/if}}

  <!-- Section 11: Company Policies Checklist -->
  <h4 style="color: #334155; margin-top: 18px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">11. Governing Policies & Code of Conduct</h4>
  <p>Your employment will be governed by the company's policies as amended from time to time, including:</p>
  <ul style="font-size: 12.5px; padding-left: 20px;">
    <li>Code of Business Conduct & Ethics Policy</li>
    <li>POSH & Workplace Dignity Policy</li>
    <li>Attendance & Leave Policy</li>
    <li>Information Security & IT Usage Policy</li>
  </ul>

  <!-- Section 12: Declaration & Acknowledgment -->
  <div style="margin-top: 35px; background: #f8fafc; border: 1.5px solid #cbd5e1; padding: 20px; border-radius: 8px;">
    <h4 style="margin: 0 0 10px 0; color: #334155; font-size: 14px; text-transform: uppercase;">Employee Acceptance & Declaration</h4>
    <p style="font-size: 12.5px; margin-bottom: 15px;">I, <strong>{{gender_prefix}} {{employee_name}}</strong>, acknowledge that I have read, understood, and agree to abide by all the terms, conditions, and policies specified in this Appointment Letter.</p>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; font-size: 13px; margin-top: 15px;">
      <div>
        <div><strong>Employee Signature:</strong> ______________________</div>
        <div style="margin-top: 6px;"><strong>Date:</strong> ______________________</div>
      </div>
      <div style="text-align: right;">
        <div><strong>For {{company_name}}</strong></div>
        <div style="margin-top: 20px;"><strong>Authorized Signatory</strong></div>
      </div>
    </div>
  </div>

  <!-- ANNEXURE A: COMPENSATION STRUCTURE SHEET -->
  {{#if showSalaryTable}}
  <div class="document-page-break">
    <div style="text-align: center; margin-bottom: 20px; border-bottom: 2px solid #4f46e5; padding-bottom: 8px;">
      <h3 style="font-family: 'Outfit', Arial, sans-serif; color: #4f46e5; text-transform: uppercase; letter-spacing: 1.5px; margin: 0; font-size: 16px;">ANNEXURE A — COMPENSATION STRUCTURE</h3>
      <div style="font-size: 11.5px; color: #64748b;">Ref No: {{appointment_letter_no}} • Employee: {{employee_name}} ({{employee_id}})</div>
    </div>

    <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 13px;">
      <thead>
        <tr style="background-color: #f8fafc; border-bottom: 2px solid #cbd5e1; text-align: left;">
          <th style="padding: 8px 10px; border: 1px solid #e2e8f0;">Salary Components & Benefits</th>
          <th style="padding: 8px 10px; border: 1px solid #e2e8f0; text-align: right;">Monthly (INR)</th>
          <th style="padding: 8px 10px; border: 1px solid #e2e8f0; text-align: right;">Annual (INR)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">Basic Salary</td>
          <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{basic_monthly}}</td>
          <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{basic_annual}}</td>
        </tr>
        <tr>
          <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">House Rent Allowance (HRA)</td>
          <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{hra_monthly}}</td>
          <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{hra_annual}}</td>
        </tr>
        <tr>
          <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">Special Allowances</td>
          <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{allowances_monthly}}</td>
          <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{allowances_annual}}</td>
        </tr>
        <tr style="background-color: #f1f5f9; font-weight: bold;">
          <td style="padding: 8px 10px; border: 1px solid #cbd5e1;">Gross Monthly Salary</td>
          <td style="padding: 8px 10px; border: 1px solid #cbd5e1; text-align: right; color: #4f46e5;">{{gross_monthly}}</td>
          <td style="padding: 8px 10px; border: 1px solid #cbd5e1; text-align: right; color: #4f46e5;">{{gross_annual}}</td>
        </tr>
        <tr>
          <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">Employer PF Contribution</td>
          <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{employer_contribution}}</td>
          <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{employer_contribution_annual}}</td>
        </tr>
        <tr style="background-color: #f0fdf4; font-weight: bold;">
          <td style="padding: 10px; border: 1.5px solid #10b981; color: #166534;">TOTAL ANNUAL CTC</td>
          <td style="padding: 10px; border: 1.5px solid #10b981; text-align: right; color: #166534;">-</td>
          <td style="padding: 10px; border: 1.5px solid #10b981; text-align: right; color: #166534; font-size: 15px;">{{annual_ctc}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  {{/if}}

  <!-- ANNEXURE B: JOB DESCRIPTION & KEY DELIVERABLES SHEET -->
  {{#if showAcceptanceSheet}}
  <div class="document-page-break">
    <div style="text-align: center; margin-bottom: 20px; border-bottom: 2px solid #4f46e5; padding-bottom: 8px;">
      <h3 style="font-family: 'Outfit', Arial, sans-serif; color: #4f46e5; text-transform: uppercase; letter-spacing: 1.5px; margin: 0; font-size: 16px;">ANNEXURE B — JOB DESCRIPTION & KEY DELIVERABLES</h3>
      <div style="font-size: 11.5px; color: #64748b;">Designation: {{designation}} • Department: {{department}}</div>
    </div>

    <div style="font-size: 13px; line-height: 1.7;">
      <h4 style="color: #334155; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">Primary Role Summary:</h4>
      <p>As <strong>{{designation}}</strong>, you will be responsible for executing key deliverables within the {{department}} division at {{company_name}}.</p>

      <h4 style="color: #334155; margin-top: 15px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">Key Responsibilities:</h4>
      <ol style="padding-left: 20px;">
        <li>Manage project execution, technical deployments, and 5G network operations.</li>
        <li>Coordinate with cross-functional technical teams and client management.</li>
        <li>Prepare performance metrics, SLA compliance reports, and quality audits.</li>
        <li>Ensure zero-defect deliverables and adhere to enterprise security protocols.</li>
      </ol>

      <div style="margin-top: 40px; display: grid; grid-template-columns: 1fr 1fr; gap: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
        <div>
          <div><strong>Employee Signature:</strong></div>
          <div style="border-bottom: 1px solid #0f172a; width: 180px; margin-top: 35px;"></div>
        </div>
        <div style="text-align: right;">
          <div><strong>Authorized Manager Signature:</strong></div>
          <div style="border-bottom: 1px solid #0f172a; width: 180px; margin-top: 35px; display: inline-block;"></div>
        </div>
      </div>
    </div>
  </div>
  {{/if}}
</div>`
  },
  {
    id: "TPL-INCR-01",
    code: "INCR",
    name: "Salary Increment Letter",
    category: "Salary",
    description: "Annual salary revision and appraisal increment confirmation letter",
    body: `<div style="font-family: 'Inter', Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Ref No:</strong> {{doc_number}}<br>
    <strong>Date:</strong> {{letter_date}}
  </div>

  <h3 style="text-align: center; font-family: 'Outfit', Arial, sans-serif; color: #10b981; text-transform: uppercase; letter-spacing: 1.5px; margin: 20px 0 15px 0; font-size: 18px; border-bottom: 2px solid #10b981; padding-bottom: 8px;">
    SALARY REVISION & INCREMENT CONFIRMATION
  </h3>

  <table style="width: 100%; border-collapse: collapse; margin: 15px 0 20px 0; font-size: 13px;">
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 25%;">Date:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{letter_date}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 25%;">Employee Code:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #4f46e5;">{{employee_code}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Employee Name:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold;">{{employee_name}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Designation:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{designation}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Department:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;" colspan="3">{{department}}</td>
    </tr>
  </table>

  <p>Dear <strong>{{employee_name}}</strong>,</p>

  <p>We are pleased to inform you that, in recognition of your performance, dedication, contribution, and continued association with <strong>{{company_name}}</strong>, your salary has been revised with effect from <strong>{{effective_date}}</strong>.</p>

  <p>Your existing annual CTC of <strong>{{previous_ctc}}</strong> has been revised to <strong>{{revised_ctc}}</strong> per annum, representing an increment of <strong>{{increment_percentage}}%</strong>.</p>

  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">Revised Compensation Summary</h4>
  <table style="width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px;">
    <thead>
      <tr style="background-color: #f8fafc; border-bottom: 2px solid #cbd5e1; text-align: left;">
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0;">Particulars</th>
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0; text-align: right;">Existing</th>
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0; text-align: right;">Revised</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">Monthly Gross Salary</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{previous_monthly_salary}}</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right; font-weight: bold; color: #10b981;">{{revised_monthly_salary}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">Annual CTC</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{previous_ctc}}</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right; font-weight: bold; color: #10b981;">{{revised_ctc}}</td>
      </tr>
      <tr style="background-color: #f0fdf4;">
        <td style="padding: 6px 10px; border: 1px solid #cbd5e1; font-weight: bold;">Increment (%)</td>
        <td style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: right;">—</td>
        <td style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: right; font-weight: bold; color: #10b981;">{{increment_percentage}}%</td>
      </tr>
    </tbody>
  </table>

  <p>The revised compensation will be subject to applicable statutory deductions, taxes, company policies, and the terms and conditions of your employment. The detailed salary structure may be provided separately through the company's payroll system.</p>

  <p>We appreciate your valuable contribution and the efforts you have made toward achieving the objectives of the organization. We expect you to continue maintaining the same level of professionalism, commitment, and performance in your role.</p>

  <p>We congratulate you on this salary revision and look forward to your continued contribution and growth with <strong>{{company_name}}</strong>.</p>

  <p style="margin-top: 20px;">Please acknowledge receipt and acceptance of this letter through the designated HR process.</p>

  <div style="margin-top: 30px;">
    <p style="margin-bottom: 5px;"><strong>For {{company_name}}</strong></p>
    <p style="margin-top: 40px; font-weight: bold; color: #0f172a; margin-bottom: 2px;">{{authorized_signatory}}</p>
    <p style="color: #64748b; font-size: 13px; margin: 0;">{{signatory_designation}}<br>{{company_name}}</p>
  </div>

  <div style="margin-top: 35px; background: #f8fafc; border: 1.5px solid #cbd5e1; padding: 20px; border-radius: 8px;">
    <h4 style="margin: 0 0 12px 0; color: #334155; font-size: 14px; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">Employee Acknowledgement</h4>
    <p style="font-size: 13px; margin-bottom: 15px;">I, <strong>{{employee_name}}</strong>, Employee Code <strong>{{employee_code}}</strong>, acknowledge receipt of this Salary Revision & Increment Confirmation Letter.</p>
    <div style="display: flex; justify-content: space-between; font-size: 13px; margin-top: 25px;">
      <div><strong>Employee Signature:</strong> ____________________</div>
      <div><strong>Date:</strong> {{acknowledgement_date}}</div>
    </div>
  </div>
</div>`
  },
  {
    id: "TPL-EXP-01",
    code: "EXP",
    name: "Experience Certificate",
    category: "Certificates",
    description: "Service experience certificate issued to former or departing employees",
    body: `<div style="font-family: 'Inter', Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Certificate No:</strong> {{certificate_number}}<br>
    <strong>Date:</strong> {{certificate_date}}
  </div>

  <h3 style="text-align: center; font-family: 'Outfit', Arial, sans-serif; color: #4f46e5; text-transform: uppercase; letter-spacing: 1.5px; margin: 20px 0 15px 0; font-size: 18px; border-bottom: 2px solid #4f46e5; padding-bottom: 8px;">
    TO WHOMSOEVER IT MAY CONCERN
  </h3>

  <table style="width: 100%; border-collapse: collapse; margin: 15px 0 20px 0; font-size: 13px;">
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 25%;">Certificate No:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #4f46e5;">{{certificate_number}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 25%;">Date:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{certificate_date}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Employee Code:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #4f46e5;" colspan="3">{{employee_code}}</td>
    </tr>
  </table>

  <p style="font-size: 14px; line-height: 1.8;">This is to certify that <strong>{{employee_name}}</strong>, Employee Code <strong>{{employee_code}}</strong>, was associated with <strong>{{company_name}}</strong> as <strong>{{designation}}</strong> in the <strong>{{department}}</strong> department from <strong>{{joining_date}}</strong> to <strong>{{last_working_date}}</strong>.</p>

  <p>During the period of their association with the organization, the employee was responsible for duties and responsibilities related to their assigned role, project, and organizational requirements.</p>

  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">Employment Details</h4>
  <table style="width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px;">
    <thead>
      <tr style="background-color: #f8fafc; border-bottom: 2px solid #cbd5e1; text-align: left;">
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0; width: 35%;">Particulars</th>
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0;">Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Employee Name</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold;">{{employee_name}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Employee Code</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #4f46e5;">{{employee_code}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Designation</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{designation}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Department</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{department}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Employment Type</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{employment_type}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Project / Client</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{project_name}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Work Location</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{work_location}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Date of Joining</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{joining_date}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Last Working Date</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #4f46e5;">{{last_working_date}}</td>
      </tr>
    </tbody>
  </table>

  <p>During their tenure, their conduct and professional association with the organization were recorded in accordance with the applicable company policies and employment terms.</p>

  <p>This certificate is being issued at the request of <strong>{{employee_name}}</strong> for <strong>{{certificate_purpose}}</strong>.</p>

  <p>We wish them success and the very best in their future professional and personal endeavors.</p>

  <p style="font-size: 12.5px; color: #64748b; margin-top: 15px;">This certificate is issued based on the records available with <strong>{{company_name}}</strong> and does not, by itself, constitute a waiver of any outstanding obligation or contractual requirement unless separately confirmed by the organization.</p>

  <div style="margin-top: 30px;">
    <p style="margin-bottom: 5px;">For <strong>{{company_name}}</strong>,</p>
    <p style="margin-top: 40px; font-weight: bold; color: #0f172a; margin-bottom: 2px;">{{authorized_signatory}}</p>
    <p style="color: #64748b; font-size: 13px; margin: 0;">{{signatory_designation}}<br>{{company_name}}</p>
  </div>

  <div style="margin-top: 35px; border-top: 1px dashed #cbd5e1; padding-top: 15px; font-size: 12px; color: #64748b; display: flex; justify-content: space-between; align-items: center;">
    <div><strong>Company Seal:</strong> ____________________</div>
    <div><strong>Verification Reference:</strong> <span style="font-family: monospace; font-weight: bold; color: #4f46e5;">{{verification_id}}</span></div>
  </div>
</div>`
  },
  {
    id: "TPL-PROM-01",
    code: "PROM",
    name: "Promotion & Grade Revision Letter",
    category: "Lifecycle",
    description: "Official career promotion and designation advancement letter",
    body: `<div style="font-family: 'Inter', Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Promotion Letter No:</strong> {{promotion_letter_number}}<br>
    <strong>Date:</strong> {{letter_date}}
  </div>

  <h3 style="text-align: center; font-family: 'Outfit', Arial, sans-serif; color: #6366f1; text-transform: uppercase; letter-spacing: 1.5px; margin: 20px 0 15px 0; font-size: 18px; border-bottom: 2px solid #6366f1; padding-bottom: 8px;">
    LETTER OF PROMOTION
  </h3>

  <table style="width: 100%; border-collapse: collapse; margin: 15px 0 20px 0; font-size: 13px;">
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 25%;">Promotion Letter No:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #4f46e5;">{{promotion_letter_number}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 25%;">Date:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{letter_date}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Employee Code:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #4f46e5;">{{employee_code}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Employee Name:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold;">{{employee_name}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Current Designation:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{current_designation}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Department:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{department}}</td>
    </tr>
  </table>

  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">Subject: Promotion to {{new_designation}}</h4>

  <p>Dear <strong>{{employee_name}}</strong>,</p>

  <p>We are pleased to inform you that, in recognition of your <strong>performance, dedication, professional growth, skills, and contribution to {{company_name}}</strong>, you have been promoted from <strong>{{current_designation}}</strong> to <strong>{{new_designation}}</strong>, effective from <strong>{{effective_date}}</strong>.</p>

  <p>With this promotion, you will assume the responsibilities, authority, and duties associated with your new position. You will be expected to perform your responsibilities with the highest standards of professionalism, accountability, integrity, and commitment.</p>

  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">Revised Position Details</h4>
  <table style="width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px;">
    <thead>
      <tr style="background-color: #f8fafc; border-bottom: 2px solid #cbd5e1; text-align: left;">
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0; width: 28%;">Particulars</th>
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0; width: 36%;">Existing</th>
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0; width: 36%;">Revised</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Designation</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{current_designation}}</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #6366f1;">{{new_designation}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Department</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{department}}</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold;">{{new_department}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Reporting Manager</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{current_manager}}</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold;">{{new_manager}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Project / Client</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{current_project}}</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold;">{{new_project}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Work Location</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{current_location}}</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold;">{{new_location}}</td>
      </tr>
      <tr style="background-color: #f5f3ff;">
        <td style="padding: 6px 10px; border: 1px solid #ddd6fe; font-weight: bold;">Effective Date</td>
        <td style="padding: 6px 10px; border: 1px solid #ddd6fe;">—</td>
        <td style="padding: 6px 10px; border: 1px solid #ddd6fe; font-weight: bold; color: #6366f1;">{{effective_date}}</td>
      </tr>
    </tbody>
  </table>

  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">Compensation</h4>
  <p>Your revised annual CTC will be <strong>{{revised_ctc}}</strong>, effective from <strong>{{effective_date}}</strong>, subject to applicable statutory deductions, taxes, company policies, and the terms of your employment.</p>

  <p>The detailed revised salary structure, if applicable, will be communicated separately through the company's payroll/HR system.</p>

  <p>We appreciate your valuable contribution and the efforts you have made toward the growth and success of the organization. This promotion reflects our confidence in your abilities and your potential to take on increased responsibilities.</p>

  <p>We encourage you to approach your new role with the same dedication and professionalism and to continue contributing positively toward the objectives of <strong>{{company_name}}</strong>.</p>

  <p style="margin-top: 20px; font-weight: bold; color: #4c1d95;">Congratulations on your well-deserved promotion. We wish you continued success and growth in your new position.</p>

  <div style="margin-top: 30px;">
    <p style="margin-bottom: 5px;">For <strong>{{company_name}}</strong>,</p>
    <p style="margin-top: 40px; font-weight: bold; color: #0f172a; margin-bottom: 2px;">{{authorized_signatory}}</p>
    <p style="color: #64748b; font-size: 13px; margin: 0;">{{signatory_designation}}<br>{{company_name}}</p>
  </div>

  <div style="margin-top: 35px; background: #f8fafc; border: 1.5px solid #cbd5e1; padding: 20px; border-radius: 8px;">
    <h4 style="margin: 0 0 12px 0; color: #334155; font-size: 14px; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">EMPLOYEE ACKNOWLEDGEMENT</h4>
    <p style="font-size: 13px; margin-bottom: 15px;">I, <strong>{{employee_name}}</strong>, Employee Code <strong>{{employee_code}}</strong>, acknowledge receipt of this Letter of Promotion and confirm that I have been informed of my revised designation, responsibilities, and applicable employment terms.</p>
    
    <div style="display: flex; justify-content: space-between; font-size: 13px; margin: 25px 0 15px 0;">
      <div><strong>Employee Signature:</strong> __________________________</div>
      <div><strong>Date:</strong> {{employee_acknowledgement_date}}</div>
    </div>

    <div style="margin-top: 15px; font-size: 13px;">
      <strong>Employee Remarks:</strong>
      <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px; margin-top: 5px; font-style: italic; color: #475569;">
        {{employee_remarks}}
      </div>
    </div>
  </div>
</div>`
  },
  {
    id: "TPL-NDA-01",
    code: "NDA",
    name: "Non-Disclosure & Confidentiality Agreement",
    category: "Legal",
    description: "Legal non-disclosure and intellectual property protection agreement",
    body: `<div style="font-family: 'Inter', Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Agreement No:</strong> {{nda_number}}<br>
    <strong>Date:</strong> {{agreement_date}}
  </div>

  <h3 style="text-align: center; font-family: 'Outfit', Arial, sans-serif; color: #dc2626; text-transform: uppercase; letter-spacing: 1.5px; margin: 20px 0 15px 0; font-size: 18px; border-bottom: 2px solid #dc2626; padding-bottom: 8px;">
    EMPLOYEE NON-DISCLOSURE AGREEMENT
  </h3>

  <p>This Employee Non-Disclosure Agreement ("Agreement") is entered into between:</p>

  <p><strong>{{company_name}}</strong>, having its registered/office address at <strong>{{company_address}}</strong>, hereinafter referred to as the <strong>"Company"</strong>,</p>

  <p>and</p>

  <p><strong>{{employee_name}}</strong>, Employee Code <strong>{{employee_code}}</strong>, holding the position of <strong>{{designation}}</strong>, residing at <strong>{{employee_address}}</strong>, hereinafter referred to as the <strong>"Employee"</strong>.</p>

  <p>The Company and the Employee are collectively referred to as the <strong>"Parties."</strong></p>

  <h4 style="color: #dc2626; margin-top: 20px; border-bottom: 1px solid #fca5a5; padding-bottom: 4px;">1. Purpose</h4>
  <p>During the course of employment, the Employee may have access to confidential, proprietary, technical, commercial, operational, financial, customer, employee, project, and business information belonging to the Company or its clients.</p>
  <p>The purpose of this Agreement is to protect such information from unauthorized access, disclosure, copying, use, or distribution.</p>

  <h4 style="color: #dc2626; margin-top: 20px; border-bottom: 1px solid #fca5a5; padding-bottom: 4px;">2. Confidential Information</h4>
  <p style="margin-bottom: 8px;">For the purposes of this Agreement, "Confidential Information" may include, but is not limited to:</p>
  <ul style="font-size: 13px; line-height: 1.7; margin-left: 20px;">
    <li>Company business plans, strategies, and processes.</li>
    <li>Customer and client information.</li>
    <li>Employee and personnel information.</li>
    <li>Technical specifications, designs, configurations, and documentation.</li>
    <li>Software, source code, applications, databases, systems, and technical information.</li>
    <li>Project information, reports, test results, and operational data.</li>
    <li>Pricing, quotations, contracts, commercial information, and financial data.</li>
    <li>Passwords, credentials, access information, security procedures, and system information.</li>
    <li>Vendor, supplier, partner, and business relationship information.</li>
    <li>Internal communications, reports, presentations, and documents.</li>
    <li>Any information identified as confidential or which reasonably should be understood to be confidential.</li>
  </ul>

  <h4 style="color: #dc2626; margin-top: 20px; border-bottom: 1px solid #fca5a5; padding-bottom: 4px;">3. Employee Obligations</h4>
  <p style="margin-bottom: 8px;">The Employee agrees to:</p>
  <ol style="font-size: 13px; line-height: 1.7; margin-left: 20px;">
    <li>Use Confidential Information only for authorized employment-related purposes.</li>
    <li>Not disclose Confidential Information to any unauthorized person or third party.</li>
    <li>Protect Confidential Information using reasonable security measures.</li>
    <li>Not copy, reproduce, transfer, publish, or distribute Confidential Information without authorization.</li>
    <li>Immediately report any suspected loss, unauthorized access, disclosure, or security incident to the Company.</li>
    <li>Follow the Company's information-security, data-protection, IT, and confidentiality policies.</li>
    <li>Not use Company or client information for personal benefit or for the benefit of another organization.</li>
  </ol>

  <h4 style="color: #dc2626; margin-top: 20px; border-bottom: 1px solid #fca5a5; padding-bottom: 4px;">4. Client and Third-Party Information</h4>
  <p>Where the Employee has access to confidential information belonging to a client, customer, vendor, partner, or other third party, the Employee shall protect such information in accordance with the applicable contractual obligations, Company policies, and authorized instructions.</p>
  <p>The Employee shall not disclose or use such information except for authorized business purposes.</p>

  <h4 style="color: #dc2626; margin-top: 20px; border-bottom: 1px solid #fca5a5; padding-bottom: 4px;">5. Company Property and Information</h4>
  <p>All documents, records, files, equipment, credentials, software, storage devices, databases, communications, and other materials provided by or created for the Company in connection with employment shall be handled in accordance with Company policy.</p>
  <p>Upon request or separation from employment, the Employee shall return or securely delete Company information and property as instructed by the Company, subject to applicable legal or regulatory retention requirements.</p>

  <h4 style="color: #dc2626; margin-top: 20px; border-bottom: 1px solid #fca5a5; padding-bottom: 4px;">6. Exclusions</h4>
  <p style="margin-bottom: 8px;">Confidential Information does not include information that:</p>
  <ul style="font-size: 13px; line-height: 1.7; margin-left: 20px;">
    <li>Is publicly available through no breach of this Agreement;</li>
    <li>Was lawfully known to the Employee before disclosure by the Company;</li>
    <li>Is lawfully received from an authorized third party without a confidentiality obligation; or</li>
    <li>Is independently developed by the Employee without unauthorized use of Confidential Information.</li>
  </ul>
  <p>Nothing in this Agreement is intended to prevent the Employee from making disclosures that are required or protected by applicable law.</p>

  <h4 style="color: #dc2626; margin-top: 20px; border-bottom: 1px solid #fca5a5; padding-bottom: 4px;">7. Duration of Confidentiality</h4>
  <p>The Employee's confidentiality obligations will apply throughout the period of employment and will continue after the end of employment for so long as the relevant information remains confidential or protected under applicable law, contractual obligations, or Company policy.</p>

  <div class="document-page-break">
    <h4 style="color: #dc2626; margin-top: 10px; border-bottom: 1px solid #fca5a5; padding-bottom: 4px;">8. Intellectual Property</h4>
    <p>The Employee acknowledges that intellectual property, work product, documentation, software, designs, inventions, developments, and other materials created in the course of employment may be subject to the Company's applicable intellectual-property policies, employment terms, and separate agreements.</p>
    <p>Nothing in this Agreement changes ownership rights except as expressly provided in a valid applicable agreement.</p>
  </div>

  <h4 style="color: #dc2626; margin-top: 20px; border-bottom: 1px solid #fca5a5; padding-bottom: 4px;">9. Breach</h4>
  <p>Any unauthorized disclosure, use, copying, transfer, or misuse of Confidential Information may result in disciplinary action and/or other remedies available to the Company under applicable law and contractual terms.</p>
  <p>The Company reserves the right to take appropriate action in response to an actual or suspected breach.</p>

  <h4 style="color: #dc2626; margin-top: 20px; border-bottom: 1px solid #fca5a5; padding-bottom: 4px;">10. No Unauthorized Commitment</h4>
  <p>The Employee shall not use Confidential Information or represent that they have authority to enter into commitments, agreements, or obligations on behalf of the Company unless expressly authorized.</p>

  <h4 style="color: #dc2626; margin-top: 20px; border-bottom: 1px solid #fca5a5; padding-bottom: 4px;">11. Compliance With Company Policies</h4>
  <p>The Employee agrees to comply with all applicable Company policies relating to confidentiality, information security, acceptable use, data protection, intellectual property, client information, and records management, as amended from time to time.</p>

  <h4 style="color: #dc2626; margin-top: 20px; border-bottom: 1px solid #fca5a5; padding-bottom: 4px;">12. Acknowledgement</h4>
  <p>The Employee confirms that they have read and understood this Agreement and agree to comply with its confidentiality obligations.</p>
  <p>The Employee further acknowledges that unauthorized disclosure or misuse of confidential information may adversely affect the Company, its employees, clients, customers, and business partners.</p>

  <h4 style="color: #dc2626; margin-top: 20px; border-bottom: 1px solid #fca5a5; padding-bottom: 4px;">13. Governing Law</h4>
  <p>This Agreement shall be governed by and interpreted in accordance with the applicable laws of <strong>India</strong>, subject to the applicable jurisdiction and enforceability of its provisions.</p>

  <h4 style="color: #dc2626; margin-top: 20px; border-bottom: 1px solid #fca5a5; padding-bottom: 4px;">14. Entire Agreement</h4>
  <p>This Agreement should be read together with the Employee's employment agreement, appointment letter, Company policies, and any other applicable confidentiality or intellectual-property agreements.</p>
  <p>If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall continue to the extent permitted by applicable law.</p>

  <div style="margin-top: 35px; border-top: 2px solid #cbd5e1; padding-top: 20px;">
    <h4 style="margin: 0 0 15px 0; color: #334155; font-size: 15px; text-transform: uppercase; text-align: center;">SIGNATURES</h4>

    <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 13px;">
      <tr>
        <td style="width: 48%; padding: 12px; border: 1px solid #e2e8f0; vertical-align: top; background: #fafafa;">
          <strong style="color: #0f172a;">For {{company_name}}</strong><br><br>
          <strong>Authorized Signatory:</strong> {{authorized_signatory}}<br>
          <strong>Designation:</strong> {{signatory_designation}}<br><br>
          <strong>Signature:</strong> __________________________<br><br>
          <strong>Date:</strong> {{company_signature_date}}
        </td>
        <td style="width: 4%;"></td>
        <td style="width: 48%; padding: 12px; border: 1px solid #e2e8f0; vertical-align: top; background: #fafafa;">
          <strong style="color: #0f172a;">Employee</strong><br><br>
          <strong>Name:</strong> {{employee_name}}<br>
          <strong>Employee Code:</strong> {{employee_code}}<br>
          <strong>Designation:</strong> {{designation}}<br><br>
          <strong>Signature:</strong> __________________________<br><br>
          <strong>Date:</strong> {{employee_signature_date}}
        </td>
      </tr>
    </table>

    <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 13px;">
      <tr>
        <td style="width: 48%; padding: 12px; border: 1px solid #e2e8f0; vertical-align: top; background: #f8fafc;">
          <strong style="color: #334155;">Witness 1</strong><br><br>
          <strong>Name:</strong> {{witness_1_name}}<br><br>
          <strong>Signature:</strong> __________________________<br><br>
          <strong>Date:</strong> {{witness_1_date}}
        </td>
        <td style="width: 4%;"></td>
        <td style="width: 48%; padding: 12px; border: 1px solid #e2e8f0; vertical-align: top; background: #f8fafc;">
          <strong style="color: #334155;">Witness 2</strong><br><br>
          <strong>Name:</strong> {{witness_2_name}}<br><br>
          <strong>Signature:</strong> __________________________<br><br>
          <strong>Date:</strong> {{witness_2_date}}
        </td>
      </tr>
    </table>

    <div style="margin-top: 20px; font-size: 13px; color: #64748b;">
      <strong>Company Seal:</strong> __________________________
    </div>
  </div>
</div>`
  },
  {
    id: "TPL-REL-01",
    code: "REL",
    name: "Relieving Order & Service Release",
    category: "Exit",
    description: "Official service relieving letter issued upon full & final clearance",
    body: `<div style="font-family: 'Inter', Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Relieving Order No:</strong> {{relieving_order_number}}<br>
    <strong>Date:</strong> {{relieving_date}}
  </div>

  <h3 style="text-align: center; font-family: 'Outfit', Arial, sans-serif; color: #0284c7; text-transform: uppercase; letter-spacing: 1.5px; margin: 20px 0 15px 0; font-size: 18px; border-bottom: 2px solid #0284c7; padding-bottom: 8px;">
    RELIEVING ORDER
  </h3>

  <table style="width: 100%; border-collapse: collapse; margin: 15px 0 20px 0; font-size: 13px;">
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 25%;">Relieving Order No:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #0284c7;">{{relieving_order_number}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 25%;">Date:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{relieving_date}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Employee Code:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #4f46e5;">{{employee_code}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Employee Name:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold;">{{employee_name}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Designation:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{designation}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Department:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{department}}</td>
    </tr>
  </table>

  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">Subject: Relieving Order & Service Release</h4>

  <p>Dear <strong>{{employee_name}}</strong>,</p>

  <p>This is to formally confirm that <strong>{{employee_name}}</strong>, Employee Code <strong>{{employee_code}}</strong>, employed with <strong>{{company_name}}</strong> as <strong>{{designation}}</strong> in the <strong>{{department}}</strong> department, has been relieved from the services of the Company with effect from <strong>{{last_working_date}}</strong>.</p>

  <p>The employee joined the organization on <strong>{{joining_date}}</strong> and has completed the applicable notice period and separation formalities in accordance with the terms of employment and applicable Company policies.</p>

  <p style="margin-bottom: 8px;">Prior to release from service, the employee was required to complete the following formalities:</p>
  <ul style="font-size: 13px; line-height: 1.8; margin-left: 20px; color: #1e293b;">
    <li>Handover of assigned responsibilities and ongoing work.</li>
    <li>Transfer of relevant project/client information and documentation.</li>
    <li>Return of Company assets, equipment, ID cards, documents, and other property.</li>
    <li>Completion of IT, HR, Administration, Finance, and project clearance.</li>
    <li>Settlement of any applicable outstanding dues or recoveries.</li>
    <li>Completion of required exit documentation and formalities.</li>
  </ul>

  <p>Based on the records available with the Company, the employee has completed the applicable relieving and clearance formalities as of <strong>{{clearance_date}}</strong>.</p>

  <p>The employee's <strong>Full & Final Settlement</strong>, wherever applicable, shall be processed separately in accordance with Company policy and applicable terms.</p>

  <p>The Company confirms that the employee is relieved from their duties and responsibilities with effect from the above-mentioned date.</p>

  <p>We thank <strong>{{employee_name}}</strong> for their services and contribution during their association with <strong>{{company_name}}</strong> and wish them success in their future professional endeavors.</p>

  <p style="font-size: 12.5px; color: #64748b;">This Relieving Order is issued upon the employee's request for official and employment-related purposes.</p>

  <div style="margin-top: 30px;">
    <p style="margin-bottom: 5px;">For <strong>{{company_name}}</strong>,</p>
    <p style="margin-top: 40px; font-weight: bold; color: #0f172a; margin-bottom: 2px;">{{authorized_signatory}}</p>
    <p style="color: #64748b; font-size: 13px; margin: 0;">{{signatory_designation}}<br>{{company_name}}</p>
    <p style="font-size: 12.5px; color: #64748b; margin-top: 15px;">Company Seal: __________________________</p>
  </div>

  <div style="margin-top: 35px; background: #f8fafc; border: 1.5px solid #cbd5e1; padding: 20px; border-radius: 8px;">
    <h4 style="margin: 0 0 12px 0; color: #334155; font-size: 14px; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">EMPLOYEE ACKNOWLEDGEMENT</h4>
    <p style="font-size: 13px; margin-bottom: 15px;">I, <strong>{{employee_name}}</strong>, Employee Code <strong>{{employee_code}}</strong>, acknowledge receipt of this Relieving Order and confirm that I have completed the applicable separation and handover formalities.</p>
    
    <div style="display: flex; justify-content: space-between; font-size: 13px; margin: 25px 0 15px 0;">
      <div><strong>Employee Signature:</strong> __________________________</div>
      <div><strong>Date:</strong> {{employee_acknowledgement_date}}</div>
    </div>

    <div style="margin-top: 15px; font-size: 13px;">
      <strong>Remarks:</strong>
      <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px; margin-top: 5px; font-style: italic; color: #475569;">
        {{employee_remarks}}
      </div>
    </div>
  </div>
</div>`
  },
  {
    id: "TPL-JOIN-01",
    code: "JOIN",
    name: "Joining Letter & Duty Report",
    category: "Onboarding",
    description: "Official joining report confirming employee arrival and duty commencement",
    body: `<div style="font-family: 'Inter', Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Joining Report No:</strong> {{joining_report_number}}<br>
    <strong>Date:</strong> {{joining_date}}
  </div>

  <h3 style="text-align: center; font-family: 'Outfit', Arial, sans-serif; color: #10b981; text-transform: uppercase; letter-spacing: 1.5px; margin: 20px 0 15px 0; font-size: 18px; border-bottom: 2px solid #10b981; padding-bottom: 8px;">
    JOINING REPORT & DUTY ASSUMPTION
  </h3>

  <table style="width: 100%; border-collapse: collapse; margin: 15px 0 20px 0; font-size: 13px;">
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 25%;">Joining Report No:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #10b981;">{{joining_report_number}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 25%;">Date:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{joining_date}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Employee Code:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #4f46e5;">{{employee_code}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Employee Name:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold;">{{employee_name}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Designation:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{designation}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Department:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{department}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Reporting Manager:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;" colspan="3">{{reporting_manager}}</td>
    </tr>
  </table>

  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">Subject: Joining Report & Assumption of Duties</h4>

  <p>Dear Sir/Madam,</p>

  <p>I, <strong>{{employee_name}}</strong>, Employee Code <strong>{{employee_code}}</strong>, hereby submit my Joining Report and confirm that I have joined <strong>{{company_name}}</strong> as <strong>{{designation}}</strong> in the <strong>{{department}}</strong> department with effect from <strong>{{joining_date}}</strong>.</p>

  <p>I have reported for duty at <strong>{{reporting_location}}</strong> on <strong>{{joining_date}}</strong> at <strong>{{joining_time}}</strong> and have been assigned to <strong>{{project_name}}</strong>, where I will report to <strong>{{reporting_manager}}</strong>.</p>

  <p>I hereby confirm that I have assumed the duties and responsibilities associated with my position and will perform my assigned responsibilities with due diligence, professionalism, discipline, and integrity.</p>

  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">Employment Details</h4>
  <table style="width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px;">
    <thead>
      <tr style="background-color: #f8fafc; border-bottom: 2px solid #cbd5e1; text-align: left;">
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0; width: 35%;">Particulars</th>
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0;">Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Employee Name</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold;">{{employee_name}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Employee Code</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #4f46e5;">{{employee_code}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Designation</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{designation}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Department</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{department}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Employment Type</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{employment_type}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Project / Client</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{project_name}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Reporting Manager</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{reporting_manager}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Reporting Location</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{reporting_location}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Date of Joining</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #10b981;">{{joining_date}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Joining Time</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{joining_time}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Shift</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{shift}}</td>
      </tr>
    </tbody>
  </table>

  <p>I confirm that I have received and understood the applicable employment terms, Company policies, rules, procedures, code of conduct, attendance requirements, confidentiality obligations, and other instructions relevant to my role.</p>

  <p>I further undertake to comply with the lawful instructions issued by the Company and my reporting authorities and to maintain confidentiality of Company, client, project, technical, commercial, and other authorized information.</p>

  <p>I request the HR/Administration department to record my date of joining and duty assumption in the Company's official employee records.</p>

  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">Declaration</h4>
  <p>I hereby declare that the information and documents submitted by me during the recruitment and joining process are true and correct to the best of my knowledge.</p>

  <div style="margin-top: 20px; background: #fafafa; border: 1px solid #e2e8f0; padding: 15px; border-radius: 6px;">
    <strong style="color: #0f172a;">Submitted by Employee</strong><br><br>
    <strong>Name:</strong> {{employee_name}}<br>
    <strong>Employee Code:</strong> {{employee_code}}<br><br>
    <strong>Signature:</strong> __________________________<br><br>
    <strong>Date:</strong> {{joining_date}}
  </div>

  <div style="margin-top: 25px; background: #f0fdf4; border: 1.5px solid #a7f3d0; padding: 15px; border-radius: 6px;">
    <h4 style="margin: 0 0 10px 0; color: #065f46; font-size: 14px; text-transform: uppercase;">DUTY ASSUMPTION CONFIRMATION</h4>
    <p style="font-size: 13px; color: #064e3b; margin-bottom: 10px;">This is to confirm that <strong>{{employee_name}}</strong> has reported for duty and assumed the assigned responsibilities as <strong>{{designation}}</strong> with effect from <strong>{{joining_date}}</strong>.</p>
    
    <div style="font-size: 13px; color: #064e3b;">
      <strong>Reporting Manager:</strong> {{reporting_manager}}<br>
      <strong>Manager Signature:</strong> __________________________ &nbsp;&nbsp;&nbsp;&nbsp; <strong>Date:</strong> {{manager_confirmation_date}}
    </div>
  </div>

  <div style="margin-top: 25px; background: #f8fafc; border: 1.5px solid #cbd5e1; padding: 15px; border-radius: 6px;">
    <h4 style="margin: 0 0 10px 0; color: #334155; font-size: 14px; text-transform: uppercase;">HR VERIFICATION</h4>
    <div style="font-size: 13px; line-height: 1.8;">
      <strong>HR Representative:</strong> {{hr_representative}}<br>
      <strong>Employee Records Verified:</strong> <span style="color: #10b981; font-weight: bold;">{{records_verified}}</span><br>
      <strong>Joining Formalities:</strong> <span style="color: #4f46e5; font-weight: bold;">{{joining_formalities_status}}</span><br><br>
      <strong>HR Signature:</strong> __________________________ &nbsp;&nbsp;&nbsp;&nbsp; <strong>Date:</strong> {{hr_verification_date}}
    </div>
  </div>

  <div style="margin-top: 30px;">
    <p style="margin-bottom: 5px;">For <strong>{{company_name}}</strong>,</p>
    <p style="margin-top: 40px; font-weight: bold; color: #0f172a; margin-bottom: 2px;">{{authorized_signatory}}</p>
    <p style="color: #64748b; font-size: 13px; margin: 0;">{{signatory_designation}}<br>{{company_name}}</p>
    <p style="font-size: 12.5px; color: #64748b; margin-top: 15px;">Company Seal: __________________________</p>
  </div>
</div>`
  },
  {
    id: "TPL-CONF-01",
    code: "CONF",
    name: "Employment Confirmation Letter",
    category: "Lifecycle",
    description: "Letter confirming successful completion of probation period and permanent status",
    body: `<div style="font-family: 'Inter', Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Confirmation Letter No:</strong> {{confirmation_letter_number}}<br>
    <strong>Date:</strong> {{letter_date}}
  </div>

  <h3 style="text-align: center; font-family: 'Outfit', Arial, sans-serif; color: #10b981; text-transform: uppercase; letter-spacing: 1.5px; margin: 20px 0 15px 0; font-size: 18px; border-bottom: 2px solid #10b981; padding-bottom: 8px;">
    EMPLOYMENT CONFIRMATION LETTER
  </h3>

  <table style="width: 100%; border-collapse: collapse; margin: 15px 0 20px 0; font-size: 13px;">
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 25%;">Confirmation Letter No:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #10b981;">{{confirmation_letter_number}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 25%;">Date:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{letter_date}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Employee Code:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #4f46e5;">{{employee_code}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Employee Name:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold;">{{employee_name}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Designation:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{designation}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Department:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{department}}</td>
    </tr>
  </table>

  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">Subject: Confirmation of Employment</h4>

  <p>Dear <strong>{{employee_name}}</strong>,</p>

  <p>We are pleased to inform you that, upon successful completion of your probationary period and review of your performance, conduct, attendance, and overall suitability for the position, your employment with <strong>{{company_name}}</strong> is hereby confirmed with effect from <strong>{{confirmation_date}}</strong>.</p>

  <p>You joined the organization on <strong>{{joining_date}}</strong> as <strong>{{designation}}</strong> in the <strong>{{department}}</strong> department. During your probationary period, your performance and conduct were reviewed in accordance with the Company's applicable policies and employment requirements.</p>

  <p>With effect from the confirmation date, you will continue in your position as <strong>{{designation}}</strong> under the applicable terms and conditions of employment.</p>

  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">Employment Details</h4>
  <table style="width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px;">
    <thead>
      <tr style="background-color: #f8fafc; border-bottom: 2px solid #cbd5e1; text-align: left;">
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0; width: 35%;">Particulars</th>
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0;">Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Employee Name</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold;">{{employee_name}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Employee Code</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #4f46e5;">{{employee_code}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Designation</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{designation}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Department</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{department}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Date of Joining</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{joining_date}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Probation Period</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{probation_period}}</td>
      </tr>
      <tr style="background-color: #f0fdf4;">
        <td style="padding: 6px 10px; border: 1px solid #cbd5e1; font-weight: bold;">Confirmation Date</td>
        <td style="padding: 6px 10px; border: 1px solid #cbd5e1; font-weight: bold; color: #10b981;">{{confirmation_date}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Reporting Manager</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{reporting_manager}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Work Location</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{work_location}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Employment Type</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{employment_type}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Annual CTC</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #10b981;">{{ctc}}</td>
      </tr>
    </tbody>
  </table>

  <p>Your employment will continue to be governed by your appointment letter, applicable Company policies, rules, procedures, code of conduct, confidentiality obligations, and other terms applicable to your position.</p>

  <p>Your continued employment is subject to satisfactory performance, professional conduct, attendance, compliance with Company policies, and fulfillment of the responsibilities associated with your role.</p>

  <p>We appreciate your contribution during the probationary period and look forward to your continued dedication, professional growth, and valuable contribution to <strong>{{company_name}}</strong>.</p>

  <p style="margin-top: 20px; font-weight: bold; color: #047857;">Congratulations on the successful confirmation of your employment.</p>

  <div style="margin-top: 30px;">
    <p style="margin-bottom: 5px;">For <strong>{{company_name}}</strong>,</p>
    <p style="margin-top: 40px; font-weight: bold; color: #0f172a; margin-bottom: 2px;">{{authorized_signatory}}</p>
    <p style="color: #64748b; font-size: 13px; margin: 0;">{{signatory_designation}}<br>{{company_name}}</p>
    <p style="font-size: 12.5px; color: #64748b; margin-top: 15px;">Company Seal: __________________________</p>
  </div>

  <div style="margin-top: 35px; background: #f8fafc; border: 1.5px solid #cbd5e1; padding: 20px; border-radius: 8px;">
    <h4 style="margin: 0 0 12px 0; color: #334155; font-size: 14px; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">EMPLOYEE ACKNOWLEDGEMENT</h4>
    <p style="font-size: 13px; margin-bottom: 15px;">I, <strong>{{employee_name}}</strong>, Employee Code <strong>{{employee_code}}</strong>, acknowledge receipt of this Employment Confirmation Letter and confirm that I have been informed of my employment confirmation and applicable terms.</p>
    
    <div style="display: flex; justify-content: space-between; font-size: 13px; margin: 25px 0 15px 0;">
      <div><strong>Employee Signature:</strong> __________________________</div>
      <div><strong>Date:</strong> {{employee_acknowledgement_date}}</div>
    </div>

    <div style="margin-top: 15px; font-size: 13px;">
      <strong>Employee Remarks:</strong>
      <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px; margin-top: 5px; font-style: italic; color: #475569;">
        {{employee_remarks}}
      </div>
    </div>
  </div>
</div>`
  },
  {
    id: "TPL-WARN-01",
    code: "WARN",
    name: "Official Warning Letter & PIP Notice",
    category: "Compliance",
    description: "Official disciplinary performance improvement plan warning letter",
    body: `<div style="font-family: 'Inter', Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Warning Letter No:</strong> {{warning_letter_number}}<br>
    <strong>Date:</strong> {{letter_date}}
  </div>

  <h3 style="text-align: center; font-family: 'Outfit', Arial, sans-serif; color: #ef4444; text-transform: uppercase; letter-spacing: 1.5px; margin: 20px 0 15px 0; font-size: 18px; border-bottom: 2px solid #ef4444; padding-bottom: 8px;">
    OFFICIAL WARNING LETTER — PERFORMANCE NOTICE
  </h3>

  <table style="width: 100%; border-collapse: collapse; margin: 15px 0 20px 0; font-size: 13px;">
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 25%;">Warning Letter No:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #ef4444;">{{warning_letter_number}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 25%;">Date:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{letter_date}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Employee Code:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #4f46e5;">{{employee_code}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Employee Name:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold;">{{employee_name}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Designation:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{designation}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Department:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{department}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Reporting Manager:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;" colspan="3">{{reporting_manager}}</td>
    </tr>
  </table>

  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">Subject: Official Warning Letter — Performance Notice</h4>

  <p>Dear <strong>{{employee_name}}</strong>,</p>

  <p>This letter serves as an <strong>official warning regarding concerns identified in your performance and/or fulfillment of your assigned responsibilities</strong> in the position of <strong>{{designation}}</strong> with <strong>{{company_name}}</strong>.</p>

  <p>During the period from <strong>{{review_period_start}} to {{review_period_end}}</strong>, certain areas of your performance have been found to be below the standards and expectations applicable to your role.</p>

  <h4 style="color: #ef4444; margin-top: 20px; border-bottom: 1px solid #fca5a5; padding-bottom: 4px;">Performance Concerns</h4>
  <p style="margin-bottom: 8px;">The following concerns have been identified:</p>
  <ol style="font-size: 13px; line-height: 1.8; margin-left: 20px; color: #1e293b;">
    <li><strong>{{performance_issue_1}}</strong></li>
    <li><strong>{{performance_issue_2}}</strong></li>
    <li><strong>{{performance_issue_3}}</strong></li>
    <li><strong>{{performance_issue_4}}</strong></li>
  </ol>

  <p>The above concerns have been discussed with you / brought to your attention through <strong>{{previous_discussion_or_notice}}</strong>. Despite the guidance and/or support provided, the required level of improvement has not been achieved.</p>

  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">Required Improvement</h4>
  <p style="margin-bottom: 8px;">You are hereby instructed to take immediate corrective action and demonstrate measurable and sustained improvement in the following areas:</p>
  <ul style="font-size: 13px; line-height: 1.8; margin-left: 20px; color: #1e293b;">
    <li>{{improvement_requirement_1}}</li>
    <li>{{improvement_requirement_2}}</li>
    <li>{{improvement_requirement_3}}</li>
    <li>{{improvement_requirement_4}}</li>
  </ul>

  <p>Your performance will be reviewed during the period from <strong>{{pip_start_date}} to {{pip_end_date}}</strong>.</p>

  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">Performance Expectations</h4>
  <p style="margin-bottom: 8px;">During this period, you are expected to:</p>
  <ul style="font-size: 13px; line-height: 1.8; margin-left: 20px;">
    <li>Complete assigned tasks within the required timelines.</li>
    <li>Maintain the required quality and accuracy standards.</li>
    <li>Follow instructions and established company procedures.</li>
    <li>Maintain regular attendance and punctuality.</li>
    <li>Communicate effectively with your reporting manager and team.</li>
    <li>Demonstrate accountability for assigned responsibilities.</li>
    <li>Meet the performance targets and deliverables applicable to your role.</li>
  </ul>

  <p>Your reporting manager, <strong>{{reporting_manager}}</strong>, will monitor your performance and provide appropriate feedback during the review period.</p>

  <div style="background: #fef2f2; border: 1.5px solid #fca5a5; padding: 15px; border-radius: 6px; margin-top: 20px;">
    <h4 style="margin: 0 0 8px 0; color: #991b1b; font-size: 14px; text-transform: uppercase;">Important Notice</h4>
    <p style="font-size: 13px; color: #7f1d1d; margin: 0; line-height: 1.6;">
      You are required to treat this warning seriously and take immediate steps to improve your performance. Failure to demonstrate satisfactory and sustained improvement within the specified period, or any further failure to comply with applicable company policies and employment requirements, <strong>may result in further disciplinary action, up to and including termination of employment</strong>, subject to applicable company policy, contractual terms, and applicable law.
    </p>
  </div>

  <p style="margin-top: 20px;">This letter will be maintained as part of your official employment record.</p>

  <p>We expect you to use this opportunity to address the identified concerns and demonstrate the level of performance, professionalism, and commitment expected from your position.</p>

  <div style="margin-top: 30px;">
    <p style="margin-bottom: 5px;">For <strong>{{company_name}}</strong>,</p>
    <p style="margin-top: 40px; font-weight: bold; color: #0f172a; margin-bottom: 2px;">{{authorized_signatory}}</p>
    <p style="color: #64748b; font-size: 13px; margin: 0;">{{signatory_designation}}<br>{{company_name}}</p>
    <p style="font-size: 12.5px; color: #64748b; margin-top: 5px;">Date: {{letter_date}}</p>
  </div>

  <div style="margin-top: 35px; background: #f8fafc; border: 1.5px solid #cbd5e1; padding: 20px; border-radius: 8px;">
    <h4 style="margin: 0 0 12px 0; color: #334155; font-size: 14px; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">EMPLOYEE ACKNOWLEDGEMENT</h4>
    <p style="font-size: 13px; margin-bottom: 15px;">I, <strong>{{employee_name}}</strong>, Employee Code <strong>{{employee_code}}</strong>, acknowledge receipt of this Official Warning Letter — Performance Notice. My acknowledgement confirms receipt of the document and does not necessarily indicate agreement with its contents.</p>
    
    <div style="display: flex; justify-content: space-between; font-size: 13px; margin: 25px 0 15px 0;">
      <div><strong>Employee Signature:</strong> __________________________</div>
      <div><strong>Date:</strong> {{employee_acknowledgement_date}}</div>
    </div>

    <div style="margin-top: 15px; font-size: 13px;">
      <strong>Employee Comments (if any):</strong>
      <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px; margin-top: 5px; font-style: italic; color: #475569;">
        {{employee_comments}}
      </div>
    </div>
  </div>
</div>`
  },
  {
    id: "TPL-TRANSFER-01",
    code: "TRANS",
    name: "Office Transfer & Relocation Order",
    category: "Lifecycle",
    description: "Official office location transfer and relocation order letter",
    body: `<div style="font-family: 'Inter', Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Transfer Order No:</strong> {{transfer_order_number}}<br>
    <strong>Date:</strong> {{order_date}}
  </div>

  <h3 style="text-align: center; font-family: 'Outfit', Arial, sans-serif; color: #f59e0b; text-transform: uppercase; letter-spacing: 1.5px; margin: 20px 0 15px 0; font-size: 18px; border-bottom: 2px solid #f59e0b; padding-bottom: 8px;">
    OFFICE TRANSFER ORDER
  </h3>

  <table style="width: 100%; border-collapse: collapse; margin: 15px 0 20px 0; font-size: 13px;">
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 25%;">Transfer Order No:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #4f46e5;">{{transfer_order_number}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 25%;">Date:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{order_date}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Employee Code:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #4f46e5;">{{employee_code}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Employee Name:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold;">{{employee_name}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Current Designation:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{current_designation}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Department:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{current_department}}</td>
    </tr>
  </table>

  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">Subject: Office Transfer Order</h4>

  <p>Dear <strong>{{employee_name}}</strong>,</p>

  <p>This is to formally inform you that, based on organizational requirements and business/operational considerations, you are hereby transferred from <strong>{{current_location}}</strong> to <strong>{{new_location}}</strong>, effective from <strong>{{effective_date}}</strong>.</p>

  <p>As part of this transfer, your reporting and/or functional assignment will be as follows:</p>

  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">Revised Assignment Details</h4>
  <table style="width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px;">
    <thead>
      <tr style="background-color: #f8fafc; border-bottom: 2px solid #cbd5e1; text-align: left;">
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0; width: 28%;">Particulars</th>
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0; width: 36%;">Existing</th>
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0; width: 36%;">Revised</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Department</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{current_department}}</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #4f46e5;">{{new_department}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Designation</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{current_designation}}</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #4f46e5;">{{new_designation}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Office / Location</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{current_location}}</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #f59e0b;">{{new_location}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Project / Client</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{current_project}}</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold;">{{new_project}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Reporting Manager</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{current_manager}}</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold;">{{new_manager}}</td>
      </tr>
      <tr style="background-color: #fffbeb;">
        <td style="padding: 6px 10px; border: 1px solid #fde68a; font-weight: bold;">Effective Date</td>
        <td style="padding: 6px 10px; border: 1px solid #fde68a;">—</td>
        <td style="padding: 6px 10px; border: 1px solid #fde68a; font-weight: bold; color: #d97706;">{{effective_date}}</td>
      </tr>
    </tbody>
  </table>

  <p>You are required to report to <strong>{{new_manager}}</strong> at <strong>{{new_location}}</strong> on or before <strong>{{reporting_date}}</strong> and complete all joining/reporting formalities applicable to the new assignment.</p>

  <p>Before proceeding to the new location, you are required to complete the necessary handover of your current responsibilities, documents, company assets, project information, and other assigned duties to <strong>{{handover_person}}</strong>.</p>

  <p>Your salary, employment benefits, service continuity, and other applicable employment terms will remain governed by your existing employment terms and company policies, unless specifically communicated to you separately in writing.</p>

  <p>You are expected to cooperate fully with this transfer and ensure a smooth transition of responsibilities. The transfer is being made in accordance with the organization's operational and business requirements.</p>

  <p>We wish you success in your new assignment and look forward to your continued contribution to <strong>{{company_name}}</strong>.</p>

  <div style="margin-top: 30px;">
    <p style="margin-bottom: 5px;">For <strong>{{company_name}}</strong>,</p>
    <p style="margin-top: 40px; font-weight: bold; color: #0f172a; margin-bottom: 2px;">{{authorized_signatory}}</p>
    <p style="color: #64748b; font-size: 13px; margin: 0;">{{signatory_designation}}<br>{{company_name}}</p>
  </div>

  <div style="margin-top: 35px; background: #f8fafc; border: 1.5px solid #cbd5e1; padding: 20px; border-radius: 8px;">
    <h4 style="margin: 0 0 12px 0; color: #334155; font-size: 14px; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">EMPLOYEE ACKNOWLEDGEMENT</h4>
    <p style="font-size: 13px; margin-bottom: 15px;">I, <strong>{{employee_name}}</strong>, Employee Code <strong>{{employee_code}}</strong>, acknowledge receipt of this Office Transfer Order and confirm that I have been informed of the revised assignment and reporting requirements.</p>
    
    <div style="display: flex; justify-content: space-between; font-size: 13px; margin: 25px 0 15px 0;">
      <div><strong>Employee Signature:</strong> __________________________</div>
      <div><strong>Date:</strong> {{employee_acknowledgement_date}}</div>
    </div>

    <div style="margin-top: 15px; font-size: 13px;">
      <strong>Remarks, if any:</strong>
      <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px; margin-top: 5px; font-style: italic; color: #475569;">
        {{employee_remarks}}
      </div>
    </div>
  </div>
</div>`
  },
  {
    id: "TPL-NODUES-01",
    code: "NODUES",
    name: "No Dues & Full & Final Clearance Certificate",
    category: "Exit",
    description: "Official full & final clearance certificate confirming zero outstanding dues",
    body: `<div style="font-family: 'Inter', Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Certificate No:</strong> {{certificate_number}}<br>
    <strong>Date:</strong> {{certificate_date}}
  </div>

  <h3 style="text-align: center; font-family: 'Outfit', Arial, sans-serif; color: #10b981; text-transform: uppercase; letter-spacing: 1.5px; margin: 20px 0 15px 0; font-size: 18px; border-bottom: 2px solid #10b981; padding-bottom: 8px;">
    NO DUES & FULL & FINAL CLEARANCE CERTIFICATE
  </h3>

  <table style="width: 100%; border-collapse: collapse; margin: 15px 0 20px 0; font-size: 13px;">
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 25%;">Certificate No:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #4f46e5;">{{certificate_number}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 25%;">Date:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{certificate_date}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Employee Code:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #4f46e5;">{{employee_code}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Employee Name:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold;">{{employee_name}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Designation:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{designation}}</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Department:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{department}}</td>
    </tr>
  </table>

  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">TO WHOM IT MAY CONCERN</h4>

  <p>This is to certify that <strong>{{employee_name}}</strong>, Employee Code <strong>{{employee_code}}</strong>, was employed with <strong>{{company_name}}</strong> as <strong>{{designation}}</strong> in the <strong>{{department}}</strong> department from <strong>{{joining_date}}</strong> to <strong>{{last_working_date}}</strong>.</p>

  <p>The employee has completed the applicable separation formalities and has handed over the responsibilities, documents, equipment, assets, and other company property assigned during the course of employment, subject to the records maintained by the respective departments.</p>

  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">1. Inter-Departmental Clearance Status</h4>
  <table style="width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px;">
    <thead>
      <tr style="background-color: #f8fafc; border-bottom: 2px solid #cbd5e1; text-align: left;">
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0; width: 28%;">Department / Area</th>
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0; width: 25%;">Clearance Status</th>
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0;">Remarks</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Reporting Manager</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; color: #10b981; font-weight: bold;">{{manager_clearance}}</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{manager_remarks}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">HR Department</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; color: #10b981; font-weight: bold;">{{hr_clearance}}</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{hr_remarks}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Finance & Accounts</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; color: #10b981; font-weight: bold;">{{finance_clearance}}</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{finance_remarks}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">IT / System Access</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; color: #10b981; font-weight: bold;">{{it_clearance}}</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{it_remarks}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Admin / Assets</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; color: #10b981; font-weight: bold;">{{admin_clearance}}</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{admin_remarks}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600;">Project / Client</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; color: #10b981; font-weight: bold;">{{project_clearance}}</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{project_remarks}}</td>
      </tr>
    </tbody>
  </table>

  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">2. Full & Final Settlement Summary</h4>
  <p style="margin-bottom: 8px;">The employee's Full & Final Settlement has been processed in accordance with applicable company policies and employment terms.</p>
  <table style="width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px;">
    <thead>
      <tr style="background-color: #f8fafc; border-bottom: 2px solid #cbd5e1; text-align: left;">
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0;">Settlement Particulars</th>
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0; text-align: right;">Amount (INR)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">Salary Payable</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{salary_payable}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">Leave Encashment</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{leave_encashment}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">Incentive / Bonus</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{incentive_amount}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">Other Payables</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{other_payables}}</td>
      </tr>
      <tr style="background-color: #f1f5f9; font-weight: bold;">
        <td style="padding: 6px 10px; border: 1px solid #cbd5e1;">Gross Settlement</td>
        <td style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: right;">{{gross_settlement}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; color: #ef4444;">Less: Deductions / Recoveries</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right; color: #ef4444;">- {{deductions}}</td>
      </tr>
      <tr style="background-color: #f0fdf4; font-weight: bold;">
        <td style="padding: 8px 10px; border: 1px solid #cbd5e1; font-size: 14px;">Net Settlement Amount</td>
        <td style="padding: 8px 10px; border: 1px solid #cbd5e1; text-align: right; color: #10b981; font-size: 15px;">{{net_settlement}}</td>
      </tr>
    </tbody>
  </table>

  <p style="font-size: 12.5px; margin: 8px 0;"><strong>Settlement Status:</strong> {{settlement_status}} | <strong>Settlement Date:</strong> {{settlement_date}} | <strong>Payment Reference:</strong> {{payment_reference}}</p>

  <p style="margin-top: 15px;">Based on the clearance records available with the company, there are <strong>no outstanding dues or recoverable company assets against the employee</strong>, except for any item specifically mentioned in the clearance records or subsequently identified in accordance with applicable company policy and law.</p>

  <p>This certificate is issued upon completion of the applicable separation and clearance formalities and may be used as an official record of the employee's clearance and Full & Final Settlement.</p>

  <p>We thank <strong>{{employee_name}}</strong> for their services and contribution during their association with <strong>{{company_name}}</strong> and wish them success in their future professional endeavors.</p>

  <div style="margin-top: 30px;">
    <p style="margin-bottom: 5px;"><strong>For {{company_name}}</strong></p>
    <p style="margin-top: 40px; font-weight: bold; color: #0f172a; margin-bottom: 2px;">{{authorized_signatory}}</p>
    <p style="color: #64748b; font-size: 13px; margin: 0;">{{signatory_designation}}<br>{{company_name}}</p>
  </div>

  <div style="margin-top: 35px; background: #f8fafc; border: 1.5px solid #cbd5e1; padding: 20px; border-radius: 8px;">
    <h4 style="margin: 0 0 12px 0; color: #334155; font-size: 14px; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">Employee Acknowledgement</h4>
    <p style="font-size: 13px; margin-bottom: 15px;">I, <strong>{{employee_name}}</strong>, Employee Code <strong>{{employee_code}}</strong>, acknowledge receipt of this No Dues & Full & Final Clearance Certificate and confirm that the above clearance details have been communicated to me.</p>
    <div style="display: flex; justify-content: space-between; font-size: 13px; margin-top: 25px;">
      <div><strong>Employee Signature:</strong> ____________________</div>
      <div><strong>Date:</strong> {{employee_acknowledgement_date}}</div>
    </div>
  </div>
</div>`
  },
  {
    id: "TPL-BANK-01",
    code: "BANK",
    name: "Bank Account Opening Request Letter",
    category: "Compliance",
    description: "Official corporate recommendation letter for employee salary bank account opening",
    body: `<div style="font-family: 'Inter', Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Ref No:</strong> {{doc_number}}<br>
    <strong>Date:</strong> {{issue_date}}
  </div>

  <div style="margin-bottom: 25px;">
    <strong>To, The Branch Manager</strong><br>
    HDFC Bank / ICICI Bank / Axis Bank<br>
    Pune, Maharashtra
  </div>

  <h3 style="text-align: center; font-family: 'Outfit', Arial, sans-serif; color: #4f46e5; text-transform: uppercase; letter-spacing: 1px; margin: 25px 0; font-size: 18px;">REQUEST FOR SALARY ACCOUNT OPENING</h3>

  <p>Dear Sir / Madam,</p>

  <p>This is to certify that <strong>{{gender_prefix}} {{employee_name}}</strong> (Employee ID: <strong>{{employee_id}}</strong>) is a bona fide employee of <strong>{{company_name}}</strong>, working as <strong>{{designation}}</strong> in the <strong>{{department}}</strong> department.</p>

  <p>We request you to open a corporate salary account in {{gender_prefix}} {{first_name}}'s name for monthly salary credit operations.</p>
</div>`
  },
  {
    id: "TPL-TERM-01",
    code: "TERM",
    name: "Termination of Employment Order",
    category: "Exit",
    description: "Comprehensive 6-section formal termination order with clearance checklists, F&F settlement breakdown, and approval audit trail",
    body: `<div style="font-family: 'Inter', Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <!-- Section 1: Letter Information Header -->
  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; font-size: 12.5px; color: #475569; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 10px;">
    <div>
      <strong>Termination Letter No:</strong> {{termination_letter_no}}<br>
      <strong>Employee Code:</strong> <span style="font-family: monospace; font-weight: bold; color: #dc2626;">{{employee_code}}</span><br>
      <strong>Document Version:</strong> {{document_version}}
    </div>
    <div style="text-align: right;">
      <strong>Date of Issue:</strong> {{issue_date}}<br>
      <strong>Effective Termination Date:</strong> {{effective_termination_date}}<br>
      <strong>Classification:</strong> <span style="color: #dc2626; font-weight: bold;">{{confidentiality_level}}</span>
    </div>
  </div>

  <!-- Section 2: Employee Information Block -->
  <div style="margin-bottom: 20px; font-size: 13.5px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 14px; border-radius: 6px;">
    <strong>To,</strong><br>
    <strong style="font-size: 16px; color: #0f172a;">{{gender_prefix}} {{employee_name}}</strong><br>
    Designation: <strong>{{designation}}</strong> | Department: <strong>{{department}}</strong><br>
    Project / Client: <strong>{{project_client}}</strong> | Work Location: <strong>{{work_location}}</strong><br>
    Reporting Manager: <strong>{{reporting_manager}}</strong> | Date of Joining: <strong>{{date_of_joining}}</strong><br>
    Address: {{employee_address}} | Email: {{employee_email}} | Mobile: {{employee_mobile}}
  </div>

  <!-- Subject Line -->
  <h3 style="text-align: center; font-family: 'Outfit', Arial, sans-serif; color: #dc2626; text-transform: uppercase; letter-spacing: 1.5px; margin: 25px 0 15px 0; font-size: 18px; border-bottom: 2px solid #dc2626; padding-bottom: 8px;">
    NOTICE OF TERMINATION OF EMPLOYMENT
  </h3>

  <p>Dear <strong>{{first_name}}</strong>,</p>

  <p>This letter serves as formal notification that your employment with <strong>{{company_name}}</strong> in the capacity of <strong>{{designation}}</strong> is hereby terminated, effective from the close of business hours on <strong>{{effective_termination_date}}</strong>. Your Last Working Day shall be <strong>{{last_working_day}}</strong>.</p>

  <!-- Section 3: Termination Details Table -->
  <h4 style="color: #334155; margin-top: 20px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">1. Termination Details & Category</h4>
  <table style="width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px;">
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 35%;">Termination Category / Type:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #dc2626;">{{termination_type}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Reason for Termination:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{termination_reason}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Warning / Notice Reference:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{warning_reference}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Notice Period Applicable:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{notice_period_applicable}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Pay in Lieu of Notice:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; color: #166534; font-weight: 600;">{{pay_in_lieu}}</td>
    </tr>
    <tr>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Final Working Date:</td>
      <td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: bold;">{{final_working_date}}</td>
    </tr>
  </table>

  <!-- Section 4: Clearance & Handover Checklist Table -->
  <h4 style="color: #334155; margin-top: 18px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">2. Clearance & Asset Handover Status</h4>
  <table style="width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px;">
    <thead>
      <tr style="background-color: #f8fafc; border-bottom: 2px solid #cbd5e1; text-align: left;">
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0;">Handover & Clearance Items</th>
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0;">Clearance Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">Project Handover & Knowledge Transfer</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{handover_status}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">Company Assets (Laptop, Mobile SIM, Access ID Card)</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{it_clearance_status}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">Manager & Technical Clearance</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{manager_clearance_status}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">HR & Compliance Archival Clearance</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{hr_clearance_status}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">Finance & Payroll Accounts Clearance</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">{{finance_clearance_status}}</td>
      </tr>
    </tbody>
  </table>

  <!-- Section 5: Final Settlement Breakdown (F&F) Table -->
  <h4 style="color: #334155; margin-top: 18px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">3. Full & Final Settlement Summary (F&F)</h4>
  <table style="width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px;">
    <thead>
      <tr style="background-color: #f8fafc; border-bottom: 2px solid #cbd5e1; text-align: left;">
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0;">Settlement Component</th>
        <th style="padding: 8px 10px; border: 1px solid #e2e8f0; text-align: right;">Amount (INR)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">Pending Monthly Salary Credit</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{salary_pending}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">Leave Encashment (Earned Leaves)</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{leave_encashment}}</td>
      </tr>
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0;">Notice Period Salary Pay in Lieu</td>
        <td style="padding: 6px 10px; border: 1px solid #e2e8f0; text-align: right;">{{notice_pay_amount}}</td>
      </tr>
      <tr style="background-color: #f0fdf4; font-weight: bold;">
        <td style="padding: 10px; border: 1.5px solid #10b981; color: #166534;">TOTAL NET FULL & FINAL SETTLEMENT</td>
        <td style="padding: 10px; border: 1.5px solid #10b981; text-align: right; color: #166534; font-size: 15px;">{{total_settlement_amount}}</td>
      </tr>
    </tbody>
  </table>
  <p style="font-size: 12px; color: #64748b;">F&F Settlement Status: <strong>{{ff_status}}</strong> (Expected Disbursement Date: <strong>{{settlement_date}}</strong>).</p>

  <!-- Section 6: Approvals & Audit Trail -->
  <div style="margin-top: 30px; background: #fef2f2; border: 1.5px solid #fca5a5; padding: 20px; border-radius: 8px;">
    <h4 style="margin: 0 0 10px 0; color: #991b1b; font-size: 13.5px; text-transform: uppercase;">Document Approvals & Employee Acknowledgment</h4>
    <p style="font-size: 12px; margin-bottom: 12px; color: #7f1d1d;">HR Prepared By: <strong>{{hr_prepared_by}}</strong> | Manager Approval: <strong>{{manager_approval}}</strong></p>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; font-size: 13px; margin-top: 15px;">
      <div>
        <div><strong>Employee Signature & Date:</strong> ______________________</div>
        <div style="margin-top: 8px; font-size: 11px; color: #7f1d1d;">I acknowledge receipt of this Termination Notice and F&F statement.</div>
      </div>
      <div style="text-align: right;">
        <div><strong>For {{company_name}}</strong></div>
        <div style="margin-top: 25px;"><strong>Authorized Signatory</strong></div>
      </div>
    </div>
  },
  {
    id: "TPL-SLIP-01",
    code: "SLIP",
    name: "Monthly Salary Slip / Payslip",
    category: "Compensation",
    description: "Official monthly employee salary slip with itemized earnings, deductions, net payout, and employer contributions",
    body: `<div style="font-family: 'Inter', Arial, sans-serif; color: #1e293b; line-height: 1.5;">
  <div style="text-align: center; border-bottom: 2px solid #0f172a; padding-bottom: 12px; margin-bottom: 15px;">
    <h2 style="font-family: 'Outfit', Arial, sans-serif; color: #0f172a; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px 0; font-size: 20px;">SALARY SLIP</h2>
    <div style="font-size: 14px; font-weight: bold; color: #1e293b;">{{company_name}}</div>
    <div style="font-size: 12px; color: #64748b;">{{company_address}}</div>
    <div style="font-size: 12px; color: #64748b;">Phone: {{company_contact}} | Email: {{company_email}}</div>
    <div style="margin-top: 8px; font-size: 13.5px; font-weight: bold; color: #4f46e5; background: #f1f5f9; display: inline-block; padding: 4px 14px; border-radius: 4px;">
      Salary Slip for: {{salary_month}} {{salary_year}}
    </div>
  </div>

  <h4 style="color: #334155; margin-top: 12px; margin-bottom: 6px; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">EMPLOYEE DETAILS</h4>
  <table style="width: 100%; border-collapse: collapse; margin: 8px 0 14px 0; font-size: 12.5px;">
    <tr>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 20%;">Employee Name:</td>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0; font-weight: bold; width: 30%;">{{employee_name}}</td>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 20%;">Employee Code:</td>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0; font-family: monospace; font-weight: bold; color: #4f46e5; width: 30%;">{{employee_code}}</td>
    </tr>
    <tr>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Designation:</td>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0;">{{designation}}</td>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Department:</td>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0;">{{department}}</td>
    </tr>
    <tr>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Project / Client:</td>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0;">{{project_name}}</td>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Work Location:</td>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0;">{{work_location}}</td>
    </tr>
    <tr>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Date of Joining:</td>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0;">{{joining_date}}</td>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Pay Period:</td>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0;">{{pay_period}}</td>
    </tr>
    <tr>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Paid Days:</td>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0; font-weight: bold; color: #10b981;">{{paid_days}} / {{working_days}}</td>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Leave / LOP Days:</td>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0;">{{lop_days}}</td>
    </tr>
    <tr>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Bank Account:</td>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0; font-family: monospace;">{{masked_bank_account}}</td>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">PAN / UAN:</td>
      <td style="padding: 5px 8px; border: 1px solid #e2e8f0; font-family: monospace;">{{pan_number}} | {{uan_number}}</td>
    </tr>
  </table>

  <h4 style="color: #334155; margin-top: 12px; margin-bottom: 6px; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">EARNINGS & DEDUCTIONS</h4>
  <table style="width: 100%; border-collapse: collapse; margin: 8px 0 14px 0; font-size: 12px;">
    <thead>
      <tr style="background-color: #f8fafc; border-bottom: 2px solid #cbd5e1; text-align: left;">
        <th style="padding: 6px 8px; border: 1px solid #e2e8f0; width: 32%;">Earnings</th>
        <th style="padding: 6px 8px; border: 1px solid #e2e8f0; text-align: right; width: 18%;">Amount (₹)</th>
        <th style="padding: 6px 8px; border: 1px solid #e2e8f0; width: 32%;">Deductions</th>
        <th style="padding: 6px 8px; border: 1px solid #e2e8f0; text-align: right; width: 18%;">Amount (₹)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0;">Basic Salary</td>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0; text-align: right;">{{basic_salary}}</td>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0;">Employee PF</td>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0; text-align: right;">{{employee_pf}}</td>
      </tr>
      <tr>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0;">HRA</td>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0; text-align: right;">{{hra}}</td>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0;">Professional Tax</td>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0; text-align: right;">{{professional_tax}}</td>
      </tr>
      <tr>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0;">Conveyance Allowance</td>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0; text-align: right;">{{conveyance}}</td>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0;">TDS</td>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0; text-align: right;">{{tds}}</td>
      </tr>
      <tr>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0;">Special Allowance</td>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0; text-align: right;">{{special_allowance}}</td>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0;">ESI</td>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0; text-align: right;">{{employee_esi}}</td>
      </tr>
      <tr>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0;">Other Allowance</td>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0; text-align: right;">{{other_allowance}}</td>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0;">Loan / Advance</td>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0; text-align: right;">{{loan_deduction}}</td>
      </tr>
      <tr>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0;">Overtime</td>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0; text-align: right;">{{overtime}}</td>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0;">LOP Deduction</td>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0; text-align: right;">{{lop_deduction}}</td>
      </tr>
      <tr>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0;">Incentive / Bonus</td>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0; text-align: right;">{{incentive}}</td>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0;">Other Deduction</td>
        <td style="padding: 5px 8px; border: 1px solid #e2e8f0; text-align: right;">{{other_deduction}}</td>
      </tr>
      <tr style="background-color: #f1f5f9; font-weight: bold;">
        <td style="padding: 6px 8px; border: 1.5px solid #cbd5e1;">Total Earnings</td>
        <td style="padding: 6px 8px; border: 1.5px solid #cbd5e1; text-align: right; color: #166534;">{{total_earnings}}</td>
        <td style="padding: 6px 8px; border: 1.5px solid #cbd5e1;">Total Deductions</td>
        <td style="padding: 6px 8px; border: 1.5px solid #cbd5e1; text-align: right; color: #991b1b;">{{total_deductions}}</td>
      </tr>
    </tbody>
  </table>

  <div style="background: #f0fdf4; border: 1.5px solid #10b981; padding: 10px 14px; border-radius: 6px; margin-bottom: 12px;">
    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 13px;">
      <div><strong>Gross Earnings:</strong> {{total_earnings}} &nbsp;|&nbsp; <strong>Total Deductions:</strong> {{total_deductions}}</div>
      <div style="font-size: 15px; font-weight: bold; color: #15803d;">Net Salary Payable: {{net_salary}}</div>
    </div>
    <div style="margin-top: 4px; font-size: 12px; color: #166534;">
      <strong>Amount in Words:</strong> {{net_salary_in_words}}
    </div>
  </div>

  <h4 style="color: #334155; margin-top: 10px; margin-bottom: 6px; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">EMPLOYER CONTRIBUTIONS</h4>
  <table style="width: 100%; border-collapse: collapse; margin: 6px 0 10px 0; font-size: 12px;">
    <thead>
      <tr style="background-color: #f8fafc; border-bottom: 2px solid #cbd5e1; text-align: left;">
        <th style="padding: 5px 8px; border: 1px solid #e2e8f0; width: 70%;">Contribution Particulars</th>
        <th style="padding: 5px 8px; border: 1px solid #e2e8f0; text-align: right; width: 30%;">Amount (₹)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 4px 8px; border: 1px solid #e2e8f0;">Employer PF Contribution</td>
        <td style="padding: 4px 8px; border: 1px solid #e2e8f0; text-align: right;">{{employer_pf}}</td>
      </tr>
      <tr>
        <td style="padding: 4px 8px; border: 1px solid #e2e8f0;">Employer ESI Contribution</td>
        <td style="padding: 4px 8px; border: 1px solid #e2e8f0; text-align: right;">{{employer_esi}}</td>
      </tr>
      <tr>
        <td style="padding: 4px 8px; border: 1px solid #e2e8f0;">Other Employer Contribution</td>
        <td style="padding: 4px 8px; border: 1px solid #e2e8f0; text-align: right;">{{other_employer_contribution}}</td>
      </tr>
      <tr style="background-color: #f8fafc; font-weight: bold;">
        <td style="padding: 5px 8px; border: 1px solid #cbd5e1;">Total Employer Contribution</td>
        <td style="padding: 5px 8px; border: 1px solid #cbd5e1; text-align: right; color: #4f46e5;">{{total_employer_contribution}}</td>
      </tr>
    </tbody>
  </table>
  <div style="font-size: 11.5px; color: #64748b; margin-bottom: 10px;">
    <strong>Monthly CTC:</strong> {{monthly_ctc}} &nbsp;|&nbsp; <strong>Annual CTC:</strong> {{annual_ctc}}
  </div>

  <h4 style="color: #334155; margin-top: 10px; margin-bottom: 6px; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">PAYMENT DETAILS</h4>
  <table style="width: 100%; border-collapse: collapse; margin: 6px 0 10px 0; font-size: 12px;">
    <tr>
      <td style="padding: 4px 8px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 25%;">Payment Date:</td>
      <td style="padding: 4px 8px; border: 1px solid #e2e8f0; width: 25%;">{{payment_date}}</td>
      <td style="padding: 4px 8px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600; width: 25%;">Payment Mode:</td>
      <td style="padding: 4px 8px; border: 1px solid #e2e8f0; width: 25%;">{{payment_mode}}</td>
    </tr>
    <tr>
      <td style="padding: 4px 8px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Bank Name:</td>
      <td style="padding: 4px 8px; border: 1px solid #e2e8f0;">{{bank_name}}</td>
      <td style="padding: 4px 8px; border: 1px solid #e2e8f0; background: #f8fafc; font-weight: 600;">Reference No.:</td>
      <td style="padding: 4px 8px; border: 1px solid #e2e8f0; font-family: monospace;">{{payment_reference}}</td>
    </tr>
  </table>

  <div style="margin-top: 12px; background: #fafafa; border: 1px solid #e2e8f0; padding: 8px 12px; border-radius: 6px; font-size: 11px; color: #64748b; line-height: 1.4;">
    <strong>Declaration:</strong> This salary slip is generated electronically by <strong>{{company_name}}</strong> and contains the salary and payroll information recorded for the above-mentioned pay period. The information contained herein is confidential and intended solely for the employee's official and employment-related use.
  </div>

  <div style="margin-top: 15px; display: flex; justify-content: space-between; align-items: flex-end;">
    <div style="font-size: 11px; color: #64748b; font-style: italic;">
      *This is a computer-generated salary slip and does not require a physical signature unless specified.
    </div>
    <div style="text-align: right; font-size: 11.5px;">
      <div>For <strong>{{company_name}}</strong></div>
      <div style="margin-top: 15px; font-weight: bold; color: #0f172a;">{{authorized_signatory}}</div>
      <div style="color: #64748b; font-size: 11px;">{{signatory_designation}}<br>Payroll / HR Department</div>
    </div>
  </div>
</div>`
  }
];
