import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="px-6 my-4 max-w-7xl mx-auto">
      <div className="bg-[#FCF6E8] rounded-[3rem] py-16 px-8 md:px-20 text-center max-w-6xl mx-auto">
        
        {/* Centered Target Block Heading */}
        <h2 className="text-3xl md:text-4xl font-black text-[#034A61] tracking-tight mb-8">
          What is Leapfrog Student Partnership Program?
        </h2>

        {/* Informational Core Copy */}
        <p className="text-gray-800 text-sm md:text-base font-medium leading-relaxed max-w-4xl mx-auto text-center">
          Leapfrog Student Partnership Program is a future-oriented program aiming to help IT and engineering 
          students build their career paths and create an impact in the tech community. As a Leapfrog Student 
          Partner, you will serve as an opinion leader and an influencer to engage and connect with.
        </p>

      </div>
    </section>
  );
};

export default AboutSection;