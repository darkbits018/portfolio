import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Abhay GP</h3>
            <p className="text-gray-400">
              Full Stack Developer passionate about creating impactful digital solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/abhaygp" className="hover:text-white transition">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/abhaygp" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="https://twitter.com/abhaygp" className="hover:text-white transition">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Abhay GP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}