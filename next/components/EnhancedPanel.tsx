"use client";

import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface EnhancedPanelProps {
  panel: any;
  position: [number, number, number];
  onClick: () => void;
  isActive: boolean;
}

export default function EnhancedPanel({
  panel,
  position,
  onClick,
  isActive,
}: EnhancedPanelProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Group>(null);
  const { camera } = useThree();
  const [hovered, setHovered] = useState(false);

  // 暫時移除背景圖片載入，使用純色材質
  // const texture = useTexture(panel.content.image || "/images/design2.jpeg");

  useFrame((state) => {
    if (meshRef.current) {
      // 讓面板始終面向相機
      meshRef.current.lookAt(camera.position);

      // 添加微妙的浮動動畫
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;

      // 懸停效果
      if (hovered || isActive) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.1, 1.1, 1.1), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }

    if (textRef.current) {
      textRef.current.lookAt(camera.position);
    }
  });

  return (
    <group position={position}>
      {/* 面板背景 */}
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <planeGeometry args={[4, 3]} />
        <meshStandardMaterial
          color={isActive ? "#DA1B0A" : "#ffffff"}
          transparent
          opacity={0.8}
          side={THREE.DoubleSide}
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>

      {/* 面板邊框 */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[4.2, 3.2]} />
        <meshStandardMaterial
          color={isActive ? "#DA1B0A" : "#4F4035"}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 文字內容 */}
      <group ref={textRef} position={[0, 0, 0.02]}>
        <Text
          position={[0, 0.5, 0]}
          fontSize={0.3}
          color={isActive ? "#DA1B0A" : "#4F4035"}
          anchorX="center"
          anchorY="middle"
          font="Arial, sans-serif"
          fontWeight="bold"
        >
          {panel.content.title}
        </Text>

        <Text
          position={[0, -0.3, 0]}
          fontSize={0.15}
          color="#4F4035"
          anchorX="center"
          anchorY="middle"
          maxWidth={3}
          font="Arial, sans-serif"
        >
          {panel.content.description}
        </Text>
      </group>

      {/* 發光效果 */}
      {isActive && (
        <mesh position={[0, 0, -0.1]}>
          <planeGeometry args={[5, 4]} />
          <meshBasicMaterial
            color="#DA1B0A"
            transparent
            opacity={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
    </group>
  );
}
