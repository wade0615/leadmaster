"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// 旋轉的立方體
export function RotatingBox({ 
  position, 
  color = "#DA1B0A",
  size = [1, 1, 1] as [number, number, number]
}: { 
  position: [number, number, number];
  color?: string;
  size?: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

// 旋轉的球體
export function RotatingSphere({ 
  position, 
  color = "#4F4035",
  radius = 0.5
}: { 
  position: [number, number, number];
  color?: string;
  radius?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

// 旋轉的八面體
export function RotatingOctahedron({
  position,
  color = "#8B4513",
  radius = 0.5
}: {
  position: [number, number, number];
  color?: string;
  radius?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.7;
      meshRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[radius]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

// 旋轉的圓柱體
export function RotatingCylinder({
  position,
  color = "#228B22",
  radius = 0.5,
  height = 1
}: {
  position: [number, number, number];
  color?: string;
  radius?: number;
  height?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <cylinderGeometry args={[radius, radius, height, 16]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

// 旋轉的圓錐體
export function RotatingCone({ 
  position, 
  color = "#FF6347",
  radius = 0.5,
  height = 1
}: { 
  position: [number, number, number];
  color?: string;
  radius?: number;
  height?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <coneGeometry args={[radius, height, 16]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

// 旋轉的圓環
export function RotatingTorus({ 
  position, 
  color = "#DA1B0A",
  radius = 1,
  tube = 0.3
}: { 
  position: [number, number, number];
  color?: string;
  radius?: number;
  tube?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[radius, tube, 16, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

// 膠囊體
export function RotatingCapsule({ 
  position, 
  color = "#9B59B6",
  radius = 0.5,
  length = 1
}: { 
  position: [number, number, number];
  color?: string;
  radius?: number;
  length?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.z += delta * 0.6;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <capsuleGeometry args={[radius, length]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

// 管狀體
export function RotatingTube({ 
  position, 
  color = "#E67E22",
  radius = 0.5,
  length = 2
}: { 
  position: [number, number, number];
  color?: string;
  radius?: number;
  length?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.z += delta * 0.3;
    }
  });

  // 創建一個簡單的管狀路徑
  const curve = new THREE.EllipseCurve(
    0, 0,
    radius, radius,
    0, 2 * Math.PI,
    false,
    0
  );

  const points = curve.getPoints(50);
  const geometry = new THREE.TubeGeometry(
    new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(p.x, 0, p.y))),
    100,
    0.1,
    8,
    false
  );

  return (
    <mesh ref={meshRef} position={position}>
      <primitive object={geometry} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
