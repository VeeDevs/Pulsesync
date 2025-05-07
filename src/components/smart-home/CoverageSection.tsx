
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const CoverageSection = () => {
  const southAfricanProvinces = [
    { name: "Gauteng", cities: ["Johannesburg", "Pretoria", "Ekurhuleni"] },
    { name: "Western Cape", cities: ["Cape Town", "Stellenbosch", "George"] },
    { name: "KwaZulu-Natal", cities: ["Durban", "Pietermaritzburg", "Richards Bay"] },
    { name: "Eastern Cape", cities: ["Port Elizabeth", "East London", "Mthatha"] },
    { name: "Free State", cities: ["Bloemfontein", "Welkom", "Bethlehem"] },
    { name: "Mpumalanga", cities: ["Nelspruit", "Witbank", "Secunda"] },
    { name: "Limpopo", cities: ["Polokwane", "Tzaneen", "Bela-Bela"] },
    { name: "North West", cities: ["Rustenburg", "Potchefstroom", "Mahikeng"] },
    { name: "Northern Cape", cities: ["Kimberley", "Upington", "Springbok"] },
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
            We provide our smart home solutions throughout South Africa, covering all provinces and major cities.
          </p>
        </motion.div>

        <div className="glass-card p-8 rounded-xl">
          <div className="mb-8">
            <div className="aspect-[16/9] bg-secondary/20 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="South Africa Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4 text-primary">Serving All of South Africa</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {southAfricanProvinces.map((province, index) => (
              <motion.div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="font-medium text-primary mb-2 flex items-center">
                  <MapPin className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                  {province.name}
                </h4>
                <div className="ml-6">
                  {province.cities.map((city, cityIndex) => (
                    <div key={cityIndex} className="text-sm text-primary/80 mb-1">
                      {city}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center text-sm text-primary/70">
            <p>Don't see your location? Contact us - we likely cover your area too!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
