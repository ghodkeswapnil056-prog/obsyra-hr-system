// Official Company Settings for Obsyra Private Limited (Updated with Ethics Sequence)
export const companySettings = {
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
      <div style="font-family: 'Outfit', 'Arial', sans-serif; font-weight: 800; font-size: 26px; color: #1e293b; letter-spacing: 2px; line-height: 1;">OBSYRA</div>
      <div style="font-family: 'Outfit', 'Arial', sans-serif; font-weight: 700; font-size: 10px; color: #c59b27; letter-spacing: 3px; margin: 3px 0 2px 0;">— PRIVATE LIMITED —</div>
      <div style="font-family: 'Inter', 'Arial', sans-serif; font-weight: 500; font-size: 8.5px; color: #64748b;">EMPOWERING BUSINESSES WITH INNOVATION</div>
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
