"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree, Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRingStore } from "@/store/ringStore";
import {
  RotatingBox,
  RotatingSphere,
  RotatingOctahedron,
  RotatingCylinder,
  RotatingCone,
} from "./3DObjects";
import * as THREE from "three";

// 簡化的場景組件
function SimpleScene() {
  const { panels, currentPanel } = useRingStore();
  const controlsRef = useRef<any>(null);

  // 根據當前面板返回對應的 3D 物件
  const getCurrentPanelObjects = () => {
    const panelSlug = panels[currentPanel]?.slug;

    switch (panelSlug) {
      case "home":
        return (
          <>
            <RotatingBox
              position={[0, 1, 0]}
              color="#DA1B0A"
              size={[1.5, 1.5, 1.5]}
            />
            <RotatingSphere
              position={[2, 0.5, 0]}
              color="#4F4035"
              radius={0.8}
            />
          </>
        );
      case "about":
        return (
          <>
            <RotatingOctahedron
              position={[0, 1, 0]}
              color="#8B4513"
              radius={0.8}
            />
            <RotatingCylinder
              position={[2, 0, 0]}
              color="#228B22"
              radius={0.6}
              height={1.5}
            />
          </>
        );
      case "agent":
        return (
          <>
            <RotatingCone
              position={[0, 1, 0]}
              color="#FF6347"
              radius={0.8}
              height={1.5}
            />
            <RotatingBox
              position={[2, 0, 0]}
              color="#E67E22"
              size={[1, 1, 1]}
            />
          </>
        );
      case "projects":
        return (
          <>
            <RotatingSphere position={[0, 1, 0]} color="#3498DB" radius={0.8} />
            <RotatingOctahedron
              position={[2, 0, 0]}
              color="#E74C3C"
              radius={0.6}
            />
          </>
        );
      case "recruitment":
        return (
          <>
            <RotatingBox
              position={[0, 1, 0]}
              color="#34495E"
              size={[1.2, 1.2, 1.2]}
            />
            <RotatingCone
              position={[2, 0, 0]}
              color="#E67E22"
              radius={0.7}
              height={1.3}
            />
          </>
        );
      default:
        return (
          <>
            <RotatingBox position={[0, 1, 0]} color="#DA1B0A" />
            <RotatingSphere position={[2, 0, 0]} color="#4F4035" />
          </>
        );
    }
  };

  return (
    <>
      {/* 環境光 */}
      <ambientLight intensity={0.6} />

      {/* 定向光 */}
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* 點光源 */}
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#DA1B0A" />

      {/* 根據當前面板顯示的 3D 物件 */}
      {getCurrentPanelObjects()}

      {/* 中心裝飾 */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.1, 16]} />
        <meshStandardMaterial color="#DA1B0A" />
      </mesh>

      {/* 軌道控制器 */}
      <OrbitControls
        ref={controlsRef}
        enableZoom={true}
        enablePan={true}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(Math.PI * 3) / 4}
        autoRotate={false}
      />
    </>
  );
}

// 3d 主組件
export default function RingShowcase() {
  const { goToNext, goToPrevious, panels, currentPanel } = useRingStore();

  // 鍵盤事件處理
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  // 處理 URL hash 變化
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const panelIndex = panels.findIndex((panel) => panel.slug === hash);
      if (panelIndex !== -1) {
        useRingStore.getState().setCurrentPanel(panelIndex);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [panels]);

  return (
    <div className="w-full h-screen relative bg-gray-100">
      {/* 導航按鈕 */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-2 bg-white/90 rounded-lg p-2 shadow-lg">
          {panels.map((panel, index) => (
            <button
              key={panel.id}
              onClick={() => {
                useRingStore.getState().goToPanel(index);
              }}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                index === currentPanel
                  ? "bg-red-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {panel.title}
            </button>
          ))}
        </div>
      </div>

      {/* 左右切換按鈕 */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 rounded-full p-3 shadow-lg hover:bg-white transition-colors"
        aria-label="上一個面板"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 rounded-full p-3 shadow-lg hover:bg-white transition-colors"
        aria-label="下一個面板"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* 3D 場景 */}
      <Canvas
        camera={{
          position: [0, 3, 8], // Y 軸從 2 調整為 3，往上移動 1 單位
          fov: 60,
          near: 0.1,
          far: 1000,
        }}
        shadows
      >
        <SimpleScene />
      </Canvas>

      {/* 當前面板資訊 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-white/90 rounded-lg p-4 shadow-lg max-w-md text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {panels[currentPanel]?.content.title}
          </h3>
          <p className="text-gray-600">
            {panels[currentPanel]?.content.description}
          </p>
        </div>
      </div>
    </div>
  );
}
