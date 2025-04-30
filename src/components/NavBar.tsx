import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

export const NavBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      
      // Update navbar background
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-6 ${
        scrolled ? 'bg-[#1A1D21]/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex-1">
          <a href="#home" className="block w-12 h-12">
            <Logo />
          </a>
        </div>
        
        <ul className="hidden md:flex space-x-10">
          {navItems.map(item => (
            <li key={item.name}>
              <a 
                href={item.href}
                className={`text-sm tracking-wider transition-all duration-300 hover:text-[#E6C068] ${
                  activeSection === item.href.substring(1) 
                    ? 'text-[#E6C068]' 
                    : 'text-gray-300'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="md:hidden flex-1 flex justify-end">
          <button className="text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};