import React from 'react';

const highlightImages = [
  "/pexels/1.png",
  "/pexels/2.png",
  "/pexels/3.png",
  "/pexels/4.png",
  "/pexels/5.png",
];

const duplicatedImages = [...highlightImages, ...highlightImages];

const HighlightsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      
      <div className="text-center mb-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#D9232D] mb-4">
          Pixel-Perfect Highlights
        </h2>
        <p className="text-gray-700 font-medium text-sm md:text-base">
          Some nostalgic memoREELs from the Student Partnership Program.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="relative w-full flex overflow-hidden rounded-3xl">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex w-max animate-marquee gap-6 cursor-pointer py-4">
          {duplicatedImages.map((src, index) => (
            <div 
              key={index} 
              className="w-[280px] sm:w-[400px] aspect-[4/3] shrink-0 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={src}
                alt={`Program Highlight ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {

                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if(parent) {
                      parent.className += " aspect-video bg-gray-50 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 text-gray-400 font-mono text-xs p-4 text-center";
                      parent.innerHTML = `<span>Missing Image</span><span class="mt-1 opacity-70">public${src}</span>`;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
      </div>

    </section>
  );
};

export default HighlightsSection;