import React, { useEffect, useState } from 'react';
import { SkillBubbles3D } from '../components/SkillBubbles3D';

interface Skill {
  name: string;
  proficiency: 'expert' | 'proficient' | 'familiar';
  color: string;
  description: string;
  category: string;
}

interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [show3DView, setShow3DView] = useState(false);

  const skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      title: "Frontend",
      skills: [
        { 
          name: "React", 
          proficiency: 'expert', 
          color: "#61DAFB",
          description: "I have extensive experience building complex React applications with hooks, context, and modern patterns. I can architect scalable component systems and optimize performance for large-scale applications.",
          category: 'frontend'
        },
        { 
          name: "TypeScript", 
          proficiency: 'expert', 
          color: "#3178C6",
          description: "I leverage TypeScript's type system to build robust, maintainable applications. I'm skilled in advanced types, generics, and creating type-safe APIs that catch errors at compile time.",
          category: 'frontend'
        },
        { 
          name: "JavaScript", 
          proficiency: 'expert', 
          color: "#F7DF1E",
          description: "I have deep knowledge of modern JavaScript including ES6+, async/await, closures, and functional programming concepts. I can write clean, efficient code that follows best practices.",
          category: 'frontend'
        },
        { 
          name: "HTML5", 
          proficiency: 'expert', 
          color: "#E34F26",
          description: "I write semantic, accessible HTML5 that follows web standards. I understand the importance of proper document structure for SEO and accessibility.",
          category: 'frontend'
        },
        { 
          name: "CSS3", 
          proficiency: 'proficient', 
          color: "#1572B6",
          description: "I'm skilled in modern CSS including Flexbox, Grid, animations, and responsive design. I can create pixel-perfect layouts that work across all devices and browsers.",
          category: 'frontend'
        },
        { 
          name: "Tailwind CSS", 
          proficiency: 'proficient', 
          color: "#06B6D4",
          description: "I use Tailwind CSS to rapidly build responsive, consistent UIs. I'm comfortable with utility-first approach and can customize Tailwind to match any design system.",
          category: 'frontend'
        },
        { 
          name: "Vue.js", 
          proficiency: 'familiar', 
          color: "#4FC08D",
          description: "I have working knowledge of Vue.js and can build applications using its reactive data binding and component system. I understand the Vue ecosystem and can work with Vuex for state management.",
          category: 'frontend'
        },
        { 
          name: "Angular", 
          proficiency: 'familiar', 
          color: "#DD0031",
          description: "I can work with Angular applications, understanding its component architecture, services, and dependency injection. I'm familiar with TypeScript integration and Angular CLI.",
          category: 'frontend'
        }
      ]
    },
    {
      id: 'backend',
      title: "Backend & Tools",
      skills: [
        { 
          name: "Node.js", 
          proficiency: 'proficient', 
          color: "#339933",
          description: "I can build scalable server-side applications with Node.js, including RESTful APIs, real-time applications with WebSockets, and microservices architecture.",
          category: 'backend'
        },
        { 
          name: "Express.js", 
          proficiency: 'proficient', 
          color: "#000000",
          description: "I'm experienced in building robust web servers and APIs with Express.js, including middleware implementation, routing, and security best practices.",
          category: 'backend'
        },
        { 
          name: "MongoDB", 
          proficiency: 'familiar', 
          color: "#47A248",
          description: "I have working knowledge of MongoDB for NoSQL database operations, including schema design, aggregation pipelines, and performance optimization.",
          category: 'backend'
        },
        { 
          name: "PostgreSQL", 
          proficiency: 'familiar', 
          color: "#336791",
          description: "I can work with PostgreSQL for relational database needs, including complex queries, indexing, and database design principles.",
          category: 'backend'
        },
        { 
          name: "Git", 
          proficiency: 'expert', 
          color: "#F05032",
          description: "I'm highly proficient with Git for version control, including branching strategies, merge conflict resolution, and collaborative workflows in team environments.",
          category: 'backend'
        },
        { 
          name: "Docker", 
          proficiency: 'familiar', 
          color: "#2496ED",
          description: "I have experience containerizing applications with Docker, creating Dockerfiles, and working with Docker Compose for development environments.",
          category: 'backend'
        },
        { 
          name: "AWS", 
          proficiency: 'familiar', 
          color: "#FF9900",
          description: "I can deploy and manage applications on AWS, working with services like EC2, S3, Lambda, and RDS for cloud-based solutions.",
          category: 'backend'
        },
        { 
          name: "Firebase", 
          proficiency: 'proficient', 
          color: "#FFCA28",
          description: "I'm experienced with Firebase for backend services, including Firestore, Authentication, Cloud Functions, and real-time database operations.",
          category: 'backend'
        }
      ]
    },
    {
      id: 'design',
      title: "Design & UI/UX",
      skills: [
        { 
          name: "Figma", 
          proficiency: 'proficient', 
          color: "#F24E1E",
          description: "I'm skilled in using Figma for UI design, prototyping, and collaborating with design teams. I can translate designs into pixel-perfect implementations.",
          category: 'design'
        },
        { 
          name: "Adobe XD", 
          proficiency: 'proficient', 
          color: "#FF61F6",
          description: "I can create interactive prototypes and design systems in Adobe XD, and effectively communicate design ideas to stakeholders.",
          category: 'design'
        },
        { 
          name: "Responsive Design", 
          proficiency: 'expert', 
          color: "#E6C068",
          description: "I excel at creating responsive layouts that work seamlessly across all devices and screen sizes, using mobile-first approaches and modern CSS techniques.",
          category: 'design'
        },
        { 
          name: "User Experience", 
          proficiency: 'proficient', 
          color: "#9B59B6",
          description: "I understand UX principles and can design intuitive user interfaces that prioritize usability, accessibility, and user satisfaction.",
          category: 'design'
        },
        { 
          name: "Prototyping", 
          proficiency: 'proficient', 
          color: "#3498DB",
          description: "I can create interactive prototypes to validate design concepts and user flows before development, saving time and ensuring better user experiences.",
          category: 'design'
        },
        { 
          name: "Design Systems", 
          proficiency: 'familiar', 
          color: "#E74C3C",
          description: "I have experience working with design systems to maintain consistency across applications and can contribute to building scalable component libraries.",
          category: 'design'
        },
        { 
          name: "Photoshop", 
          proficiency: 'familiar', 
          color: "#31A8FF",
          description: "I can work with Photoshop for image editing, creating graphics, and preparing assets for web development projects.",
          category: 'design'
        },
        { 
          name: "Illustrator", 
          proficiency: 'familiar', 
          color: "#FF9A00",
          description: "I have basic knowledge of Illustrator for creating vector graphics, logos, and scalable illustrations for web applications.",
          category: 'design'
        }
      ]
    }
  ];

  // Flatten all skills into a single array
  const allSkills = skillCategories.flatMap(category => category.skills);

  // Filter skills based on active category
  const displayedSkills = activeCategory === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeCategory);

  const getProficiencyText = (proficiency: string) => {
    switch (proficiency) {
      case 'expert':
        return "I am an expert in this";
      case 'proficient':
        return "I am proficient in this";
      case 'familiar':
        return "I can manage to work with this";
      default:
        return "I know this";
    }
  };

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'expert':
        return "text-green-400";
      case 'proficient':
        return "text-blue-400";
      case 'familiar':
        return "text-yellow-400";
      default:
        return "text-gray-400";
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend & Tools' },
    { id: 'design', name: 'Design & UI/UX' }
  ];

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-16">
          <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-[#E6C068] absolute -top-4 animate-on-scroll opacity-0 transform translate-x-4 transition-all duration-700 delay-300"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Skill Description */}
          <div className="animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-400">
            <div className="p-8 rounded-lg min-h-[500px] flex flex-col">
              {selectedSkill ? (
                <>
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: selectedSkill.color }}
                    ></div>
                    <h3 className="text-2xl font-semibold text-white">
                      {selectedSkill.name}
                    </h3>
                  </div>
                  
                  <div className="mb-4">
                    <span className={`text-sm font-medium ${getProficiencyColor(selectedSkill.proficiency)}`}>
                      {getProficiencyText(selectedSkill.proficiency)}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed flex-1">
                    {selectedSkill.description}
                  </p>
                </>
              ) : (
                <div className="flex items-center justify-center h-full text-center">
                  <div className="pt-24">
                    <div className="idle-animation-container mb-6">
                      <div className="relative w-24 h-24 mx-auto">
                        {/* Center pulsing element */}
                        <div className="absolute inset-0 w-20 h-20 bg-[#E6C068]/30 rounded-full pulse-center mx-auto my-auto flex items-center justify-center">
                          <div className="w-10 h-10 bg-[#E6C068] rounded-full"></div>
                        </div>
                        
                        {/* Orbiting particles */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="orbit-particle">
                            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="orbit-particle-reverse">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          </div>
                        </div>
                        
                        {/* Static decorative dots */}
                        <div className="absolute top-2 right-4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60"></div>
                        <div className="absolute bottom-3 left-2 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-60"></div>
                        <div className="absolute top-8 left-6 w-1 h-1 bg-cyan-400 rounded-full opacity-40"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Category Filters and Skill Buttons */}
          <div className="animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-600">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {/* 3D Toggle Button */}
              <button
                onClick={() => {
                  setShow3DView(!show3DView);
                  setSelectedSkill(null);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 mr-4 ${
                  show3DView
                    ? 'bg-purple-600 text-white'
                    : 'bg-[#22262B] text-gray-300 hover:bg-[#2A2F35] hover:text-white'
                }`}
              >
                {show3DView ? '2D View' : '3D View'}
              </button>
              
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSelectedSkill(null);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-[#E6C068] text-[#1A1D21]'
                      : 'bg-[#22262B] text-gray-300 hover:bg-[#2A2F35] hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Skill Buttons Grid */}
            {show3DView ? (
              <SkillBubbles3D
                skills={displayedSkills}
                onSkillSelect={setSelectedSkill}
                selectedSkill={selectedSkill}
              />
            ) : (
              <div>
                <div className="flex flex-wrap gap-2">
                  {displayedSkills.map((skill) => (
                    <button
                      key={skill.name}
                      onClick={() => setSelectedSkill(skill)}
                      className={`px-2 py-2 rounded-lg text-left transition-all duration-300 border-2 ${
                        selectedSkill?.name === skill.name
                          ? 'border-[#E6C068] bg-[#E6C068]/10'
                          : 'border-[#22262B] bg-[#22262B] hover:border-[#E6C068]/50 hover:bg-[#E6C068]/5'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: skill.color }}
                          ></div>
                          <span className="text-white text-sm font-medium">{skill.name}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};