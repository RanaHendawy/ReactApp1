
import { useState, useEffect } from 'react';
import { Employee } from '@/data/employeesData';

export function useEmployeeFiltering(employees: Employee[]) {
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [positionFilter, setPositionFilter] = useState("All positions");
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>(["All departments"]);
  const [branchFilter, setBranchFilter] = useState("All branches");
  const [sortOrder, setSortOrder] = useState("asc");

  // Get unique departments and branches for filter dropdowns
  const departments = ["All departments", ...Array.from(new Set(employees.map(emp => emp.department)))];
  const branches = ["All branches", ...Array.from(new Set(employees.map(emp => emp.branch || "Main Office")))];
    const positions = ["All positions", ...new Set(employees.map(emp => emp.jobTitle))];
  // Filter and sort employees
  useEffect(() => {
    if (!employees.length) {
      setFilteredEmployees([]);
      return;
    }
    
    let results = [...employees];
    
    // Apply search filter
    if (searchTerm) {
      results = results.filter(
        employee => 
          employee.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          employee.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (employee.branch && employee.branch.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Apply department filter (supports multiple selections)
    if (!selectedDepartments.includes("All departments")) {
      results = results.filter(employee => selectedDepartments.includes(employee.department));
    }
    
    // Apply branch filter
    if (branchFilter !== "All branches") {
      results = results.filter(employee => 
        (employee.branch || "Main Office") === branchFilter
      );
    }
      if (positionFilter !== "All positions") {
          results = results.filter(employee => employee.jobTitle === positionFilter);
      }
    // Apply sorting
    results.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    
    setFilteredEmployees(results);
  }, [searchTerm, selectedDepartments, positionFilter, branchFilter, sortOrder, employees]);
  
  return {
    filteredEmployees,
    searchTerm,
      setSearchTerm,
      positionFilter,
      setPositionFilter,
    selectedDepartments,
    setSelectedDepartments,
    branchFilter,
    setBranchFilter,
    sortOrder,
    setSortOrder,
    departments,
    branches,
    // Added for backward compatibility
    departmentFilter: selectedDepartments.includes("All departments") ? "All departments" : selectedDepartments[0],
    setDepartmentFilter: (value: string) => setSelectedDepartments([value]),
    
  };
}
