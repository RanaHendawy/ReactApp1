
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { parseExcelFile, exportToExcel } from '@/services/importService';
import { Employee } from '@/data/employeesData';

interface FileImportExportProps {
  employees: Employee[];
  onImportSuccess: (employees: Employee[]) => void;
}

const FileImportExport = ({ employees, onImportSuccess }: FileImportExportProps) => {
  const [isImporting, setIsImporting] = useState(false);

  const handleFileImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsImporting(true);
    
    try {
      if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
        const importedEmployees = await parseExcelFile(file);
        onImportSuccess(importedEmployees);
        toast.success(`Successfully imported ${importedEmployees.length} employee records`);
      } else {
        toast.error('Unsupported file format. Please upload an Excel file (.xlsx or .xls)');
      }
    } catch (error) {
      console.error('Import error:', error);
      toast.error('Failed to import file. Please check the file format.');
    } finally {
      setIsImporting(false);
      // Reset input
      e.target.value = '';
    }
  };

  const handleExport = () => {
    try {
      exportToExcel(employees, 'employee-data.xlsx');
      toast.success('Employee data exported successfully');
    } catch (error) {
      console.error('Export error:', error);
      toast.error('Failed to export employee data');
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center mb-6 p-4 bg-muted/30 dark:bg-muted/10 rounded-lg">
      <div className="w-full md:w-1/2">
        <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Import Employee Data
        </label>
        <Input
          id="file-upload"
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFileImport}
          className="w-full"
          disabled={isImporting}
        />
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Upload Excel (.xlsx, .xls) files to import or update employee data
        </p>
      </div>
      
      <div className="w-full md:w-1/2 flex flex-col md:items-end">
        <Button 
          onClick={handleExport}
          variant="outline"
          className="mt-4 md:mt-0"
        >
          Export Employee Data
        </Button>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Download all employee data as an Excel file
        </p>
      </div>
    </div>
  );
};

export default FileImportExport;
