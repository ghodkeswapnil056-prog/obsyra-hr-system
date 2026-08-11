// Serial Number Generator for HR Documents
export function generateNextDocNumber(docTypeCode, companySettings) {
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

export function commitDocNumberSequence(docTypeCode, companySettings) {
  const code = docTypeCode ? docTypeCode.toUpperCase() : "GEN";
  if (!companySettings.sequences) {
    companySettings.sequences = {};
  }
  companySettings.sequences[code] = (companySettings.sequences[code] || 0) + 1;
  return companySettings.sequences[code];
}
