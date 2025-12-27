import React, { useEffect, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';

interface Room3DProps {
  roomIndex: number;
}

const GarageModel: React.FC = () => {
  const { scene } = useGLTF('/models/garage-full-scene4.glb');
  return <primitive object={scene} scale={1} position={[0, 0, 0]} />;
};

const Room3D: React.FC<Room3DProps> = ({ roomIndex }) => {
  return (
    <div className="relative h-[500px] flex items-center justify-center">
      <div className="w-[600px] h-[400px] rounded-lg overflow-hidden shadow-2xl">
        <Canvas
          camera={{ position: [-1.5219226469646883, 0.8804908013110619, 1.6512277264582982], fov: 50 }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.3} />
            
            <GarageModel />
            
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2.5}
              minAzimuthAngle={-Math.PI / 3}
              maxAzimuthAngle={Math.PI / 12}
              target={[0.02007665463905332, 0.13644345300565072, -0.041720523069591654]}
            />
            
            <Environment preset="warehouse" />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Clean shadow */}
      <div className="absolute -bottom-6 left-16 right-16 h-8 bg-black/30 blur-xl rounded-full"></div>
    </div>
  );
};

export const About: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentRoomIndex, setCurrentRoomIndex] = React.useState(0);
  const originalTotalRooms = 5;
  const duplicateCount = 7; // Show 7 sets of rooms for smooth infinite scroll
  const totalRooms = originalTotalRooms * duplicateCount;

  // Dynamic content for each room
  const aboutMeContent = [
    {
      // Room 1 - Primary Workspace (Golden)
      paragraphs: [
        "I'm a passionate Frontend Developer with 5+ years of experience creating engaging and performant web applications. I specialize in React, TypeScript, and modern web technologies.",
        "My primary workspace is where the magic happens. Here, I dive deep into complex React applications, architecting scalable solutions and crafting seamless user experiences with cutting-edge JavaScript frameworks.",
        "This golden-themed environment represents the warmth and energy I bring to every project. It's where I transform ideas into reality, one line of code at a time."
      ]
    },
    {
      // Room 2 - Design Studio (Red)
      paragraphs: [
        "Welcome to my design studio, where creativity meets functionality. I'm a Frontend Developer who believes that great code starts with great design.",
        "In this vibrant red workspace, I focus on UI/UX design, prototyping, and creating visually stunning interfaces. I work closely with design systems and ensure pixel-perfect implementations.",
        "The bold red accents inspire innovative solutions and push the boundaries of what's possible in web design. Here, aesthetics and performance go hand in hand."
      ]
    },
    {
      // Room 3 - Learning Corner (Teal)
      paragraphs: [
        "This is my continuous learning hub, where I stay ahead of the rapidly evolving tech landscape. As a Frontend Developer, I believe learning never stops.",
        "In this teal-themed space, I explore emerging technologies, contribute to open-source projects, and experiment with new frameworks and tools. It's where curiosity drives innovation.",
        "The calming teal environment promotes focus and deep learning. Here, I transform challenges into opportunities for growth and skill development."
      ]
    },
    {
      // Room 4 - Collaboration Space (Blue)
      paragraphs: [
        "Welcome to my collaboration headquarters, where teamwork and communication take center stage. I'm a Frontend Developer who thrives in collaborative environments.",
        "This blue-themed workspace is optimized for team meetings, code reviews, and pair programming sessions. I believe the best solutions emerge from collective creativity and shared expertise.",
        "The professional blue atmosphere encourages clear communication and productive discussions. Here, individual skills combine to create extraordinary results."
      ]
    },
    {
      // Room 5 - Creative Lab (Green)
      paragraphs: [
        "Step into my creative laboratory, where experimentation and innovation flourish. I'm a Frontend Developer who loves pushing the boundaries of web technology.",
        "In this green-themed experimental space, I prototype new ideas, build proof-of-concepts, and explore unconventional approaches to common problems. It's where creativity meets technical excellence.",
        "The fresh green setting fosters innovation and fresh perspectives. Here, I turn wild ideas into working prototypes and discover new possibilities in web development."
      ]
    }
  ];

  // Colors for navigation boxes (matching monitor colors)
  const originalBoxColors = ['#E6C068', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'];
  const boxColors = Array(duplicateCount).fill(originalBoxColors).flat();

  const handleRoomSelect = (displayIndex: number) => {
    const actualRoomIndex = displayIndex % originalTotalRooms;
    setCurrentRoomIndex(actualRoomIndex);
    
    // Smooth scroll to clicked box
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      isProgrammaticScroll.current = true;
      
      const boxWidth = 32 + 16; // w-8 (32px) + gap-4 (16px)
      const containerWidth = scrollContainer.clientWidth;
      const targetScrollLeft = (displayIndex * boxWidth) - (containerWidth / 2) + (boxWidth / 2);
      
      scrollContainer.scrollTo({ 
        left: targetScrollLeft, 
        behavior: 'smooth' 
      });
      
      // Reset flag after smooth scroll completes
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 600);
    }
  };

  const isProgrammaticScroll = useRef(false);

  // Infinite scroll logic
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const boxWidth = 32 + 16; // w-8 (32px) + gap-4 (16px)
    const setWidth = originalTotalRooms * boxWidth;

    const handleScroll = () => {
      // Prevent infinite scroll jumps during programmatic scrolling
      if (isProgrammaticScroll.current) {
        return;
      }
      
      const { scrollLeft } = scrollContainer;
      
      // If scrolled into the first 3 sets, jump to the central set
      if (scrollLeft < setWidth * 3) {
        isProgrammaticScroll.current = true;
        scrollContainer.scrollLeft = scrollLeft + setWidth * 3;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            isProgrammaticScroll.current = false;
          });
        });
      }
      // If scrolled into the last 3 sets, jump to the central set
      else if (scrollLeft >= setWidth * 4) {
        isProgrammaticScroll.current = true;
        scrollContainer.scrollLeft = scrollLeft - setWidth * 3;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            isProgrammaticScroll.current = false;
          });
        });
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    
    // Initial positioning to central (4th) set
    isProgrammaticScroll.current = true;
    const initialScroll = setWidth * 3;
    scrollContainer.scrollLeft = initialScroll;
    
    // Reset flag after initial positioning
    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 100);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [originalTotalRooms]);

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

  return (
    <div className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-32 bg-black">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {/* About Me Section */}
          <div className="self-center -mt-12">
            <div className="relative animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                About Me
              </h2>
              <div className="w-20 h-1 bg-[#E6C068] absolute -top-4"></div>
            </div>

            <div className="space-y-6 text-gray-300 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-300">
              {aboutMeContent[currentRoomIndex].paragraphs.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>

          </div>

          {/* 3D Room Section */}
          <div className="animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-400">
            {/* 3D Room Container */}
            <Room3D roomIndex={currentRoomIndex} key={currentRoomIndex} />
            
            {/* Navigation Boxes */}
            <div className="flex justify-center mt-10">
              <div className="w-[224px] overflow-hidden">
                <div 
                  ref={scrollContainerRef}
                  className="flex items-center gap-4 overflow-x-auto py-4 scrollbar-hide px-2"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {Array.from({ length: totalRooms }).map((_, index) => (
                    <div
                      key={index}
                      onClick={() => handleRoomSelect(index)}
                      className={`w-8 h-8 rounded-lg cursor-pointer transition-all duration-300 flex-shrink-0 ${
                        currentRoomIndex === (index % originalTotalRooms)
                          ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-black shadow-lg transform'
                          : 'hover:scale-110 opacity-70 hover:opacity-100'
                      }`}
                      style={{ backgroundColor: boxColors[index] }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};