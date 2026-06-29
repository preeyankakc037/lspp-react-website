import React, { useState, useEffect } from 'react';

const testimonialSlides = [
  [
    {
      name: "Priyanka Khatri",
      batch: "Batch of 2026",
      image: "/priyanka.jpeg",
      quote: "LSPP was a turning point that transformed not just my skills, but me as a person. It bridged every gap I had, from communication to confidence, from being a learner to becoming a mentor. What I love most about this program is the people and environment — a community that constantly pushes you to grow, where everyone celebrates your wins and supports you through challenges."
    },
    {
      name: "Aakriti Pandey",
      batch: "Batch of 2026",
      image: "/students images/aakiriti.png",
      quote: "It's amazing how much you can grow professionally and technically in just six months. LSPP is a fantastic opportunity to explore your tech career, build networks, and gain industry relevant skills. The highlight is the constant optimism and support from facilitators and mentors."
    }
  ],
  [
    {
      name: "Arekh Shrestha",
      batch: "Batch of 2026",
      image: "/students images/arekh.png",
      quote: "LSPP gave me the chance to learn from industry seasoned professionals, build confidence, and develop my skills in leadership and professionalism. I felt the growth firsthand—it was practical and meaningful. One of the highlights was being able to share what I learnt, by leading sessions for thousands of peers, which felt incredible."
    },
    {
      name: "Nirika Lamichhane",
      batch: "Batch of 2026",
      image: "/students images/nirika.png",
      quote: "The program has been a transformative experience that pushed me out of my comfort zone and helped me grow as a leader. As someone attending from outside the Kathmandu Valley, I found the program incredibly inclusive and empowering. It gave me the confidence to take bold steps, the courage to embrace responsibilities, and the determination to make a real impact."
    }
  ],
  [
    {
      name: "Sworna Dhan Tuladhar",
      batch: "Batch of 2026",
      image: "/students images/sworna.png",
      quote: "From day one, I felt like I'd found my tribe—a community buzzing with growth, laughter, growth, and the occasional tech-related pun. LSPP sharpened my skills, boosted my confidence, and ultimately paved the way for me to become an Associate Software Engineer at Leapfrog. Working alongside such talented people is both humbling and inspiring."
    },
    {
      name: "Ayam Kattel",
      batch: "Batch of 2026",
      image: "/students images/ayam.png",
      quote: "I am grateful to the LSP Program for offering the fantastic platform and mentorships that enhanced both my soft and technical skills which has led to the exponential growth of my tech career."
    }
  ]
];

const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonialSlides.length - 1 ? 0 : prev + 1));
    }, 3000); // Slightly longer (6s) because there's a lot of text to read!

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-10 md:py-14 bg-[#FDF8E7] w-full flex justify-center overflow-hidden">

      <div className="w-full max-w-6xl px-6 md:px-12">

        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#005364] leading-tight">
            Hear it from our former <br/> Student Partners
          </h2>
        </div>

        <div className="relative w-full overflow-hidden">

          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonialSlides.map((slideGroup, slideIndex) => (
              <div 
                key={slideIndex} 
                className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 px-4 md:px-8"
              >
                {slideGroup.map((testimonial, index) => (
                  <div key={index} className="flex flex-col text-left">

                    <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 bg-gray-200 shrink-0 shadow-sm">
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

                    <p className="text-gray-800 text-sm leading-relaxed mb-4 grow">
                      {testimonial.quote}
                    </p>

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

        <div className="flex justify-center items-center gap-2 mt-8">
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