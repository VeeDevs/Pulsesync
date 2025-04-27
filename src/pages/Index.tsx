
import { Home, Globe, Menu, X, Moon, Sun, Smartphone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const isMobile = useIsMobile();

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
                component={Link}
                to="/smart-home"
                className="text-white hover:text-secondary"
              >
                Smart Home
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => window.open("https://www.pulsesynccooking.com/", "_blank")}
                className="text-white hover:text-secondary"
              >
                Cooking
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => handleNavClick("solutions")}
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
                component={Link}
                to="/smart-home"
                className="text-white hover:text-secondary w-full justify-start"
              >
                Smart Home
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => window.open("https://www.pulsesynccooking.com/", "_blank")}
                className="text-white hover:text-secondary w-full justify-start"
              >
                Cooking
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => handleNavClick("solutions")}
                className="text-white hover:text-secondary w-full justify-start"
              >
                Solutions
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
              Welcome to PulseSync Living
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-secondary">
              Transforming your lifestyle through smart technology
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-primary"
                onClick={() => scrollToSection("showcase")}
              >
                Explore Our Ecosystem
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white/20"
                onClick={() => handleNavClick("contact")}
              >
                Get in Touch
              </Button>
            </div>
            <div className="absolute bottom-8 left-0 right-0 animate-bounce">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scrollToSection("showcase")}
                className="text-white hover:text-secondary"
              >
                <ArrowDown className="h-8 w-8" />
              </Button>
            </div>
          </div>
        </section>

        <section id="showcase" className="py-20 px-4 bg-secondary/10 dark:bg-gray-900">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 heading-gradient">
              The PulseSync Ecosystem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex justify-center mb-4">
                      <Smartphone className="w-16 h-16 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-center">Smart Home</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center mb-4">
                      Transform your home into a modern, intelligent space with our smart home automation services.
                    </CardDescription>
                    <div className="flex justify-center">
                      <Button 
                        component={Link}
                        to="/smart-home"
                        className="mt-4"
                      >
                        Explore Smart Home
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex justify-center mb-4">
                      <svg 
                        className="w-16 h-16 text-primary" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z" stroke="currentColor" strokeWidth="2" />
                        <path d="M15 9.5C15 9.5 13.5 8 11.5 8C9.5 8 8 9.5 8 11.5C8 13.5 9.5 15 11.5 15C13.5 15 15 13.5 15 11.5" stroke="currentColor" strokeWidth="2" />
                        <path d="M9 19L9 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M15 19L15 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 5L12 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M19 12L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M5 12L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <CardTitle className="text-2xl text-center">PulseSync Cooking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center mb-4">
                      Elevate your culinary experience with smart cooking solutions and innovative kitchen technology.
                    </CardDescription>
                    <div className="flex justify-center">
                      <Button 
                        onClick={() => window.open("https://www.pulsesynccooking.com/", "_blank")}
                        className="mt-4"
                      >
                        Discover Cooking
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex justify-center mb-4">
                      <Globe className="w-16 h-16 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-center">Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center mb-4">
                      Enterprise technology solutions including cloud services, software development, and data engineering.
                    </CardDescription>
                    <div className="flex justify-center">
                      <Button 
                        onClick={() => scrollToSection("solutions")}
                        className="mt-4"
                      >
                        View Solutions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4 bg-primary dark:bg-gray-900 text-white">
          <div className="container max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About PulseSync Living</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
               PulseSync Living transforms your lifestyle through intelligent technology solutions.
               We bring innovation to every aspect of modern living - from smart home automation
               to intelligent cooking solutions and enterprise technology services, all designed
               to create a seamless, connected experience that enhances your daily life.
            </p>
            <div className="text-2xl font-semibold">
              INNOVATIVE. INTELLIGENT. INTEGRATED.
            </div>
          </div>
        </section>

        <section id="solutions" className="py-20 px-4 bg-secondary/10 dark:bg-gray-800">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 heading-gradient">
              PulseSync Solutions
            </h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
              Cloud Data Technology Solutions & Intelligent Software Engineering
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <Globe className="w-8 h-8 text-primary mb-2" />
                    <CardTitle>Cloud Data Technology Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>AWS Cloud migration and optimization</li>
                      <li>AWS Data warehousing and storage solutions</li>
                      <li>Databases Migration Solutions</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <svg 
                      className="w-8 h-8 text-primary mb-2" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 18L18 20L22 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 7L6 11L8 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 22H15C17.2091 22 19 20.2091 19 18V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 18C5 20.2091 6.79086 22 9 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 12V9C22 6.79086 20.2091 5 18 5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12V15C2 17.2091 3.79086 19 6 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 2H9C6.79086 2 5 3.79086 5 6V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19 6C19 3.79086 17.2091 2 15 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <CardTitle>Software Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>Web and mobile application development</li>
                      <li>API integration</li>
                      <li>Automation tools</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <svg 
                      className="w-8 h-8 text-primary mb-2" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.9292 4.93005L6.3442 6.34505" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.6569 6.34315L19.0711 4.92894" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <CardTitle>ML/AI Technology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>Predictive Modeling & Analytics</li>
                      <li>Machine learning implementation</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <svg 
                      className="w-8 h-8 text-primary mb-2" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 18C5.24 18 3 15.76 3 13C3 10.24 5.24 8 8 8C8.55 8 9.09 8.09 9.59 8.27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 18C12.34 18 10.85 17.15 10 15.85C9.41 14.92 9.15 13.83 9.15 12.81C9.15 9.59 11.73 7 14.94 7C18.15 7 20.73 9.59 20.73 12.81C20.73 15.5 18.94 17.7 16.5 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 8C8 6.4087 8.63214 4.88258 9.75736 3.75736C10.8826 2.63214 12.4087 2 14 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 22L10 20L12 22L14 20L16 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <CardTitle>Data & Security Engineering</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>ETL pipeline development</li>
                      <li>Data security implementation</li>
                      <li>Network Security implementation</li>
                      <li>Database design and management</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            
            <div className="text-center">
              <Link to="/solutions">
                <Button size="lg">
                  View All Solutions
                </Button>
              </Link>
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

        <footer className="bg-primary dark:bg-gray-900 text-white py-8">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center">
              <div className="flex justify-center items-center gap-2 mb-4">
                <img 
                  src="/lovable-uploads/2c1fdcef-9b20-474f-81df-7937708f1112.png" 
                  alt="PulseSync Living Logo" 
                  className="h-8 w-auto"
                />
                <h2 className="text-xl font-bold tracking-wider flex items-baseline">
                  PULSESYNC <span className="text-xs ml-1">living</span>
                </h2>
              </div>
              <div className="flex justify-center gap-6 mb-4">
                <Button variant="ghost" className="text-white hover:text-secondary">
                  <Link to="/">Home</Link>
                </Button>
                <Button variant="ghost" className="text-white hover:text-secondary">
                  <Link to="/smart-home">Smart Home</Link>
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-secondary"
                  onClick={() => window.open("https://www.pulsesynccooking.com/", "_blank")}
                >
                  Cooking
                </Button>
                <Button variant="ghost" className="text-white hover:text-secondary">
                  <Link to="/solutions">Solutions</Link>
                </Button>
              </div>
              <p className="text-sm">
                © {new Date().getFullYear()} PulseSync Living. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
