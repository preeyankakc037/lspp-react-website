import React from 'react';

const resources = [
  {
    title: "Event & Insights videos",
    action: "Watch on YouTube →",
    link: "https://www.lftechnology.com/",
    bgColor: "bg-[#eef3ff]", // Soft Blue
    image: "/resources/event.png"
  },
  {
    title: "Workshops",
    action: "Checkout recordings →",
    link: "https://www.lftechnology.com/",
    bgColor: "bg-[#eaf5eb]", // Soft Green
    image: "/resources/workshop.png"
  },
  {
    title: "Projects by Partners",
    action: "Checkout latest projects →",
    link: "https://www.lftechnology.com/",
    bgColor: "bg-[#fff9e6]", // Soft Yellow
    image: "/resources/projects.png"
  },
  {
    title: "Look at the Byte Side",
    action: "Checkout on Linkedin →",
    link: "https://www.lftechnology.com/",
    bgColor: "bg-[#ffeded]", // Soft Pink
    image: "/resources/look_at_the_byte.png"
  }
];

const ResourcesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">

      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0052FF] mb-4 tracking-tight">
          Resources
        </h2>
        <p className="text-gray-900 font-medium text-base md:text-lg">
          Take a 'byte' into what we cook - explore some great resources to get started.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {resources.map((resource, index) => (
          <a 
            key={index} 
            href={resource.link}
            target="_blank" 
            rel="noopener noreferrer"
            className={`group rounded-[1.5rem] p-5 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${resource.bgColor}`}
          >

            <div className="w-full flex items-center justify-center mb-4 h-[160px]">
              <img 
                src={resource.image} 
                alt={resource.title}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if(parent) {
                    parent.className += " border-2 border-dashed border-gray-300 rounded-xl text-gray-500 text-xs text-center p-4 flex flex-col items-center justify-center";
                    parent.innerHTML = `<span>Missing 3D Graphic</span><span class="opacity-60 text-[10px] mt-1">public${resource.image}</span>`;
                  }
                }}
              />
            </div>

            <div className="mt-auto">
              <h3 className="font-bold text-[17px] text-gray-900 mb-2 leading-tight">
                {resource.title}
              </h3>
              <p className="text-gray-700 text-[13px] font-medium flex items-center transition-colors duration-300 group-hover:text-blue-600">
                {resource.action}
              </p>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
};

export default ResourcesSection;