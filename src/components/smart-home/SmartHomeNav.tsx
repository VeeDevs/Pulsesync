
import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SmartHomeNavProps {
  scrollToSection: (sectionId: string) => void;
}

const SmartHomeNav = ({ scrollToSection }: SmartHomeNavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
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
    </>
  );
};

export default SmartHomeNav;
