import React, { useState, useEffect } from 'react';

export const ScrollIndicator: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const position = window.scrollY / scrollHeight;
      setScrollPosition(position);
      
      // Update section number
      const sectionHeight = window.innerHeight;
      const currentSectionIndex = Math.floor(window.scrollY / sectionHeight) + 1;
      setCurrentSection(currentSectionIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col items-center">
      <div className="h-64 w-px bg-gray-700 relative">
        <div 
          className="absolute top-0 w-px bg-[#E6C068] transition-all duration-300"
          style={{ height: `${scrollPosition * 100}%` }}
        ></div>
      </div>
      <div className="text-gray-500 text-sm tracking-widest mt-2 transform rotate-90 origin-center absolute bottom-0 right-8">
        SCROLL
      </div>
      <div className="text-gray-300 mt-8">
        {currentSection.toString().padStart(2, '0')}
      </div>
    </div>
  );
};