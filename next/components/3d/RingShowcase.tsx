"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree, Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRingStore } from "@/store/ringStore";
import {
  HomePanel,
  AboutPanel,
  AgentPanel,
  ProjectsPanel,
  RecruitmentPanel,
} from "./panels";
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
        return <HomePanel />;
      case "about":
        return <AboutPanel />;
      case "agent":
        return <AgentPanel />;
      case "projects":
        return <ProjectsPanel />;
      case "recruitment":
        return <RecruitmentPanel />;
      default:
        return <HomePanel />;
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
      {/* <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(Math.PI * 3) / 4}
        autoRotate={false}
      /> */}
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
    <div className="w-full min-h-screen relative bg-gray-100">
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
      <section className="fixed top-0 left-0 w-full h-full outline-none">
        <Canvas
          camera={{
            position: [0, 3, 8], // Y 軸從 2 調整為 3，往上移動 1 單位
            fov: 60,
            near: 0.1,
            far: 100,
          }}
          shadows
        >
          <SimpleScene />
        </Canvas>
      </section>

      <div className="w-full h-screen">123</div>
      <div className="w-full h-screen">123</div>
      <div className="w-full h-screen">123</div>

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
