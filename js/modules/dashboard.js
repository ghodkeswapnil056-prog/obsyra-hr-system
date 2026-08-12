// Role-Based Dashboard Router for Obsyra HRMS
import { store } from '../context.js';
import { renderEmployeePortal, renderManagerPortal, renderHRPortal, renderAdminPortal, renderPayrollPortal, renderSiteCoordinatorPortal } from './roleDashboards.js';

export function renderDashboard() {
  const state = store.getState();
  const role = state.currentUser ? state.currentUser.role : 'Super Admin';

  if (role === 'Employee') {
    return renderEmployeePortal();
  }
  if (role === 'Department Manager' || role === 'Manager') {
    return renderManagerPortal();
  }
  if (role === 'Payroll') {
    return renderPayrollPortal();
  }
  if (role === 'Site Coordinator' || role === 'Project Manager') {
    return renderSiteCoordinatorPortal();
  }
  if (role === 'Super Admin' || role === 'Admin') {
    return renderAdminPortal();
  }
  
  return renderHRPortal();
}
