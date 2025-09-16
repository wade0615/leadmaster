"use client";

import { useState } from "react";
import { Metadata } from "next";
import RingShowcase from "@/components/3d/RingShowcase";
import LoadingScreen from "@/components/LoadingScreen";

export default function ThreeDPage() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="w-full h-screen relative">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {!isLoading && <RingShowcase />}
    </div>
  );
}
