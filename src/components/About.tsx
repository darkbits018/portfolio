import React from 'react';
import { Section } from './ui/Section';
import { SectionTitle } from './ui/SectionTitle';
import { Brain, Code, Globe } from 'lucide-react';

const highlights = [
  {
    icon: <Brain className="w-8 h-8 text-blue-500" />,
    title: 'AI/ML Enthusiast',
    description: 'Passionate about developing intelligent solutions that solve real-world problems.'
  },
  {
    icon: <Code className="w-8 h-8 text-blue-500" />,
    title: 'Backend Developer',
    description: 'Experienced in building robust and scalable backend systems.'
  },
  // {
  //   icon: <Globe className="w-8 h-8 text-blue-500" />,
  //   title: 'Open Source Contributor',
  //   description: 'Active contributor to the developer community through open-source projects.'
  // }
];

export function About() {
  return (
    <Section id="about" className="bg-gray-900">
      <SectionTitle>About Me</SectionTitle>
      
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="space-y-6 text-gray-300">
          <p className="text-lg">
            As an Aspiring Backend Engineer and AI/ML Enthusiast, I am passionate about 
            developing robust, scalable solutions that solve real-world problems. With a 
            deep interest in Web3, cybersecurity, and open-source initiatives, my journey 
            has been one of constant learning and innovation.
          </p>
          <p className="text-lg">
            I've contributed to developing AI-powered applications, blockchain solutions, 
            and machine learning models during internships and personal projects.
          </p>
        </div>

        <div className="grid gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-900 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}