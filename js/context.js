// Global State Manager for Obsyra HR System
import { companySettings as defaultCompany } from './data/companySettings.js';
import { initialEmployees } from './data/mockEmployees.js';
import { initialTemplates } from './data/mockTemplates.js';

class HRStore {
  constructor() {
    this.listeners = [];
    this.state = {
      company: this.loadFromStorage('obsyra_company', defaultCompany),
      employees: this.loadFromStorage('obsyra_employees', initialEmployees),
      templates: this.loadFromStorage('obsyra_templates', initialTemplates),
      history: this.loadFromStorage('obsyra_history', this.getInitialHistory()),
      currentUser: {
        name: "Swapnil Ghodke",
        email: "swapnil.ghodke@obsyra.com",
        role: "Super Admin", // Super Admin, HR Admin, HR Executive, Manager, Employee
        avatar: "SG"
      },
      activeView: "dashboard",
      viewParams: {}
    };
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
