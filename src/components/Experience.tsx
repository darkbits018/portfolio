import React from 'react';
import { Section } from './ui/Section';
import { SectionTitle } from './ui/SectionTitle';
import type { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
  {
    company: 'Rayabhari Technologies Pvt. Ltd',
    role: 'Machine Learning Intern',
    period: 'September 2023 – October 2023; November 2024 – Present',
    responsibilities: [
      'Developed and deployed machine learning models for AI applications',
      'Built scalable APIs for AI-based solutions, including image recognition systems',
      'Designed backend systems using Flask and integrated them with Flutter-based applications'
    ]
  },
  {
    company: 'Edunet Foundation',
    role: 'Full-stack Web Developer Intern',
    period: 'December 2023 – January 2024',
    responsibilities: [
      'Completed a 6-week program led by EY Global Delivery Services',
      'Gained hands-on experience in building full-stack web applications'
    ]
  }
];

export function Experience() {
  return (
    <Section id="experience" className="bg-gray-800">
      <SectionTitle>Experience</SectionTitle>
      
      <div className="max-w-3xl mx-auto">
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.company} 
              className="relative pl-8 border-l-2 border-blue-500">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
              
              <div className="group hover:bg-gray-750 p-6 rounded-lg transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">{exp.company}</h3>
                <h4 className="text-blue-400 mb-2">{exp.role}</h4>
                <p className="text-gray-400 mb-4">{exp.period}</p>
                
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}