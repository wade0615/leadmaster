import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Points,
  BufferGeometry,
  Float32BufferAttribute,
  PointsMaterial,
} from "three";

interface ParticleSystemProps {
  count: number;
  materialColor: string;
  objectsDistance: number;
  sectionCount: number;
}

export function ParticleSystem({
  count,
  materialColor,
  objectsDistance,
  sectionCount,
}: ParticleSystemProps) {
  const pointsRef = useRef<Points>(null);

  const particlesGeometry = useMemo(() => {
    const geometry = new BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] =
        objectsDistance * 0.5 - Math.random() * objectsDistance * sectionCount;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
    return geometry;
  }, [count, objectsDistance, sectionCount]);

  const particlesMaterial = useMemo(() => {
    return new PointsMaterial({
      color: materialColor,
      sizeAttenuation: true,
      size: 0.03,
    });
  }, [materialColor]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // 可以添加粒子動畫邏輯
    }
  });

  return (
    <points
      ref={pointsRef}
      geometry={particlesGeometry}
      material={particlesMaterial}
    />
  );
}
