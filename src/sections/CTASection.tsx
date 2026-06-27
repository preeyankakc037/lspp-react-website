import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#E8F8EE] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00A859] mb-4">
          Looking for a career at Leapfrog?
        </h2>
        <p className="text-gray-700 text-lg mb-8">
          See all the available positions we have currently opened.
        </p>
        
        {/* Animated Arrow Button */}
        <a 
          href="https://www.lftechnology.com/careers" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00A859] text-white transition-transform duration-300 hover:scale-110"
        >
          <span className="text-2xl">→</span>
        </a>
      </div>
    </section>
  );
};

export default CTASection;