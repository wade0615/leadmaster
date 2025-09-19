"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  RotatingBox,
  RotatingSphere,
  RotatingOctahedron,
  RotatingCylinder,
  RotatingCone,
  RotatingTorus,
  RotatingCapsule,
} from "@/components/3d/3DObjects";

function TestScene() {
  return (
    <>
      {/* 環境光 */}
      <ambientLight intensity={0.6} />

      {/* 定向光 */}
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

      {/* 點光源 */}
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#DA1B0A" />

      {/* 測試 3D 物件 - 分散排列 */}
      <RotatingBox
        position={[0, 1, 0]}
        color="#DA1B0A"
        size={[1.5, 1.5, 1.5]}
      />
      <RotatingSphere position={[3, 0.5, 0]} color="#4F4035" radius={0.8} />
      <RotatingOctahedron position={[-3, 1, 0]} color="#8B4513" radius={0.8} />
      <RotatingCylinder
        position={[0, 0, 3]}
        color="#228B22"
        radius={0.6}
        height={1.5}
      />
      <RotatingCone
        position={[0, 0, -3]}
        color="#FF6347"
        radius={0.8}
        height={1.5}
      />
      <RotatingTorus position={[0, -1, 0]} color="#DA1B0A" radius={1.2} />
      <RotatingCapsule
        position={[2, 0, 2]}
        color="#9B59B6"
        radius={0.5}
        length={1.2}
      />

      {/* 地面 */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>

      {/* 軌道控制器 */}
      {/* <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} /> */}
    </>
  );
}

export default function Test3DObjectsPage() {
  return (
    <div className="w-full h-screen">
      <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <h1 className="text-xl font-bold text-gray-800 mb-2">
          3D 物件測試場景
        </h1>
        <p className="text-sm text-gray-600">測試所有 3D 物件是否正常顯示</p>
        <div className="mt-2 text-xs text-gray-500">
          <p>• 紅色立方體 (中心)</p>
          <p>• 棕色球體 (右側)</p>
          <p>• 棕色八面體 (左側)</p>
          <p>• 綠色圓柱體 (前方)</p>
          <p>• 橙色圓錐體 (後方)</p>
          <p>• 紅色圓環 (下方)</p>
          <p>• 紫色膠囊體 (右前方)</p>
        </div>
      </div>

      <Canvas
        camera={{
          position: [0, 2, 8], // 向後移動相機
          fov: 60,
          near: 0.1,
          far: 1000,
        }}
        shadows
      >
        <TestScene />
      </Canvas>
    </div>
  );
}
