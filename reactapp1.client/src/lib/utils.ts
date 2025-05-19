
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to open Outlook with pre-filled fields
export function openOutlookEmail(email: string, subject: string, body: string = '') {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  window.location.href = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
}

// Function to format the standard email template
export function getContactEmailTemplate(userName: string = '') {
  return `Dear Digital Delivery Team,

I would like to inquire about ...

Best regards,
${userName || '[User Name]'}`;
}
