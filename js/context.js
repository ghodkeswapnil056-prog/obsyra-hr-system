// Global State Manager for Obsyra HR System
import { companySettings as defaultCompany } from './data/companySettings.js';
import { initialEmployees } from './data/mockEmployees.js';
import { initialTemplates } from './data/mockTemplates.js';

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
      attendanceLogs: this.loadFromStorage('obsyra_attendanceLogs', [
        { id: "PUNCH-101", employeeId: "OBS-ENG-26-002", date: "12 Aug 2026", mode: "Office Duty", location: "Kharadi, Pune HQ (18.5529° N, 73.9468° E)", checkIn: "09:28 AM", checkOut: "06:30 PM", status: "PRESENT", photo: "📸 Verified" },
        { id: "PUNCH-102", employeeId: "OBS-OPS-26-001", date: "12 Aug 2026", mode: "Field Duty", location: "Navi Mumbai Hub (19.0760° N, 72.8777° E)", checkIn: "09:15 AM", checkOut: "06:45 PM", status: "ON DUTY", photo: "📸 Verified" },
        { id: "PUNCH-103", employeeId: "OBS-HR-26-003", date: "12 Aug 2026", mode: "Office Duty", location: "Kharadi, Pune HQ (18.5529° N, 73.9468° E)", checkIn: "09:30 AM", checkOut: "06:30 PM", status: "PRESENT", photo: "📸 Verified" }
      ]),
      activeView: window.pendingView || "dashboard",
      viewParams: window.pendingParams || {}
    };

    if (window.pendingView) {
      delete window.pendingView;
      delete window.pendingParams;
    }
  }

  recordAttendancePunch(punchRecord) {
    if (!this.state.attendanceLogs) this.state.attendanceLogs = [];
    this.state.attendanceLogs.unshift(punchRecord);
    this.saveToStorage('obsyra_attendanceLogs', this.state.attendanceLogs);
    this.notify();
  }

  togglePunch(mode = "Field Duty", address = "Kharadi, Pune, Maharashtra, India") {
    if (this.state.activePunch) {
      const punchOutTime = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
      this.recordAttendancePunch({
        id: `PUNCH-${Date.now()}`,
        employeeId: this.state.currentUser.employeeId,
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        mode: this.state.activePunch.mode,
        location: this.state.activePunch.address,
        checkIn: this.state.activePunch.checkInTime,
        checkOut: punchOutTime,
        status: "PRESENT",
        photo: "📸 Verified"
      });
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

export const store = new HRStore();
window.store = store;
