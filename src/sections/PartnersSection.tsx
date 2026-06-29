import React, { useState } from 'react';
import { partnersData } from '../data/partnersData'; // 👈 Reading back from data source

const PartnersSection: React.FC = () => {
  const [activeYear, setActiveYear] = useState<string>('2026');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('');
  const years = ['2022', '2023', '2024', '2025', '2026'];
  const uniqueColleges = Array.from(new Set(partnersData.map(p => p.college))).sort();

  // Apply filters
  const filteredPartners = partnersData.filter(p => {
    const matchYear = p.year === activeYear;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCollege = selectedCollege ? p.college === selectedCollege : true;
    // const matchTrack = selectedTrack ? p.track === selectedTrack : true; // Add when track exists
    return matchYear && matchSearch && matchCollege;
  });

  return (
    <section id="student-partners" className="py-20 px-6 max-w-7xl mx-auto">
      
      {/* Header Container */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-[#00875A] tracking-tight">
          Meet the Student Partners
        </h2>
        <p className="text-gray-900 mt-4 text-base font-bold">
          Get to know our future leaders!
        </p>
      </div>

      {/* Cohort Navigation Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-8 font-semibold text-gray-600">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`px-5 py-2 rounded-full transition-all duration-200 text-sm cursor-pointer ${
              activeYear === year
                ? 'border-2 border-gray-800 text-gray-900 bg-transparent'
                : 'hover:text-gray-900 bg-gray-100'
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12 bg-gray-50 p-4 rounded-2xl border border-gray-100">
        
        {/* Search Input */}
        <div className="relative w-full md:w-1/3">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-400">🔍</span>
          </div>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00875A]/20 focus:border-[#00875A] transition-all text-sm"
          />
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
          <select
            value={selectedCollege}
            onChange={(e) => setSelectedCollege(e.target.value)}
            className="w-full sm:w-48 px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00875A]/20 focus:border-[#00875A] text-sm text-gray-700 cursor-pointer appearance-none"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236B7280\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundPosition: 'right 0.75rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.25em 1.25em', paddingRight: '2.5rem' }}
          >
            <option value="">🏫 All Colleges</option>
            {uniqueColleges.map((college) => (
              <option key={college} value={college}>{college}</option>
            ))}
          </select>

        </div>
      </div>

      {/* Dynamic 4-Column Grid */}
      {filteredPartners.length > 0 ? (
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
                  <h3 className="text-lg font-black text-gray-950 leading-tight truncate" title={partner.name}>
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 text-xs font-medium mt-1 leading-normal line-clamp-2" title={partner.college}>
                    {partner.college}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-gray-500 bg-gray-50 rounded-2xl border border-gray-100">
          <span className="text-3xl mb-3 block">🧐</span>
          <p className="font-medium">No partners found matching your filters.</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCollege(''); }}
            className="mt-4 text-[#00875A] font-medium hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

    </section>
  );
};

export default PartnersSection;