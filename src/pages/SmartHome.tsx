
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Home,
  Lightbulb,
  Shield,
  Mic,
  Phone,
  Gauge,
  MapPin,
  Menu,
  X,
  ArrowDown,
  Clock,
  Check,
  Mail, // Added Mail icon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { smartHomeData } from "@/data/smartHomeData";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const SmartHome = () => {
  const { toast } = useToast();
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    form.reset();
  };

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

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
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-secondary/20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-primary" />
              <span className="font-semibold text-lg text-primary">PulseSync Home</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("hero")} className="text-sm font-medium text-primary hover:text-accent transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-primary hover:text-accent transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-primary hover:text-accent transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("coverage")} className="text-sm font-medium text-primary hover:text-accent transition-colors">
                Coverage
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-primary hover:text-accent transition-colors">
                Contact
              </button>
            </div>
            
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-16 md:hidden animate-fade-in">
          <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            <button onClick={() => scrollToSection("hero")} className="text-lg font-medium text-primary hover:text-accent transition-colors py-3 border-b border-secondary/20">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="text-lg font-medium text-primary hover:text-accent transition-colors py-3 border-b border-secondary/20">
              Services
            </button>
            <button onClick={() => scrollToSection("about")} className="text-lg font-medium text-primary hover:text-accent transition-colors py-3 border-b border-secondary/20">
              About
            </button>
            <button onClick={() => scrollToSection("coverage")} className="text-lg font-medium text-primary hover:text-accent transition-colors py-3 border-b border-secondary/20">
              Coverage
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-lg font-medium text-primary hover:text-accent transition-colors py-3 border-b border-secondary/20">
              Contact
            </button>
            <Link to="/" className="w-full">
              <Button variant="outline" className="w-full">
                Back to Main
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent"></div>
        <motion.div 
          className="container max-w-6xl mx-auto px-4 pt-20 z-10"
          style={{ opacity, scale }}
        >
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Transform Your Home <br/>
                <span className="text-accent">With Intelligence</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-primary/80 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Experience seamless living with our premium smart home automation solutions tailored to your lifestyle and preferences.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3"
                  onClick={() => scrollToSection("services")}
                >
                  Explore Services
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2">
              <motion.div 
                className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Smart Home"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <p className="text-primary/60 mb-2 text-sm">Discover More</p>
            <button 
              onClick={() => scrollToSection("services")}
              className="animate-bounce"
            >
              <ArrowDown className="h-6 w-6 text-accent" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
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
            {servicesWithDetails.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={index}
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
                          <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
                          <p className="text-sm text-primary/70 text-center">{service.description}</p>
                          <div className="mt-6 text-sm text-accent font-medium">Tap to learn more</div>
                        </div>
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <div className="service-card h-full">
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-4 text-primary">{service.title}</h3>
                          <p className="text-sm text-primary/70">{service.details}</p>
                          <Button 
                            className="mt-6 bg-accent hover:bg-accent/90 text-primary" 
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Showcase */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Experience Smart Living</h2>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto">
              See our solutions in action through these interactive demonstrations of real-world applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartHomeData.map((item, index) => (
              <motion.div
                key={index}
                className="glass-card overflow-hidden rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-48">
                  {activeVideo === index ? (
                    <iframe
                      src={`${item.video}?autoplay=1&loop=1&background=1`}
                      className="w-full h-full absolute inset-0 border-0"
                      allow="autoplay; fullscreen"
                      loading="lazy"
                      title={`Smart Home Demo ${index + 1}`}
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
                  <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                  <p className="text-sm text-primary/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Coverage Area */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Get In Touch</h2>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto">
              Ready to transform your home? Contact us today to discuss your smart home needs and receive a personalized consultation.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="glass-card p-8 rounded-xl h-full">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} className="bg-white dark:bg-gray-800" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} className="bg-white dark:bg-gray-800" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary">Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} className="bg-white dark:bg-gray-800" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              className="resize-none bg-white dark:bg-gray-800" 
                              {...field}
                              rows={4}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="glass-card p-8 rounded-xl h-full">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-accent mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">Headquarters</h4>
                      <p className="text-primary/70 mt-1">
                        101 Innovation Drive<br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-accent mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">Phone</h4>
                      <p className="text-primary/70 mt-1">
                        +1 (800) 555-0123
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-accent mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">Email</h4>
                      <p className="text-primary/70 mt-1">
                        info@pulsesync.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-accent mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary">Business Hours</h4>
                      <p className="text-primary/70 mt-1">
                        Monday - Friday: 9AM - 6PM<br />
                        Saturday: 10AM - 4PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Home className="h-6 w-6" />
                <span className="font-semibold text-lg">PulseSync Home</span>
              </div>
              <p className="text-white/70 text-sm">
                Transforming living spaces with intelligent automation and seamless connectivity.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection("services")} className="text-white/70 hover:text-white text-sm">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("about")} className="text-white/70 hover:text-white text-sm">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("coverage")} className="text-white/70 hover:text-white text-sm">
                    Coverage Area
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")} className="text-white/70 hover:text-white text-sm">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195A4.92 4.92 0 0016.078 2a4.935 4.935 0 00-4.926 4.926c0 .386.044.76.127 1.122-4.092-.207-7.72-2.166-10.149-5.142a4.893 4.893 0 00-.667 2.476c0 1.71.87 3.213 2.188 4.095a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.95 4.829 4.996 4.996 0 01-2.224.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.93 13.93 0 007.548 2.209c9.054 0 14-7.496 14-13.986 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59l-.047-.02z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} PulseSync Home. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmartHome;

