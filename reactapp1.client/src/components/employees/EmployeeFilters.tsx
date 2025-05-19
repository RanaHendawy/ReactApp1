
import React from 'react';
import { Search, ArrowUpDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

interface EmployeeFiltersProps {
  searchTerm: string;
    setSearchTerm: (value: string) => void;
    positionFilter: string;
    setPositionFilter: (jobTitle: string) => void;
  selectedDepartments: string[];
  setSelectedDepartments: (value: string[]) => void;
  branchFilter: string;
  setBranchFilter: (value: string) => void;
  sortOrder: string;
  setSortOrder: (value: string) => void;
  departments: string[];
    branches: string[];
    positions: string[];
  onExportPDF: () => void;
}

const EmployeeFilters = ({
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
    positions,
  departments,
  branches,
  onExportPDF,
}: EmployeeFiltersProps) => {
  const handleDepartmentToggle = (department: string) => {
    if (department === "All departments") {
      setSelectedDepartments(["All departments"]);
      return;
    }
    
    // If "All departments" is selected and another department is clicked, remove "All departments"
    if (selectedDepartments.includes("All departments")) {
      setSelectedDepartments([department]);
      return;
    }

    // Toggle the selected department
    if (selectedDepartments.includes(department)) {
      const newSelected = selectedDepartments.filter(dep => dep !== department);
      // If removing the last department, select "All departments"
      setSelectedDepartments(newSelected.length === 0 ? ["All departments"] : newSelected);
    } else {
      setSelectedDepartments([...selectedDepartments, department]);
    }
  };

  return (
    <div className="bg-card border rounded-lg p-4 mb-6 shadow-sm">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <div className="flex-1 w-full">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
              </div>

           

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          {/* Multi-select Department filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full sm:w-[180px] justify-between">
                Departments
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px]" align="start">
              {departments.map((department) => (
                <DropdownMenuCheckboxItem
                  key={department}
                  checked={selectedDepartments.includes(department)}
                  onSelect={(e) => e.preventDefault()}
                  onCheckedChange={() => handleDepartmentToggle(department)}
                  className="cursor-pointer"
                >
                  {department}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Branch filter */}
          <Select value={branchFilter} onValueChange={setBranchFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {branches.map((branch) => (
                  <SelectItem key={branch} value={branch}>
                    {branch}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by name" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="asc">Name A-Z</SelectItem>
                <SelectItem value="desc">Name Z-A</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button 
            onClick={onExportPDF} 
            variant="outline" 
            className="whitespace-nowrap"
          >
            <Download className="mr-2 h-4 w-4" />
            Export PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeFilters;
