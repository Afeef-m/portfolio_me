"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment } from "@react-three/drei";

import { useTexture } from "@react-three/drei";

function HeroObject() {
  const galaxyTexture = useTexture("/textures/galaxy.jpg");

  return (
    <Float speed={0.8} rotationIntensity={0.4} floatIntensity={0.6}>
      {/* INNER GLOWING GALAXY */}
      <mesh scale={0.95}>
        <sphereGeometry args={[1.4, 64, 64]} />
        <meshStandardMaterial
          map={galaxyTexture}
          emissive="#ffb703"
          emissiveMap={galaxyTexture}
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* OUTER GLASS SPHERE */}
      <mesh>
        <sphereGeometry args={[1.45, 64, 64]} />
        <meshPhysicalMaterial
          transmission={1}
          thickness={0.4}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
}

export default function Globe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      className="w-full h-full"
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />
      <Environment preset="studio" />

      <HeroObject />

      <Environment preset="city" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  );
}
