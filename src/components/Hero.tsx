import React from 'react';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900 via-gray-900 to-gray-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center"></div>
      <div className="container mx-auto px-6 relative">
        <div className="min-h-screen flex flex-col justify-center items-center text-center">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Hi, I'm <span className="text-blue-500">Abhay Patgar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300">
              Aspiring Backend Engineer | AI/ML Enthusiast
            </h2>
            <p className="text-xl text-gray-400">
              Passionate about Cloud Computing, Web3, and Open-Source Innovation.
              I leverage AI/ML and cutting-edge technologies to solve real-world problems.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <a href="#projects" 
                className="group px-8 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all">
                View My Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href=""
                className="group px-8 py-3 bg-gray-800 text-white rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-all">
                Download Resume
                <Download className="group-hover:translate-y-1 transition-transform" size={20} />
              </a>
            </div>

            <div className="flex justify-center gap-6 pt-8">
              <a href="https://github.com/darkbits018" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">
                <Github size={28} />
              </a>
              <a href="https://linkedin.com/in/abhaygp" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white transition-colors">
          <ArrowRight size={24} className="rotate-90" />
        </a>
      </div>
    </section>
  );
}