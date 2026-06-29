import React from 'react';

// LinkedIn SVG icon
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// Mentor data — image paths match /public/mentors images/*.png
// Title taken directly from the screenshot
const mentors = [
  {
    name: "Adarsha Regmi",
    title: "Senior Software Engineer",
    image: "/mentors images/adarsh.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Ayush Bajracharya",
    title: "Senior Software Engineer",
    image: "/mentors images/ayush.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Bijen Shrestha",
    title: "Software Engineer",
    image: "/mentors images/bijen.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Dimple Saraogi",
    title: "Software Engineer",
    image: "/mentors images/dimple.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Jenish Twayana",
    title: "Software Engineer, AI",
    image: "/mentors images/jenish.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Khem Raj Upreti",
    title: "Senior Software Engineer",
    image: "/mentors images/khem.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Pranav Dhoj Joshi",
    title: "Senior QA Engineer",
    image: "/mentors images/pranav.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Priyanka Tuladhar",
    title: "Software Engineer, DevOps",
    image: "/mentors images/priyanka.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Purna Shrestha",
    title: "Associate Software Engineer",
    image: "/mentors images/purna.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Sandriya Malla",
    title: "Project Manager",
    image: "/mentors images/sandirya.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Saru Manandhar",
    title: "Software Engineer",
    image: "/mentors images/saru.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Sayomi Prajapati",
    title: "Associate Manager, Marketing & Communications",
    image: "/mentors images/sayomi.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Siza Adhikari",
    title: "Senior Software Engineer",
    image: "/mentors images/siza.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Suichhya Tamrakar",
    title: "Officer, Marketing & Communications",
    image: "/mentors images/suichhya.png",
    linkedin: "https://www.linkedin.com",
  },
];

const MentorsSection: React.FC = () => {
  return (
    <section id="mentors" className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto text-center">

      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00a651] mb-4">
          Meet our mentors
        </h2>
        <p className="text-gray-800 font-medium text-sm md:text-base">
          The industry experts shaping the student partners to learn, lead and grow.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="bg-[#ebf4ec] rounded-2xl p-4 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
          >
            {/* Photo */}
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 bg-gray-200">
              <img
                src={mentor.image}
                alt={`${mentor.name} — ${mentor.title}`}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Name + LinkedIn row */}
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-bold text-gray-900 text-[15px] leading-tight">
                {mentor.name}
              </h3>
              <a
                href={mentor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${mentor.name} on LinkedIn`}
                className="shrink-0 mt-0.5 text-[#0A66C2] opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                <LinkedInIcon />
              </a>
            </div>

            {/* Title */}
            <p className="text-gray-500 text-[12px] leading-snug">
              {mentor.title}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default MentorsSection;