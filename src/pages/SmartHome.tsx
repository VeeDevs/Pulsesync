import { ServiceCard } from "@/components/ServiceCard";
import { Home, Lightbulb, Shield, Mic, Phone, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { smartHomeData } from "@/data/smartHomeData";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SmartHome = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const servicesWithDetails = [
    {
      icon: Lightbulb,
      title: "Smart Lighting Installation",
      description: "Automated lighting systems for comfort and energy efficiency.",
      details: "Transform your home with intelligent lighting that adapts to your schedule. Save up to 50% on energy costs, enhance security with motion-activated lights, and create perfect ambiance for any occasion. Our smart lighting solutions integrate seamlessly with voice commands and smartphone controls.",
    },
    {
      icon: Shield,
      title: "Home Security Systems",
      description: "Advanced security solutions to protect what matters most.",
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <header className="bg-primary/95 text-white py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <nav className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="text-white hover:text-secondary">
                ← Back to Home
              </Button>
            </Link>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Smart Home Integration</h1>
          <p className="text-xl">Transform your home into a modern, intelligent space with our smart home solutions</p>
        </div>
      </header>

      <section id="showcase" className="py-20 px-4 bg-secondary/10 dark:bg-gray-900">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 heading-gradient">
            Smart Home Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartHomeData.map((item, index) => (
              <motion.div
                key={index}
                className="glass-card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48">
                  {activeVideo === index ? (
                    <iframe
                      src={`${item.video}?autoplay=1&loop=1&background=1`}
                      className="w-full h-full absolute inset-0 border-0"
                      allow="autoplay; fullscreen"
                      loading="lazy"
                    />
                  ) : (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => setActiveVideo(index)}
                      loading="lazy"
                    />
                  )}
                  {activeVideo !== index && (
                    <div 
                      className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer hover:bg-black/30 transition-colors"
                      onClick={() => setActiveVideo(index)}
                    >
                      <svg 
                        className="w-12 h-12 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-secondary/20 dark:bg-gray-800/50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 heading-gradient">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesWithDetails.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className={`flip-card ${flippedCard === index ? 'flipped' : ''}`}
                  onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="service-card h-full">
                        <div className="p-6 flex flex-col items-center">
                          <div className="mb-4 text-accent">
                            <Icon size={32} />
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                          <p className="text-sm text-foreground/80">{service.description}</p>
                          <div className="mt-4 text-sm text-accent">Click to learn more</div>
                        </div>
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <div className="service-card h-full">
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                          <p className="text-sm text-foreground/80">{service.details}</p>
                          <Button 
                            className="mt-6" 
                            variant="secondary"
                            onClick={(e) => {
                              e.stopPropagation();
                              scrollToSection("contact");
                            }}
                          >
                            Get Started
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 dark:bg-gray-800">
        <div className="container max-w-6xl mx-auto">
          <div className="glass-card max-w-xl mx-auto p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-center mb-8 heading-gradient">
              Get Started with Smart Home
            </h2>
            <p className="text-center mb-6">
              Ready to transform your home into an intelligent living space? Contact us to learn more about our smart home solutions.
            </p>
            <Button 
              className="w-full"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartHome;
