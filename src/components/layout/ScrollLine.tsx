import React, { useEffect, useState } from 'react';

const ScrollLine: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      if (totalScroll > 0) {
        const currentScroll = window.scrollY;
        const percentage = (currentScroll / totalScroll) * 100;
        setScrollProgress(percentage);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-200 pointer-events-none">
      <div 
        className="bg-[#F1A80A] h-full transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollLine;