"use client";

import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(onComplete, 500); // 延遲 500ms 後完成載入
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-leadmaster-red z-50 flex items-center justify-center transition-opacity duration-500 ${
        isComplete ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center text-white">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 font-vollkorn">
            立麥餐飲設備
          </h1>
          <p className="text-xl">LEADMASTER KITCHEN</p>
        </div>

        {/* 載入進度條 */}
        <div className="w-64 h-2 bg-white/30 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-white rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-sm opacity-80">{progress}%</p>

        {isComplete && <p className="text-sm mt-4 animate-pulse">載入完成！</p>}
      </div>
    </div>
  );
}
