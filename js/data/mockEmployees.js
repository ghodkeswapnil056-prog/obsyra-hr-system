// Employee Master Initial Seed Data for Obsyra Private Limited (Updated with Leadership)
export const initialEmployees = [
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
