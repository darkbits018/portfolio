import React, { useEffect, useRef } from 'react';

export const Home: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    if (titleElement) {
      titleElement.classList.add('animate-in');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('line-animate-on-scroll')) {
              entry.target.classList.add('line-animate-in');
            } else {
              entry.target.classList.add('animate-in');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll, .line-animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <div className="relative w-full flex justify-center mb-4">
          <div className="absolute top-6 left-[35%] transform -translate-x-[9rem] flex items-center gap-4">
            <p className="text-gray-400 text-2xl md:text-3xl tracking-wider animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-100">
              HI I'M
            </p>
            <div className="w-100 h-[4px] bg-[#E6C068] line-animate-on-scroll opacity-0 transform -translate-x-8 transition-all duration-700 delay-300"></div>
          </div>

          <h1
            ref={titleRef}
            className="text-8xl md:text-[12rem] font-bold tracking-widest opacity-0 transform translate-y-4 transition-all duration-700 text-white text-center font-imagine"
          >
            ABHAY
          </h1>

          {/* Positioning "A FRONTEND DEVELOPER" below ABHAY */}
          <div className="absolute top-[100%] left-[64%] transform -translate-x-[50%]">
            <p className="text-[#E6C068] tracking-wider text-base md:text-lg animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-500 text-center">
              A FRONTEND DEVELOPER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};