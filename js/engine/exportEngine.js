// Universal Data Exporter Engine for Payroll, Attendance & Asset Master Data
export function exportTableToCSV(filename, tableId) {
  const table = document.getElementById(tableId);
  if (!table) {
    alert('Table data not found for export');
    return;
  }

  let csv = [];
  const rows = table.querySelectorAll('tr');
  
  for (let i = 0; i < rows.length; i++) {
    let row = [];
    const cols = rows[i].querySelectorAll('td, th');
    
    for (let j = 0; j < cols.length - 1; j++) { // Exclude action column
      let text = cols[j].innerText.replace(/(\r\n|\n|\r)/gm, ' ').replace(/"/g, '""');
      row.push('"' + text + '"');
    }
    csv.push(row.join(','));
  }

  const csvFile = new Blob([csv.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const downloadLink = document.createElement('a');
  downloadLink.download = filename + '_' + new Date().toISOString().slice(0, 10) + '.csv';
  downloadLink.href = window.URL.createObjectURL(csvFile);
  downloadLink.style.display = 'none';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}
