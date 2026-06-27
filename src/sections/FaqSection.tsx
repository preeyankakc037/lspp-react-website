import React, { useState } from 'react';

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
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="bg-[#EBF3FF] rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left p-6 flex justify-between items-center font-bold text-gray-800"
            >
              {item.q}
              {/* Simple Chevron Icon using text/CSS */}
              <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                ▲
              </span>
            </button>
            
            {/* The collapsible content */}
            <div className={`px-6 pb-6 text-gray-700 leading-relaxed ${openIndex === index ? 'block' : 'hidden'}`}>
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;