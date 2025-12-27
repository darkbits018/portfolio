import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import { Group } from 'three';

interface GLBModelLoaderProps {
  modelPath: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

const GLBModel: React.FC<GLBModelLoaderProps> = ({ 
  modelPath, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0], 
  scale = [1, 1, 1] 
}) => {
  const { scene } = useGLTF(modelPath);
  
  return (
    <primitive 
      object={scene} 
      position={position} 
      rotation={rotation} 
      scale={scale} 
    />
  );
};

export const GLBModelLoader: React.FC<GLBModelLoaderProps> = (props) => {
  return (
    <Suspense fallback={<LoadingPlaceholder />}>
      <GLBModel {...props} />
    </Suspense>
  );
};

const LoadingPlaceholder: React.FC = () => {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#E6C068" wireframe />
    </mesh>
  );
};

// Preload the model (optional - uncomment when you have a model)
// useGLTF.preload('/path/to/your/model.glb');