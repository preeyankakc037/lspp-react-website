import React from 'react';
import { statsData } from '../data/statsData';

const StatsSection: React.FC = () => {
  return (
    <section className="bg-[#FAF6EE] py-20 px-6 my-12">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Real Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#004B6E] mb-16 tracking-tight">
          Building it, bit by bit
        </h2>

        {/* 4-Column Grid matching live spacing */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {statsData.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center gap-2">
              
              {/* Icon graphic spot */}
              <span className="text-4xl mb-2 filter drop-shadow-sm transform hover:scale-110 transition-transform duration-200">
                {stat.icon}
              </span>
              
              {/* Deep Teal/Blue Brand Numbers */}
              <span className="text-5xl md:text-6xl font-black text-[#004B6E] tracking-tight">
                {stat.value}
              </span>
              
              {/* Subdued Dark Label text */}
              <p className="text-[#004B6E]/80 text-sm md:text-base font-medium max-w[180px] mt-1 leading-snug">
                {stat.label}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;