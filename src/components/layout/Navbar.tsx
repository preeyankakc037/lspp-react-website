import React, { useEffect, useState } from 'react';

const ScrollLine: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // Total height of the page minus the visible viewport window height
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      if (totalScroll > 0) {
        const currentScroll = window.scrollY;
        // Calculate percentage scrolled (0 to 100)
        const percentage = (currentScroll / totalScroll) * 100;
        setScrollProgress(percentage);
      }
    };

    // Attach listener on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Clean up listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    /* 
      Fixed container locked to the viewport side. 
      pointer-events-none ensures it doesn't block users clicking buttons behind it.
    */
    <div className="fixed left-0 top-0 h-full w-1 md:w-1.5 bg-gray-100/30 z-50 pointer-events-none">
      <div 
        className="bg-[#F1A80A] w-full rounded-b-full transition-all duration-75 ease-out"
        style={{ height: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollLine;