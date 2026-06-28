import React, { useState } from 'react';
import { Plus } from 'lucide-react';

// The data extracted from your file
const faqData = [
  { q: "Why Student Partnership Program?", a: "Over the years, we have onboarded thousands of students into our fellowship programs and hired them as designers, engineers, managers, and more. And through all these years, we have seen the challenges that students, as well as colleges in Nepal, face to prepare graduates for real professional work. The Student Partnership Program invests in you to close the gap between academics and industry by offering real work-life experiences to students. We believe your ideas have the power to lead the way and help us build future leaders and join the profession confidently." },
  { q: "What are the key dates for application?", a: "The application for 2026 is now open! The deadline is on February 27, 2026." },
  { q: "Who can participate?", a: "One must be an undergraduate student from Nepal who wants to grow their career in technology or is enrolled in a similar degree." },
  { q: "What are the traits we value?", a: "Embracing openness, Active engagement, Solution oriented, Team work, Pursuit of excellence." },
  { q: "What is the cost of participation?", a: "There is no cost in joining this program." },
  { q: "Is there any compensation?", a: "As a part of the Leapfrog Student Partnership Program, you will get professional exposure as well as various tech and non-tech training opportunities to enhance your skill." },
  { q: "How much time do I have to commit?", a: "The program requires a commitment of two sessions per month, each approximately 2–3 hours long. This includes one on-site monthly meetup and one virtual session. Applicants must attend all sessions, be present on-site for the monthly meetups, and organize KSS in their colleges or communities." },
  { q: "What happens at the end of the program?", a: "The program concludes with a Graduation Day celebration, where participants receive a certificate of completion, an experience letter, and some cool SWAGs to acknowledge their journey and achievements." },
  { q: "How does the selection process work?", a: "Our selection process takes place in two phases: First Phase: Submit an application form, Application review. Second Phase: A brief remote interview, Twenty selected applicants will be a part of the program." },
  { q: "I have a question, what should I do?", a: "Drop an email at studentpartner@lftechnology.com." },
  { q: "What qualities do you look for in a successful applicant?", a: "We look for students who are passionate about technology, show leadership potential, and have a commitment to learning and collaboration." },
  { q: "What is the total duration of the Leapfrog Student Partnership Program (LSPP)?", a: "The program will run for six months: April to September." },
  { q: "Is the program open to students from outside the Kathmandu Valley?", a: "Yes, the program is open to students from all provinces. However, out-of-valley participants may need to travel for certain events/sessions." }
];

const FAQSection: React.FC = () => {
  // We use this to track which index is currently open. 
  // 'null' means nothing is open.
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Defaulting 0 to open the first item

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wider mb-4">
          SUPPORT
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about the Leapfrog Student Partnership Program. Can't find the answer you're looking for? Feel free to drop us an email.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'bg-white shadow-lg shadow-blue-900/5 border-blue-100 ring-1 ring-blue-100' : 'bg-gray-50/50 hover:bg-gray-50 hover:border-gray-300'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none group"
              >
                <span className={`font-semibold text-lg pr-8 transition-colors duration-200 ${isOpen ? 'text-blue-600' : 'text-gray-800 group-hover:text-blue-600'}`}>
                  {item.q}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'bg-blue-100 text-blue-600 rotate-45' : 'bg-white border border-gray-200 text-gray-400 group-hover:border-blue-200 group-hover:text-blue-500 group-hover:bg-blue-50'}`}>
                  <Plus className="w-5 h-5" />
                </div>
              </button>
              
              {/* Smooth Grid Transition for Accordion */}
              <div 
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed pt-2">
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