import React from 'react';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import StatsSection from './sections/StatsSection';
import PartnersSection from './sections/PartnersSection';

function App() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 antialiased">
      {/* ScrollLine is clean and safely integrated inside HeroSection navbar now! */}
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <PartnersSection />
    </div>
  );
}

export default App;