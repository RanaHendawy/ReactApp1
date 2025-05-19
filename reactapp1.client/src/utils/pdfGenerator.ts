import jsPDF from 'jspdf';
import { RequestFormData } from '@/types/requestForm';

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  branch?: string;
  initial?: string;
  imageUrl: string;
  email: string;
  extension?: string;
}

export const generateEmployeesPDF = (employees: Employee[]) => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });
  
  // Add title
  doc.setFontSize(18);
  doc.text('Employee Directory', 105, 15, { align: 'center' });
  
  // Add current date
  const today = new Date().toLocaleDateString();
  doc.setFontSize(10);
  doc.text(`Generated on: ${today}`, 195, 10, { align: 'right' });
  
  // Set border styling
  doc.setDrawColor(100, 100, 100);
  doc.setLineWidth(0.1);
  
  let y = 25;
  let pageCount = 1;
  
  // Function to add page header
  const addHeader = () => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    
    // Add page number
    doc.text(`Page ${pageCount}`, 195, 10, { align: 'right' });
    
    // Draw table header
    doc.rect(10, y, 190, 10);
    doc.line(30, y, 30, y + 10); // Image/Initial divider
    doc.line(45, y, 45, y + 10); // Initial/Name divider
    doc.line(75, y, 75, y + 10); // Name/Position divider
    doc.line(105, y, 105, y + 10); // Position/Department divider
    doc.line(135, y, 135, y + 10); // Department/Branch divider
    doc.line(160, y, 160, y + 10); // Branch/Extension divider
    
    // Add header text
    doc.text("Image", 20, y + 6, { align: 'center' });
    doc.text("Init", 37.5, y + 6, { align: 'center' });
    doc.text("Name", 60, y + 6, { align: 'center' });
    doc.text("Position", 90, y + 6, { align: 'center' });
    doc.text("Branch", 120, y + 6, { align: 'center' });
    doc.text("Department", 147.5, y + 6, { align: 'center' });
    doc.text("Ext", 175, y + 6, { align: 'center' });
    
    y += 10;
  };
  
  // Add initial header
  addHeader();
  
  // Process each employee
  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    
    // Check if we need a new page
    if (y > 275) {
      doc.addPage();
      y = 25;
      pageCount++;
      addHeader();
    }
    
    // Row height for employee data
    const rowHeight = 15;
    
    // Draw row rectangle and dividers
    doc.rect(10, y, 190, rowHeight);
    doc.line(30, y, 30, y + rowHeight); // Image divider
    doc.line(45, y, 45, y + rowHeight); // Initial divider
    doc.line(75, y, 75, y + rowHeight); // Name divider
    doc.line(105, y, 105, y + rowHeight); // Position divider
    doc.line(135, y, 135, y + rowHeight); // Department divider
    doc.line(160, y, 160, y + rowHeight); // Branch divider
    
    // Add employee initial and placeholder for image
    const initial = employee.initial || employee.name.split(" ").map(n => n[0]).join("");
    
    // Draw a circle for the initial (as a placeholder where the image would normally go)
    doc.setFillColor(200, 200, 200);
    doc.circle(20, y + rowHeight/2, 6, 'F');
    doc.setTextColor(50, 50, 50);
    doc.setFont('helvetica', 'bold');
    doc.text(initial.charAt(0), 20, y + rowHeight/2 + 1, { align: 'center' });
    
    // Reset text color
    doc.setTextColor(0, 0, 0);
    
    // Add employee data
    doc.setFont('helvetica', 'normal');
    doc.text(initial, 37.5, y + rowHeight/2 + 1, { align: 'center' });
    
    // Truncate text functions to avoid overflow
    const truncate = (text: string, maxWidth: number) => {
      if (!text) return '';
      if (doc.getStringUnitWidth(text) * 12 * 0.352778 < maxWidth) return text;
      
      let truncated = text;
      while (doc.getStringUnitWidth(truncated + '...') * 12 * 0.352778 > maxWidth) {
        truncated = truncated.substring(0, truncated.length - 1);
      }
      return truncated + '...';
    };
    
    // Add employee details with truncation
    doc.text(truncate(employee.name, 28), 46, y + rowHeight/2 + 1, { align: 'left' });
    doc.text(truncate(employee.position, 28), 76, y + rowHeight/2 + 1, { align: 'left' });
    doc.text(truncate(employee.branch || 'Main Office', 23), 106, y + rowHeight/2 + 1, { align: 'left' });
    doc.text(truncate(employee.department, 28), 136, y + rowHeight/2 + 1, { align: 'left' });
    doc.text(employee.extension || '-', 175, y + rowHeight/2 + 1, { align: 'center' });
    
    // Move to next row
    y += rowHeight;
  }
  
  // Add company footer
  doc.setFontSize(10);
  doc.setFont('helvetica', 'italic');
  doc.text('ZFP Inc - Employee Directory', 105, 285, { align: 'center' });
  
  // Save the PDF
  doc.save('employee-directory.pdf');
};

