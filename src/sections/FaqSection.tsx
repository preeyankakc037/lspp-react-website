import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  { q: "Why Student Partnership Program?", a: "Over the years, we have onboarded thousands of students into our fellowship programs and hired them as designers, engineers, managers, and more. And through all these years, we have seen the challenges that students, as well as colleges in Nepal, face to prepare graduates for real professional work. The Student Partnership Program invests in you to close the gap between academics and industry by offering real work-life experiences to students. We believe your ideas have the power to lead the way and help us build future leaders and join the profession confidently." },
  { q: "What are the key dates for application?", a: "The application for 2026 is now open! The deadline is on February 27, 2026." },
  { q: "Who can participate?", a: "One must be an undergraduate student from Nepal who wants to grow their career in technology or is enrolled in a similar degree." },
  { q: "What are the traits we value?", a: "Embracing openness, Active engagement, Solution oriented, Team work, Pursuit of excellence." },
  { q: "What is the cost of participation?", a: "There is no cost in joining this program." }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#F5A623] tracking-tight">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="flex flex-col bg-[#eef3fa] rounded-xl overflow-hidden shadow-sm">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="border-b-2 border-white last:border-0"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left py-5 px-6 md:px-8 flex justify-between items-center focus:outline-none transition-colors hover:bg-black/5"
              >
                <span className="font-bold text-gray-900 text-[15px] md:text-[17px] pr-8">
                  {item.q}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 flex-shrink-0 text-[#085675] transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div 
                className={`grid transition-[grid-template-rows,opacity,padding] duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100 pb-5 px-6 md:px-8' : 'grid-rows-[0fr] opacity-0 pb-0 px-6 md:px-8'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="text-gray-700 leading-relaxed text-sm md:text-[15px]">
                    {item.a}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;