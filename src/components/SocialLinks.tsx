import React from 'react';
import { Github, Instagram, Twitter } from 'lucide-react';

export const SocialLinks: React.FC = () => {
  return (
    <div className="fixed left-6 bottom-0 z-40 hidden md:block">
      <div className="flex flex-col items-center space-y-6">
        <SocialIcon href="https://github.com" Icon={Github} />
        <SocialIcon href="https://instagram.com" Icon={Instagram} />
        <SocialIcon href="https://twitter.com" Icon={Twitter} />
        <div className="h-24 w-px bg-gray-500 mt-6"></div>
      </div>
    </div>
  );
};

interface SocialIconProps {
  href: string;
  Icon: React.FC<{ size?: number; className?: string }>;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, Icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-[#E6C068] transition-all duration-300 transform hover:-translate-y-1"
  >
    <Icon size={20} className="stroke-current" />
  </a>
);