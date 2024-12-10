import React from 'react';
import { Section } from './ui/Section';
import { SectionTitle } from './ui/SectionTitle';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    title: 'Pup-Predict',
    description: 'An AI-based image classification app to identify dog breeds.',
    techStack: ['Flutter', 'Python', 'TensorFlow', 'Flask'],
    role: 'Engineered the backend using Flask and designed server-side solutions for image processing and classification.',
    impact: 'Simplified pet identification for users.',
    imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/darkbits018/pup-predict-backend',
    liveUrl: 'https://github.com/darkbits018/pup-predict-flutter'
  },
  {
    title: '0xCertify',
    description: 'A blockchain-based certificate generation and validation system with a Learning Management System.',
    techStack: ['Python', 'JavaScript', 'Solidity'],
    role: 'Developed the platform backend and implemented smart contracts for secure and immutable certification.',
    impact: 'Enhanced trust and transparency in certificate validation.',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/darkbits018/0xCertify-Landing',
    liveUrl: 'https://darkbits018.github.io/0xCertify-Landing/'
  },
  {
    title: 'Road Clearance System',
    description: 'A system designed to clear paths for emergency vehicles using IoT-based solutions.',
    recognition: 'State-level hackathon finalist at KSIT, Bengaluru',
    techStack: ['IoT', 'Python'],
    imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    githubUrl: '#'
  }
];

export function Projects() {
  return (
    <Section id="projects" className="bg-gray-900">
      <SectionTitle>Featured Projects</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div key={project.title} 
            className="group bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {project.role && (
                <p className="text-gray-400 text-sm mb-2">
                  <strong>Role:</strong> {project.role}
                </p>
              )}
              {project.impact && (
                <p className="text-gray-400 text-sm">
                  <strong>Impact:</strong> {project.impact}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}