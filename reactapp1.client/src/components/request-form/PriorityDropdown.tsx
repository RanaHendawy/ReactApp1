
import { AlertTriangle, CheckCircle, Info } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { priorityLevels } from "@/types/requestForm";

type PriorityDropdownProps = {
  value: string;
  onChange: (value: string) => void;
  selectedPriority: string | null;
  setSelectedPriority: (value: string | null) => void;
};

// Function to get the icon component based on name
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "AlertTriangle":
      return <AlertTriangle className="h-4 w-4" />;
    case "Info":
      return <Info className="h-4 w-4" />;
    case "CheckCircle":
      return <CheckCircle className="h-4 w-4" />;
    default:
      return null;
  }
};

// Find the priority object based on the selected value
const getPriorityDetails = (value: string) => {
  return priorityLevels.find(p => p.value === value) || null;
};

export const PriorityDropdown = ({ 
  value, 
  onChange, 
  selectedPriority, 
  setSelectedPriority 
}: PriorityDropdownProps) => {
  return (
    <Select 
      onValueChange={(value) => {
        onChange(value);
        setSelectedPriority(value);
      }}
      value={value}
    >
      <SelectTrigger className={selectedPriority ? getPriorityDetails(selectedPriority)?.color : ""}>
        <SelectValue placeholder="Select priority level" />
      </SelectTrigger>
      <SelectContent>
        {priorityLevels.map((priority) => (
          <SelectItem 
            key={priority.value} 
            value={priority.value} 
            className={priority.color}
          >
            <div className="flex items-center gap-2">
              {getIconComponent(priority.icon)}
              <span>{priority.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
