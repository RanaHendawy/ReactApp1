
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-border h-full">
      <div className="inline-flex items-center justify-center p-2 bg-primary/10 dark:bg-primary/20 rounded-md text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
