
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const CoverageSection = () => {
  const locationData = [
    { city: "San Francisco", state: "CA" },
    { city: "Los Angeles", state: "CA" },
    { city: "San Diego", state: "CA" },
    { city: "Seattle", state: "WA" },
    { city: "Portland", state: "OR" },
    { city: "Denver", state: "CO" },
    { city: "Austin", state: "TX" },
    { city: "Dallas", state: "TX" },
    { city: "Houston", state: "TX" },
    { city: "Chicago", state: "IL" },
    { city: "New York", state: "NY" },
    { city: "Boston", state: "MA" },
  ];

  return (
    <section id="coverage" className="py-20 px-4 bg-primary/5">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Service Coverage</h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            We provide our smart home solutions in major cities across the United States with plans for continued expansion.
          </p>
        </motion.div>

        <div className="glass-card p-8 rounded-xl">
          <div className="mb-8">
            <div className="aspect-[16/9] bg-secondary/20 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="US Coverage Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4 text-primary">Currently Serving</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {locationData.map((location, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-primary/80">{location.city}, {location.state}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
