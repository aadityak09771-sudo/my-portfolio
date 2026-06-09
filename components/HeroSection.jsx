"use client";

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const InteractiveBlob = () => {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    
    const targetScale = hovered ? 1.3 : 1;
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale), 
      delta * 5
    );
  });

  return (
    <Sphere 
      ref={meshRef} 
      args={[1, 100, 200]} 
      onPointerOver={() => setHover(true)} 
      onPointerOut={() => setHover(false)}
    >
      <MeshDistortMaterial 
        color={hovered ? "#00ffcc" : "#4f46e5"} 
        attach="material" 
        distort={0.6}
        speed={2.5}  
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 2D HTML Overlay */}
      <div className="absolute z-10 text-center pointer-events-none">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-white drop-shadow-lg">
          Aaditya Kumar
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-widest text-indigo-300 drop-shadow-md">
          CREATIVE DEVELOPER
        </p>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0 cursor-pointer">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={2} />
          <InteractiveBlob />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 z-10 animate-bounce text-white/50">
        <p className="text-sm tracking-widest">SCROLL DOWN</p>
      </div>
    </div>
  );
}
