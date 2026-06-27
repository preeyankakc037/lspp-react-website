import React from 'react';
import HighlightsSection from './sections/HighlightsSection';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import StatsSection from './sections/StatsSection';
import PartnersSection from './sections/PartnersSection';
import MentorsSection from './sections/MentorsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ResourcesSection from './sections/ResourcesSection';
import FAQSection from './sections/FaqSection';
import CTASection from './sections/CTASection';
import Footer from './sections/Footer';
import PerkCard from './components/common/PerkCard';
import PerksSection from './sections/PerksSection';
import ContributingSection from './sections/ContributingSection';


function App() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 antialiased">
      {/* ScrollLine is clean and safely integrated inside HeroSection navbar now! */}
      <HeroSection />
      <AboutSection />
      <PerksSection/>
      <ContributingSection/>
      <StatsSection />
      <HighlightsSection />
      <PartnersSection />
      <MentorsSection/>
      <TestimonialsSection/>
      <ResourcesSection/>
      <FAQSection/>
      <CTASection/>
      <Footer/>
    </div>
  );
}

export default App;