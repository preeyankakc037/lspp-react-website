import React, { useState } from 'react';
import { partnersData } from '../data/partnersData'; // 👈 Reading back from data source

const PartnersSection: React.FC = () => {
  const [activeYear, setActiveYear] = useState<string>('2026');
  const years = ['2022', '2023', '2024', '2025', '2026'];

  // Grabs the data array from the external file
  const filteredPartners = partnersData.filter(p => p.year === activeYear);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      
      {/* Header Container */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#00875A] tracking-tight">
          Meet the Student Partners
        </h2>
        <p className="text-gray-900 mt-4 text-base font-bold">
          Get to know our future leaders!
        </p>
      </div>

      {/* Cohort Navigation Tabs */}
      <div className="flex justify-center items-center gap-6 mb-16 font-semibold text-gray-600">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`px-4 py-1.5 rounded-full transition-all duration-200 text-sm cursor-pointer ${
              activeYear === year
                ? 'border-2 border-gray-800 text-gray-900 bg-transparent'
                : 'hover:text-gray-900'
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Dynamic 4-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPartners.map((partner) => (
          <div 
            key={partner.id}
            className="bg-[#EAF3EE] rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-sm"
          >
            <div>
              {/* Picture Slot Display Frame */}
              <div className="w-full aspect-square rounded-xl mb-4 bg-white border border-gray-200/40 overflow-hidden flex items-center justify-center text-gray-300">
                {partner.imageUrl ? (
                  <img 
                    src={partner.imageUrl} 
                    alt={partner.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <span className="text-xs font-mono tracking-wider uppercase opacity-40">Photo Slot</span>
                )}
              </div>

              {/* Left-Aligned Identity Details */}
              <div className="text-left px-1">
                <h3 className="text-lg font-black text-gray-950 leading-tight">
                  {partner.name}
                </h3>
                <p className="text-gray-600 text-xs font-medium mt-1 leading-normal">
                  {partner.college}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default PartnersSection;