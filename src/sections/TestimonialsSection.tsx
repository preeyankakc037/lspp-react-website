import React, { useState, useEffect } from 'react';

// We group them exactly as they appear on the slides
const testimonialSlides = [
  // SLIDE 1
  [
    {
      name: "Aakash Rana",
      batch: "Batch of 2025",
      image: "/testimonials/aakash.jpg",
      quote: "LSPP was a turning point that transformed not just my skills, but me as a person. It bridged every gap I had, from communication to confidence, from being a learner to becoming a mentor. What I love most about this program is the people and environment — a community that constantly pushes you to grow, where everyone celebrates your wins and supports you through challenges. LSPP didn't just make me a better engineer, it made me a confident leader ready to take on the world."
    },
    {
      name: "Suparna Neupane",
      batch: "Batch of 2025",
      image: "/testimonials/suparna.jpg",
      quote: "It's amazing how much you can grow professionally and technically in just six months. LSPP is a fantastic opportunity to explore your tech career, build networks, and gain industry relevant skills. The highlight is the constant optimism and support from facilitators and mentors."
    },
    {
      name: "Aashra Pradhan",
      batch: "Batch of 2024",
      image: "/testimonials/aashra.jpg",
      quote: "LSPP gave me the chance to learn from industry seasoned professionals, build confidence, and develop my skills in leadership and professionalism. I felt the growth firsthand—it was practical and meaningful. One of the highlights was being able to share what I learnt, by leading sessions for thousands of peers, which felt incredible. It wasn't just about personal growth but also contributing to Nepal's tech ecosystem."
    }
  ],
  // SLIDE 2
  [
    {
      name: "Priti Ranabhat",
      batch: "Batch of 2024",
      image: "/testimonials/priti.jpg",
      quote: "The program has been a transformative experience that pushed me out of my comfort zone and helped me grow as a leader. As someone attending from outside the Kathmandu Valley, I found the program incredibly inclusive and empowering. It gave me the confidence to take bold steps, the courage to embrace responsibilities, and the determination to make a real impact."
    },
    {
      name: "Purna Shrestha",
      batch: "Batch of 2023",
      image: "/testimonials/purna.jpg",
      quote: "From day one, I felt like I'd found my tribe—a community buzzing with growth, laughter, growth, and the occasional tech-related pun. LSPP sharpened my skills, boosted my confidence, and ultimately paved the way for me to become an Associate Software Engineer at Leapfrog. Working alongside such talented people, so early in my career, is both humbling and inspiring—reminding me that growth is a continuous process."
    },
    {
      name: "Gaurav Pratap Shrestha",
      batch: "Batch of 2022",
      image: "/testimonials/gaurav.jpg",
      quote: "I am grateful to the LSP Program for offering the fantastic platform and mentorships that enhanced both my soft and technical skills which has led to the exponential growth of my tech career."
    }
  ]
];

const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll logic toggles between the two slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonialSlides.length - 1 ? 0 : prev + 1));
    }, 3000); // Slightly longer (6s) because there's a lot of text to read!

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#FDF8E7] w-full flex justify-center overflow-hidden">
      {/* We use max-w-6xl to keep it centered and not too broad */}
      <div className="w-full max-w-6xl px-6 md:px-12">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#005364] leading-tight">
            Hear it from our former <br/> Student Partners
          </h2>
        </div>

        {/* Carousel Viewport */}
        <div className="relative w-full overflow-hidden">
          {/* Sliding Track */}
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonialSlides.map((slideGroup, slideIndex) => (
              // Each slide takes up 100% of the width and contains 3 items
              <div 
                key={slideIndex} 
                className="w-full shrink-0 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
              >
                {slideGroup.map((testimonial, index) => (
                  <div key={index} className="flex flex-col text-left">
                    
                    {/* Image Box */}
                    <div className="w-32 h-32 rounded-3xl overflow-hidden mb-6 bg-gray-200 shrink-0 shadow-sm">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if(parent) {
                            parent.className += " flex flex-col items-center justify-center border-2 border-dashed border-gray-300 p-2 text-center text-gray-500 text-[10px]";
                            parent.innerHTML = `<span>Missing</span><span>${testimonial.image.split('/').pop()}</span>`;
                          }
                        }}
                      />
                    </div>

                    {/* Quote Text */}
                    <p className="text-gray-800 text-[15px] leading-relaxed mb-6 grow">
                      {testimonial.quote}
                    </p>

                    {/* Name & Batch */}
                    <div className="mt-auto">
                      <h4 className="font-bold text-[#005364] text-lg mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-xs font-medium">
                        {testimonial.batch}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {testimonialSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-[#00AEEF]' // Blue active dot
                  : 'bg-gray-300'  // Gray inactive dot
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;