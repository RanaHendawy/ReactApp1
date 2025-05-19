
import * as XLSX from 'xlsx';
import { Employee } from '@/data/employeesData';

// Function to parse Excel file and extract employee data
export const parseExcelFile = (file: File): Promise<Employee[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        
        // Assuming the first sheet contains employee data
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        
        // Convert to JSON
        const jsonData = XLSX.utils.sheet_to_json<any>(worksheet);
        
        // Map to Employee type
        const employees: Employee[] = jsonData.map((row, index) => {
          return {
            id: row.id || index + 1,
            name: row.name || '',
            position: row.position || '',
            email: row.email || '',
            department: row.department || '',
            imageUrl: row.imageUrl || 'https://via.placeholder.com/150',
            extension: row.extension?.toString() || ''
          };
        });
        
        resolve(employees);
      } catch (error) {
        reject(new Error('Failed to parse Excel file'));
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    
    reader.readAsArrayBuffer(file);
  });
};

// Function to update existing employees with new data
export const updateEmployees = (
  currentEmployees: Employee[],
  newEmployees: Employee[]
): Employee[] => {
  const updatedEmployees = [...currentEmployees];
  
  newEmployees.forEach(newEmployee => {
    const index = updatedEmployees.findIndex(
      emp => emp.id === newEmployee.id || emp.email === newEmployee.email
    );
    
    if (index !== -1) {
      // Update existing employee
      updatedEmployees[index] = {
        ...updatedEmployees[index],
        ...newEmployee,
      };
    } else {
      // Add new employee
      updatedEmployees.push(newEmployee);
    }
  });
  
  return updatedEmployees;
};

// Export employee data to Excel
export const exportToExcel = (employees: Employee[], fileName = 'employee-data.xlsx'): void => {
  const worksheet = XLSX.utils.json_to_sheet(employees);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Employees');
  XLSX.writeFile(workbook, fileName);
};
