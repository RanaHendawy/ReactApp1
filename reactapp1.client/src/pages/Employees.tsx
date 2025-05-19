
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { generateEmployeesPDF } from "@/utils/pdfGenerator";
import EmployeeFilters from "@/components/employees/EmployeeFilters";
import EmployeeList from "@/components/employees/EmployeeList";
import { Employee } from "@/data/employeesData";
import { useEmployeeFiltering } from "@/hooks/useEmployeeFiltering";
import { fetchEmployees } from "@/services/employeeService";

const Employees = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);

    useEffect(() => {
        fetch('http://localhost:5045/api/WeatherForecast/employees')

            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data: Employee[]) => {
                setEmployees(data);
            })
            .catch(error => {
                console.error("Error fetching employee data:", error);
            });
    }, []);

  // Use the custom hook for filtering and sorting
  const {
    filteredEmployees,
    searchTerm,
    setSearchTerm,
    selectedDepartments,
    setSelectedDepartments,
    branchFilter,
    setBranchFilter,
    sortOrder,
    setSortOrder,
    departments,
    branches
  } = useEmployeeFiltering(employees);

  // Fetch employees data when component mounts
  //useEffect(() => {
  //  const getEmployees = async () => {
  //    try {
  //      setIsLoading(true);
  //      const data = await fetchEmployees();
  //      setEmployees(data);
  //      setError(null);
  //    } catch (err) {
  //      console.error("Failed to fetch employees:", err);
  //      setError("Failed to load employees. Please try again later.");
  //    } finally {
  //      setIsLoading(false);
  //    }
  //  };

  //  getEmployees();
  //}, []);

  // Handle PDF generation
  const handleExportPDF = () => {
  //  generateEmployeesPDF(filteredEmployees);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16">
        <div className="bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
              Our Team
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 text-center">
              Meet the talented individuals who make our company great.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Filter and sorting controls */}
          <EmployeeFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedDepartments={selectedDepartments}
            setSelectedDepartments={setSelectedDepartments}
            branchFilter={branchFilter}
            setBranchFilter={setBranchFilter}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            departments={departments}
            branches={branches}
            onExportPDF={handleExportPDF}
          />

     
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Employees;
////


//{
//    isLoading ? (
//        <div className="flex justify-center items-center py-20">
//            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
//        </div>
//    ) : error ? (
//        <div className="text-center py-10">
//            <p className="text-destructive text-lg">{error}</p>
//            <button
//                onClick={() => window.location.reload()}
//                className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
//            >
//                Try Again
//            </button>
//        </div>
//    ) : (
//        /* Employee listing */
//        <EmployeeList employees={filteredEmployees} />
//    )
//}////