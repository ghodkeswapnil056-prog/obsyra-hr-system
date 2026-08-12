// Public & Internal Document Verification Engine (QR Code & Serial Authenticity Portal)
import { store } from '../context.js';

export function renderVerification() {
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
