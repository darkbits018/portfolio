import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24 bg-black">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700">
                About Me
              </h2>
              <div className="w-20 h-1 bg-[#E6C068] absolute -top-4 line-animate-on-scroll opacity-0 transform translate-x-4 transition-all duration-700 delay-300"></div>
            </div>
            
            <div className="space-y-4 text-gray-300 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-400">
              <p>
                I'm a passionate Frontend Developer with 5+ years of experience creating engaging and performant web applications. 
              </p>
              <p>
                My approach combines technical expertise with an eye for design, ensuring that the interfaces I build are not only functional but also visually appealing and intuitive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};