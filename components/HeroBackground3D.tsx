"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Generate random particles in a sphere
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 2 + Math.random() * 2;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  // Mouse move handler
  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    });
  }

  useFrame((state) => {
    if (ref.current) {
      // Rotate particles
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.075;

      // Mouse interaction
      ref.current.rotation.x += mouseRef.current.y * 0.0005;
      ref.current.rotation.y += mouseRef.current.x * 0.0005;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6366f1"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingOrbs() {
  const orb1Ref = useRef<THREE.Mesh>(null);
  const orb2Ref = useRef<THREE.Mesh>(null);
  const orb3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (orb1Ref.current) {
      orb1Ref.current.position.x = Math.sin(t * 0.5) * 1.5;
      orb1Ref.current.position.y = Math.cos(t * 0.3) * 1.5;
      orb1Ref.current.position.z = Math.sin(t * 0.4) * 0.5;
    }

    if (orb2Ref.current) {
      orb2Ref.current.position.x = Math.cos(t * 0.4) * 2;
      orb2Ref.current.position.y = Math.sin(t * 0.5) * 1;
      orb2Ref.current.position.z = Math.cos(t * 0.3) * 0.5;
    }

    if (orb3Ref.current) {
      orb3Ref.current.position.x = Math.sin(t * 0.3) * 1.8;
      orb3Ref.current.position.y = Math.cos(t * 0.4) * 1.2;
      orb3Ref.current.position.z = Math.sin(t * 0.5) * 0.3;
    }
  });

  return (
    <>
      <mesh ref={orb1Ref}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#6366f1"
          emissive="#6366f1"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>
      <mesh ref={orb2Ref}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>
      <mesh ref={orb3Ref}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial
          color="#ec4899"
          emissive="#ec4899"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>
    </>
  );
}

export default function HeroBackground3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        <ParticleField />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
}
