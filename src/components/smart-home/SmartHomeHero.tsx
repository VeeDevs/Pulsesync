
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

interface SmartHomeHeroProps {
  scrollToSection: (sectionId: string) => void;
}

const SmartHomeHero = ({ scrollToSection }: SmartHomeHeroProps) => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
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
  );
};

export default SmartHomeHero;
