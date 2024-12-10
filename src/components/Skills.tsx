import React from 'react';
import { Section } from './ui/Section';
import { SectionTitle } from './ui/SectionTitle';
import { Code2, Database, Layout, Server } from 'lucide-react';
import type { SkillCategory } from '../types';

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Frameworks',
    icon: <Code2 className="w-6 h-6 text-blue-500" />,
    skills: ['Python', 'Flask', 'JavaScript', 'Solidity', 'C/C++']
  },
  {
    title: 'Technologies',
    icon: <Server className="w-6 h-6 text-blue-500" />,
    skills: ['TensorFlow', 'Transformers', 'Docker', 'PostgreSQL']
  },
  {
    title: 'Frontend & Design',
    icon: <Layout className="w-6 h-6 text-blue-500" />,
    skills: ['Figma', 'Flutter']
  },
  {
    title: 'Other Skills',
    icon: <Database className="w-6 h-6 text-blue-500" />,
    skills: ['REST API Development', 'Project Management', 'Blockchain Development']
  }
];

export function Skills() {
  return (
    <Section id="skills" className="bg-gray-800">
      <SectionTitle>Skills & Tools</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category) => (
          <div key={category.title} 
            className="group p-6 bg-gray-900 rounded-lg hover:bg-gray-850 transition-all hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}