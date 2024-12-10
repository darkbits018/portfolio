import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex space-x-6">
            <a href="mailto:abhaygp18.dev@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/abhaygp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
              <Github size={24} />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400">
              Designed and Built by Abhay Patgar | Bengaluru, Karnataka
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {currentYear} | "Empowering the future through technology."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}