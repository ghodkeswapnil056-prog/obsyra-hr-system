// Obsyra HRMS Unified API & Data Storage Client (Hybrid API Sync with Local Storage Fallback)
const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
  ? 'http://localhost:3000/api' 
  : null;

class ObsyraAPIClient {
  constructor() {
    this.baseUrl = API_BASE_URL;
    this.isServerOnline = false;
    this.checkHealth();
  }

  async checkHealth() {
    if (!this.baseUrl) return false;
    try {
      const res = await fetch(`${this.baseUrl}/health`);
      if (res.ok) {
        this.isServerOnline = true;
        console.log('✅ Obsyra HRMS REST API Server Connected at http://localhost:3000/api');
        return true;
      }
    } catch (e) {
      this.isServerOnline = false;
      console.warn('⚡ Running in Offline / Static LocalStorage Mode (GitHub Pages compatible)');
    }
    return false;
  }

  async getEmployees(fallbackData) {
    if (this.isServerOnline) {
      try {
        const res = await fetch(`${this.baseUrl}/employees`);
        const json = await res.json();
        if (json.success) return json.employees;
      } catch (e) {
        console.warn('API Error, using fallback employee data:', e);
      }
    }
    return fallbackData;
  }

  async saveEmployee(newEmployeeData) {
    if (this.isServerOnline) {
      try {
        const res = await fetch(`${this.baseUrl}/employees`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newEmployeeData)
        });
        const json = await res.json();
        if (json.success) return json.employee;
      } catch (e) {
        console.error('API Error saving employee:', e);
      }
    }
    return newEmployeeData;
  }

  async verifyDocument(serialNumber) {
    if (this.isServerOnline) {
      try {
        const res = await fetch(`${this.baseUrl}/verify/${encodeURIComponent(serialNumber)}`);
        const json = await res.json();
        return json;
      } catch (e) {
        console.warn('API Error verifying document:', e);
      }
    }
    return null;
  }
}

export const apiClient = new ObsyraAPIClient();
window.obsyraAPI = apiClient;
