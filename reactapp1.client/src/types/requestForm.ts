
import { z } from "zod";

export const requestFormSchema = z.object({
  department: z.string().min(1, { message: "Department is required" }),
  employeeId: z.string().min(1, { message: "Employee ID is required" }),
  employeeName: z.string().min(1, { message: "Employee name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  jobTitle: z.string().min(1, { message: "Job title is required" }),
  extension: z.string().optional(),
  softwareName: z.string().min(1, { message: "Software name is required" }),
  toolName: z.string().min(1, { message: "Tool name is required" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  manualTaskTime: z.string().min(1, { message: "Task time is required" }),
  implementationTime: z.string().min(1, { message: "Implementation time is required" }),
  priority: z.string().min(1, { message: "Priority is required" }),
  percentageSavedHours: z.string().min(1, { message: "Percentage is required" }),
  reworkImpact: z.string().min(1, { message: "Rework impact is required" }),
  accuracyImpact: z.string().min(1, { message: "Accuracy impact is required" }),
  disciplines: z.array(z.string()).optional(),
});

export type FormValues = z.infer<typeof requestFormSchema>;

export type RequestFormData = FormValues & {
  currentDate: string;
};

export const disciplines = [
  { id: "architecture", label: "A-Architecture" },
  { id: "bim", label: "B-BIM" },
  { id: "civil", label: "C-Civil" },
  { id: "industrial", label: "D-Industrial" },
  { id: "electrical", label: "E-Electrical" },
  { id: "fire", label: "F-Fire" },
  { id: "general", label: "G-General" },
  { id: "hvac", label: "H-HVAC" },
  { id: "interiors", label: "I-Interiors" },
  { id: "landscape", label: "J-Landscape" },
  { id: "management", label: "M-Management" },
  { id: "operations", label: "O-Operations" },
  { id: "plumbing", label: "P-Plumbing" },
  { id: "equipment", label: "Q-Equipment" },
  { id: "roads", label: "R-Roads" },
  { id: "structural", label: "S-Structural" },
  { id: "telecommunications", label: "T-Telecommunications" },
  { id: "urban", label: "U-Urban" },
  { id: "survey", label: "V-Survey" },
  { id: "wetUtilities", label: "W-Wet Utilities" },
  { id: "others", label: "Others" },
];

// Priority levels with their configurations
export const priorityLevels = [
  { value: "high", label: "High", color: "text-[hsl(var(--priority-high))]", icon: "AlertTriangle" },
  { value: "medium", label: "Medium", color: "text-[hsl(var(--priority-medium))]", icon: "Info" },
  { value: "low", label: "Low", color: "text-[hsl(var(--priority-low))]", icon: "CheckCircle" },
];
