
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { disciplines } from "@/types/requestForm";
import { FormValues } from "@/types/requestForm";
import { UseFormReturn } from "react-hook-form";

type DisciplinesSectionProps = {
  form: UseFormReturn<FormValues>;
};

export const DisciplinesSection = ({ form }: DisciplinesSectionProps) => {
  return (
    <div>
      <h2 className="font-semibold text-lg border-b pb-2 mb-4">3. Beneficiaries Disciplines</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {disciplines.map((discipline) => (
          <FormField
            key={discipline.id}
            control={form.control}
            name="disciplines"
            render={({ field }) => {
              return (
                <FormItem
                  key={discipline.id}
                  className="flex flex-row items-start space-x-3 space-y-0"
                >
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(discipline.id)}
                      onCheckedChange={(checked) => {
                        const updatedDisciplines = checked
                          ? [...(field.value || []), discipline.id]
                          : (field.value || []).filter(
                              (value) => value !== discipline.id
                            );
                        field.onChange(updatedDisciplines);
                      }}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    {discipline.label}
                  </FormLabel>
                </FormItem>
              );
            }}
          />
        ))}
      </div>
    </div>
  );
};
