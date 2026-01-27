"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function Sphere() {
  return (
    <Float speed={0.8} rotationIntensity={0.5} floatIntensity={0.4}>
      <mesh>
        <sphereGeometry args={[1.4, 32, 32]} />
        <meshBasicMaterial
          wireframe
          color="#111827"
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

export default function GridSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
      <Sphere />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  );
}
