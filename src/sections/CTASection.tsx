import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-10 md:py-14 px-6 bg-[#E8F8EE] flex justify-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="/career.png" 
            alt="Career at Leapfrog" 
            className="w-full max-w-[260px] object-contain rounded-3xl"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#00A859] mb-3 leading-tight">
            Looking for a career at Leapfrog?
          </h2>
          <p className="text-gray-700 text-base mb-6">
            See all the available positions we have currently opened.
          </p>
          
          <a 
            href="https://www.lftechnology.com/careers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#00A859] text-white font-semibold text-[15px] transition-all duration-300 hover:bg-[#008f4c] hover:shadow-lg hover:-translate-y-0.5"
          >
            Explore Openings
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;