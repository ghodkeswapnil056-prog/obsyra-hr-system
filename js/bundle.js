// Standalone Universal Bundle for Obsyra HR System

// --- File: companySettings.js ---
// Official Company Settings for Obsyra Private Limited (Updated with Ethics Sequence)
const companySettings = {
  name: "Obsyra Private Limited",
  shortName: "Obsyra",
  code: "OBS",
  tagline: "EMPOWERING BUSINESSES WITH INNOVATION",
  establishedDate: "16 February 2026",
  cin: "U63991PN2026PTC252127",
  gstin: "27AAFCO0123M1Z8",
  pan: "AAFCO0123M",
  email: "info@obsyra.co.in",
  hrEmail: "info@obsyra.co.in",
  phone: "+91 96733 50092",
  website: "www.obsyra.co.in",
  
  // Official Addresses & Contact
  corporateAddress: "Wagholi, Pune, Maharashtra, India – 412207",
  registeredAddress: "Wagholi, Pune, Maharashtra, India – 412207",
  serviceCoverage: "PAN India",
  
  // Leadership & Authorized Signatories (From Official Deck)
  directors: [
    {
      name: "Surekha Avinash Aade",
      designation: "Director",
      role: "Strategic Direction, Business Operations, Compliance & Sustainability"
    },
    {
      name: "Avinash Dagdu Aade",
      designation: "Director",
      role: "Technical Execution, Telecom Networks, 5G Testing, Infrastructure & Manpower"
    }
  ],
  authorizedSignatoryName: "Avinash Dagdu Aade",
  authorizedSignatoryDesignation: "Director",
  authorizedSignatoryEmail: "info@obsyra.co.in",

  // Core Industry Sectors
  services: [
    "Telecom Core & 5G Testing",
    "IT Services & Device Integration",
    "Infrastructure & Server Deployment",
    "Decommissioning & Site Clearance",
    "PAN India Manpower Solutions"
  ],

  // Image Asset URLs
  logoUrl: "assets/obsyra_logo.jpg",
  headerBannerUrl: "assets/obsyra_header.png",
  footerBannerUrl: "assets/obsyra_footer.png",
  
  // Official Logo HTML / SVG
  logoSvg: `<div style="display: flex; align-items: center; gap: 14px;">
    <img src="assets/obsyra_logo.jpg" alt="Obsyra Logo" style="height: 65px; width: auto; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));" />
    <div>
      <div style="font-family: Outfit, 'Arial', sans-serif; font-weight: 800; font-size: 26px; color: #1e293b; letter-spacing: 2px; line-height: 1;">OBSYRA</div>
      <div style="font-family: Outfit, 'Arial', sans-serif; font-weight: 700; font-size: 10px; color: #c59b27; letter-spacing: 3px; margin: 3px 0 2px 0;">— PRIVATE LIMITED —</div>
      <div style="font-family: Inter, 'Arial', sans-serif; font-weight: 500; font-size: 8.5px; color: #64748b;">EMPOWERING BUSINESSES WITH INNOVATION</div>
    </div>
  </div>`,

  stampSvg: `<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="54" stroke="#C59B27" stroke-width="2.5" stroke-dasharray="6 3"/>
    <circle cx="60" cy="60" r="48" stroke="#334155" stroke-width="1.5"/>
    <path id="circlePath" d="M 20, 60 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none"/>
    <text fill="#C59B27" font-family="Arial" font-size="9" font-weight="bold" letter-spacing="1">
      <textPath href="#circlePath" startOffset="0%">OBSYRA PRIVATE LIMITED ★ OFFICIAL SEAL ★</textPath>
    </text>
    <circle cx="60" cy="60" r="28" fill="#C59B27" fill-opacity="0.08" stroke="#C59B27" stroke-width="1"/>
    <text x="60" y="58" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#334155">CORPORATE</text>
    <text x="60" y="69" text-anchor="middle" font-family="Arial" font-size="8" font-weight="bold" fill="#C59B27">PUNE - INDIA</text>
  </svg>`,
  
  signatureSvg: `<svg width="160" height="60" viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 40C25 35 30 15 45 20C60 25 55 45 70 30C85 15 90 35 110 25C125 18 135 30 150 22" stroke="#1E1B4B" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M30 45C50 43 100 42 140 40" stroke="#C59B27" stroke-width="1.5" stroke-linecap="round"/>
    <text x="10" y="55" font-family="'Inter', sans-serif" font-size="9" fill="#64748b">Digitally Verified Signatory</text>
  </svg>`,

  // Document Serial Number Rules
  serialFormat: "{COMPANY}/HR/{TYPE}/{YYYY}/{SEQ:4}",
  sequences: {
    ETHICS: 1,
    APPT: 14,
    OFFER: 28,
    INCR: 9,
    NDA: 19,
    REL: 6,
    EXP: 11,
    WARN: 3,
    GEN: 45
  }
};

const defaultCompany = companySettings;


// --- File: mockEmployees.js ---
// Employee Master Initial Seed Data for Obsyra Private Limited (Updated with Leadership)
const initialEmployees = [
  {
    id: "EMP-0001",
    employeeId: "OBS-OPS-26-001",
    firstName: "Swapnil",
    middleName: "Ramesh",
    lastName: "Ghodke",
    fullName: "Swapnil Ghodke",
    gender: "Male",
    dob: "1991-06-14",
    mobile: "+91 98230 45671",
    email: "swapnil.ghodke@obsyra.co.in",
    address: "Flat 402, Green Meadows, Baner Road, Pune, Maharashtra - 411045",
    emergencyContact: {
      name: "Sujata Ghodke",
      relation: "Spouse",
      phone: "+91 98230 45672"
    },
    employment: {
      department: "Telecom & Operations",
      designation: "Senior Project Manager (5G Testing)",
      reportingManager: "Avinash Dagdu Aade (Director)",
      employmentType: "Full-Time Permanent",
      workLocation: "Wagholi HQ, Pune",
      dateOfJoining: "2024-09-01",
      probationPeriodMonths: 6,
      confirmationDate: "2025-03-01",
      status: "Active"
    },
    salary: {
      basic: 55000,
      hra: 27500,
      conveyance: 5000,
      specialAllowance: 22500,
      grossMonthly: 110000,
      pfDeduction: 1800,
      ptDeduction: 200,
      incomeTaxTds: 8000,
      netMonthly: 100000,
      ctcAnnual: 1320000
    },
    bank: {
      bankName: "HDFC Bank",
      accountNumber: "50100239810452",
      ifsc: "HDFC0000240",
      accountHolderName: "Swapnil Ramesh Ghodke",
      branch: "Wagholi, Pune"
    },
    documents: {
      pan: "ABCDE1234F",
      aadhaar: "4521 8901 2345",
      education: "M.Tech in Software Engineering (COEP)",
      previousEmployment: "Tech Mahindra Ltd (5 Years)",
      uploadedFiles: [
        { name: "PAN_Card.pdf", type: "PAN", date: "2024-09-01" },
        { name: "Aadhaar_Card.pdf", type: "Aadhaar", date: "2024-09-01" }
      ]
    },
    generatedLetters: [
      {
        id: "DOC-2026-0014",
        docNumber: "OBS/HR/APPT/2026/0014",
        title: "Appointment Letter",
        category: "Onboarding",
        generatedDate: "2024-09-01",
        generatedBy: "Avinash Dagdu Aade (Director)",
        status: "Finalized"
      }
    ]
  },
  {
    id: "EMP-0002",
    employeeId: "OBS-TECH-26-002",
    firstName: "Ananya",
    middleName: "Suresh",
    lastName: "Sharma",
    fullName: "Ananya Sharma",
    gender: "Female",
    dob: "1994-11-22",
    mobile: "+91 97654 32109",
    email: "ananya.sharma@obsyra.co.in",
    address: "B-301, Silver Birch Society, Viman Nagar, Pune - 411014",
    emergencyContact: {
      name: "Suresh Sharma",
      relation: "Father",
      phone: "+91 97654 32110"
    },
    employment: {
      department: "5G & Core Network",
      designation: "EPC Core Protocol Lead",
      reportingManager: "Avinash Dagdu Aade (Director)",
      employmentType: "Full-Time Permanent",
      workLocation: "Wagholi HQ, Pune",
      dateOfJoining: "2024-10-15",
      probationPeriodMonths: 6,
      confirmationDate: "2025-04-15",
      status: "Active"
    },
    salary: {
      basic: 48000,
      hra: 24000,
      conveyance: 3000,
      specialAllowance: 21000,
      grossMonthly: 96000,
      pfDeduction: 1800,
      ptDeduction: 200,
      incomeTaxTds: 6000,
      netMonthly: 88000,
      ctcAnnual: 1152000
    },
    bank: {
      bankName: "ICICI Bank",
      accountNumber: "000701589412",
      ifsc: "ICIC0000007",
      accountHolderName: "Ananya Sharma",
      branch: "Viman Nagar, Pune"
    },
    documents: {
      pan: "BGHYT9876P",
      aadhaar: "9876 5432 1098",
      education: "B.E. Telecommunications (VIT Pune)",
      previousEmployment: "Amdocs India (3.5 Years)",
      uploadedFiles: []
    },
    generatedLetters: []
  },
  {
    id: "EMP-0003",
    employeeId: "OBS-HR-26-003",
    firstName: "Rajesh",
    middleName: "Kumar",
    lastName: "Verma",
    fullName: "Rajesh Verma",
    gender: "Male",
    dob: "1989-03-10",
    mobile: "+91 99887 66554",
    email: "rajesh.verma@obsyra.co.in",
    address: "C-12, Orchid Residency, Kothrud, Pune - 411038",
    emergencyContact: {
      name: "Pooja Verma",
      relation: "Spouse",
      phone: "+91 99887 66555"
    },
    employment: {
      department: "Human Resources & Manpower",
      designation: "HR Business Partner",
      reportingManager: "Surekha Avinash Aade (Director)",
      employmentType: "Full-Time Permanent",
      workLocation: "Wagholi HQ, Pune",
      dateOfJoining: "2025-01-10",
      probationPeriodMonths: 6,
      confirmationDate: "2025-07-10",
      status: "Active"
    },
    salary: {
      basic: 40000,
      hra: 20000,
      conveyance: 3000,
      specialAllowance: 17000,
      grossMonthly: 80000,
      pfDeduction: 1800,
      ptDeduction: 200,
      incomeTaxTds: 4000,
      netMonthly: 74000,
      ctcAnnual: 960000
    },
    bank: {
      bankName: "Axis Bank",
      accountNumber: "918010045678912",
      ifsc: "UTIB0000123",
      accountHolderName: "Rajesh Kumar Verma",
      branch: "Kothrud, Pune"
    },
    documents: {
      pan: "LKJHG5432M",
      aadhaar: "1234 5678 9012",
      education: "MBA in HR Management",
      previousEmployment: "Wipro Ltd (4 Years)",
      uploadedFiles: []
    },
    generatedLetters: []
  }
];


