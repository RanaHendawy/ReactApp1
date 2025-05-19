
import { useState } from "react";
import EmployeeCard from "@/components/EmployeeCard";
import { Employee } from "@/data/employeesData";
import EmployeeModal from "@/components/EmployeeModal";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Grid, List } from "lucide-react";
import EmployeeTable from "./EmployeeTable";

interface EmployeeListProps {
  employees: Employee[];
}

const EmployeeList = ({ employees }: EmployeeListProps) => {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"card" | "list">("card");
    const [activeDepartments, setActiveDepartments] = useState<string[]>([]);

    const departments = Array.from(new Set(employees.map(emp => emp.department)));
    // Handle opening employee modal

  // Handle opening employee modal
  const handleOpenEmployeeModal = (employee: Employee) => {
    // Only allow opening if no modal is currently open
    //if (!isModalOpen) {
      setSelectedEmployee(employee);
      // Find the index of the selected employee
      const index = employees.findIndex(emp => emp.id === employee.id);
      setSelectedIndex(index);
      setIsModalOpen(true);
   // }
  };

  // Navigate to previous employee
  const handlePrevious = () => {
    if (selectedIndex > 0) {
      const prevIndex = selectedIndex - 1;
      setSelectedIndex(prevIndex);
      setSelectedEmployee(employees[prevIndex]);
    }
  };

  // Navigate to next employee
  const handleNext = () => {
    if (selectedIndex < employees.length - 1) {
      const nextIndex = selectedIndex + 1;
      setSelectedIndex(nextIndex);
      setSelectedEmployee(employees[nextIndex]);
    }
  };
    const filteredEmployees = activeDepartments.length > 0
        ? employees.filter(emp => activeDepartments.includes(emp.department))
        : employees;
  return (
    <>
      {/* View toggle */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="mb-4 md:mb-0">
          <h3 className="text-md font-medium mb-2">View as:</h3>
          <ToggleGroup 
            type="single" 
            value={viewMode} 
            onValueChange={(value) => value && setViewMode(value as "card" | "list")}
          >
            <ToggleGroupItem 
              value="card"
              className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            >
              <Grid className="h-4 w-4 mr-1" />
              Card View
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="list"
              className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            >
              <List className="h-4 w-4 mr-1" />
              List View
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      
      {employees.length > 0 ? (
        <>
          {viewMode === "card" ? (
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {employees.map((employee) => (
                <div 
                  key={employee.id} 
                  onClick={() => handleOpenEmployeeModal(employee)}
                  className={`cursor-pointer ${isModalOpen ? 'pointer-events-none opacity-70' : ''}`}
                >
                  <EmployeeCard 
                    name={employee.name}
                    position={employee.jobTitle}
                    department={employee.department}
                    branch={employee.branch}
                    initial={employee.initial}
                    image={employee.image}
                    email={employee.email}
                    extension={employee.extension}
                  />
                </div>
              ))}
            </div>
          ) : (
            <EmployeeTable 
              employees={employees} 
              onEmployeeClick={handleOpenEmployeeModal} 
              disabled={isModalOpen}
            />
          )}
        </>
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-gray-500">No employees match your search criteria.</p>
        </div>
      )}
      
      {/* Employee Modal with navigation */}
      <EmployeeModal 
        employee={selectedEmployee} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={selectedIndex > 0}
        hasNext={selectedIndex < employees.length - 1}
      />
    </>
  );
};

export default EmployeeList;
