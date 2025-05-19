
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PriorityDropdown } from "./PriorityDropdown";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "@/types/requestForm";

interface ImpactSectionProps {
  form: UseFormReturn<FormValues>;
  selectedPriority: string | null;
  setSelectedPriority: (value: string | null) => void;
  handleNumericChange?: (field: keyof FormValues, value: string, allowDecimal?: boolean) => void;
  handlePercentageChange?: (field: keyof FormValues, value: string) => void;
}

export function ImpactSection({ 
  form, 
  selectedPriority, 
  setSelectedPriority,
  handleNumericChange,
  handlePercentageChange
}: ImpactSectionProps) {
  return (
    <Card className="bg-card border-none shadow-none">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-xl font-bold">Tool's Impact</CardTitle>
      </CardHeader>
      <CardContent className="px-0 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-md">Current Process</h3>
            <FormField
              control={form.control}
              name="manualTaskTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time to do the Task manually (hrs)</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      placeholder="10" 
                      onChange={(e) => {
                        if (handleNumericChange) {
                          handleNumericChange("manualTaskTime", e.target.value);
                        } else {
                          field.onChange(e);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="implementationTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time to implement Modifications (hrs)</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      placeholder="5" 
                      onChange={(e) => {
                        if (handleNumericChange) {
                          handleNumericChange("implementationTime", e.target.value);
                        } else {
                          field.onChange(e);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <FormControl>
                    <PriorityDropdown
                      value={field.value}
                      onChange={field.onChange}
                      selectedPriority={selectedPriority}
                      setSelectedPriority={setSelectedPriority}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-md">Expected Automation</h3>
            <FormField
              control={form.control}
              name="percentageSavedHours"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Percentage of the Expected Saved Hours (%)</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      placeholder="40" 
                      onChange={(e) => {
                        if (handlePercentageChange) {
                          handlePercentageChange("percentageSavedHours", e.target.value);
                        } else {
                          field.onChange(e);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reworkImpact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rework Impact (%)</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      placeholder="30" 
                      onChange={(e) => {
                        if (handlePercentageChange) {
                          handlePercentageChange("reworkImpact", e.target.value);
                        } else {
                          field.onChange(e);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="accuracyImpact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Accuracy Impact (%)</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      placeholder="25" 
                      onChange={(e) => {
                        if (handlePercentageChange) {
                          handlePercentageChange("accuracyImpact", e.target.value);
                        } else {
                          field.onChange(e);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
