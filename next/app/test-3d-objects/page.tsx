"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import {
  RotatingBox,
  RotatingSphere,
  RotatingOctahedron,
  RotatingCylinder,
  RotatingCone,
  RotatingTorus,
  RotatingCapsule,
  RotatingChefHatSpatula,
  RotatingSpanner,
} from "@/components/3d/3DObjects";
import * as THREE from "three";

function TestScene() {
  return (
    <>
      {/* 環境光 */}
      <ambientLight intensity={0.6} />

      {/* 定向光 */}
      <directionalLight position={[20, 20, 0]} intensity={0.2} castShadow />

      {/* 點光源 */}
      <pointLight
        position={[-5, 5, 5]}
        intensity={80}
        color="#fff"
        castShadow
      />

      <RotatingSpanner />

      {/* 地面 */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#f0f0f0" side={THREE.DoubleSide} />
      </mesh>

      {/* 軌道控制器 */}
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
    </>
  );
}

export default function Test3DObjectsPage() {
  return (
    <div className="w-full h-screen bg-black">
      <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <h1 className="text-xl font-bold text-gray-800 mb-2">
          所有 3D 物件測試
        </h1>
        <p className="text-sm text-gray-600">測試所有 3D 物件平台</p>
      </div>

      <Canvas
        camera={{
          position: [10, 10, 20], // 向後移動相機
          fov: 60,
          near: 1,
          far: 100,
        }}
        shadows
      >
        <TestScene />
      </Canvas>
    </div>
  );
}
