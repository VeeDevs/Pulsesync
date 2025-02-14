
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="service-card">
      <div className="p-6">
        <div className="mb-4 text-accent">
          <Icon size={32} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-foreground/80">{description}</p>
      </div>
    </div>
  );
};