// --- File: mockTemplates.js ---
// HR Document Templates Seed Library for Obsyra Private Limited (Updated with Modular Offer Letter)
const initialTemplates = [
  {
    id: "TPL-OFFER-01",
    code: "OFFER",
    name: "Employment Offer Letter (3-Level Builder)",
    category: "Recruitment",
    description: "Modular Employment Offer Letter with customizable clause toggles and live field overrides",
    body: `<div style="font-family: Inter, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
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
      <h3 style="font-family: Outfit, Arial, sans-serif; color: #4f46e5; text-transform: uppercase; letter-spacing: 1.5px; margin: 0; font-size: 18px;">FORMAL CANDIDATE ACCEPTANCE OF OFFER</h3>
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
    body: `<div style="font-family: Inter, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 15px;">
    <strong>Ref No:</strong> {{doc_number}}<br>
    <strong>Version:</strong> 1.0 • <strong>Effective Date:</strong> May 19, 2026
  </div>

  <h2 style="text-align: center; font-family: Outfit, Arial, sans-serif; color: #4f46e5; text-transform: uppercase; letter-spacing: 1px; margin: 20px 0 10px 0; font-size: 20px;">CODE OF BUSINESS CONDUCT AND ETHICS</h2>
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
    <h3 style="margin: 0 0 12px 0; color: #166534; font-family: Outfit, sans-serif; font-size: 16px; text-transform: uppercase;">10. Mandatory Employee Acknowledgment & Sign-Off</h3>
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
    body: `<div style="font-family: Inter, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
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
  <h3 style="text-align: center; font-family: Outfit, Arial, sans-serif; color: #4f46e5; text-transform: uppercase; letter-spacing: 1.5px; margin: 25px 0 15px 0; font-size: 18px; border-bottom: 2px solid #4f46e5; padding-bottom: 8px;">
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
      <h3 style="font-family: Outfit, Arial, sans-serif; color: #4f46e5; text-transform: uppercase; letter-spacing: 1.5px; margin: 0; font-size: 16px;">ANNEXURE A — COMPENSATION STRUCTURE</h3>
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
      <h3 style="font-family: Outfit, Arial, sans-serif; color: #4f46e5; text-transform: uppercase; letter-spacing: 1.5px; margin: 0; font-size: 16px;">ANNEXURE B — JOB DESCRIPTION & KEY DELIVERABLES</h3>
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
    body: `<div style="font-family: Inter, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Ref No:</strong> {{doc_number}}<br>
    <strong>Date:</strong> {{letter_date}}
  </div>

  <h3 style="text-align: center; font-family: Outfit, Arial, sans-serif; color: #10b981; text-transform: uppercase; letter-spacing: 1.5px; margin: 20px 0 15px 0; font-size: 18px; border-bottom: 2px solid #10b981; padding-bottom: 8px;">
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
    body: `<div style="font-family: Inter, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Certificate No:</strong> {{certificate_number}}<br>
    <strong>Date:</strong> {{certificate_date}}
  </div>

  <h3 style="text-align: center; font-family: Outfit, Arial, sans-serif; color: #4f46e5; text-transform: uppercase; letter-spacing: 1.5px; margin: 20px 0 15px 0; font-size: 18px; border-bottom: 2px solid #4f46e5; padding-bottom: 8px;">
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
    body: `<div style="font-family: Inter, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Promotion Letter No:</strong> {{promotion_letter_number}}<br>
    <strong>Date:</strong> {{letter_date}}
  </div>

  <h3 style="text-align: center; font-family: Outfit, Arial, sans-serif; color: #6366f1; text-transform: uppercase; letter-spacing: 1.5px; margin: 20px 0 15px 0; font-size: 18px; border-bottom: 2px solid #6366f1; padding-bottom: 8px;">
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
    body: `<div style="font-family: Inter, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Agreement No:</strong> {{nda_number}}<br>
    <strong>Date:</strong> {{agreement_date}}
  </div>

  <h3 style="text-align: center; font-family: Outfit, Arial, sans-serif; color: #dc2626; text-transform: uppercase; letter-spacing: 1.5px; margin: 20px 0 15px 0; font-size: 18px; border-bottom: 2px solid #dc2626; padding-bottom: 8px;">
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
    body: `<div style="font-family: Inter, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Relieving Order No:</strong> {{relieving_order_number}}<br>
    <strong>Date:</strong> {{relieving_date}}
  </div>

  <h3 style="text-align: center; font-family: Outfit, Arial, sans-serif; color: #0284c7; text-transform: uppercase; letter-spacing: 1.5px; margin: 20px 0 15px 0; font-size: 18px; border-bottom: 2px solid #0284c7; padding-bottom: 8px;">
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
    body: `<div style="font-family: Inter, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Joining Report No:</strong> {{joining_report_number}}<br>
    <strong>Date:</strong> {{joining_date}}
  </div>

  <h3 style="text-align: center; font-family: Outfit, Arial, sans-serif; color: #10b981; text-transform: uppercase; letter-spacing: 1.5px; margin: 20px 0 15px 0; font-size: 18px; border-bottom: 2px solid #10b981; padding-bottom: 8px;">
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
    body: `<div style="font-family: Inter, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Confirmation Letter No:</strong> {{confirmation_letter_number}}<br>
    <strong>Date:</strong> {{letter_date}}
  </div>

  <h3 style="text-align: center; font-family: Outfit, Arial, sans-serif; color: #10b981; text-transform: uppercase; letter-spacing: 1.5px; margin: 20px 0 15px 0; font-size: 18px; border-bottom: 2px solid #10b981; padding-bottom: 8px;">
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
    body: `<div style="font-family: Inter, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Warning Letter No:</strong> {{warning_letter_number}}<br>
    <strong>Date:</strong> {{letter_date}}
  </div>

  <h3 style="text-align: center; font-family: Outfit, Arial, sans-serif; color: #ef4444; text-transform: uppercase; letter-spacing: 1.5px; margin: 20px 0 15px 0; font-size: 18px; border-bottom: 2px solid #ef4444; padding-bottom: 8px;">
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
    body: `<div style="font-family: Inter, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Transfer Order No:</strong> {{transfer_order_number}}<br>
    <strong>Date:</strong> {{order_date}}
  </div>

  <h3 style="text-align: center; font-family: Outfit, Arial, sans-serif; color: #f59e0b; text-transform: uppercase; letter-spacing: 1.5px; margin: 20px 0 15px 0; font-size: 18px; border-bottom: 2px solid #f59e0b; padding-bottom: 8px;">
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
    body: `<div style="font-family: Inter, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Certificate No:</strong> {{certificate_number}}<br>
    <strong>Date:</strong> {{certificate_date}}
  </div>

  <h3 style="text-align: center; font-family: Outfit, Arial, sans-serif; color: #10b981; text-transform: uppercase; letter-spacing: 1.5px; margin: 20px 0 15px 0; font-size: 18px; border-bottom: 2px solid #10b981; padding-bottom: 8px;">
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
    body: `<div style="font-family: Inter, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <div style="text-align: right; font-size: 13px; color: #64748b; margin-bottom: 20px;">
    <strong>Ref No:</strong> {{doc_number}}<br>
    <strong>Date:</strong> {{issue_date}}
  </div>

  <div style="margin-bottom: 25px;">
    <strong>To, The Branch Manager</strong><br>
    HDFC Bank / ICICI Bank / Axis Bank<br>
    Pune, Maharashtra
  </div>

  <h3 style="text-align: center; font-family: Outfit, Arial, sans-serif; color: #4f46e5; text-transform: uppercase; letter-spacing: 1px; margin: 25px 0; font-size: 18px;">REQUEST FOR SALARY ACCOUNT OPENING</h3>

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
    body: `<div style="font-family: Inter, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
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
  <h3 style="text-align: center; font-family: Outfit, Arial, sans-serif; color: #dc2626; text-transform: uppercase; letter-spacing: 1.5px; margin: 25px 0 15px 0; font-size: 18px; border-bottom: 2px solid #dc2626; padding-bottom: 8px;">
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
  </div>`
  },
  {
    id: "TPL-SLIP-01",
    code: "SLIP",
    name: "Monthly Salary Slip / Payslip",
    category: "Compensation",
    description: "Official monthly employee salary slip with itemized earnings, deductions, net payout, and employer contributions",
    body: `<div style="font-family: Inter, Arial, sans-serif; color: #1e293b; line-height: 1.5;">
  <div style="text-align: center; border-bottom: 2px solid #0f172a; padding-bottom: 12px; margin-bottom: 15px;">
    <h2 style="font-family: Outfit, Arial, sans-serif; color: #0f172a; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px 0; font-size: 20px;">SALARY SLIP</h2>
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


// --- File: context.js ---
// Global State Manager for Obsyra HR System

class HRStore {
  constructor() {
    window.store = this;
    this.listeners = [];

    const savedUser = this.loadFromStorage('obsyra_currentUser', {
      employeeId: "OBS-OPS-26-001",
      name: "Swapnil Ghodke",
      email: "swapnil.ghodke@obsyra.com",
      role: "Super Admin", // Super Admin, HR Admin, HR Executive, Department Manager, Employee
      designation: "Head of HR",
      department: "Executive Management",
      avatar: "SG"
    });

    this.state = {
      company: this.loadFromStorage('obsyra_company', (typeof defaultCompany !== 'undefined' ? defaultCompany : companySettings)),
      employees: this.loadFromStorage('obsyra_employees', initialEmployees),
      templates: this.loadFromStorage('obsyra_templates', initialTemplates),
      history: this.loadFromStorage('obsyra_history', this.getInitialHistory()),
      currentUser: savedUser,
      activePunch: this.loadFromStorage('obsyra_activePunch', null),
      activeView: window.pendingView || "dashboard",
      viewParams: window.pendingParams || {}
    };

    if (window.pendingView) {
      delete window.pendingView;
      delete window.pendingParams;
    }
  }

  togglePunch(mode = "Field Duty", address = "Kharadi, Pune, Maharashtra, India") {
    if (this.state.activePunch) {
      this.state.activePunch = null;
      this.saveToStorage('obsyra_activePunch', null);
    } else {
      this.state.activePunch = {
        mode: mode,
        address: address,
        lat: 18.5514,
        lng: 73.9452,
        accuracy: 18,
        checkInTime: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
      };
      this.saveToStorage('obsyra_activePunch', this.state.activePunch);
    }
    this.notify();
  }

  // RBAC Permission Evaluator
  hasPermission(view) {
    const role = this.state.currentUser.role;
    if (role === "Super Admin") return true;
    
    if (role === "HR Admin") {
      return view !== "settings_edit";
    }

    if (role === "HR Executive") {
      return ["dashboard", "employees", "profile", "generator", "history", "recruitment", "onboarding", "attendance", "payroll", "performance", "assets", "projects", "verification", "auditLogs", "expenses", "training", "exit"].includes(view);
    }

    if (role === "Department Manager") {
      return ["dashboard", "employees", "profile", "recruitment", "onboarding", "attendance", "performance", "assets", "projects", "expenses", "training"].includes(view);
    }

    if (role === "Employee") {
      return ["dashboard", "profile", "attendance", "payroll", "assets", "expenses", "training", "verification"].includes(view);
    }

    return true;
  }

  // User Authentication Methods
  login(employeeId, password) {
    const emp = this.state.employees.find(e => e.employeeId === employeeId || e.id === employeeId || e.contact?.email === employeeId);
    if (emp) {
      let role = "Employee";
      if (emp.employment?.designation?.includes("Head of HR") || emp.employment?.department === "Executive Management") {
        role = "Super Admin";
      } else if (emp.employment?.designation?.includes("Director") || (emp.employment?.designation?.includes("Manager") && emp.employment?.department === "Human Resources")) {
        role = "HR Admin";
      } else if (emp.employment?.department === "Human Resources") {
        role = "HR Executive";
      } else if (emp.employment?.designation?.includes("Lead") || emp.employment?.designation?.includes("Senior")) {
        role = "Department Manager";
      }

      this.state.currentUser = {
        employeeId: emp.employeeId,
        name: emp.fullName,
        email: emp.contact?.email || `${emp.firstName.toLowerCase()}@obsyra.com`,
        role: role,
        designation: emp.employment?.designation,
        department: emp.employment?.department,
        avatar: `${emp.firstName[0]}${emp.lastName[0]}`
      };
      this.saveToStorage('obsyra_currentUser', this.state.currentUser);
      this.notify();
      return { success: true, user: this.state.currentUser };
    } else {
      return { success: false, message: "Invalid Employee ID or credentials" };
    }
  }

  logout() {
    localStorage.removeItem('obsyra_currentUser');
    this.state.currentUser = {
      employeeId: "OBS-GUEST-000",
      name: "Guest Staff",
      email: "guest@obsyra.com",
      role: "Employee",
      designation: "Staff Member",
      department: "General",
      avatar: "GU"
    };
    this.notify();
  }

  loadFromStorage(key, fallback) {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : fallback;
    } catch (e) {
      console.warn(`Error reading ${key} from storage:`, e);
      return fallback;
    }
  }

  saveToStorage(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error(`Error saving ${key} to storage:`, e);
    }
  }

  getInitialHistory() {
    // Generate initial history from pre-seeded employee letters
    const historyList = [];
    initialEmployees.forEach(emp => {
      if (emp.generatedLetters && emp.generatedLetters.length > 0) {
        emp.generatedLetters.forEach(letter => {
          historyList.push({
            id: letter.id,
            docNumber: letter.docNumber,
            employeeId: emp.employeeId,
            employeeName: emp.fullName,
            designation: emp.employment.designation,
            department: emp.employment.department,
            title: letter.title,
            category: letter.category,
            generatedDate: letter.generatedDate,
            generatedBy: letter.generatedBy,
            status: letter.status || "Finalized"
          });
        });
      }
    });
    return historyList;
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(listener => listener(this.state));
  }

  getState() {
    return this.state;
  }

  navigate(view, params = {}) {
    this.state.activeView = view;
    this.state.viewParams = params;
    this.notify();
    window.scrollTo(0, 0);
  }

  // Employee Methods
  addEmployee(newEmpData) {
    const nextNum = String(this.state.employees.length + 1).padStart(4, '0');
    const newEmp = {
      id: `EMP-${nextNum}`,
      employeeId: newEmpData.employeeId || `OBS-EMP-26-${nextNum}`,
      fullName: `${newEmpData.firstName} ${newEmpData.lastName}`,
      ...newEmpData,
      generatedLetters: newEmpData.generatedLetters || []
    };
    this.state.employees = [newEmp, ...this.state.employees];
    this.saveToStorage('obsyra_employees', this.state.employees);
    this.notify();
    return newEmp;
  }

  updateEmployee(id, updatedData) {
    this.state.employees = this.state.employees.map(emp => {
      if (emp.id === id || emp.employeeId === id) {
        const merged = { ...emp, ...updatedData };
        merged.fullName = `${merged.firstName} ${merged.lastName}`;
        return merged;
      }
      return emp;
    });
    this.saveToStorage('obsyra_employees', this.state.employees);
    this.notify();
  }

  getEmployee(id) {
    return this.state.employees.find(emp => emp.id === id || emp.employeeId === id);
  }

  // Template Methods
  addTemplate(tpl) {
    const newTpl = {
      id: `TPL-CUSTOM-${Date.now()}`,
      ...tpl
    };
    this.state.templates = [newTpl, ...this.state.templates];
    this.saveToStorage('obsyra_templates', this.state.templates);
    this.notify();
    return newTpl;
  }

  updateTemplate(id, tplData) {
    this.state.templates = this.state.templates.map(t => t.id === id ? { ...t, ...tplData } : t);
    this.saveToStorage('obsyra_templates', this.state.templates);
    this.notify();
  }

  getTemplate(id) {
    return this.state.templates.find(t => t.id === id || t.code === id);
  }

  // History & Record Generation
  recordGeneratedDocument(docRecord) {
    this.state.history = [docRecord, ...this.state.history];
    this.saveToStorage('obsyra_history', this.state.history);

    // Also attach to employee record
    const emp = this.getEmployee(docRecord.employeeId);
    if (emp) {
      if (!emp.generatedLetters) emp.generatedLetters = [];
      emp.generatedLetters.unshift({
        id: docRecord.id,
        docNumber: docRecord.docNumber,
        title: docRecord.title,
        category: docRecord.category,
        generatedDate: docRecord.generatedDate,
        generatedBy: docRecord.generatedBy,
        status: docRecord.status
      });
      this.saveToStorage('obsyra_employees', this.state.employees);
    }
    this.notify();
  }

  // Company Settings
  updateCompany(updated) {
    this.state.company = { ...this.state.company, ...updated };
    this.saveToStorage('obsyra_company', this.state.company);
    this.notify();
  }

  // User Role Switcher
  setUserRole(role) {
    this.state.currentUser.role = role;
    this.notify();
  }
}

const store = new HRStore();
window.store = store;


// --- File: serialEngine.js ---
// Serial Number Generator for HR Documents
function generateNextDocNumber(docTypeCode, companySettings) {
  const code = docTypeCode ? docTypeCode.toUpperCase() : "GEN";
  const currentYear = new Date().getFullYear();
  
  if (!companySettings.sequences) {
    companySettings.sequences = {};
  }
  
  // Peek next sequence without mutating state on preview
  const nextSeq = (companySettings.sequences[code] || 0) + 1;
  const paddedSeq = String(nextSeq).padStart(4, '0');
  const docNumber = `${companySettings.code || 'OBS'}/HR/${code}/${currentYear}/${paddedSeq}`;
  
  return {
    docNumber,
    sequenceNumber: nextSeq
  };
}

function commitDocNumberSequence(docTypeCode, companySettings) {
  const code = docTypeCode ? docTypeCode.toUpperCase() : "GEN";
  if (!companySettings.sequences) {
    companySettings.sequences = {};
  }
  companySettings.sequences[code] = (companySettings.sequences[code] || 0) + 1;
  return companySettings.sequences[code];
}


// --- File: templateEngine.js ---
// Template Engine Parser & Formatter Utilities (Supports Level 1/2/3/4 Variables & Section Blocks)
function formatCurrency(amount) {
  if (amount === undefined || amount === null || isNaN(amount)) return "₹ 0";
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

function formatDate(dateString) {
  if (!dateString) return new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
}

function numberToWords(num) {
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

function compileTemplate(rawHtml, employee, company, overrides = {}) {
  if (!rawHtml) return "";

  const genderPrefix = employee.gender === "Female" ? "Ms." : "Mr.";
  const genderPronounSmall = employee.gender === "Female" ? "she" : "he";

  // Calculate annual breakdown if salary present
  const basicMonthly = overrides.basicSalary !== undefined ? parseFloat(overrides.basicSalary) : (employee.salary?.basic || 37500);
  const hraMonthly = overrides.hraSalary !== undefined ? parseFloat(overrides.hraSalary) : (employee.salary?.hra || Math.round(basicMonthly * 0.5));
  const grossMonthly = overrides.grossSalary !== undefined ? parseFloat(overrides.grossSalary) : (employee.salary?.grossMonthly || (basicMonthly + hraMonthly + 1600 + 13400));
  const allowancesMonthly = Math.max(0, grossMonthly - basicMonthly - hraMonthly);
  const ctcAnnual = overrides.annualCtc !== undefined ? parseFloat(overrides.annualCtc) : (employee.salary?.ctcAnnual || (grossMonthly * 12));
  const pfMonthly = employee.salary?.pfDeduction || 1800;

  const defaultSub = overrides.subjectLine || overrides.subject_line || `Monthly Salary Slip / Payslip`;

  // Calculated Deductions & Payouts for Salary Slip
  const conveyanceVal = overrides.conveyance !== undefined ? parseFloat(overrides.conveyance) : 1600;
  const specialAllowanceVal = overrides.specialAllowance !== undefined ? parseFloat(overrides.specialAllowance) : Math.max(0, allowancesMonthly - conveyanceVal);
  const otherAllowanceVal = overrides.otherAllowance !== undefined ? parseFloat(overrides.otherAllowance) : 0;
  const overtimeVal = overrides.overtime !== undefined ? parseFloat(overrides.overtime) : 0;
  const incentiveVal = overrides.incentive !== undefined ? parseFloat(overrides.incentive) : 0;

  const totalEarningsVal = overrides.totalEarnings !== undefined ? parseFloat(overrides.totalEarnings) : (basicMonthly + hraMonthly + conveyanceVal + specialAllowanceVal + otherAllowanceVal + overtimeVal + incentiveVal);

  const employeePfVal = overrides.employeePf !== undefined ? parseFloat(overrides.employeePf) : pfMonthly;
  const profTaxVal = overrides.professionalTax !== undefined ? parseFloat(overrides.professionalTax) : 200;
  const tdsVal = overrides.tds !== undefined ? parseFloat(overrides.tds) : 1500;
  const employeeEsiVal = overrides.employeeEsi !== undefined ? parseFloat(overrides.employeeEsi) : 0;
  const loanDeductionVal = overrides.loanDeduction !== undefined ? parseFloat(overrides.loanDeduction) : 0;
  const lopDeductionVal = overrides.lopDeduction !== undefined ? parseFloat(overrides.lopDeduction) : 0;
  const otherDeductionVal = overrides.otherDeduction !== undefined ? parseFloat(overrides.otherDeduction) : 0;

  const totalDeductionsVal = overrides.totalDeductions !== undefined ? parseFloat(overrides.totalDeductions) : (employeePfVal + profTaxVal + tdsVal + employeeEsiVal + loanDeductionVal + lopDeductionVal + otherDeductionVal);
  const netSalaryVal = overrides.netSalary !== undefined ? parseFloat(overrides.netSalary) : (totalEarningsVal - totalDeductionsVal);

  const employerPfVal = overrides.employerPf !== undefined ? parseFloat(overrides.employerPf) : pfMonthly;
  const employerEsiVal = overrides.employerEsi !== undefined ? parseFloat(overrides.employerEsi) : 0;
  const otherEmployerContribVal = overrides.otherEmployerContribution !== undefined ? parseFloat(overrides.otherEmployerContribution) : 0;
  const totalEmployerContribVal = overrides.totalEmployerContribution !== undefined ? parseFloat(overrides.totalEmployerContribution) : (employerPfVal + employerEsiVal + otherEmployerContribVal);

  // Comprehensive Base Variable Dictionary
  const variables = {
    // Subject Line Alias Keys
    subject_line: defaultSub,
    subjectLine: defaultSub,

    // Level 1: Company Details
    company_name: company.name,
    company_short: company.shortName,
    company_cin: company.cin,
    company_gstin: company.gstin,
    company_email: company.email,
    company_phone: company.phone,
    company_contact: company.phone,
    company_website: company.website,
    company_hr_email: company.hrEmail,
    company_address: company.corporateAddress,
    authorized_signatory: company.authorizedSignatoryName,
    authorized_person_name: company.authorizedSignatoryName,
    signatory_designation: company.authorizedSignatoryDesignation,
    authorized_person_designation: company.authorizedSignatoryDesignation,

    // Monthly Payslip / Salary Slip Specific Variables
    salary_slip_number: overrides.docNumber || "OBSYRA/PAY/2026/0801",
    salary_month: overrides.salaryMonth || "August",
    salary_year: overrides.salaryYear || "2026",
    pay_period: overrides.payPeriod || "01 August 2026 – 31 August 2026",
    paid_days: overrides.paidDays || "31",
    working_days: overrides.workingDays || "31",
    lop_days: overrides.lopDays || "0",
    masked_bank_account: overrides.maskedBankAccount || "XXXX XXXX 4821",
    pan_number: overrides.panNumber || "ABCDE1234F",
    uan_number: overrides.uanNumber || "101298473612",

    // Earnings & Deductions Breakdown
    basic_salary: formatCurrency(basicMonthly),
    hra: formatCurrency(hraMonthly),
    conveyance: formatCurrency(conveyanceVal),
    special_allowance: formatCurrency(specialAllowanceVal),
    other_allowance: formatCurrency(otherAllowanceVal),
    overtime: formatCurrency(overtimeVal),
    incentive: formatCurrency(incentiveVal),
    total_earnings: formatCurrency(totalEarningsVal),

    employee_pf: formatCurrency(employeePfVal),
    professional_tax: formatCurrency(profTaxVal),
    tds: formatCurrency(tdsVal),
    employee_esi: formatCurrency(employeeEsiVal),
    loan_deduction: formatCurrency(loanDeductionVal),
    lop_deduction: formatCurrency(lopDeductionVal),
    other_deduction: formatCurrency(otherDeductionVal),
    total_deductions: formatCurrency(totalDeductionsVal),

    net_salary: formatCurrency(netSalaryVal),
    net_salary_in_words: numberToWords(netSalaryVal),

    employer_pf: formatCurrency(employerPfVal),
    employer_esi: formatCurrency(employerEsiVal),
    other_employer_contribution: formatCurrency(otherEmployerContribVal),
    total_employer_contribution: formatCurrency(totalEmployerContribVal),
    monthly_ctc: formatCurrency(Math.round(ctcAnnual / 12)),

    payment_date: formatDate(overrides.paymentDate || overrides.issueDate || new Date()),
    payment_mode: overrides.paymentMode || "Bank Transfer (NEFT/RTGS)",
    bank_name: overrides.bankName || "HDFC Bank Ltd.",
    payment_reference: overrides.paymentReference || "HDFC-NEFT-20260811-098231",

    // Document Metadata & Dates
    doc_number: overrides.docNumber || "OBSYRA/PAY/2026/0801",
    docNumber: overrides.docNumber || "OBSYRA/PAY/2026/0801",
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

    // Financial Breakdown
    basic_salary_val: formatCurrency(basicMonthly),
    basic_monthly: formatCurrency(basicMonthly),
    basic_annual: formatCurrency(basicMonthly * 12),
    hra_val: formatCurrency(hraMonthly),
    hra_monthly: formatCurrency(hraMonthly),
    hra_annual: formatCurrency(hraMonthly * 12),
    special_allowance_val: formatCurrency(allowancesMonthly),
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


// --- File: dashboard.js ---
// Dashboard Module View (Updated with Ethics Code Quick Action)

function renderDashboard() {
  const state = store.getState();
  const employees = state.employees || [];
  const history = state.history || [];
  const activeCount = employees.filter(e => e.employment?.status === 'Active').length;
  const probationCount = employees.filter(e => e.employment?.status === 'On Probation' || e.employment?.probationPeriodMonths > 0).length;

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>HR Dashboard</h1>
        <p class="page-subtitle">Welcome back, ${state.currentUser.name} (${state.currentUser.role}) • ${state.company.name}</p>
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn btn-primary" onclick="window.hrApp.navigate('generator')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
          Generate Document
        </button>
        <button class="btn btn-secondary" onclick="window.hrApp.openAddEmployeeModal()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
          Add Employee
        </button>
      </div>
    </div>

    <!-- Stat Cards Row -->
    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card">
        <div class="stat-icon-wrapper" style="background: rgba(99, 102, 241, 0.15); color: #818cf8;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        </div>
        <div>
          <div class="stat-value">${employees.length}</div>
          <div class="stat-label">Total Employees</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon-wrapper" style="background: rgba(16, 185, 129, 0.15); color: #34d399;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <div>
          <div class="stat-value">${activeCount}</div>
          <div class="stat-label">Active Staff</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon-wrapper" style="background: rgba(245, 158, 11, 0.15); color: #fbbf24;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        </div>
        <div>
          <div class="stat-value">${history.length}</div>
          <div class="stat-label">Documents Issued</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon-wrapper" style="background: rgba(139, 92, 246, 0.15); color: #a78bfa;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
        </div>
        <div>
          <div class="stat-value">${probationCount}</div>
          <div class="stat-label">Under Probation</div>
        </div>
      </div>
    </div>

    <!-- Quick Action Launchpad -->
    <div class="glass-card" style="margin-bottom: 25px;">
      <h3 style="margin-bottom: 15px; font-size: 1.1rem;">Quick Action Launchpad</h3>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <button class="btn btn-secondary" onclick="window.hrApp.navigate('generator', { templateId: 'TPL-ETHICS-01' })">
          📜 Code of Ethics Sign-Off
        </button>
        <button class="btn btn-secondary" onclick="window.hrApp.navigate('generator', { templateId: 'TPL-APPT-01' })">
          📄 Generate Appointment Letter
        </button>
        <button class="btn btn-secondary" onclick="window.hrApp.navigate('generator', { templateId: 'TPL-OFFER-01' })">
          ✉️ Generate Offer Letter
        </button>
        <button class="btn btn-secondary" onclick="window.hrApp.navigate('generator', { templateId: 'TPL-INCR-01' })">
          📈 Generate Increment Letter
        </button>
        <button class="btn btn-secondary" onclick="window.hrApp.navigate('generator', { templateId: 'TPL-EXP-01' })">
          🎖️ Experience Certificate
        </button>
        <button class="btn btn-secondary" onclick="window.hrApp.navigate('employees')">
          👥 Employee Directory
        </button>
        <button class="btn btn-secondary" onclick="window.hrApp.navigate('history')">
          📜 Document Vault
        </button>
      </div>
    </div>

    <!-- Dashboard Content Split -->
    <div class="grid-2">
      <!-- Recent Document Activity Stream -->
      <div class="glass-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
          <h3 style="font-size: 1.1rem;">Recent Document Generations</h3>
          <a href="javascript:void(0)" data-view="history" onclick="window.store.navigate('history'); return false;" style="font-size: 0.85rem; color: var(--primary); font-weight: 600;">View All Vault →</a>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Doc Serial Number</th>
                <th>Employee</th>
                <th>Document Title</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              ${history.slice(0, 5).map(doc => `
                <tr>
                  <td><span style="font-family: monospace; color: var(--primary); font-weight: 600;">${doc.docNumber}</span></td>
                  <td><strong>${doc.employeeName}</strong><br><small style="color: var(--text-muted);">${doc.employeeId}</small></td>
                  <td><span class="badge badge-primary">${doc.title}</span></td>
                  <td><small>${doc.generatedDate}</small></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Quick Employee Roster -->
      <div class="glass-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
          <h3 style="font-size: 1.1rem;">Recent Employee Master</h3>
          <a href="javascript:void(0)" data-view="employees" onclick="window.store.navigate('employees'); return false;" style="font-size: 0.85rem; color: var(--primary); font-weight: 600;">Manage Employees →</a>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${employees.slice(0, 4).map(emp => `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div class="avatar-badge" style="width: 34px; height: 34px; font-size: 0.8rem;">
                  ${emp.firstName[0]}${emp.lastName[0]}
                </div>
                <div>
                  <strong style="font-size: 0.9rem;">${emp.fullName}</strong>
                  <div style="font-size: 0.78rem; color: var(--text-muted);">${emp.employment.designation} • ${emp.employment.department}</div>
                </div>
              </div>
              <button class="btn btn-sm btn-secondary" onclick="window.store.navigate('profile', { employeeId: '${emp.id}' })">
                View Profile
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Corporate System Footer -->
    <footer style="margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; color: var(--text-subtle); font-size: 0.78rem;">
      <div>
        <strong>Obsyra Private Limited</strong> • CIN: U63991PN2026PTC252127 • Wagholi, Pune, Maharashtra 412207
      </div>
      <div>
        Obsyra HR v2.5 Enterprise Edition • Secured & Compliance Verified
      </div>
    </footer>
  `;
}


// --- File: employees.js ---
// Employee Master Module View

function renderEmployees() {
  const state = store.getState();
  const employees = state.employees || [];

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Employee Master</h1>
        <p class="page-subtitle">Central source of truth for all employee profiles & digital HR files</p>
      </div>
      <button class="btn btn-primary" onclick="window.hrApp.openAddEmployeeModal()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
        Add New Employee
      </button>
    </div>

    <!-- Filter & Search Controls -->
    <div class="glass-card" style="margin-bottom: 20px; padding: 16px;">
      <div style="display: flex; gap: 15px; flex-wrap: wrap; align-items: center; justify-content: space-between;">
        <div style="display: flex; gap: 12px; flex: 1; min-width: 300px;">
          <input type="text" id="empSearchInput" class="form-control" placeholder="Search by name, ID, designation, email..." onkeyup="window.hrApp.filterEmployeesTable()" style="flex: 1;">
          <select id="deptFilterSelect" class="form-control" onchange="window.hrApp.filterEmployeesTable()" style="width: 200px;">
            <option value="">All Departments</option>
            <option value="IT & Operations">IT & Operations</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Finance & Accounts">Finance & Accounts</option>
          </select>
        </div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">
          Showing <strong id="empCountLabel" style="color: var(--text-main);">${employees.length}</strong> Employees
        </div>
      </div>
    </div>

    <!-- Employee Master Data Table -->
    <div class="glass-card">
      <div class="table-responsive">
        <table class="data-table" id="employeeDataTable">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Date of Joining</th>
              <th>Annual CTC</th>
              <th>Status</th>
              <th style="text-align: right;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${employees.map(emp => `
              <tr class="emp-row" data-name="${emp.fullName.toLowerCase()}" data-id="${emp.employeeId.toLowerCase()}" data-dept="${emp.employment.department}">
                <td><span style="font-family: monospace; font-weight: 600; color: var(--primary);">${emp.employeeId}</span></td>
                <td>
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <div class="avatar-badge" style="width: 32px; height: 32px; font-size: 0.75rem;">
                      ${emp.firstName[0]}${emp.lastName[0]}
                    </div>
                    <div>
                      <strong>${emp.fullName}</strong><br>
                      <small style="color: var(--text-muted);">${emp.email}</small>
                    </div>
                  </div>
                </td>
                <td>${emp.employment.department}</td>
                <td>${emp.employment.designation}</td>
                <td><small>${emp.employment.dateOfJoining}</small></td>
                <td><strong>₹ ${(emp.salary?.ctcAnnual || 0).toLocaleString('en-IN')}</strong></td>
                <td><span class="badge badge-active">${emp.employment.status}</span></td>
                <td style="text-align: right;">
                  <div style="display: flex; gap: 6px; justify-content: flex-end;">
                    <button class="btn btn-sm btn-secondary" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}' })">
                      Profile
                    </button>
                    <button class="btn btn-sm btn-primary" onclick="window.hrApp.navigate('generator', { employeeId: '${emp.id}' })">
                      Generate Letter
                    </button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}


// --- File: employeeProfile.js ---
// Employee Profile Module View (12-Tab Digital HR File)

function renderEmployeeProfile(employeeId) {
  const state = store.getState();
  const emp = state.employees.find(e => e.id === employeeId || e.employeeId === employeeId) || state.employees[0];

  if (!emp) {
    return `<div class="glass-card"><h3>Employee not found.</h3></div>`;
  }

  const activeTab = state.viewParams.tab || 'overview';

  return `
    <div class="page-header">
      <div style="display: flex; align-items: center; gap: 15px;">
        <button class="btn btn-secondary btn-sm" onclick="window.hrApp.navigate('employees')">
          ← Back to Employees
        </button>
        <div>
          <h1 style="margin: 0; font-size: 1.5rem;">${emp.fullName}</h1>
          <p class="page-subtitle" style="margin: 0;">${emp.employeeId} • ${emp.employment.designation} • ${emp.employment.department}</p>
        </div>
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn btn-primary" onclick="window.hrApp.navigate('generator', { employeeId: '${emp.id}' })">
          📄 Generate HR Document
        </button>
      </div>
    </div>

    <!-- Profile Header Summary Banner -->
    <div class="glass-card" style="margin-bottom: 20px; background: linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%); border-left: 4px solid var(--primary);">
      <div style="display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
        <div class="avatar-badge" style="width: 64px; height: 64px; font-size: 1.5rem; font-weight: 700;">
          ${emp.firstName[0]}${emp.lastName[0]}
        </div>
        <div style="flex: 1;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 4px;">
            <h2 style="font-size: 1.3rem; margin: 0;">${emp.fullName}</h2>
            <span class="badge badge-active">${emp.employment.status}</span>
          </div>
          <div style="display: flex; gap: 20px; font-size: 0.88rem; color: var(--text-muted); flex-wrap: wrap;">
            <span>📧 ${emp.email}</span>
            <span>📱 ${emp.mobile}</span>
            <span>📍 ${emp.employment.workLocation}</span>
            <span>📅 Joined: ${emp.employment.dateOfJoining}</span>
          </div>
        </div>
        <div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">Annual CTC</div>
          <div style="font-size: 1.3rem; font-weight: 700; color: var(--accent-teal);">${formatCurrency(emp.salary?.ctcAnnual)}</div>
        </div>
      </div>
    </div>

    <!-- 12-Tab Profile Navigation Bar -->
    <div class="tabs-nav">
      <button class="tab-btn ${activeTab === 'overview' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'overview' })">Overview</button>
      <button class="tab-btn ${activeTab === 'personal' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'personal' })">Personal Info</button>
      <button class="tab-btn ${activeTab === 'employment' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'employment' })">Employment Details</button>
      <button class="tab-btn ${activeTab === 'salary' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'salary' })">Salary Breakdown</button>
      <button class="tab-btn ${activeTab === 'bank' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'bank' })">Bank Details</button>
      <button class="tab-btn ${activeTab === 'documents' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'documents' })">ID & Uploads</button>
      <button class="tab-btn ${activeTab === 'letters' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'letters' })">Generated Letters (${emp.generatedLetters?.length || 0})</button>
      <button class="tab-btn ${activeTab === 'attendance' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'attendance' })">Attendance & Leave</button>
      <button class="tab-btn ${activeTab === 'performance' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'performance' })">Performance</button>
      <button class="tab-btn ${activeTab === 'assets' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'assets' })">Assets</button>
      <button class="tab-btn ${activeTab === 'exit' ? 'active' : ''}" onclick="window.hrApp.navigate('profile', { employeeId: '${emp.id}', tab: 'exit' })">Exit Record</button>
    </div>

    <!-- Active Tab Content Area -->
    <div class="profile-tab-content">
      ${renderTabContent(activeTab, emp)}
    </div>
  `;
}

function renderTabContent(tab, emp) {
  switch (tab) {
    case 'personal':
      return `
        <div class="glass-card">
          <h3 style="margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">Personal Information</h3>
          <div class="grid-2">
            <div><span class="form-label">First Name:</span> <strong>${emp.firstName}</strong></div>
            <div><span class="form-label">Middle Name:</span> <strong>${emp.middleName || '-'}</strong></div>
            <div><span class="form-label">Last Name:</span> <strong>${emp.lastName}</strong></div>
            <div><span class="form-label">Date of Birth:</span> <strong>${emp.dob}</strong></div>
            <div><span class="form-label">Gender:</span> <strong>${emp.gender}</strong></div>
            <div><span class="form-label">Mobile:</span> <strong>${emp.mobile}</strong></div>
            <div><span class="form-label">Personal Email:</span> <strong>${emp.email}</strong></div>
            <div><span class="form-label">Permanent Address:</span> <strong>${emp.address}</strong></div>
            <div><span class="form-label">Emergency Contact Person:</span> <strong>${emp.emergencyContact?.name} (${emp.emergencyContact?.relation})</strong></div>
            <div><span class="form-label">Emergency Phone:</span> <strong>${emp.emergencyContact?.phone}</strong></div>
          </div>
        </div>
      `;

    case 'employment':
      return `
        <div class="glass-card">
          <h3 style="margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">Employment Details</h3>
          <div class="grid-2">
            <div><span class="form-label">Employee ID:</span> <strong style="font-family: monospace; color: var(--primary);">${emp.employeeId}</strong></div>
            <div><span class="form-label">Date of Joining:</span> <strong>${emp.employment.dateOfJoining}</strong></div>
            <div><span class="form-label">Department:</span> <strong>${emp.employment.department}</strong></div>
            <div><span class="form-label">Designation:</span> <strong>${emp.employment.designation}</strong></div>
            <div><span class="form-label">Reporting Manager:</span> <strong>${emp.employment.reportingManager}</strong></div>
            <div><span class="form-label">Employment Type:</span> <strong>${emp.employment.employmentType}</strong></div>
            <div><span class="form-label">Work Location:</span> <strong>${emp.employment.workLocation}</strong></div>
            <div><span class="form-label">Probation Period:</span> <strong>${emp.employment.probationPeriodMonths} Months</strong></div>
            <div><span class="form-label">Confirmation Date:</span> <strong>${emp.employment.confirmationDate || 'Pending'}</strong></div>
            <div><span class="form-label">Status:</span> <span class="badge badge-active">${emp.employment.status}</span></div>
          </div>
        </div>
      `;

    case 'salary':
      return `
        <div class="glass-card">
          <h3 style="margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">Salary Structure Breakdown</h3>
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Salary Component</th>
                  <th style="text-align: right;">Monthly Amount (INR)</th>
                  <th style="text-align: right;">Annual Amount (INR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basic Salary</td>
                  <td style="text-align: right;">${formatCurrency(emp.salary?.basic)}</td>
                  <td style="text-align: right;">${formatCurrency((emp.salary?.basic || 0) * 12)}</td>
                </tr>
                <tr>
                  <td>House Rent Allowance (HRA)</td>
                  <td style="text-align: right;">${formatCurrency(emp.salary?.hra)}</td>
                  <td style="text-align: right;">${formatCurrency((emp.salary?.hra || 0) * 12)}</td>
                </tr>
                <tr>
                  <td>Conveyance Allowance</td>
                  <td style="text-align: right;">${formatCurrency(emp.salary?.conveyance || 0)}</td>
                  <td style="text-align: right;">${formatCurrency((emp.salary?.conveyance || 0) * 12)}</td>
                </tr>
                <tr>
                  <td>Special Allowance</td>
                  <td style="text-align: right;">${formatCurrency(emp.salary?.specialAllowance || 0)}</td>
                  <td style="text-align: right;">${formatCurrency((emp.salary?.specialAllowance || 0) * 12)}</td>
                </tr>
                <tr style="background: rgba(99, 102, 241, 0.1); font-weight: bold;">
                  <td>Gross Salary</td>
                  <td style="text-align: right; color: var(--primary);">${formatCurrency(emp.salary?.grossMonthly)}</td>
                  <td style="text-align: right; color: var(--primary);">${formatCurrency(emp.salary?.ctcAnnual)}</td>
                </tr>
                <tr>
                  <td>Provident Fund (PF) Deduction</td>
                  <td style="text-align: right; color: var(--accent-rose);">- ${formatCurrency(emp.salary?.pfDeduction)}</td>
                  <td style="text-align: right; color: var(--accent-rose);">- ${formatCurrency((emp.salary?.pfDeduction || 0) * 12)}</td>
                </tr>
                <tr>
                  <td>Professional Tax (PT) Deduction</td>
                  <td style="text-align: right; color: var(--accent-rose);">- ${formatCurrency(emp.salary?.ptDeduction)}</td>
                  <td style="text-align: right; color: var(--accent-rose);">- ${formatCurrency((emp.salary?.ptDeduction || 0) * 12)}</td>
                </tr>
                <tr style="background: rgba(16, 185, 129, 0.1); font-weight: bold;">
                  <td>Net Take-Home Salary</td>
                  <td style="text-align: right; color: var(--accent-teal);">${formatCurrency(emp.salary?.netMonthly)}</td>
                  <td style="text-align: right; color: var(--accent-teal);">${formatCurrency((emp.salary?.netMonthly || 0) * 12)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;

    case 'bank':
      return `
        <div class="glass-card">
          <h3 style="margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">Bank Account & Payment Details</h3>
          <div class="grid-2">
            <div><span class="form-label">Bank Name:</span> <strong>${emp.bank?.bankName || '-'}</strong></div>
            <div><span class="form-label">Account Holder Name:</span> <strong>${emp.bank?.accountHolderName || emp.fullName}</strong></div>
            <div><span class="form-label">Account Number:</span> <strong style="font-family: monospace;">${emp.bank?.accountNumber || '-'}</strong></div>
            <div><span class="form-label">IFSC Code:</span> <strong style="font-family: monospace;">${emp.bank?.ifsc || '-'}</strong></div>
            <div><span class="form-label">Branch Name:</span> <strong>${emp.bank?.branch || '-'}</strong></div>
          </div>
        </div>
      `;

    case 'letters':
      return `
        <div class="glass-card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <h3 style="margin: 0;">Generated Letters & Official HR Records</h3>
            <button class="btn btn-primary btn-sm" onclick="window.hrApp.navigate('generator', { employeeId: '${emp.id}' })">
              + Generate New Document
            </button>
          </div>
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Doc Number</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Generated Date</th>
                  <th>Issued By</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${(emp.generatedLetters || []).length > 0 ? emp.generatedLetters.map(letter => `
                  <tr>
                    <td><span style="font-family: monospace; color: var(--primary); font-weight: 600;">${letter.docNumber}</span></td>
                    <td><strong>${letter.title}</strong></td>
                    <td><span class="badge badge-primary">${letter.category}</span></td>
                    <td>${letter.generatedDate}</td>
                    <td>${letter.generatedBy}</td>
                    <td>
                      <button class="btn btn-sm btn-secondary" onclick="window.hrApp.navigate('history')">
                        View Record
                      </button>
                    </td>
                  </tr>
                `).join('') : `
                  <tr>
                    <td colspan="6" style="text-align: center; color: var(--text-muted); padding: 30px;">
                      No letters generated yet for this employee. Click above to generate one.
                    </td>
                  </tr>
                `}
              </tbody>
            </table>
          </div>
        </div>
      `;

    default: // overview
      return `
        <div class="grid-2">
          <div class="glass-card">
            <h3 style="margin-bottom: 15px;">Quick Profile Overview</h3>
            <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.9rem;">
              <div><strong>Designation:</strong> ${emp.employment.designation}</div>
              <div><strong>Department:</strong> ${emp.employment.department}</div>
              <div><strong>Reporting To:</strong> ${emp.employment.reportingManager}</div>
              <div><strong>Work Email:</strong> ${emp.email}</div>
              <div><strong>Contact Phone:</strong> ${emp.mobile}</div>
              <div><strong>PAN Number:</strong> <span style="font-family: monospace;">${emp.documents?.pan || 'N/A'}</span></div>
              <div><strong>Aadhaar ID:</strong> <span style="font-family: monospace;">${emp.documents?.aadhaar || 'N/A'}</span></div>
            </div>
          </div>

          <div class="glass-card">
            <h3 style="margin-bottom: 15px;">Quick HR Document Actions</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 15px;">Instantly generate official HR documents with pre-filled employee data:</p>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <button class="btn btn-secondary" onclick="window.hrApp.navigate('generator', { employeeId: '${emp.id}', templateId: 'TPL-APPT-01' })">
                📄 Generate Appointment Letter
              </button>
              <button class="btn btn-secondary" onclick="window.hrApp.navigate('generator', { employeeId: '${emp.id}', templateId: 'TPL-INCR-01' })">
                📈 Generate Salary Increment Letter
              </button>
              <button class="btn btn-secondary" onclick="window.hrApp.navigate('generator', { employeeId: '${emp.id}', templateId: 'TPL-NDA-01' })">
                🔒 Generate NDA Agreement
              </button>
              <button class="btn btn-secondary" onclick="window.hrApp.navigate('generator', { employeeId: '${emp.id}', templateId: 'TPL-EXP-01' })">
                🎖️ Generate Experience Certificate
              </button>
            </div>
          </div>
        </div>
      `;
  }
}


// --- File: generator.js ---
// Enhanced Document Generator View (Responsive Layout & View Mode Switcher)

function renderGenerator() {
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


// --- File: templates.js ---
// Template Manager & Editor Module View

function renderTemplates() {
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


// --- File: history.js ---
// Document History & Vault Module View

function renderHistory() {
  const state = store.getState();
  const history = state.history || [];

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Document History & Global Vault</h1>
        <p class="page-subtitle">Complete audit trail of all generated, issued, and archived HR documents</p>
      </div>
      <button class="btn btn-primary" onclick="window.hrApp.navigate('generator')">
        + Generate New Document
      </button>
    </div>

    <!-- Search & Filters -->
    <div class="glass-card" style="margin-bottom: 20px; padding: 16px;">
      <div style="display: flex; gap: 15px; flex-wrap: wrap;">
        <input type="text" id="histSearchInput" class="form-control" placeholder="Search by doc number, employee name..." onkeyup="window.hrApp.filterHistoryTable()" style="flex: 1;">
        <select id="histCategorySelect" class="form-control" onchange="window.hrApp.filterHistoryTable()" style="width: 200px;">
          <option value="">All Categories</option>
          <option value="Onboarding">Onboarding</option>
          <option value="Recruitment">Recruitment</option>
          <option value="Salary">Salary</option>
          <option value="Certificates">Certificates</option>
          <option value="Exit">Exit</option>
        </select>
      </div>
    </div>

    <!-- Document History Data Table -->
    <div class="glass-card">
      <div class="table-responsive">
        <table class="data-table" id="historyDataTable">
          <thead>
            <tr>
              <th>Doc Serial Number</th>
              <th>Employee Name</th>
              <th>Document Title</th>
              <th>Category</th>
              <th>Date Issued</th>
              <th>Issued By</th>
              <th>Status</th>
              <th style="text-align: right;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${history.map(doc => `
              <tr class="hist-row" data-search="${doc.docNumber.toLowerCase()} ${doc.employeeName.toLowerCase()} ${doc.title.toLowerCase()}" data-cat="${doc.category}">
                <td><span style="font-family: monospace; color: var(--primary); font-weight: 600;">${doc.docNumber}</span></td>
                <td>
                  <strong>${doc.employeeName}</strong><br>
                  <small style="color: var(--text-muted);">${doc.employeeId}</small>
                </td>
                <td><strong>${doc.title}</strong></td>
                <td><span class="badge badge-primary">${doc.category}</span></td>
                <td><small>${doc.generatedDate}</small></td>
                <td>${doc.generatedBy}</td>
                <td><span class="badge badge-active">${doc.status || 'Finalized'}</span></td>
                <td style="text-align: right;">
                  <button class="btn btn-sm btn-secondary" onclick="window.hrApp.navigate('generator', { employeeId: '${doc.employeeId}', overrideDocNumber: '${doc.docNumber}' })">
                    Re-Open & Print
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


// --- File: operationalModules.js ---
// Operational HR Modules (Recruitment, Onboarding, Attendance/Leave, Payroll, Performance, Assets, Exit, Reports, Settings)

// 1. Recruitment & Manpower Staffing
function renderRecruitment() {
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Recruitment & Manpower Staffing</h1>
        <p class="page-subtitle">Telecom, IT, Infrastructure, and Sectoral Manpower Deployment across PAN India</p>
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn btn-primary" onclick="window.store.navigate('generator', { templateId: 'TPL-OFFER-01' })">
          ✉️ Generate Offer Letter
        </button>
        <button class="btn btn-secondary" onclick="window.store.navigate('generator', { templateId: 'TPL-ETHICS-01' })">
          📜 Code of Ethics Sign-Off
        </button>
      </div>
    </div>

    <div class="grid-3" style="margin-bottom: 25px;">
      <div class="glass-card">
        <h3>Active Job Openings</h3>
        <div style="font-size: 2rem; font-weight: bold; color: var(--primary); margin: 10px 0;">4 Open Roles</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">5G Core Engineer, Rack Installation Lead, HR Executive, Finance Analyst</div>
      </div>

      <div class="glass-card">
        <h3>Candidates Pipeline</h3>
        <div style="font-size: 2rem; font-weight: bold; color: var(--accent-sky); margin: 10px 0;">18 Applicants</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">5 Technical Rounds, 3 Director Interview Stage</div>
      </div>

      <div class="glass-card">
        <h3>Offers Issued</h3>
        <div style="font-size: 2rem; font-weight: bold; color: var(--accent-teal); margin: 10px 0;">3 Offers</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">2 Accepted (Rahul Sharma, Priya Patel), 1 Pending</div>
      </div>
    </div>

    <!-- Candidate Recruitment Pipeline Board -->
    <div class="glass-card" style="margin-bottom: 25px;">
      <h3 style="margin-bottom: 15px;">Active Recruitment Candidates Stream</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Candidate Name</th>
              <th>Applied Role</th>
              <th>Department</th>
              <th>Experience</th>
              <th>Current Pipeline Stage</th>
              <th>Expected CTC</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Vikram Malhotra</strong><br><small style="color: var(--text-muted);">REQ-2026-089</small></td>
              <td>Senior 5G Test Engineer</td>
              <td>Telecom Operations</td>
              <td>6.5 Years</td>
              <td><span class="badge badge-primary">Director Interview</span></td>
              <td>₹ 14.5 LPA</td>
              <td>
                <button class="btn btn-sm btn-primary" onclick="window.store.navigate('generator', { templateId: 'TPL-OFFER-01' })">
                  Generate Offer
                </button>
              </td>
            </tr>
            <tr>
              <td><strong>Ananya Deshmukh</strong><br><small style="color: var(--text-muted);">REQ-2026-092</small></td>
              <td>HR Operations Executive</td>
              <td>Human Resources</td>
              <td>3.0 Years</td>
              <td><span class="badge badge-active">Offer Accepted</span></td>
              <td>₹ 6.5 LPA</td>
              <td>
                <button class="btn btn-sm btn-secondary" onclick="window.store.navigate('generator', { templateId: 'TPL-APPT-01' })">
                  Create Appt Letter
                </button>
              </td>
            </tr>
            <tr>
              <td><strong>Amitabh Joshi</strong><br><small style="color: var(--text-muted);">REQ-2026-095</small></td>
              <td>Network Rack Installation Lead</td>
              <td>Infrastructure</td>
              <td>5.2 Years</td>
              <td><span class="badge badge-warning">Technical Round 2</span></td>
              <td>₹ 9.0 LPA</td>
              <td>
                <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Scheduled Technical Round 2')">
                  Schedule Round
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 2. Employee Onboarding
function renderOnboarding() {
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Employee Onboarding & Compliance</h1>
        <p class="page-subtitle">New joiner checklists, statutory document collection & appointment letter dispatch</p>
      </div>
      <button class="btn btn-primary" onclick="window.store.navigate('generator', { templateId: 'TPL-APPT-01' })">
        📄 Generate Appointment Letter
      </button>
    </div>

    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card"><div class="stat-value">4</div><div class="stat-label">Onboarding Total</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--accent-emerald);">4</div><div class="stat-label">Docs Verified</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--accent-amber);">0</div><div class="stat-label">Pending Verification</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--primary);">100%</div><div class="stat-label">Compliance Status</div></div>
    </div>

    <div class="glass-card">
      <h3 style="margin-bottom: 15px;">Onboarding Document Checklist & Verification Status</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>New Joiner</th>
              <th>Joining Date</th>
              <th>PAN & Aadhaar</th>
              <th>Experience Certs</th>
              <th>Appointment Letter</th>
              <th>Code of Ethics</th>
              <th>Bank Account</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Swapnil Ghodke</strong><br><small style="color: var(--text-muted);">OBS-OPS-26-001</small></td>
              <td>01 Sep 2024</td>
              <td><span class="badge badge-active">Verified</span></td>
              <td><span class="badge badge-active">Verified</span></td>
              <td><span class="badge badge-active">Issued (OBS-APPT-2026-0014)</span></td>
              <td><span class="badge badge-active">Signed (OBS-ETHICS-26-0001)</span></td>
              <td><span class="badge badge-active">HDFC Bank Verified</span></td>
            </tr>
            <tr>
              <td><strong>Rahul Sharma</strong><br><small style="color: var(--text-muted);">OBS-ENG-26-002</small></td>
              <td>15 Jan 2025</td>
              <td><span class="badge badge-active">Verified</span></td>
              <td><span class="badge badge-active">Verified</span></td>
              <td><span class="badge badge-active">Issued (OBS-APPT-2026-0015)</span></td>
              <td><span class="badge badge-active">Signed</span></td>
              <td><span class="badge badge-active">ICICI Bank Verified</span></td>
            </tr>
            <tr>
              <td><strong>Priya Patel</strong><br><small style="color: var(--text-muted);">OBS-HR-26-003</small></td>
              <td>01 Feb 2025</td>
              <td><span class="badge badge-active">Verified</span></td>
              <td><span class="badge badge-active">Verified</span></td>
              <td><span class="badge badge-active">Issued (OBS-APPT-2026-0016)</span></td>
              <td><span class="badge badge-active">Signed</span></td>
              <td><span class="badge badge-active">Axis Bank Verified</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 3. Attendance & Leave Management
function renderAttendanceLeave() {
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Attendance & Leave Management</h1>
        <p class="page-subtitle">Track employee daily attendance, leave balances, and annual leave requests</p>
      </div>
      <button class="btn btn-primary" onclick="window.hrApp.showToast('Opened Leave Request Application modal')">
        🌴 Apply For Leave
      </button>
    </div>

    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card"><div class="stat-value">4</div><div class="stat-label">Total Active Staff</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--accent-emerald);">4</div><div class="stat-label">Present Today</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--accent-amber);">0</div><div class="stat-label">On Planned Leave</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--primary);">100%</div><div class="stat-label">Attendance Rate</div></div>
    </div>

    <div class="glass-card">
      <h3 style="margin-bottom: 15px;">Employee Annual Leave Balances & Status</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Casual Leave (CL)</th>
              <th>Sick Leave (SL)</th>
              <th>Earned Leave (EL)</th>
              <th>Total Available</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Swapnil Ghodke</strong><br><small style="color: var(--text-muted);">Head of HR</small></td>
              <td>8 / 12 Days</td>
              <td>6 / 7 Days</td>
              <td>12 / 15 Days</td>
              <td><strong>26 Days Available</strong></td>
              <td><span class="badge badge-active">Present</span></td>
            </tr>
            <tr>
              <td><strong>Rahul Sharma</strong><br><small style="color: var(--text-muted);">Senior Software Engineer</small></td>
              <td>10 / 12 Days</td>
              <td>7 / 7 Days</td>
              <td>14 / 15 Days</td>
              <td><strong>31 Days Available</strong></td>
              <td><span class="badge badge-active">Present</span></td>
            </tr>
            <tr>
              <td><strong>Priya Patel</strong><br><small style="color: var(--text-muted);">HR Operations Lead</small></td>
              <td>9 / 12 Days</td>
              <td>5 / 7 Days</td>
              <td>10 / 15 Days</td>
              <td><strong>24 Days Available</strong></td>
              <td><span class="badge badge-active">Present</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 4. Payroll & Salary Management
function renderPayroll() {
  const state = store.getState();
  const employees = state.employees || [];

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Payroll & Salary Management</h1>
        <p class="page-subtitle">Monthly salary rolls, statutory PF/PT deductions & CTC structure management</p>
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn btn-primary" onclick="window.store.navigate('generator', { templateId: 'TPL-SLIP-01' })">
          💵 Generate Payslip
        </button>
        <button class="btn btn-secondary" onclick="window.store.navigate('generator', { templateId: 'TPL-INCR-01' })">
          📈 Issue Increment Letter
        </button>
      </div>
    </div>

    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card"><div class="stat-value">₹ 3.85L</div><div class="stat-label">Monthly Payroll</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--accent-emerald);">4</div><div class="stat-label">Processed Slips</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--accent-amber);">₹ 21,600</div><div class="stat-label">Statutory PF/PT Deductions</div></div>
      <div class="stat-card"><div class="stat-value" style="color: var(--primary);">100%</div><div class="stat-label">Disbursement Status</div></div>
    </div>

    <div class="glass-card">
      <h3 style="margin-bottom: 15px;">Monthly Salary Roll & Payslip Issuance Roster</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Designation</th>
              <th>Monthly CTC</th>
              <th>Gross Earnings</th>
              <th>PF & Tax Deductions</th>
              <th>Net Salary Payout</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${employees.map(emp => {
              const annualCtc = emp.compensation?.ctcAnnual || 1080000;
              const monthlyCtc = Math.round(annualCtc / 12);
              const basic = Math.round(monthlyCtc * 0.5);
              const pf = Math.min(1800, Math.round(basic * 0.12));
              const pt = 200;
              const netPayout = monthlyCtc - pf - pt;

              return `
                <tr>
                  <td><strong>${emp.fullName}</strong><br><small style="color: var(--text-muted);">${emp.employeeId}</small></td>
                  <td>${emp.employment?.designation}</td>
                  <td>₹ ${monthlyCtc.toLocaleString('en-IN')}</td>
                  <td>₹ ${monthlyCtc.toLocaleString('en-IN')}</td>
                  <td>₹ ${(pf + pt).toLocaleString('en-IN')}</td>
                  <td><strong style="color: var(--accent-emerald);">₹ ${netPayout.toLocaleString('en-IN')}</strong></td>
                  <td>
                    <button class="btn btn-sm btn-primary" onclick="window.store.navigate('generator', { templateId: 'TPL-SLIP-01' })">
                      Generate Slip
                    </button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 5. Performance & Appraisals
function renderPerformance() {
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Performance & Appraisals</h1>
        <p class="page-subtitle">Annual performance reviews, promotion recommendations, and rating metrics</p>
      </div>
      <button class="btn btn-primary" onclick="window.store.navigate('generator', { templateId: 'TPL-PROM-01' })">
        📈 Issue Promotion Letter
      </button>
    </div>

    <div class="grid-3" style="margin-bottom: 25px;">
      <div class="glass-card">
        <h3>Exceeds Expectations (A+)</h3>
        <div style="font-size: 2rem; font-weight: bold; color: var(--accent-emerald); margin: 10px 0;">2 Staff</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">Swapnil Ghodke, Rahul Sharma</div>
      </div>
      <div class="glass-card">
        <h3>Meets Standards (A)</h3>
        <div style="font-size: 2rem; font-weight: bold; color: var(--primary); margin: 10px 0;">2 Staff</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">Priya Patel, Amit Kumar</div>
      </div>
      <div class="glass-card">
        <h3>PIP Required</h3>
        <div style="font-size: 2rem; font-weight: bold; color: var(--accent-amber); margin: 10px 0;">0 Staff</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">All team members compliant</div>
      </div>
    </div>
  `;
}

// 6. Asset Management
function renderAssets() {
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Asset Management</h1>
        <p class="page-subtitle">Track hardware, laptops, SIM cards, and software credentials assigned to staff</p>
      </div>
      <button class="btn btn-primary" onclick="window.hrApp.showToast('Opened Assign Asset modal')">
        💻 + Assign New Asset
      </button>
    </div>

    <div class="glass-card">
      <h3 style="margin-bottom: 15px;">Hardware & IT Assets Inventory Roster</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Asset Tag ID</th>
              <th>Item Description</th>
              <th>Serial Number</th>
              <th>Assigned Employee</th>
              <th>Issue Date</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span style="font-family: monospace; color: var(--primary); font-weight: 600;">AST-LAP-2026-001</span></td>
              <td>MacBook Pro 16" M3 Max</td>
              <td>C02GX001MD68</td>
              <td><strong>Swapnil Ghodke</strong></td>
              <td>01 Sep 2024</td>
              <td><span class="badge badge-active">Excellent</span></td>
            </tr>
            <tr>
              <td><span style="font-family: monospace; color: var(--primary); font-weight: 600;">AST-LAP-2026-002</span></td>
              <td>Dell XPS 15 9530 i9</td>
              <td>DLXPS20269912</td>
              <td><strong>Rahul Sharma</strong></td>
              <td>15 Jan 2025</td>
              <td><span class="badge badge-active">Excellent</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 7. Exit & Separation Management
function renderExit() {
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Exit & Separation Management</h1>
        <p class="page-subtitle">Employer-Initiated Terminations • Employee Resignations • Handover & Asset Clearance • F&F Settlement</p>
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn btn-danger" onclick="window.store.navigate('generator', { templateId: 'TPL-TERM-01' })">
          🚫 Issue Termination Order
        </button>
        <button class="btn btn-primary" onclick="window.store.navigate('generator', { templateId: 'TPL-REL-01' })">
          📄 Issue Relieving Order
        </button>
        <button class="btn btn-secondary" onclick="window.store.navigate('generator', { templateId: 'TPL-NODUES-01' })">
          📑 No Dues Certificate
        </button>
      </div>
    </div>

    <!-- Official Separation Distinction Notice -->
    <div class="glass-card" style="margin-bottom: 20px; border-left: 4px solid var(--accent-rose);">
      <h3 style="color: var(--accent-rose); font-size: 1.1rem; margin-bottom: 8px;">Key Distinction: Termination vs. Relieving</h3>
      <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin: 0;">
        <strong style="color: var(--accent-rose);">Termination Order (TPL-TERM-01):</strong> Employer-initiated end of employment recording cause, effective date, notice pay in lieu, IT revocation, handover checklist, and F&F settlement status.<br>
        <strong style="color: var(--accent-blue);">Relieving Order (TPL-REL-01):</strong> Confirms the employee's service release after full & final clearance has been completed.
      </p>
    </div>

    <!-- 10-Step Recommended Termination Workflow Stepper -->
    <div class="glass-card" style="margin-bottom: 25px;">
      <h3 style="margin-bottom: 15px;">Standard 10-Step Termination Lifecycle Workflow</h3>
      <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; text-align: center;">
        <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 1.2rem; margin-bottom: 4px;">1️⃣</div>
          <strong style="font-size: 0.82rem; color: #fca5a5; display: block;">Termination Initiated</strong>
          <small style="font-size: 0.72rem; color: var(--text-muted);">Manager/HR Grounds</small>
        </div>
        <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 1.2rem; margin-bottom: 4px;">2️⃣</div>
          <strong style="font-size: 0.82rem; color: #fde68a; display: block;">HR Legal Review</strong>
          <small style="font-size: 0.72rem; color: var(--text-muted);">Policy Audit</small>
        </div>
        <div style="background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 1.2rem; margin-bottom: 4px;">3️⃣</div>
          <strong style="font-size: 0.82rem; color: #c7d2fe; display: block;">Director Approval</strong>
          <small style="font-size: 0.72rem; color: var(--text-muted);">Signatory Authorization</small>
        </div>
        <div style="background: rgba(14, 165, 233, 0.1); border: 1px solid rgba(14, 165, 233, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 1.2rem; margin-bottom: 4px;">4️⃣</div>
          <strong style="font-size: 0.82rem; color: #bae6fd; display: block;">Formal Notice Served</strong>
          <small style="font-size: 0.72rem; color: var(--text-muted);">Pay in Lieu Terms</small>
        </div>
        <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 1.2rem; margin-bottom: 4px;">5️⃣</div>
          <strong style="font-size: 0.82rem; color: #e9d5ff; display: block;">Project Handover</strong>
          <small style="font-size: 0.72rem; color: var(--text-muted);">Knowledge Transfer</small>
        </div>
        <div style="background: rgba(236, 72, 153, 0.1); border: 1px solid rgba(236, 72, 153, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 1.2rem; margin-bottom: 4px;">6️⃣</div>
          <strong style="font-size: 0.82rem; color: #fbcfe8; display: block;">Asset Clearance</strong>
          <small style="font-size: 0.72rem; color: var(--text-muted);">Laptop & ID Return</small>
        </div>
        <div style="background: rgba(225, 29, 72, 0.1); border: 1px solid rgba(225, 29, 72, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 1.2rem; margin-bottom: 4px;">7️⃣</div>
          <strong style="font-size: 0.82rem; color: #fecdd3; display: block;">Access Revocation</strong>
          <small style="font-size: 0.72rem; color: var(--text-muted);">IT & Email Deactivation</small>
        </div>
        <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 1.2rem; margin-bottom: 4px;">8️⃣</div>
          <strong style="font-size: 0.82rem; color: #a7f3d0; display: block;">Full & Final Settlement</strong>
          <small style="font-size: 0.72rem; color: var(--text-muted);">Payroll & Encashment</small>
        </div>
        <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 1.2rem; margin-bottom: 4px;">9️⃣</div>
          <strong style="font-size: 0.82rem; color: #bfdbfe; display: block;">Termination Letter Issued</strong>
          <small style="font-size: 0.72rem; color: var(--text-muted);">Signed Vault Copy</small>
        </div>
        <div style="background: rgba(100, 116, 139, 0.1); border: 1px solid rgba(100, 116, 139, 0.3); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 1.2rem; margin-bottom: 4px;">🔟</div>
          <strong style="font-size: 0.82rem; color: #cbd5e1; display: block;">Employee Record Closed</strong>
          <small style="font-size: 0.72rem; color: var(--text-muted);">Archived Status</small>
        </div>
      </div>
    </div>
  `;
}

// 8. HR Reports & Analytics
function renderReports() {
  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>HR Reports & Analytics</h1>
        <p class="page-subtitle">Department headcount, salary expenditure distribution, and document issuance metrics</p>
      </div>
    </div>

    <div class="grid-3" style="margin-bottom: 25px;">
      <div class="glass-card">
        <h3>Department Headcount</h3>
        <div style="font-size: 1.8rem; font-weight: bold; color: var(--primary); margin: 10px 0;">4 Active Staff</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">Operations (2), HR (1), Engineering (1)</div>
      </div>
      <div class="glass-card">
        <h3>Monthly Document Issuance</h3>
        <div style="font-size: 1.8rem; font-weight: bold; color: var(--accent-teal); margin: 10px 0;">45 Issued</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">Offers (28), Appt (14), Ethics (1), Slips (2)</div>
      </div>
      <div class="glass-card">
        <h3>Compliance Rate</h3>
        <div style="font-size: 1.8rem; font-weight: bold; color: var(--accent-emerald); margin: 10px 0;">100% Audit Passed</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">Aadhaar, PAN, Bank, Ethics Code Verified</div>
      </div>
    </div>
  `;
}

// 9. Company & Admin Settings
function renderSettings() {
  const state = store.getState();
  const company = state.company;

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Company & Admin Settings</h1>
        <p class="page-subtitle">Configure company legal identity, logo branding, leadership directors, and document serial formats</p>
      </div>
      <button class="btn btn-primary" onclick="window.hrApp.saveCompanySettings()">
        💾 Save Settings
      </button>
    </div>

    <!-- Company Overview & Leadership Cards (From Official Deck) -->
    <div class="glass-card" style="margin-bottom: 25px; border-left: 4px solid var(--accent-amber);">
      <h3 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--accent-amber);">Company Leadership & Board of Directors</h3>
      <div class="grid-2">
        <div style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <strong style="font-size: 1.05rem; color: var(--text-main);">Surekha Avinash Aade</strong>
          <div style="color: var(--accent-amber); font-weight: 600; font-size: 0.85rem;">Director</div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 6px;">Provides strategic direction and oversees business operations, ensuring organizational growth, compliance, and long-term sustainability.</p>
        </div>

        <div style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <strong style="font-size: 1.05rem; color: var(--text-main);">Avinash Dagdu Aade</strong>
          <div style="color: var(--accent-amber); font-weight: 600; font-size: 0.85rem;">Director</div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 6px;">Leads technical execution and project delivery with expertise in telecom networks, 5G testing, infrastructure deployment, and manpower management.</p>
        </div>
      </div>
    </div>

    <div class="grid-2">
      <!-- Company Branding & Contact Info -->
      <div class="glass-card">
        <h3 style="margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">Company Profile</h3>
        <div class="form-group">
          <label class="form-label">Company Legal Name</label>
          <input type="text" id="setCompanyName" class="form-control" value="${company.name}">
        </div>
        <div class="grid-2">
          <div class="form-group">
            <label class="form-label">Company Short Code</label>
            <input type="text" id="setCompanyCode" class="form-control" value="${company.code}">
          </div>
          <div class="form-group">
            <label class="form-label">CIN Number</label>
            <input type="text" id="setCompanyCin" class="form-control" value="${company.cin}" style="font-family: monospace;">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Registered Office Address</label>
          <textarea id="setCorporateAddress" class="form-control">${company.corporateAddress}</textarea>
        </div>
        <div class="grid-2">
          <div class="form-group">
            <label class="form-label">Official Email</label>
            <input type="text" id="setCompanyEmail" class="form-control" value="${company.email}">
          </div>
          <div class="form-group">
            <label class="form-label">Service Coverage</label>
            <input type="text" class="form-control" value="PAN India" readonly style="font-weight: bold; color: var(--accent-teal);">
          </div>
        </div>
      </div>

      <!-- Signatories, Stamp & Serial Rules -->
      <div class="glass-card">
        <h3 style="margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">Authorized Signatory & Serial Rules</h3>
        
        <div class="form-group">
          <label class="form-label">Authorized Signatory Name</label>
          <input type="text" id="setSignatoryName" class="form-control" value="${company.authorizedSignatoryName}">
        </div>
        <div class="form-group">
          <label class="form-label">Authorized Signatory Designation</label>
          <input type="text" id="setSignatoryDesignation" class="form-control" value="${company.authorizedSignatoryDesignation}">
        </div>

        <div class="form-group">
          <label class="form-label">Document Serial Number Rule Format</label>
          <input type="text" id="setSerialFormat" class="form-control" value="${company.serialFormat}" style="font-family: monospace;">
          <small style="color: var(--text-muted); font-size: 0.78rem;">Placeholders: {COMPANY}, {TYPE}, {YYYY}, {SEQ:4}</small>
        </div>

        <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.03); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <h4 style="margin-bottom: 10px; font-size: 0.95rem;">Current Seal Stamp & Digital Signature Assets</h4>
          <div style="display: flex; gap: 20px; align-items: center;">
            <div>
              <small style="display: block; color: var(--text-muted); margin-bottom: 4px;">Official Seal</small>
              ${company.stampSvg}
            </div>
            <div>
              <small style="display: block; color: var(--text-muted); margin-bottom: 4px;">Verified Signature</small>
              ${company.signatureSvg}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}


// --- File: attendanceEngine.js ---
// Complete Workforce Attendance & Location Management Engine for Obsyra HR System

function renderAttendanceEngine() {
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


// --- File: assetEngine.js ---
// Comprehensive Asset Management & Property Tracking Engine for Obsyra HR System

function renderAssetEngine() {
  const state = store.getState();
  const employees = state.employees || [];

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Asset & Company Property Register</h1>
        <p class="page-subtitle">Hardware inventory, 5G Telecom field toolkits, SIM cards, laptops & asset lifecycle clearance</p>
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn btn-primary" onclick="window.hrApp.showAssignAssetModal()">
          💻 + Assign New Asset
        </button>
        <button class="btn btn-secondary" onclick="window.hrApp.showRegisterAssetModal()">
          📦 + Register Hardware
        </button>
      </div>
    </div>

    <!-- Asset Summary KPI Cards -->
    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card">
        <div class="stat-value">₹ 18.5L</div>
        <div class="stat-label">Total Inventory Value</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-emerald);">4 Deployed</div>
        <div class="stat-label">Assigned to Staff</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-sky);">3 Available</div>
        <div class="stat-label">In Pune Storage Vault</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--primary);">100%</div>
        <div class="stat-label">Asset Audit Compliance</div>
      </div>
    </div>

    <!-- 7-Step Asset Lifecycle & Allocation Stepper -->
    <div class="glass-card" style="margin-bottom: 25px; border-left: 4px solid var(--accent-amber);">
      <h3 style="margin-bottom: 12px; color: var(--accent-amber);">Standard Asset Lifecycle & Clearance Stepper</h3>
      <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; text-align: center;">
        <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 10px; border-radius: var(--radius-sm);">
          <strong style="font-size: 0.78rem; color: #34d399; display: block;">1. In Inventory</strong>
          <small style="font-size: 0.7rem; color: var(--text-muted);">Available</small>
        </div>
        <div style="background: rgba(14, 165, 233, 0.1); border: 1px solid rgba(14, 165, 233, 0.3); padding: 10px; border-radius: var(--radius-sm);">
          <strong style="font-size: 0.78rem; color: #38bdf8; display: block;">2. Requisition</strong>
          <small style="font-size: 0.7rem; color: var(--text-muted);">HR Request</small>
        </div>
        <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); padding: 10px; border-radius: var(--radius-sm);">
          <strong style="font-size: 0.78rem; color: #fbbf24; display: block;">3. Manager Approval</strong>
          <small style="font-size: 0.7rem; color: var(--text-muted);">Signed Off</small>
        </div>
        <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); padding: 10px; border-radius: var(--radius-sm);">
          <strong style="font-size: 0.78rem; color: #c084fc; display: block;">4. Hardware Issued</strong>
          <small style="font-size: 0.7rem; color: var(--text-muted);">Tag Handover</small>
        </div>
        <div style="background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); padding: 10px; border-radius: var(--radius-sm);">
          <strong style="font-size: 0.78rem; color: #818cf8; display: block;">5. Employee Ack</strong>
          <small style="font-size: 0.7rem; color: var(--text-muted);">Signed Form</small>
        </div>
        <div style="background: rgba(236, 72, 153, 0.1); border: 1px solid rgba(236, 72, 153, 0.3); padding: 10px; border-radius: var(--radius-sm);">
          <strong style="font-size: 0.78rem; color: #f472b6; display: block;">6. Return Clearance</strong>
          <small style="font-size: 0.7rem; color: var(--text-muted);">Exit Handover</small>
        </div>
        <div style="background: rgba(100, 116, 139, 0.1); border: 1px solid rgba(100, 116, 139, 0.3); padding: 10px; border-radius: var(--radius-sm);">
          <strong style="font-size: 0.78rem; color: #cbd5e1; display: block;">7. Inspection</strong>
          <small style="font-size: 0.7rem; color: var(--text-muted);">Vault Check</small>
        </div>
      </div>
    </div>

    <!-- Main Hardware Inventory Roster -->
    <div class="glass-card" style="margin-bottom: 25px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
        <h3>Hardware & Field Property Register</h3>
        <div style="display: flex; gap: 10px;">
          <input type="text" placeholder="Search Tag ID or Serial Number..." class="form-control" style="width: 260px; font-size: 0.85rem;">
        </div>
      </div>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Asset Tag ID</th>
              <th>Category & Model</th>
              <th>Serial Number / IMEI</th>
              <th>Assigned Employee</th>
              <th>Purchase Date & Cost</th>
              <th>Warranty Status</th>
              <th>Condition</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong style="font-family: monospace; color: var(--primary);">AST-LAP-2026-001</strong></td>
              <td><strong>MacBook Pro 16" M3 Max</strong><br><small style="color: var(--text-muted);">Laptop / Workstation</small></td>
              <td><code>C02GX001MD68</code></td>
              <td><strong>Swapnil Ghodke</strong><br><small style="color: var(--text-muted);">OBS-OPS-26-001</small></td>
              <td>01 Sep 2024 (₹ 2.45L)</td>
              <td><span class="badge badge-active">AppleCare (2027)</span></td>
              <td><span class="badge badge-active">Excellent</span></td>
              <td><span class="badge badge-active">Assigned</span></td>
              <td>
                <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Generated Asset Ack Form for AST-LAP-2026-001')">
                  Ack Form
                </button>
              </td>
            </tr>
            <tr>
              <td><strong style="font-family: monospace; color: var(--primary);">AST-LAP-2026-002</strong></td>
              <td><strong>Dell XPS 15 9530 i9</strong><br><small style="color: var(--text-muted);">Laptop / Workstation</small></td>
              <td><code>DLXPS20269912</code></td>
              <td><strong>Rahul Sharma</strong><br><small style="color: var(--text-muted);">OBS-ENG-26-002</small></td>
              <td>15 Jan 2025 (₹ 1.85L)</td>
              <td><span class="badge badge-active">ProSupport (2028)</span></td>
              <td><span class="badge badge-active">Excellent</span></td>
              <td><span class="badge badge-active">Assigned</span></td>
              <td>
                <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Generated Asset Ack Form for AST-LAP-2026-002')">
                  Ack Form
                </button>
              </td>
            </tr>
            <tr>
              <td><strong style="font-family: monospace; color: var(--primary);">AST-KIT-2026-089</strong></td>
              <td><strong>5G Core Drive Test Analyzer Kit</strong><br><small style="color: var(--text-muted);">Telecom Field Tool Kit</small></td>
              <td><code>5G-KIT-PUNE-0992</code></td>
              <td><strong>Swapnil Ghodke</strong><br><small style="color: var(--text-muted);">OBS-OPS-26-001</small></td>
              <td>10 Oct 2024 (₹ 4.20L)</td>
              <td><span class="badge badge-active">Manufacturer (2026)</span></td>
              <td><span class="badge badge-active">Good</span></td>
              <td><span class="badge badge-active">Assigned</span></td>
              <td>
                <button class="btn btn-sm btn-primary" onclick="window.hrApp.showToast('Initiated Asset Return Inspection')">
                  Return Asset
                </button>
              </td>
            </tr>
            <tr>
              <td><strong style="font-family: monospace; color: var(--primary);">AST-SIM-2026-042</strong></td>
              <td><strong>Jio 5G Testing Dual SIM Card</strong><br><small style="color: var(--text-muted);">Corporate SIM / Data</small></td>
              <td><code>8991002345678912</code></td>
              <td><strong>Priya Patel</strong><br><small style="color: var(--text-muted);">OBS-HR-26-003</small></td>
              <td>01 Feb 2025 (₹ 500)</td>
              <td><span class="badge badge-active">Corporate Postpaid</span></td>
              <td><span class="badge badge-active">New</span></td>
              <td><span class="badge badge-active">Assigned</span></td>
              <td>
                <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Viewing SIM Card status')">
                  View SIM
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}


// --- File: projects.js ---
// Project & Manpower Deployment Module (Telecom Core, 5G Testing, IT & Infrastructure)

function renderProjects() {
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


// --- File: verification.js ---
// Public & Internal Document Verification Engine (QR Code & Serial Authenticity Portal)

function renderVerification() {
  const state = store.getState();
  const history = state.history || [];

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Document Authenticity & QR Verification Portal</h1>
        <p class="page-subtitle">Verify official Obsyra HR letters, offer documents, appointment certificates & experience records</p>
      </div>
      <div style="display: flex; gap: 10px;">
        <span class="badge badge-active" style="font-size: 0.85rem; padding: 8px 14px; background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3);">
          🔒 SSL Encrypted & Cryptographically Sealed
        </span>
      </div>
    </div>

    <!-- Verification Search & QR Input Workspace -->
    <div class="glass-card" style="margin-bottom: 25px; border-left: 4px solid var(--accent-amber);">
      <h3 style="margin-bottom: 12px; color: var(--accent-amber);">Instant Serial Number Lookup & QR Scanner</h3>
      <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 20px;">
        Enter the official Obsyra Document Serial Number (e.g. <code style="color: var(--primary);">OBS-APPT-2026-0014</code> or <code style="color: var(--primary);">OBS-ETHICS-26-0001</code>) or scan the printed QR code on the certificate.
      </p>

      <div style="display: flex; gap: 15px; max-width: 680px; margin-bottom: 15px;">
        <input type="text" id="verifyDocSerialInput" class="form-control" placeholder="e.g. OBS-APPT-2026-0014" value="OBS-APPT-2026-0014" style="font-family: monospace; font-size: 1rem; text-transform: uppercase;">
        <button class="btn btn-primary btn-lg" onclick="window.hrApp.verifyDocumentSerial()">
          🔍 Verify Authenticity
        </button>
      </div>
      <div id="verificationResultContainer"></div>
    </div>

    <!-- Pre-Seeded Document Verification Vault Audit Stream -->
    <div class="glass-card">
      <h3 style="margin-bottom: 15px;">Verifiable Corporate Documents Index</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Document Serial Number</th>
              <th>Document Type</th>
              <th>Issued To Employee</th>
              <th>Issue Date</th>
              <th>Authorized Signatory</th>
              <th>Verification Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${history.map(doc => `
              <tr>
                <td><strong style="font-family: monospace; color: var(--primary);">${doc.docNumber || doc.id}</strong></td>
                <td>${doc.title || doc.category}</td>
                <td><strong>${doc.employeeName || doc.employeeId}</strong></td>
                <td>${doc.generatedDate || '16 Feb 2026'}</td>
                <td>Avinash Dagdu Aade (Director)</td>
                <td><span class="badge badge-active">✓ Authentic & Valid</span></td>
                <td>
                  <button class="btn btn-sm btn-secondary" onclick="document.getElementById('verifyDocSerialInput').value = '${doc.docNumber || doc.id}'; window.hrApp.verifyDocumentSerial();">
                    Check Record
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


// --- File: auditLogs.js ---
// Real-Time System Security & Audit Log Viewer

function renderAuditLogs() {
  const state = store.getState();
  const currentUser = state.currentUser;

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>System Security & Audit Trail Logs</h1>
        <p class="page-subtitle">Complete chronological record of all administrative actions, document generation events, and access logs</p>
      </div>
      <button class="btn btn-secondary" onclick="window.hrApp.showToast('Exported Audit Log Trail to CSV')">
        📥 Export Audit CSV
      </button>
    </div>

    <!-- Audit Security Summary Cards -->
    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card">
        <div class="stat-value">1,248</div>
        <div class="stat-label">Total Audit Events</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-emerald);">0 Security Alerts</div>
        <div class="stat-label">System Integrity</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-sky);">100% Passed</div>
        <div class="stat-label">Compliance Audit</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--primary);">256-bit AES</div>
        <div class="stat-label">Log Encryption</div>
      </div>
    </div>

    <div class="glass-card">
      <h3 style="margin-bottom: 15px;">Real-Time Administrative Event Trail</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Operator / User</th>
              <th>Role Privilege</th>
              <th>Module</th>
              <th>Action Details</th>
              <th>IP Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12 Aug 2026, 10:15 IST</td>
              <td><strong>${currentUser.name}</strong></td>
              <td><span class="badge badge-primary">${currentUser.role}</span></td>
              <td>Document Generator</td>
              <td>Generated Offer Letter <code>OBS-OFFER-2026-0028</code> for Rahul Sharma</td>
              <td>10.0.4.12 (Pune HQ)</td>
              <td><span class="badge badge-active">SUCCESS</span></td>
            </tr>
            <tr>
              <td>12 Aug 2026, 09:30 IST</td>
              <td><strong>Swapnil Ghodke</strong></td>
              <td><span class="badge badge-primary">Super Admin</span></td>
              <td>Company Settings</td>
              <td>Updated Official Seal SVG and CIN Registration Record</td>
              <td>10.0.4.15 (Pune HQ)</td>
              <td><span class="badge badge-active">SUCCESS</span></td>
            </tr>
            <tr>
              <td>11 Aug 2026, 23:15 IST</td>
              <td><strong>Priya Patel</strong></td>
              <td><span class="badge badge-secondary">HR Executive</span></td>
              <td>Employee Master</td>
              <td>Added new employee profile <code>OBS-EMP-26-004</code> (Ananya Deshmukh)</td>
              <td>10.0.4.88 (Pune HQ)</td>
              <td><span class="badge badge-active">SUCCESS</span></td>
            </tr>
            <tr>
              <td>11 Aug 2026, 18:45 IST</td>
              <td><strong>Avinash Dagdu Aade</strong></td>
              <td><span class="badge badge-primary">Director / HR Admin</span></td>
              <td>Exit Management</td>
              <td>Approved Relieving Order <code>OBS-REL-2026-0006</code> for Exiting Engineer</td>
              <td>10.0.4.01 (Director Desk)</td>
              <td><span class="badge badge-active">SUCCESS</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}


// --- File: expenses.js ---
// Expense Claims & Reimbursements Module

function renderExpenses() {
  const state = store.getState();
  const employees = state.employees || [];

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Expense Reimbursements & Field Claims</h1>
        <p class="page-subtitle">Track travel allowances, client site expenses, tool procurement & employee reimbursement claims</p>
      </div>
      <button class="btn btn-primary" onclick="window.hrApp.showToast('Opened Expense Claim Submission modal')">
        💸 + Submit New Expense Claim
      </button>
    </div>

    <!-- Top Expense Summary Cards -->
    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card">
        <div class="stat-value">₹ 42,500</div>
        <div class="stat-label">Total Monthly Claims</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-emerald);">₹ 35,000</div>
        <div class="stat-label">Approved & Settled</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-amber);">₹ 7,500</div>
        <div class="stat-label">Pending Approval</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--primary);">2 Days</div>
        <div class="stat-label">Average Clearance SLA</div>
      </div>
    </div>

    <div class="glass-card">
      <h3 style="margin-bottom: 15px;">Employee Reimbursement Claims Register</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Claim ID</th>
              <th>Employee Name</th>
              <th>Category</th>
              <th>Expense Description</th>
              <th>Claim Date</th>
              <th>Amount</th>
              <th>Receipt</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong style="font-family: monospace; color: var(--primary);">EXP-2026-0811</strong></td>
              <td><strong>Swapnil Ghodke</strong><br><small style="color: var(--text-muted);">OBS-OPS-26-001</small></td>
              <td>Field Transit / Fuel</td>
              <td>5G Site Testing Travel (Pune to Mumbai Data Center)</td>
              <td>10 Aug 2026</td>
              <td><strong>₹ 4,500</strong></td>
              <td><span class="badge badge-active">Fuel_Receipt.pdf</span></td>
              <td><span class="badge badge-active">Approved</span></td>
              <td>
                <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Viewing claim EXP-2026-0811')">
                  View Receipt
                </button>
              </td>
            </tr>
            <tr>
              <td><strong style="font-family: monospace; color: var(--primary);">EXP-2026-0814</strong></td>
              <td><strong>Rahul Sharma</strong><br><small style="color: var(--text-muted);">OBS-ENG-26-002</small></td>
              <td>Hardware Procurement</td>
              <td>Cat6 Patch Cables & Fiber Splicing Kit for Airtel Site</td>
              <td>11 Aug 2026</td>
              <td><strong>₹ 3,000</strong></td>
              <td><span class="badge badge-warning">Bill_Invoice.pdf</span></td>
              <td><span class="badge badge-warning">Pending Manager Approval</span></td>
              <td>
                <button class="btn btn-sm btn-primary" onclick="window.hrApp.showToast('Approved claim EXP-2026-0814')">
                  Approve Claim
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}


// --- File: training.js ---
// Training, Skill Matrix & Certification Expiry Center

function renderTraining() {
  const state = store.getState();
  const employees = state.employees || [];

  return `
    <div class="page-header">
      <div class="page-title-group">
        <h1>Training & Certification Center</h1>
        <p class="page-subtitle">Track employee technical certifications, 5G telecom safety compliance & skill matrices</p>
      </div>
      <button class="btn btn-primary" onclick="window.hrApp.showToast('Opened Add Employee Certification modal')">
        🎓 + Add Technical Certification
      </button>
    </div>

    <!-- Certification Expiry Alert Widgets -->
    <div class="grid-4" style="margin-bottom: 25px;">
      <div class="stat-card">
        <div class="stat-value">6 Certs</div>
        <div class="stat-label">Active Certifications</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-emerald);">100% Verified</div>
        <div class="stat-label">Safety Compliance</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-amber);">1 Expiring Soon</div>
        <div class="stat-label">Renewal Window (30 Days)</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--primary);">Telecom & IT</div>
        <div class="stat-label">Skill Domains</div>
      </div>
    </div>

    <div class="glass-card">
      <h3 style="margin-bottom: 15px;">Employee Technical Certifications & Expiry Tracker</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Certification Name</th>
              <th>Issuing Authority</th>
              <th>Issue Date</th>
              <th>Expiry Date</th>
              <th>Compliance Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Swapnil Ghodke</strong><br><small style="color: var(--text-muted);">OBS-OPS-26-001</small></td>
              <td>Certified 5G Network Specialist (C5GNS)</td>
              <td>Telecom Sector Skill Council (TSSC)</td>
              <td>15 Oct 2024</td>
              <td>14 Oct 2027</td>
              <td><span class="badge badge-active">Valid (800 Days)</span></td>
              <td>
                <button class="btn btn-sm btn-secondary" onclick="window.hrApp.showToast('Viewing Certificate C5GNS-2024-998')">
                  View Certificate
                </button>
              </td>
            </tr>
            <tr>
              <td><strong>Rahul Sharma</strong><br><small style="color: var(--text-muted);">OBS-ENG-26-002</small></td>
              <td>Cisco Certified Network Associate (CCNA)</td>
              <td>Cisco Systems</td>
              <td>10 Mar 2023</td>
              <td>09 Sep 2026</td>
              <td><span class="badge badge-warning">Expiring in 28 Days</span></td>
              <td>
                <button class="btn btn-sm btn-primary" onclick="window.hrApp.showToast('Initiated Renewal for Rahul Sharma CCNA')">
                  Initiate Renewal
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}


// --- File: addEmployeeModal.js ---
// 5-Step Add Employee Wizard Modal Component

function renderAddEmployeeModal() {
  return `
    <div class="modal-overlay" id="addEmployeeModalOverlay">
      <div class="modal-container" style="max-width: 750px;">
        <div class="modal-header">
          <div>
            <h2 style="font-size: 1.25rem; margin: 0;">Add New Employee to Master</h2>
            <small style="color: var(--text-muted);">Enter employee profile information once for universal document generation</small>
          </div>
          <button class="modal-close" onclick="window.hrApp.closeAddEmployeeModal()">&times;</button>
        </div>

        <form id="addEmployeeForm" onsubmit="window.hrApp.submitNewEmployee(event)">
          <!-- Wizard Stepper Indicators -->
          <div class="stepper-header">
            <div class="step-item active" id="stepIndicator1">
              <div class="step-number">1</div>
              <span style="font-size: 0.8rem; font-weight: 600;">Personal</span>
            </div>
            <div class="step-item" id="stepIndicator2">
              <div class="step-number">2</div>
              <span style="font-size: 0.8rem; font-weight: 600;">Employment</span>
            </div>
            <div class="step-item" id="stepIndicator3">
              <div class="step-number">3</div>
              <span style="font-size: 0.8rem; font-weight: 600;">Salary</span>
            </div>
            <div class="step-item" id="stepIndicator4">
              <div class="step-number">4</div>
              <span style="font-size: 0.8rem; font-weight: 600;">Bank & Statutory</span>
            </div>
          </div>

          <!-- Step 1: Personal Info -->
          <div class="wizard-step-pane" id="wizardStep1">
            <div class="grid-2">
              <div class="form-group">
                <label class="form-label">First Name *</label>
                <input type="text" id="newFirstName" class="form-control" required placeholder="e.g. Swapnil">
              </div>
              <div class="form-group">
                <label class="form-label">Last Name *</label>
                <input type="text" id="newLastName" class="form-control" required placeholder="e.g. Ghodke">
              </div>
            </div>
            <div class="grid-2">
              <div class="form-group">
                <label class="form-label">Gender *</label>
                <select id="newGender" class="form-control" required>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Date of Birth *</label>
                <input type="date" id="newDob" class="form-control" required value="1995-01-01">
              </div>
            </div>
            <div class="grid-2">
              <div class="form-group">
                <label class="form-label">Mobile Number *</label>
                <input type="text" id="newMobile" class="form-control" required placeholder="+91 98230 00000">
              </div>
              <div class="form-group">
                <label class="form-label">Personal Email *</label>
                <input type="email" id="newEmail" class="form-control" required placeholder="employee@email.com">
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Permanent Address</label>
              <textarea id="newAddress" class="form-control" placeholder="Street address, City, Pincode..."></textarea>
            </div>
          </div>

          <!-- Step 2: Employment Info -->
          <div class="wizard-step-pane" id="wizardStep2" style="display: none;">
            <div class="grid-2">
              <div class="form-group">
                <label class="form-label">Employee ID Code *</label>
                <input type="text" id="newEmployeeId" class="form-control" value="OBS-OPS-26-006" style="font-family: monospace;">
              </div>
              <div class="form-group">
                <label class="form-label">Date of Joining *</label>
                <input type="date" id="newDoj" class="form-control" required value="${new Date().toISOString().split('T')[0]}">
              </div>
            </div>
            <div class="grid-2">
              <div class="form-group">
                <label class="form-label">Department *</label>
                <select id="newDept" class="form-control" required>
                  <option value="IT & Operations">IT & Operations</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Human Resources">Human Resources</option>
                  <option value="Finance & Accounts">Finance & Accounts</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Designation *</label>
                <input type="text" id="newDesignation" class="form-control" required placeholder="e.g. Senior Project Manager">
              </div>
            </div>
            <div class="grid-2">
              <div class="form-group">
                <label class="form-label">Reporting Manager</label>
                <input type="text" id="newManager" class="form-control" value="Swapnil Ghodke (Head of HR)">
              </div>
              <div class="form-group">
                <label class="form-label">Work Location</label>
                <input type="text" id="newLocation" class="form-control" value="Hinjewadi HQ, Pune">
              </div>
            </div>
          </div>

          <!-- Step 3: Salary Info -->
          <div class="wizard-step-pane" id="wizardStep3" style="display: none;">
            <div class="grid-2">
              <div class="form-group">
                <label class="form-label">Basic Salary (Monthly INR) *</label>
                <input type="number" id="newBasicSalary" class="form-control" value="45000" oninput="window.hrApp.recalcSalaryForm()">
              </div>
              <div class="form-group">
                <label class="form-label">HRA (50% of Basic) *</label>
                <input type="number" id="newHraSalary" class="form-control" value="22500" readonly>
              </div>
            </div>
            <div class="grid-2">
              <div class="form-group">
                <label class="form-label">Gross Monthly Salary *</label>
                <input type="number" id="newGrossSalary" class="form-control" value="90000" oninput="window.hrApp.recalcSalaryForm()">
              </div>
              <div class="form-group">
                <label class="form-label">Calculated Annual CTC</label>
                <input type="text" id="newCtcAnnual" class="form-control" value="₹ 10,80,000" readonly style="font-weight: bold; color: var(--accent-teal);">
              </div>
            </div>
          </div>

          <!-- Step 4: Bank Details -->
          <div class="wizard-step-pane" id="wizardStep4" style="display: none;">
            <div class="grid-2">
              <div class="form-group">
                <label class="form-label">Bank Name</label>
                <input type="text" id="newBankName" class="form-control" value="HDFC Bank">
              </div>
              <div class="form-group">
                <label class="form-label">Account Number</label>
                <input type="text" id="newAccountNo" class="form-control" placeholder="Account Number">
              </div>
            </div>
            <div class="grid-2">
              <div class="form-group">
                <label class="form-label">IFSC Code</label>
                <input type="text" id="newIfsc" class="form-control" placeholder="HDFC0000123">
              </div>
              <div class="form-group">
                <label class="form-label">PAN Card Number</label>
                <input type="text" id="newPan" class="form-control" placeholder="ABCDE1234F">
              </div>
            </div>
          </div>

          <!-- Wizard Navigation Controls -->
          <div style="display: flex; justify-content: space-between; margin-top: 25px; border-top: 1px solid var(--border-color); padding-top: 15px;">
            <button type="button" class="btn btn-secondary" id="wizPrevBtn" onclick="window.hrApp.wizardStepPrev()" style="display: none;">
              ← Previous
            </button>
            <div style="margin-left: auto; display: flex; gap: 10px;">
              <button type="button" class="btn btn-primary" id="wizNextBtn" onclick="window.hrApp.wizardStepNext()">
                Next Step →
              </button>
              <button type="submit" class="btn btn-success" id="wizSubmitBtn" style="display: none;">
                Save Employee Record
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `;
}


// --- File: loginModal.js ---
// Login System Modal with Demo Quick-Logins & RBAC Authentication

function renderLoginModal() {
  return `
    <div class="modal-overlay active" id="loginModalOverlay" style="z-index: 10000; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(12px); display: flex; align-items: center; justify-content: center;">
      <div class="modal-container glass-card" style="width: 540px; max-width: 92vw; padding: 35px; border-radius: 16px; border: 1px solid var(--border-color); box-shadow: var(--shadow-glow); background: rgba(30, 41, 59, 0.95);">
        
        <div style="text-align: center; margin-bottom: 25px;">
          <img src="assets/obsyra_logo.jpg" alt="Obsyra Logo" style="width: 60px; height: 60px; border-radius: 12px; margin-bottom: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); background: #ffffff; padding: 2px;" />
          <h2 style="font-family: var(--font-heading); font-size: 1.6rem; margin-bottom: 4px; background: var(--primary-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Obsyra Enterprise HR Portal</h2>
          <p style="color: var(--text-muted); font-size: 0.88rem;">Role-Based Access Control (RBAC) System & Authentication</p>
        </div>

        <!-- Role Quick-Login Selector Badges -->
        <div style="margin-bottom: 25px; background: rgba(255,255,255,0.03); padding: 15px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <small style="display: block; color: var(--text-subtle); font-weight: 700; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.08em; margin-bottom: 10px; text-align: center;">⚡ Demo Quick-Login by Role</small>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
            <button class="btn btn-sm btn-primary" onclick="window.hrApp.quickLogin('OBS-OPS-26-001')">
              👑 Super Admin
            </button>
            <button class="btn btn-sm btn-secondary" onclick="window.hrApp.quickLogin('OBS-DIR-26-000')">
              🏢 HR Admin
            </button>
            <button class="btn btn-sm btn-secondary" onclick="window.hrApp.quickLogin('OBS-HR-26-003')">
              📝 HR Executive
            </button>
            <button class="btn btn-sm btn-secondary" onclick="window.hrApp.quickLogin('OBS-ENG-26-002')">
              👥 Dept Manager
            </button>
            <button class="btn btn-sm btn-secondary" onclick="window.hrApp.quickLogin('OBS-EMP-26-004')">
              👤 Employee (Self)
            </button>
          </div>
        </div>

        <form onsubmit="window.hrApp.handleLoginSubmit(event)" style="display: flex; flex-direction: column; gap: 16px;">
          <div class="form-group">
            <label class="form-label" style="font-weight: 600;">Employee ID / Corporate Email</label>
            <input type="text" id="loginEmpId" class="form-control" placeholder="e.g. OBS-OPS-26-001 or swapnil.ghodke@obsyra.com" value="OBS-OPS-26-001" required style="font-family: monospace; font-size: 0.95rem;">
          </div>

          <div class="form-group">
            <label class="form-label" style="font-weight: 600;">Security Password / Passcode</label>
            <input type="password" id="loginPassword" class="form-control" placeholder="••••••••••••" value="Obsyra2026@" required>
          </div>

          <button type="submit" class="btn btn-primary btn-lg" style="width: 100%; margin-top: 10px; font-weight: 700; font-size: 1rem; padding: 12px;">
            🔒 Secure Sign In to HR Portal
          </button>
        </form>

        <div style="margin-top: 20px; text-align: center; color: var(--text-subtle); font-size: 0.78rem;">
          Obsyra Private Limited • CIN: U63991PN2026PTC252127 • Wagholi, Pune 412207
        </div>
      </div>
    </div>
  `;
}


// --- File: app.js ---
// Main HR System Application Router & Controller

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

  quickLogin(empId) {
    const res = store.login(empId);
    if (res.success) {
      this.closeLoginModal();
      this.showToast(`Logged in as ${res.user.name} (${res.user.role})`);
    } else {
      this.showToast(res.message);
    }
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    const empId = document.getElementById('loginEmpId')?.value;
    const pwd = document.getElementById('loginPassword')?.value;
    const res = store.login(empId, pwd);
    if (res.success) {
      this.closeLoginModal();
      this.showToast(`Logged in as ${res.user.name} (${res.user.role})`);
    } else {
      this.showToast(res.message);
    }
  }

  logoutUser() {
    store.logout();
    this.openLoginModal();
    this.showToast('Signed out successfully.');
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

  showAssignAssetModal() {
    this.showToast('Opened Asset Allocation & Handover Modal');
  }

  showRegisterAssetModal() {
    this.showToast('Opened New Hardware Registration Form');
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

    // Check RBAC permission for requested view
    if (!store.hasPermission(activeView)) {
      viewContainer.innerHTML = `
        <div class="glass-card" style="margin-top: 40px; text-align: center; padding: 45px; border-left: 4px solid var(--accent-rose);">
          <div style="font-size: 3rem; margin-bottom: 10px;">🔒</div>
          <h2 style="color: var(--accent-rose); font-size: 1.5rem; margin-bottom: 10px;">Restricted Access Privilege</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 600px; margin: 0 auto 20px auto;">
            Your active logged-in role (<strong>${state.currentUser.role}</strong>) does not have authorization to view or manage the <strong>${activeView.toUpperCase()}</strong> module according to company RBAC policy.
          </p>
          <div style="display: flex; gap: 10px; justify-content: center;">
            <button class="btn btn-primary" onclick="window.hrApp.openLoginModal()">
              🔑 Switch Account / Sign In as Admin
            </button>
            <button class="btn btn-secondary" onclick="window.store.navigate('dashboard')">
              🏠 Back to Dashboard
            </button>
          </div>
        </div>
      `;
      return;
    }

    // Render active module
    switch (activeView) {
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

    document.getElementById('addEmployeeModalOverlay')?.classList.add('open');
  }

  closeAddEmployeeModal() {
    document.getElementById('addEmployeeModalOverlay')?.classList.remove('open');
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
}

// Instantiate global application singleton
const appInstance = new HRAppController();
window.hrApp = appInstance;
window.hrAppInstance = appInstance;

// Global Delegated Click Listener & Active Focus Switcher across all browsers
document.addEventListener('click', (e) => {
  const item = e.target.closest('.nav-item, .sidebar-nav-item, [data-view], [data-module]');
  if (item) {
    const view = item.getAttribute('data-view') || item.getAttribute('data-module') || item.getAttribute('href')?.replace('#', '');
    if (view) {
      document.querySelectorAll('.nav-item, .sidebar-nav-item').forEach(el => el.classList.remove('active'));
      item.classList.add('active');
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
        store.navigate(targetView);
      }
    });
  });

  const hashView = window.location.hash.replace('#', '');
  if (hashView && ['dashboard','employees','profile','generator','templates','history','recruitment','onboarding','attendance','payroll','performance','assets','exit','reports','settings'].includes(hashView)) {
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
  const hashView = window.location.hash.replace('#', '');
  if (hashView) store.navigate(hashView);
});

