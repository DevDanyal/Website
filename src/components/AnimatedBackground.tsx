"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

function ParticleSystem() {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport } = useThree();
  
  const geometry = useMemo(() => {
    const count = 300;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const colorPalette = [
      new THREE.Color("#3B82F6"),
      new THREE.Color("#0EA5E9"),
      new THREE.Color("#8B5CF6"),
      new THREE.Color("#EC4899"),
    ];
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * viewport.width * 3;
      positions[i * 3 + 1] = (Math.random() - 0.5) * viewport.height * 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [viewport]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial size={0.08} vertexColors transparent opacity={0.8} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function GlowingTorus() {
  const torusRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.2;
      torusRef.current.rotation.y = t * 0.3;
    }
    if (lightRef.current) {
      lightRef.current.intensity = 1.5 + Math.sin(t * 2) * 0.5;
    }
  });

  return (
    <group position={[0, 0, -12]}>
      <mesh ref={torusRef}>
        <torusGeometry args={[5, 0.15, 32, 100]} />
        <meshBasicMaterial color="#3B82F6" />
      </mesh>
      <mesh>
        <torusGeometry args={[5, 0.3, 32, 100]} />
        <meshBasicMaterial color="#3B82F6" transparent opacity={0.2} />
      </mesh>
      <pointLight ref={lightRef} color="#3B82F6" intensity={1.5} distance={20} />
    </group>
  );
}

function FloatingGeometries() {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
      <mesh position={[8, 3, -8]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#8B5CF6" wireframe />
      </mesh>
      <mesh position={[-10, -2, -10]}>
        <dodecahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial color="#EC4899" wireframe />
      </mesh>
      <mesh position={[12, -4, -15]}>
        <tetrahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial color="#0EA5E9" wireframe />
      </mesh>
      <mesh position={[-8, 5, -12]}>
        <icosahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial color="#3B82F6" wireframe />
      </mesh>
    </Float>
  );
}

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.5;
      meshRef.current.rotation.x = t * 0.3;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.7;
      innerRef.current.rotation.z = t * 0.5;
    }
  });

  return (
    <group position={[-15, 0, -18]}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[4, 32, 32]} />
        <meshStandardMaterial color="#3B82F6" wireframe transparent opacity={0.4} />
      </mesh>
      <mesh ref={innerRef}>
        <sphereGeometry args={[3.5, 32, 32]} />
        <meshStandardMaterial color="#8B5CF6" wireframe transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

function GridFloor() {
  return (
    <group position={[0, -15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper args={[100, 50, "#1E293B", "#0F172A"]} />
      <mesh>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial color="#0A0A0F" transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

function NeuralNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const [positions, linePositions] = useMemo(() => {
    const nodeCount = 50;
    const positions = new Float32Array(nodeCount * 3);
    const linePositions: number[] = [];
    
    const layers = [
      { count: 8, x: -12 },
      { count: 12, x: -4 },
      { count: 12, x: 4 },
      { count: 8, x: 12 },
    ];
    
    const nodePositions: { x: number; y: number; z: number }[] = [];
    
    layers.forEach((layer) => {
      for (let i = 0; i < layer.count; i++) {
        const x = layer.x;
        const y = ((i / layer.count) - 0.5) * 10;
        const z = (Math.random() - 0.5) * 3;
        positions[nodePositions.length * 3] = x;
        positions[nodePositions.length * 3 + 1] = y;
        positions[nodePositions.length * 3 + 2] = z;
        nodePositions.push({ x, y, z });
      }
    });
    
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const dist = Math.abs(nodePositions[i].x - nodePositions[j].x);
        if (dist < 10 && Math.random() > 0.85) {
          linePositions.push(
            nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
            nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
          );
        }
      }
    }
    
    return [positions, new Float32Array(linePositions)];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    return geo;
  }, [linePositions]);

  return (
    <group position={[5, 5, -25]}>
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial size={0.15} color="#0EA5E9" transparent opacity={0.8} sizeAttenuation />
      </points>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#3B82F6" transparent opacity={0.2} />
      </lineSegments>
    </group>
  );
}

export default function AnimatedBackground({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[20, 20, 20]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-20, -20, 20]} intensity={0.4} color="#8B5CF6" />
        <fog attach="fog" args={["#0A0A0F", 15, 50]} />
        <ParticleSystem />
        <GlowingTorus />
        <FloatingGeometries />
        <AnimatedSphere />
        <NeuralNetwork />
        <GridFloor />
      </Canvas>
    </div>
  );
}
