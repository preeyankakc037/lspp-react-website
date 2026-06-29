import React, { useState } from 'react';
import { partnersData } from '../data/partnersData'; // 👈 Reading back from data source
import { Search, GraduationCap } from 'lucide-react';

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-3.5 h-3.5"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const PartnersSection: React.FC = () => {
  const [activeYear, setActiveYear] = useState<string>('2026');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('');
  const years = ['2022', '2023', '2024', '2025', '2026'];
  const uniqueColleges = Array.from(new Set(partnersData.map(p => p.college))).sort();

  const filteredPartners = partnersData.filter(p => {
    const matchYear = p.year === activeYear;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCollege = selectedCollege ? p.college === selectedCollege : true;
    return matchYear && matchSearch && matchCollege;
  });

  return (
    <section id="student-partners" className="py-20 px-6 max-w-5xl mx-auto">

      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-[#00875A] tracking-tight">
          Meet the Student Partners
        </h2>
        <p className="text-gray-900 mt-4 text-base font-bold">
          Get to know our future leaders!
        </p>
      </div>

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

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12 bg-gray-50 p-4 rounded-2xl border border-gray-100">

        <div className="relative w-full md:w-1/3">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00875A]/20 focus:border-[#00875A] transition-all text-sm"
          />
        </div>

        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
          <div className="relative w-full md:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <GraduationCap className="w-4 h-4 text-gray-400" />
            </div>
            <select
              value={selectedCollege}
              onChange={(e) => setSelectedCollege(e.target.value)}
              className="w-full sm:w-72 pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00875A]/20 focus:border-[#00875A] text-sm text-gray-700 cursor-pointer appearance-none truncate"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236B7280\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundPosition: 'right 0.75rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.25em 1.25em', paddingRight: '2.5rem' }}
            >
              <option value="">All Colleges</option>
              {uniqueColleges.map((college) => (
                <option key={college} value={college}>{college}</option>
              ))}
            </select>
          </div>

        </div>
      </div>

      {filteredPartners.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPartners.map((partner) => (
            <div 
              key={partner.id}
              className="bg-[#EAF3EE] rounded-xl p-3 flex flex-col justify-between transition-all duration-300 hover:shadow-sm group"
            >
              <div>

                <div className="w-full aspect-square rounded-lg mb-3 bg-white border border-gray-200/40 overflow-hidden flex items-center justify-center text-gray-300">
                  {partner.imageUrl ? (
                    <img 
                      src={partner.imageUrl} 
                      alt={partner.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <span className="text-[10px] font-mono tracking-wider uppercase opacity-40">Photo Slot</span>
                  )}
                </div>

                <div className="text-left px-1">
                  <div className="flex items-start justify-between gap-1 mb-0.5">
                    <h3 className="text-[14px] font-bold text-gray-950 leading-tight truncate" title={partner.name}>
                      {partner.name}
                    </h3>
                    {partner.linkedin && (
                      <a
                        href={partner.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${partner.name} on LinkedIn`}
                        className="shrink-0 text-gray-900 opacity-70 hover:opacity-100 transition-opacity duration-200"
                      >
                        <LinkedInIcon />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-500 text-[11px] font-medium leading-snug line-clamp-2" title={partner.college}>
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