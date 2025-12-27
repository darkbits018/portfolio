import React, { useState } from 'react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const projectsData = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      imageUrl: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A fully responsive e-commerce solution with cart functionality and payment integration.',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Portfolio Website',
      category: 'design',
      imageUrl: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A modern, animated portfolio website for a creative agency.',
      technologies: ['React', 'GSAP', 'Tailwind CSS']
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      category: 'app',
      imageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Analytics dashboard for social media marketing campaigns.',
      technologies: ['React', 'D3.js', 'Firebase']
    },
    {
      id: 4,
      title: 'Travel Booking App',
      category: 'app',
      imageUrl: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Mobile app for booking flights, hotels and experiences.',
      technologies: ['React Native', 'GraphQL', 'Node.js']
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web' },
    { id: 'app', name: 'App' },
    { id: 'design', name: 'Design' }
  ];

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-12">
          <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-[#E6C068] absolute -top-4 animate-on-scroll opacity-0 transform translate-x-4 transition-all duration-700 delay-300"></div>
        </div>
        
        <div className="flex flex-wrap mb-10 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-400">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`mr-4 mb-4 px-4 py-2 text-sm transition-all duration-300 ${
                filter === category.id 
                  ? 'bg-[#E6C068] text-[#1A1D21]' 
                  : 'bg-transparent border border-gray-700 text-gray-300 hover:border-[#E6C068] hover:text-[#E6C068]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-[#22262B] overflow-hidden animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700"
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1A1D21]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href="#" className="px-5 py-3 border border-[#E6C068] text-[#E6C068] hover:bg-[#E6C068] hover:text-[#1A1D21] transition-all duration-300">
                    View Project
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};