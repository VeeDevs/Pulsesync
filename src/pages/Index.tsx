import { Home, Lightbulb, Shield, Mic, Phone, Gauge, Menu, X, Moon, Sun } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Reviews } from "@/components/Reviews";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { smartHomeData } from "@/data/smartHomeData";
import Link from "next/link";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const isMobile = useIsMobile();

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

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/27813092938`, '_blank');
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <header className="fixed top-0 left-0 right-0 bg-primary/95 dark:bg-gray-900/95 backdrop-blur-sm text-white py-4 z-50 shadow-lg">
        <div className="container max-w-6xl mx-auto flex items-center justify-between px-4">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/2c1fdcef-9b20-474f-81df-7937708f1112.png" 
              alt="PulseSync Living Logo" 
              className="h-8 w-auto mr-2"
            />
            <h1 className="text-2xl md:text-3xl font-bold tracking-wider flex items-baseline">
              PULSESYNC <span className="text-sm ml-1">living</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="text-white"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            )}

            <nav className="hidden md:flex gap-4">
              <Button 
                variant="ghost" 
                onClick={() => handleNavClick("home")}
                className="text-white hover:text-secondary"
              >
                Home
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => handleNavClick("services")}
                className="text-white hover:text-secondary"
              >
                Smart Home
              </Button>
              <Button 
                variant="ghost" 
                as="a"
                href="https://www.pulsesynccooking.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary"
              >
                Cooking
              </Button>
              <Button 
                variant="ghost" 
                as={Link}
                to="/solutions"
                className="text-white hover:text-secondary"
              >
                Solutions
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => handleNavClick("contact")}
                className="text-white hover:text-secondary"
              >
                Contact
              </Button>
            </nav>

          </div>

          {isMobile && isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-sm py-4 px-4 flex flex-col gap-2">
              <Button 
                variant="ghost" 
                onClick={() => handleNavClick("home")}
                className="text-white hover:text-secondary w-full justify-start"
              >
                Home
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => handleNavClick("services")}
                className="text-white hover:text-secondary w-full justify-start"
              >
                Smart Home
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => handleNavClick("about")}
                className="text-white hover:text-secondary w-full justify-start"
              >
                About
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => handleNavClick("reviews")}
                className="text-white hover:text-secondary w-full justify-start"
              >
                Reviews
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => handleNavClick("contact")}
                className="text-white hover:text-secondary w-full justify-start"
              >
                Contact
              </Button>
            </div>
          )}
        </div>
      </header>
      
      <div className="pt-16">
        <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary/50 to-primary/90 dark:from-gray-900/50 dark:to-gray-800/90 text-white">
          <div className="absolute inset-0 overflow-hidden -z-10">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover opacity-80"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-smart-home-owner-touching-a-tablet-51645-large.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="container max-w-6xl mx-auto text-center animate-fade-up relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Need a Smarter Home?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-secondary">
              We offer smart home installation and automation services
              Transform your home into a modern, intelligent space with Pulsesync
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-primary"
              onClick={() => scrollToSection("services")}
            >
              Discover Our Services
            </Button>
          </div>
        </section>

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

        <section id="about" className="py-20 px-4 bg-primary dark:bg-gray-900 text-white">
          <div className="container max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About Pulsesync</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
               Pulsesync transforms your home into a modern, intelligent space.
               From smart lighting and security systems to voice-controlled appliances,
               we integrate the latest technology to bring you unmatched convenience,
               security, and energy efficiency.
               Control your pool pump, irrigation system, geyser, lights, gates, doors,
               and more-anytime, anywhere, directly from your smart device.
            </p>
            <div className="text-2xl font-semibold">
              SAFE. SMART. RELIABLE.
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 dark:bg-gray-800">
          <div className="container max-w-6xl mx-auto">
            <div className="glass-card max-w-xl mx-auto p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-center mb-8 heading-gradient">
                Contact Us
              </h2>
              <ContactForm />
              <div className="mt-8 text-center space-y-4">
                <div>
                  <p className="font-semibold">Contact Numbers:</p>
                  <p>+27 (82) 336-5870</p>
                  <p>+27 (73) 127-1721</p>
                </div>
                <Button 
                  onClick={handleWhatsAppRedirect}
                  className="bg-green-600 hover:bg-green-700 text-white w-full"
                >
                  Chat with us on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 px-4 bg-secondary/10 dark:bg-gray-900">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 heading-gradient">
              Customer Reviews
            </h2>
            <Reviews />
          </div>
        </section>

        <footer className="bg-primary dark:bg-gray-900 text-white py-8">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center">
              <p className="text-sm">
                Created by VeeDevs coding | © {new Date().getFullYear()} Pulsesync. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
