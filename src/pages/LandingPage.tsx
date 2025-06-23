import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import IoTMonitoringSection from '../components/IoTMonitoringSection';
import PredictiveEngineSection from '../components/PredictiveEngineSection';
import SystemControlSection from '../components/SystemControlSection';
import ArchitectureSection from '../components/ArchitectureSection';
import UseCasesSection from '../components/UseCasesSection';
import ResourcesSection from '../components/ResourcesSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <IoTMonitoringSection />
      <PredictiveEngineSection />
      <SystemControlSection />
      <ArchitectureSection />
      <UseCasesSection />
      <ResourcesSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;