// Updated to export PDF on submission, without green/cyan circles
export const generateRequestFormPDF = (formData: RequestFormData) => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });
  
  // Set background color to dark gray/black
  doc.setFillColor(40, 40, 40);
  doc.rect(0, 0, 210, 297, 'F');
  
  // Set text color to white for dark background
  doc.setTextColor(220, 220, 220);
  
  // Add title
  doc.setFontSize(18);
  doc.text('Request For Application', 15, 20);
  
  // Add the ZFP logo in the top right
  doc.addImage("/lovable-uploads/43d0cfba-1a95-4411-8c7f-76bc96b07eb1.png", "PNG", 170, 10, 30, 20);
  
  // Add description
  doc.setFontSize(9);
  const description = 'This form is used to submit requests for the research and development or implementation of new automation systems by the R&D Unit. It is designed to help capture all necessary details to evaluate the feasibility, scope, and priority of the requested automation.';
  const splitDesc = doc.splitTextToSize(description, 180);
  doc.text(splitDesc, 15, 30);
  
  // Section 1: Requester information
  let y = 45;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('1.   This part to be filled by requester', 15, y);
  y += 10;
  
  // Draw the table structure for section 1
  doc.setDrawColor(255, 255, 255);
  doc.setLineWidth(0.5);
  
  // First row - Department and Employee ID
  doc.rect(15, y, 90, 8); // Department cell
  doc.rect(105, y, 90, 8); // Employee ID cell
  
  doc.setFontSize(9);
  doc.text('Department', 17, y + 5);
  doc.text('Employee ID', 107, y + 5);
  
  // Second row - Values for Department and Employee ID
  y += 8;
  doc.rect(15, y, 90, 8);
  doc.rect(105, y, 90, 8);
  doc.setFont('helvetica', 'normal');
  doc.text(formData.department, 17, y + 5);
  doc.text(formData.employeeId, 107, y + 5);
  
  // Third row - Employee Name and Email
  y += 8;
  doc.rect(15, y, 90, 8);
  doc.rect(105, y, 90, 8);
  doc.setFont('helvetica', 'bold');
  doc.text('Employee Name', 17, y + 5);
  doc.text('Email', 107, y + 5);
  
  // Fourth row - Values for Employee Name and Email
  y += 8;
  doc.rect(15, y, 90, 8);
  doc.rect(105, y, 90, 8);
  doc.setFont('helvetica', 'normal');
  doc.text(formData.employeeName, 17, y + 5);
  doc.text(formData.email, 107, y + 5);
  
  // Fifth row - Job Title and Extension
  y += 8;
  doc.rect(15, y, 90, 8);
  doc.rect(105, y, 90, 8);
  doc.setFont('helvetica', 'bold');
  doc.text('Job Title', 17, y + 5);
  doc.text('Extension', 107, y + 5);
  
  // Sixth row - Values for Job Title and Extension
  y += 8;
  doc.rect(15, y, 90, 8);
  doc.rect(105, y, 90, 8);
  doc.setFont('helvetica', 'normal');
  doc.text(formData.jobTitle, 17, y + 5);
  doc.text(formData.extension || 'N/A', 107, y + 5);
  
  // Seventh row - Software Name and Tool Name
  y += 8;
  doc.rect(15, y, 90, 8);
  doc.rect(105, y, 90, 8);
  doc.setFont('helvetica', 'bold');
  doc.text('Software Name', 17, y + 5);
  doc.text('Tool Name', 107, y + 5);
  
  // Eighth row - Values for Software Name and Tool Name
  y += 8;
  doc.rect(15, y, 90, 8);
  doc.rect(105, y, 90, 8);
  doc.setFont('helvetica', 'normal');
  doc.text(formData.softwareName, 17, y + 5);
  doc.text(formData.toolName, 107, y + 5);
  
  // Description field
  y += 8;
  doc.setFont('helvetica', 'bold');
  doc.text('Description of Request:', 15, y + 10);
  y += 12;
  
  // Create description box
  doc.rect(15, y, 180, 30);
  doc.setFont('helvetica', 'normal');
  const descriptionText = doc.splitTextToSize(formData.description, 175);
  doc.text(descriptionText, 17, y + 5);
  
  // Move to next section
  y += 35;
  
  // Section 2: Tool's Impact
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('2.   Tool\'s Impact', 15, y);
  y += 10;
  
  // Create the impact table
  doc.line(15, y, 195, y); // Top horizontal line
  
  // Headers
  doc.setFontSize(10);
  doc.text('Current Process', 70, y - 3, { align: 'center' });
  doc.text('Expected Automation', 145, y - 3, { align: 'center' });
  
  // Column divider
  doc.line(105, y - 7, 105, y + 25); // Vertical divider
  
  // Current Process rows
  let lineY = y;
  doc.setFontSize(9);
  
  doc.text('Time to do the Task manually', 17, lineY + 5);
  doc.text(`${formData.manualTaskTime} Hrs.`, 90, lineY + 5, { align: 'right' });
  lineY += 8;
  doc.line(15, lineY, 195, lineY);
  
  doc.text('Time to implement Modifications', 17, lineY + 5);
  doc.text(`${formData.implementationTime} Hrs.`, 90, lineY + 5, { align: 'right' });
  lineY += 8;
  doc.line(15, lineY, 195, lineY);
  
  // Set color based on priority
  doc.text('Priority', 17, lineY + 5);
  
  // Get the right color for priority
  let priorityColor;
  switch (formData.priority) {
    case 'high':
      priorityColor = [255, 0, 0]; // Red
      break;
    case 'medium':
      priorityColor = [255, 165, 0]; // Orange
      break;
    case 'low':
      priorityColor = [0, 128, 0]; // Green
      break;
    default:
      priorityColor = [255, 255, 255]; // White for default
  }
  
  doc.setTextColor(priorityColor[0], priorityColor[1], priorityColor[2]);
  doc.text(formData.priority.toUpperCase(), 90, lineY + 5, { align: 'right' });
  doc.setTextColor(220, 220, 220); // Reset to white
  
  // Expected Automation rows
  lineY = y;
  doc.text('Percentage of the Expected Saved Hours', 107, lineY + 5);
  doc.text(`${formData.percentageSavedHours}%`, 180, lineY + 5, { align: 'right' });
  lineY += 8;
  
  doc.text('Rework Impact', 107, lineY + 5);
  doc.text(`${formData.reworkImpact}%`, 180, lineY + 5, { align: 'right' });
  lineY += 8;
  
  doc.text('Accuracy Impact', 107, lineY + 5);
  doc.text(`${formData.accuracyImpact}%`, 180, lineY + 5, { align: 'right' });
  lineY += 8;
  doc.line(15, lineY, 195, lineY); // Bottom horizontal line
  
  // Move to next section
  y = lineY + 10;
  
  // Section 3: Beneficiaries Disciplines
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('3.   Beneficiaries Disciplines', 15, y);
  y += 10;
  
  // Create a grid for disciplines
  const disciplinesPerRow = 3;
  const cellWidth = 60;
  const cellHeight = 7;
  const disciplines = [
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
  
  // Draw checkboxes for disciplines
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  
  for (let i = 0; i < disciplines.length; i++) {
    const col = i % disciplinesPerRow;
    const row = Math.floor(i / disciplinesPerRow);
    const x = 15 + col * cellWidth;
    const boxY = y + row * cellHeight;
    
    // Draw checkbox (rectangle)
    doc.rect(x, boxY, 5, 5);
    
    // If selected, draw an X in the box
    if (formData.disciplines?.includes(disciplines[i].id)) {
      doc.text('X', x + 2.5, boxY + 3.5, { align: 'center' });
    }
    
    // Draw discipline label
    doc.text(disciplines[i].label, x + 8, boxY + 4);
  }
  
  // Add footer
  doc.setFontSize(7);
  doc.text('Research & Development Unit', 15, 280);
  doc.text('Digital Delivery Department', 15, 285);
  doc.text(`Issue Date: ${formData.currentDate || new Date().toLocaleDateString()}`, 170, 285);
  
  // Add ZFP logo at top only (removed from bottom)
  
  // Save the PDF
  doc.save('request-form.pdf');
};
