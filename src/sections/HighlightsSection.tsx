import React from 'react';

// You can add more image paths here later!
const highlightImages = [
  "/highlight-1.jpg",
  "/highlight-2.jpg",
  "/highlight-3.jpg",
  "/highlight-4.jpg",
  "/highlight-5.jpg",
  "/highlight-6.jpg",
];

const HighlightsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto">
      
      {/* Header text */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#D9232D] mb-4">
          Pixel-Perfect Highlights
        </h2>
        <p className="text-gray-700 font-medium text-sm md:text-base">
          Some nostalgic memoREELs from the Student Partnership Program.
        </p>
      </div>

      {/* Masonry Grid Layout 
        - columns-1/2/3 creates vertical columns.
        - gap-6 adds space between columns.
        - space-y-6 adds space between images vertically.
      */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {highlightImages.map((src, index) => (
          <div 
            key={index} 
            // break-inside-avoid prevents an image from being split across two columns
            className="break-inside-avoid rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={src}
              alt={`Program Highlight ${index + 1}`}
              className="w-full h-auto object-cover"
              onError={(e) => {
                // Fallback UI if the image is missing from the public folder
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

    </section>
  );
};

export default HighlightsSection;