
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { generateRequestFormPDF } from "@/utils/pdfGenerator";
import { RequesterInfoSection } from "@/components/request-form/RequesterInfoSection";
import { ImpactSection } from "@/components/request-form/ImpactSection";
import { DisciplinesSection } from "@/components/request-form/DisciplinesSection";
import { ApprovalsSection } from "@/components/request-form/ApprovalsSection";
import { requestFormSchema, FormValues, RequestFormData } from "@/types/requestForm";

const RequestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(requestFormSchema),
    defaultValues: {
      department: "",
      employeeId: "",
      employeeName: "",
      email: "",
      jobTitle: "",
      extension: "",
      softwareName: "",
      toolName: "",
      description: "",
      manualTaskTime: "",
      implementationTime: "",
      priority: "",
      percentageSavedHours: "",
      reworkImpact: "",
      accuracyImpact: "",
      disciplines: [],
    },
  });

  // Handle numeric input validation
  const validateNumericInput = (value: string, allowDecimal: boolean = false): string => {
    // If empty, return as is
    if (!value) return '';
    
    // Remove anything that's not a digit, decimal point, or minus sign
    let sanitized = value.replace(/[^\d.-]/g, '');
    
    // If decimals are not allowed, remove decimal points
    if (!allowDecimal) {
      sanitized = sanitized.replace(/\./g, '');
    }
    
    // Handle only one decimal point
    if (allowDecimal) {
      const parts = sanitized.split('.');
      if (parts.length > 2) {
        sanitized = parts[0] + '.' + parts.slice(1).join('');
      }
    }
    
    return sanitized;
  };

  // Handle percentage input (0-100 range)
  const validatePercentageInput = (value: string): string => {
    const numValue = validateNumericInput(value, true);
    const num = parseFloat(numValue);
    
    if (isNaN(num)) return '';
    if (num < 0) return '0';
    if (num > 100) return '100';
    
    return numValue;
  };

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      
      // Sanitize numeric inputs before submitting
      const sanitizedData = {
        ...data,
        manualTaskTime: validateNumericInput(data.manualTaskTime),
        implementationTime: validateNumericInput(data.implementationTime),
        percentageSavedHours: validatePercentageInput(data.percentageSavedHours),
        reworkImpact: validatePercentageInput(data.reworkImpact),
        accuracyImpact: validatePercentageInput(data.accuracyImpact),
      };
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Generate PDF from form data
      const pdfData: RequestFormData = {
        ...sanitizedData,
        currentDate: new Date().toLocaleDateString(),
      };
      
      generateRequestFormPDF(pdfData);
      
      // Show success message
      toast.success("Request submitted successfully and PDF generated!");
      
      // Reset form
      form.reset();
      setSelectedPriority(null);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Override the form values when numeric fields are changed
  const handleNumericChange = (field: keyof FormValues, value: string, allowDecimal: boolean = false) => {
    form.setValue(field, validateNumericInput(value, allowDecimal));
  };

  // Override the form values when percentage fields are changed
  const handlePercentageChange = (field: keyof FormValues, value: string) => {
    form.setValue(field, validatePercentageInput(value));
  };

  return (
    <Layout>
      <div className="container max-w-4xl py-10 px-4">
        <Card className="border-t-4 border-t-blue-600 dark:border-t-blue-400">
          <CardHeader className="bg-muted/50">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl font-bold">Request For Application</CardTitle>
                <p className="text-muted-foreground mt-2">
                  This form is used to submit requests for the research and development or implementation of new
                  automation systems by the R&D Unit. It is designed to help capture all necessary details to evaluate the
                  feasibility, scope, and priority of the requested automation.
                </p>
              </div>
              <div className="hidden md:block">
                            {/*  <img src="/lovable-uploads/Colored-removebg-preview.png" alt="R&D Logo" className="w-30 h-30" />*/}
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <RequesterInfoSection form={form} />
                <ImpactSection
                  form={form}
                  selectedPriority={selectedPriority}
                  setSelectedPriority={setSelectedPriority}
                  handleNumericChange={handleNumericChange}
                  handlePercentageChange={handlePercentageChange}
                />
                <DisciplinesSection form={form} />
                <ApprovalsSection />

                <div className="flex justify-end">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        <div className="mt-6 text-sm text-muted-foreground text-center">
          <p>Research &amp; Development Unit</p>
          <p>Digital Delivery Department</p>
        </div>
      </div>
    </Layout>
  );
};

export default RequestForm;
