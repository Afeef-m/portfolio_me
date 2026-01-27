"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function WireObject() {
  return (
    <Float speed={1} rotationIntensity={0.6} floatIntensity={0.4}>
      <mesh>
        <torusKnotGeometry args={[1.2, 0.35, 120, 16]} />
        <meshBasicMaterial
          color="#111827"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  );
}

export default function Wireframe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
    >
      <WireObject />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  );
}
