'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import {
  Float,
  useGLTF,
  OrbitControls,
  Environment,
  ContactShadows
} from '@react-three/drei';
import { useMemo, useRef } from 'react';

// 3D model loader
function RotatingModel() {
  const ref = useRef();
  const { scene } = useGLTF('/drone.glb');
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.3;
  });

  // Enable shadows on all meshes
  scene.traverse(o => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
      if (o.material && 'envMapIntensity' in o.material) {
        o.material.envMapIntensity = 1.0;
      }
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.4}
      position={[0, 1, 0]}
    />
  );
}

// Starfield background
function Starfield({ count = 1500 }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} />
    </points>
  );
}

export default function HeroCanvas({ children }) {
  return (
    <div className="relative w-full h-[72vh] md:h-[80vh] rounded-2xl overflow-hidden ring-1 ring-white/10">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <OrbitControls enableDamping makeDefault />
        <Environment preset="city" />
        <Float speed={1.5} rotationIntensity={1.0} floatIntensity={1.0}>
          <RotatingModel />
        </Float>
        <Starfield />
        <ContactShadows
          opacity={0.4}
          scale={10}
          blur={2.5}
          far={10}
        />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/10 to-slate-950"></div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto max-w-3xl px-6">{children}</div>
      </div>
    </div>
  );
}

// Preload the model for faster loading
useGLTF.preload('/drone.glb');
