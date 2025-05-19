
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Phone, Mail } from "lucide-react";

interface EmployeeCardProps {
  name: string;
  jobtitle: string;
  department: string;
  branch?: string;
  initial?: string;
  image: string;
  email: string;
  extension?: string;
}

const EmployeeCard = ({ 
  name, 
  jobtitle, 
  department, 
  branch, 
  initial, 
  image, 
  email, 
  extension 
}: EmployeeCardProps) => {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the card click from triggering
    // Open Outlook with pre-filled fields
    window.location.href = `mailto:${email}?subject=Message from Digital Delivery Portal`;
  };

  const handleExtensionClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the card click from triggering
    
    // Use a custom app if required, or fall back to default tel:
    window.location.href = `tel:${extension}`;
  };

  return (
    <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md hover:bg-[hsl(var(--hover-color))] transition-all duration-300 hover:-translate-y-1 border border-border">
      <div className="flex flex-col items-center">
        <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={"/lovable-uploads/" + image} alt={EmployeeCard.name} />
          <AvatarFallback>{initial || name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
        </Avatar>
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">{name}</h3>
        <p className="text-primary mb-1">{jobtitle}</p>
        {branch && (
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">{branch}</p>
        )}
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{department}</p>
        <button 
          onClick={handleEmailClick}
          className="text-gray-500 dark:text-gray-400 text-sm mb-3 flex items-center hover:text-primary"
        >
          <Mail className="w-4 h-4 mr-1" />
          <span>{email}</span>
        </button>
        {extension && (
          <button 
            onClick={handleExtensionClick}
            className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1 hover:text-primary"
          >
            <Phone className="w-4 h-4 mr-1" />
            <span>Ext: {extension}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default EmployeeCard;
