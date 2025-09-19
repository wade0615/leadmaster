import { useRef, useEffect, useState, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MeshToonMaterial, TextureLoader, NearestFilter } from "three";
import { Torus, Cone, TorusKnot, RotatingPen } from "../3DObjects";
import { ParticleSystem } from "../ParticleSystem";
import * as THREE from "three";
import gsap from "gsap";

export default function HomePanel() {
  const { camera, size } = useThree();
  const [materialColor, setMaterialColor] = useState("#ffeded");
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  const cameraGroupRef = useRef<THREE.Group>(null);
  const mesh1Ref = useRef<THREE.Mesh>(null);
  const mesh2Ref = useRef<THREE.Mesh>(null);
  const mesh3Ref = useRef<THREE.Mesh>(null);

  const objectsDistance = 10;
  const sectionMeshes = useMemo(() => [mesh1Ref, mesh2Ref, mesh3Ref], []);

  // 創建材質
  const material = useRef<MeshToonMaterial>(
    new MeshToonMaterial({
      color: materialColor,
    })
  );

  // 更新材質顏色
  useEffect(() => {
    if (material.current) {
      material.current.color.set(materialColor);
    }
  }, [materialColor]);

  // 滑鼠移動事件
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursor({
        x: event.clientX / size.width - 0.5,
        y: event.clientY / size.height - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size.width, size.height]);

  // 滾動事件
  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);

      const newSection = Math.round(newScrollY / size.height);
      if (newSection !== currentSection) {
        setCurrentSection(newSection);

        // GSAP 動畫
        const currentMesh = sectionMeshes[newSection]?.current;
        if (currentMesh) {
          gsap.to(currentMesh.rotation, {
            duration: 1.5,
            ease: "power2.inOut",
            x: "+=6",
            y: "+=3",
            z: "+=1.5",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection, size.height, sectionMeshes]);

  // 動畫循環
  useFrame((state, delta) => {
    // 相機位置動畫
    if (cameraGroupRef.current) {
      camera.position.y = (-scrollY / size.height) * objectsDistance;

      const parallaxX = cursor.x * 0.5;
      const parallaxY = -cursor.y * 0.5;

      cameraGroupRef.current.position.x +=
        (parallaxX - cameraGroupRef.current.position.x) * 5 * delta;
      cameraGroupRef.current.position.y +=
        (parallaxY - cameraGroupRef.current.position.y) * 5 * delta;
    }
  });

  return (
    <group ref={cameraGroupRef}>
      {/* 三個主要 3D 物件 */}
      {/* <Torus
        position={[5, -objectsDistance * 0, 0]}
        material={material.current}
        ref={mesh1Ref}
      /> */}
      <RotatingPen
        position={[5, -objectsDistance * 0, 0]}
        penBodyColor="#4ecdc4"
        penTipColor="#2c3e50"
        penCapColor="#e74c3c"
      />
      <Cone
        position={[-5, -objectsDistance * 1, 0]}
        material={material.current}
        ref={mesh2Ref}
      />
      <TorusKnot
        position={[5, -objectsDistance * 2, 0]}
        material={material.current}
        ref={mesh3Ref}
      />

      {/* 粒子系統 */}
      <ParticleSystem
        count={200}
        materialColor={materialColor}
        objectsDistance={objectsDistance}
        sectionCount={3}
      />

      {/* 光源 */}
      <directionalLight position={[1, 1, 0]} intensity={3} color="#ffffff" />
    </group>
  );
}
