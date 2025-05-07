
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
  index: number;
  flippedCard: number | null;
  setFlippedCard: (index: number | null) => void;
}

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  details, 
  index, 
  flippedCard, 
  setFlippedCard 
}: ServiceCardProps) => {
  return (
    <motion.div 
      className={`flip-card ${flippedCard === index ? 'flipped' : ''}`}
      onClick={() => setFlippedCard(flippedCard === index ? null : index)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="service-card h-full">
            <div className="p-6 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Icon size={28} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
              <p className="text-sm text-primary/70 text-center">{description}</p>
              <div className="mt-6 text-sm text-accent font-medium">Tap to learn more</div>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="service-card h-full">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>
              <p className="text-sm text-primary/70">{details}</p>
              <button 
                className="mt-6 bg-accent hover:bg-accent/90 text-primary px-4 py-2 rounded" 
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
