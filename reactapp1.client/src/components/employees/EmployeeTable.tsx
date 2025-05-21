
import { Mail, Phone } from "lucide-react";
import { Employee } from "@/data/employeesData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface EmployeeTableProps {
  employees: Employee[];
  onEmployeeClick: (employee: Employee) => void;
  disabled?: boolean;
}

const EmployeeTable = ({ employees, onEmployeeClick, disabled = false }: EmployeeTableProps) => {
  const handleEmailClick = (e: React.MouseEvent, email: string) => {
    e.stopPropagation();
    // Open Outlook with pre-filled email
    window.location.href = `mailto:${email}?subject=Message from Digital Delivery Portal`;
  };

  const handleExtensionClick = (e: React.MouseEvent, extension: string) => {
    e.stopPropagation();
    // Open specific calling app (using tel: protocol)
    window.location.href = `tel:${extension}`;
  };
    console.log("EmployeeTable", employees);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="bg-muted text-muted-foreground uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Initial</th>
            <th scope="col" className="px-6 py-3">Position</th>
            <th scope="col" className="px-6 py-3">Branch</th>
            <th scope="col" className="px-6 py-3">Department</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">Extension</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
              <tr 
              key={employee.id} 
              className={`bg-card border-b hover:bg-primary/5 ${disabled ? 'opacity-70' : 'cursor-pointer'}`}
                  onClick={() => !disabled && onEmployeeClick(employee)}
             
            >
              <td className="px-6 py-4 font-medium flex items-center gap-3">
                <Avatar className="h-8 w-8">
                          <AvatarImage src={"https://localhost:44339/upload/" + employee.image} alt={employee.name} />
                  <AvatarFallback>{employee.initial || employee.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                </Avatar>
                {employee.name}
              </td>
              <td className="px-6 py-4">{employee.initial || employee.name.split(" ").map(n => n[0]).join("")}</td>
              <td className="px-6 py-4 text-primary">{employee.jobTitle}</td>
              <td className="px-6 py-4">{employee.branch || "Main Office"}</td>
              <td className="px-6 py-4">{employee.department}</td>
              <td className="px-6 py-4">
                <button 
                  onClick={(e) => handleEmailClick(e, employee.email)}
                  className="flex items-center hover:text-primary"
                  disabled={disabled}
                >
                  <Mail className="w-4 h-4 mr-1" />
                  <span>{employee.email}</span>
                </button>
              </td>
              <td className="px-6 py-4">
                {employee.extension && (
                  <button 
                    onClick={(e) => handleExtensionClick(e, employee.extension || "")}
                    className="flex items-center hover:text-primary"
                    disabled={disabled}
                  >
                    <Phone className="w-4 h-4 mr-1" />
                    <span>{employee.extension}</span>
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
