import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import { Mesh, Vector3, Color } from 'three';

interface Skill {
  name: string;
  proficiency: 'expert' | 'proficient' | 'familiar';
  color: string;
  description: string;
  category: string;
}

interface SkillBubbles3DProps {
  skills: Skill[];
  onSkillSelect: (skill: Skill) => void;
  selectedSkill: Skill | null;
}

interface SkillWordProps {
  skill: Skill;
  position: [number, number, number];
  onSelect: (skill: Skill) => void;
  isSelected: boolean;
}

const SkillWord: React.FC<SkillWordProps> = ({ skill, position, onSelect, isSelected }) => {
  const groupRef = useRef<any>(null);
  const cardRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
      
      // Individual card rotation
      groupRef.current.rotation.x += 0.003;
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.z += 0.002;
    }
  });

  const getFontSize = () => {
    switch (skill.proficiency) {
      case 'expert': return 0.4;
      case 'proficient': return 0.3;
      case 'familiar': return 0.2;
      default: return 0.25;
    }
  };

  const getTextColor = () => {
    if (isSelected || hovered) return skill.color;
    return 'white';
  };

  const getEmissiveIntensity = () => {
    if (isSelected) return 0.5;
    if (hovered) return 0.3;
    return 0.1;
  };

  const getScale = () => {
    if (isSelected) return 1.3;
    if (hovered) return 1.1;
    return 1;
  };

  const getCardEmissiveIntensity = () => {
    if (isSelected) return 0.3;
    if (hovered) return 0.2;
    return 0.05;
  };

  const getCardColor = () => {
    const baseColor = new Color(skill.color);
    if (isSelected || hovered) {
      return baseColor.multiplyScalar(0.3); // Darker version of skill color
    }
    return new Color('#2A2F35'); // Default dark gray
  };

  return (
    <group 
      ref={groupRef} 
      position={position}
      scale={getScale()}
      onClick={() => onSelect(skill)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Background Card/Plane */}
      <mesh ref={cardRef} position={[0, 0, -0.02]}>
        <planeGeometry args={[getFontSize() * 4, getFontSize() * 1.5]} />
        <meshStandardMaterial
          color={getCardColor()}
          emissive={new Color(skill.color)}
          emissiveIntensity={getCardEmissiveIntensity()}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Skill Text */}
      <Text
        fontSize={getFontSize()}
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 0]}
      >
        {skill.name}
        <meshStandardMaterial
          color={getTextColor()}
          emissive={new Color(getTextColor())}
          emissiveIntensity={getEmissiveIntensity()}
        />
      </Text>
    </group>
  );
};

export const SkillBubbles3D: React.FC<SkillBubbles3DProps> = ({ skills, onSkillSelect, selectedSkill }) => {
  // Generate positions for skills in a 3D space
  const generatePositions = (skillCount: number): [number, number, number][] => {
    const positions: [number, number, number][] = [];
    const radius = 3;
    
    for (let i = 0; i < skillCount; i++) {
      // Use golden angle for better distribution
      const goldenAngle = Math.PI * (3 - Math.sqrt(5));
      const y = 1 - (i / (skillCount - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      
      const x = Math.cos(theta) * radiusAtY * radius;
      const z = Math.sin(theta) * radiusAtY * radius;
      
      positions.push([x, y * radius, z]);
    }
    
    return positions;
  };

  const positions = generatePositions(skills.length);

  return (
    <div className="h-[500px] w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#E6C068" />
        
        {skills.map((skill, index) => (
          <SkillWord
            key={skill.name}
            skill={skill}
            position={positions[index]}
            onSelect={onSkillSelect}
            isSelected={selectedSkill?.name === skill.name}
          />
        ))}
        
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          maxDistance={12}
          minDistance={4}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};