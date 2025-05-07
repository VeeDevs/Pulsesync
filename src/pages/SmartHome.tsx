
import { useState } from "react";
import { motion } from "framer-motion";

// Import refactored components
import SmartHomeNav from "@/components/smart-home/SmartHomeNav";
import SmartHomeHero from "@/components/smart-home/SmartHomeHero";
import ServicesSection from "@/components/smart-home/ServicesSection";
import InteractiveShowcase from "@/components/smart-home/InteractiveShowcase";
import AboutSection from "@/components/smart-home/AboutSection";
import CoverageSection from "@/components/smart-home/CoverageSection";
import ContactSection from "@/components/smart-home/ContactSection";
import FooterSection from "@/components/smart-home/FooterSection";

// Add styling for the flip cards
import "../styles/smartHome.css";

const SmartHome = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SmartHomeNav scrollToSection={scrollToSection} />
      <SmartHomeHero scrollToSection={scrollToSection} />
      <ServicesSection />
      <InteractiveShowcase />
      <AboutSection />
      <CoverageSection />
      <div className="logo-background">
        <ContactSection />
      </div>
      <FooterSection scrollToSection={scrollToSection} />
    </div>
  );
};

export default SmartHome;
