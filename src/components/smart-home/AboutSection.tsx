
import { motion } from "framer-motion";
import { Lightbulb, Shield, Check, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const companyValues = [
    {
      title: "Innovation",
      description: "We're constantly exploring new technologies to enhance your smart home experience.",
      icon: Lightbulb,
    },
    {
      title: "Reliability",
      description: "Our systems are built to perform flawlessly with 99.9% uptime guarantees.",
      icon: Shield,
    },
    {
      title: "Simplicity",
      description: "Complex technology made simple through intuitive design and seamless integration.",
      icon: Check,
    },
    {
      title: "Responsiveness",
      description: "24/7 support with rapid response times for all customer needs.",
      icon: Clock,
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">About PulseSync Home</h2>
            <p className="text-lg text-primary/70 mb-6">
              Founded with a vision to make smart home technology accessible and beneficial for everyone, 
              PulseSync Home has been at the forefront of home automation since 2015.
            </p>
            <p className="text-lg text-primary/70 mb-8">
              Our team of expert engineers and designers work together to create seamless, 
              intuitive solutions that enhance your lifestyle while maintaining the highest 
              standards of security and reliability.
            </p>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="glass-card border-none">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-medium mb-2 text-primary">{value.title}</h3>
                    <p className="text-sm text-primary/70">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
