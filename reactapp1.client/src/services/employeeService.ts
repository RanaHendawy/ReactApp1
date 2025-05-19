
import { Employee, employeesData } from "@/data/employeesData";

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchEmployees = async (): Promise<Employee[]> => {
  // Simulate network request delay
  await delay(800);
  
  // Return the mock data
  return employeesData;
};
