import React from 'react';

// The extracted mentor data
const mentors = [
  { name: "Adarsha Regmi", role: "Senior Software Engineer", image: "/mentors/adarsha.jpg" },
  { name: "Ayush Bajracharya", role: "Senior Software Engineer", image: "/mentors/ayush.jpg" },
  { name: "Bijen Shrestha", role: "Software Engineer", image: "/mentors/bijen.jpg" },
  { name: "Dimple Saraogi", role: "Software Engineer", image: "/mentors/dimple.jpg" },
  { name: "Jenish Twayana", role: "Software Engineer, AI", image: "/mentors/jenish.jpg" },
  { name: "Khem Raj Upreti", role: "Senior Software Engineer", image: "/mentors/khem.jpg" },
  { name: "Pranav Dhoj Joshi", role: "Senior QA Engineer", image: "/mentors/pranav.jpg" },
  { name: "Priyanka Tuladhar", role: "Software Engineer, DevOps", image: "/mentors/priyanka.jpg" },
  { name: "Purna Shrestha", role: "Associate Software Engineer", image: "/mentors/purna.jpg" },
  { name: "Sandriya Malla", role: "Project Manager", image: "/mentors/sandriya.jpg" },
  { name: "Saru Manandhar", role: "Software Engineer", image: "/mentors/saru.jpg" },
  { name: "Sayomi Prajapati", role: "Associate Manager, Marketing & Communications", image: "/mentors/sayomi.jpg" },
  { name: "Siza Adhikari", role: "Senior Software Engineer", image: "/mentors/siza.jpg" },
  { name: "Suichhya Tamrakar", role: "Officer, Marketing &", image: "/mentors/suichhya.jpg" }
];

const MentorsSection: React.FC = () => {
  return (
    <section id="mentors" className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto text-center">
      
      {/* Header section */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00a651] mb-4">
          Meet our mentors
        </h2>
        <p className="text-gray-800 font-medium text-sm md:text-base">
          The industry experts shaping the student partners to learn, lead and grow.
        </p>
      </div>

      {/* Grid Layout: 1 col on mobile, 2 on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {mentors.map((mentor, index) => (
          <div 
            key={index} 
            // The light green card background
            className="bg-[#ebf4ec] rounded[1.5rem] p-4 flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {/* Mentor Image */}
            <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-200">
              <img 
                src={mentor.image} 
                alt={`${mentor.name} - ${mentor.role}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if(parent) {
                    parent.className += " flex items-center justify-center border-2 border-dashed border-gray-300 text-gray-500 text-xs text-center p-2";
                    parent.innerHTML = `No Image<br/><span class="text-[10px] opacity-60">public${mentor.image}</span>`;
                  }
                }}
              />
            </div>

            {/* Mentor Details */}
            <h3 className="font-bold text-gray-900 text-[15px] leading-tight mb-1">
              {mentor.name}
            </h3>
            <p className="text-gray-600 text-[13px] leading-snug">
              {mentor.role}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default MentorsSection;