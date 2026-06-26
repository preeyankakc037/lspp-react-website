import React from 'react';
import ScrollLine from '../components/layout/ScrollLine';

const HeroSection: React.FC = () => {
  return (
    <>
      {/* 1. Outer Layer: Handles pinning the navbar to the top of the viewport */}
      <div className="sticky top-0 w-full bg-white z-50">
        
        {/* 2. Inner Layer: Acts as the safe boundary context for the absolute ScrollLine thread */}
        <nav className="relative w-full py-5 px-8 md:px-16 flex items-center">
          <div className="flex items-center">
            <img 
              src="/leapLogo.png" 
              alt="Leapfrog Logo" 
              className="h-7 object-contain" 
            />
          </div>

          {/* 🎯 Locked securely to the bottom edge of this relative navigation box */}
          <ScrollLine />
        </nav>
      </div>

      {/* Main Hero Container */}
      <section className="py-12 md:py-20 px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column Content */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="flex items-start gap-4">
            <img 
              src="/logo.png" 
              alt="Leapfrog Student Partnership Program Logo" 
              className="w-12 h-12 object-contain shrink-0 mt-0.5" 
            />
            <div className="-space-y-0.5">
              <h4 className="text-gray-900 font-bold text-base leading-tight">Leapfrog</h4>
              <p className="text-gray-600 font-medium text-sm">Student Partnership Program</p>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#004B45] tracking-tight leading-[1.1]">
            Learn, Lead and Grow
          </h1>

          <p className="text-gray-800 text-base md:text-lg font-medium leading-relaxed max-w-xl">
            Learn new and in-demand skills, grow your network, and build your future in a career that interests you the most.
          </p>
        </div>

        {/* Right Column Content Image Frame */}
        <div className="lg:col-span-6 w-full">
          <div className="w-full overflow-hidden rounded-[2.5rem] shadow-xs">
            <img 
              src="/leapfrog.JPG" 
              alt="Leapfrog Student Partners Cohort Group" 
              className="w-full h-auto object-cover object-center"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if(parent) parent.className += " aspect-[4/3] bg-gray-100 flex items-center justify-center border text-gray-400 font-mono text-xs";
                if(parent) parent.innerHTML = "Drop 'leapfrog.JPG' into your public folder";
              }}
            />
          </div>
        </div>

      </section>
    </>
  );
};

export default HeroSection;