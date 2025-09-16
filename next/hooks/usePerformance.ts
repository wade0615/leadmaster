"use client";

import { useEffect, useState } from "react";

export function usePerformance() {
  const [fps, setFps] = useState(60);
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    // 檢測設備性能
    const checkPerformance = () => {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

      if (!gl) {
        setIsLowEnd(true);
        return;
      }

      // 檢查 WebGL 支援
      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
      if (debugInfo) {
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        // 簡單的 GPU 檢測
        if (renderer.includes("Intel") || renderer.includes("Mali")) {
          setIsLowEnd(true);
        }
      }

      // 檢查記憶體
      if ("memory" in performance) {
        const memory = (performance as any).memory;
        if (memory.usedJSHeapSize > 50 * 1024 * 1024) {
          // 50MB
          setIsLowEnd(true);
        }
      }
    };

    checkPerformance();
  }, []);

  // FPS 監控
  useEffect(() => {
    let lastTime = performance.now();
    let frameCount = 0;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();

      if (currentTime - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - lastTime)));
        frameCount = 0;
        lastTime = currentTime;
      }

      requestAnimationFrame(measureFPS);
    };

    requestAnimationFrame(measureFPS);
  }, []);

  return {
    fps,
    isLowEnd,
    shouldReduceQuality: isLowEnd || fps < 30,
  };
}
