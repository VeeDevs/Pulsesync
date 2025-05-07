
import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Shield, Mic, Gauge, Phone, Home } from "lucide-react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const servicesWithDetails = [
    {
      icon: Lightbulb,
      title: "Smart Lighting Integration",
      description: "Automated lighting systems for comfort and energy efficiency.",
      details: "Transform your home with intelligent lighting that adapts to your schedule. Save up to 50% on energy costs, enhance security with motion-activated lights, and create perfect ambiance for any occasion. Our smart lighting solutions integrate seamlessly with voice commands and smartphone controls.",
    },
    {
      icon: Shield,
      title: "Advanced Security Systems",
      description: "Premium security solutions to protect what matters most.",
      details: "Protect your home 24/7 with cutting-edge security technology. Features include real-time video monitoring, instant alerts, smart locks, and integration with emergency services. Our systems offer bank-grade encryption and seamless mobile access.",
    },
    {
      icon: Mic,
      title: "Voice-Controlled Automation",
      description: "Seamless voice control for all your smart devices.",
      details: "Experience the convenience of controlling your entire home with just your voice. From adjusting thermostats to managing entertainment systems, voice commands make home control effortless. Compatible with all major voice assistants.",
    },
    {
      icon: Gauge,
      title: "Energy Management",
      description: "Smart solutions for optimal energy consumption.",
      details: "Monitor and optimize your home's energy usage in real-time. Our smart energy systems can reduce utility bills by up to 30%, automatically adjust consumption based on occupancy, and provide detailed analytics for better energy decisions.",
    },
    {
      icon: Phone,
      title: "Smart Device Integration",
      description: "Connect and control all your devices from one platform.",
      details: "Unify all your smart home devices under a single, intuitive control system. Access everything from anywhere, set automated routines, and receive intelligent suggestions for optimal home management.",
    },
    {
      icon: Home,
      title: "Complete Home Automation",
      description: "Transform your home into an intelligent living space.",
      details: "Experience the ultimate in home automation with our comprehensive solution. From climate control to entertainment systems, everything works together seamlessly. Enjoy personalized schedules, scenes, and automated responses to your daily routines.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Premium Services</h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Discover how our smart home solutions can enhance your everyday living experience with cutting-edge technology and seamless integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesWithDetails.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              details={service.details}
              index={index}
              flippedCard={flippedCard}
              setFlippedCard={setFlippedCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
