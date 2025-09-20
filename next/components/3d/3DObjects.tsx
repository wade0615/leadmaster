import { useRef, forwardRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { GUI } from "lil-gui";

interface RotatingBoxProps {
  position: [number, number, number];
  color: string;
  size: [number, number, number];
}

interface RotatingSphereProps {
  position: [number, number, number];
  color: string;
  radius: number;
}

interface TorusProps {
  position: [number, number, number];
  material: any;
}

interface ConeProps {
  position: [number, number, number];
  material: any;
}

interface TorusKnotProps {
  position: [number, number, number];
  material: any;
}

interface RotatingOctahedronProps {
  position: [number, number, number];
  color: string;
  radius: number;
}

interface RotatingCylinderProps {
  position: [number, number, number];
  color: string;
  radius: number;
  height: number;
}

interface RotatingConeProps {
  position: [number, number, number];
  color: string;
  radius: number;
  height: number;
}

interface RotatingTorusProps {
  position: [number, number, number];
  color: string;
  radius: number;
}

interface RotatingCapsuleProps {
  position: [number, number, number];
  color: string;
  radius: number;
  length: number;
}

interface RotatingPenProps {
  position: [number, number, number];
  color?: string;
  penBodyColor?: string;
  penTipColor?: string;
  penCapColor?: string;
}

interface RotatingChefHatCalculatorProps {
  position: [number, number, number];
  chefHatColor?: string;
  calculatorColor?: string;
  screenColor?: string;
  buttonColor?: string;
  orbitRadius?: number;
  rotationSpeed?: number;
  orbitSpeed?: number;
}

export function RotatingBox({ position, color, size }: RotatingBoxProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={size} />
      <meshToonMaterial color={color} />
    </mesh>
  );
}

export function RotatingSphere({
  position,
  color,
  radius,
}: RotatingSphereProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshToonMaterial color={color} />
    </mesh>
  );
}

export const Torus = forwardRef<Mesh, TorusProps>(
  ({ position, material }, ref) => {
    useFrame((state, delta) => {
      if (ref && typeof ref === "object" && ref.current) {
        ref.current.rotation.x += delta * 0.1;
        ref.current.rotation.y += delta * 0.12;
      }
    });

    return (
      <mesh ref={ref} position={position}>
        <torusGeometry args={[1, 0.4, 16, 60]} />
        <primitive object={material} />
      </mesh>
    );
  }
);

Torus.displayName = "Torus";

export const Cone = forwardRef<Mesh, ConeProps>(
  ({ position, material }, ref) => {
    useFrame((state, delta) => {
      if (ref && typeof ref === "object" && ref.current) {
        ref.current.rotation.x += delta * 0.1;
        ref.current.rotation.y += delta * 0.12;
      }
    });

    return (
      <mesh ref={ref} position={position}>
        <coneGeometry args={[1, 2, 32]} />
        <primitive object={material} />
      </mesh>
    );
  }
);

Cone.displayName = "Cone";

export const TorusKnot = forwardRef<Mesh, TorusKnotProps>(
  ({ position, material }, ref) => {
    useFrame((state, delta) => {
      if (ref && typeof ref === "object" && ref.current) {
        ref.current.rotation.x += delta * 0.1;
        ref.current.rotation.y += delta * 0.12;
      }
    });

    return (
      <mesh ref={ref} position={position}>
        <torusKnotGeometry args={[0.8, 0.35, 100, 16]} />
        <primitive object={material} />
      </mesh>
    );
  }
);

TorusKnot.displayName = "TorusKnot";

export function RotatingOctahedron({
  position,
  color,
  radius,
}: RotatingOctahedronProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[radius, 0]} />
      <meshToonMaterial color={color} />
    </mesh>
  );
}

export function RotatingCylinder({
  position,
  color,
  radius,
  height,
}: RotatingCylinderProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <cylinderGeometry args={[radius, radius, height, 32]} />
      <meshToonMaterial color={color} />
    </mesh>
  );
}

export function RotatingCone({
  position,
  color,
  radius,
  height,
}: RotatingConeProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <coneGeometry args={[radius, height, 32]} />
      <meshToonMaterial color={color} />
    </mesh>
  );
}

export function RotatingTorus({ position, color, radius }: RotatingTorusProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[radius, 0.4, 16, 60]} />
      <meshToonMaterial color={color} />
    </mesh>
  );
}

export function RotatingCapsule({
  position,
  color,
  radius,
  length,
}: RotatingCapsuleProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <capsuleGeometry args={[radius, length, 4, 8]} />
      <meshToonMaterial color={color} />
    </mesh>
  );
}

export function RotatingPen({
  position,
  color = "#ff6b6b",
  penBodyColor = "#4ecdc4",
  penTipColor = "#2c3e50",
  penCapColor = "#e74c3c",
}: RotatingPenProps) {
  const penGroupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (penGroupRef.current) {
      // 讓筆圍繞 Y 軸旋轉
      penGroupRef.current.rotation.y += delta * 0.5;
      penGroupRef.current.rotation.x += delta * 0.1;
      // 添加微妙的浮動效果
      penGroupRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={penGroupRef} position={position}>
      {/* 筆身 - 使用圓柱體 */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 2, 16]} />
        <meshToonMaterial color={penBodyColor} />
      </mesh>

      {/* 筆尖 - 使用圓錐體 */}
      <mesh position={[0, -1.15, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.09, 0.3, 11]} />
        <meshToonMaterial color={penTipColor} />
      </mesh>

      {/* 筆帽 - 使用圓柱體，稍微大一點 */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.4, 16]} />
        <meshToonMaterial color={penCapColor} />
      </mesh>

      {/* 筆帽頂部 - 使用半球體 */}
      <mesh position={[0, 1.45, 0]}>
        <sphereGeometry args={[0.09, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshToonMaterial color={penCapColor} />
      </mesh>

      {/* 筆身裝飾環 */}
      <mesh position={[0, 0.3, 0]}>
        <torusGeometry args={[0.1, 0.02, 8, 16]} />
        <meshToonMaterial color={color} />
      </mesh>

      {/* 筆身裝飾環 2 */}
      <mesh position={[0, -0.3, 0]}>
        <torusGeometry args={[0.1, 0.02, 8, 16]} />
        <meshToonMaterial color={color} />
      </mesh>

      {/* 筆夾 - 使用小盒子 */}
      <mesh position={[0.12, 1.1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.15, 0.02, 0.05]} />
        <meshToonMaterial color={penCapColor} />
      </mesh>
    </group>
  );
}

export function RotatingChefHatCalculator({
  position,
  chefHatColor = "#ffffff",
  calculatorColor = "#2c3e50",
  screenColor = "#34495e",
  buttonColor = "#95a5a6",
  orbitRadius = 3,
  rotationSpeed = 1,
  orbitSpeed = 0.5,
}: RotatingChefHatCalculatorProps) {
  const orbitGroupRef = useRef<THREE.Group>(null);
  const chefHatRef = useRef<THREE.Group>(null);
  const calculatorRef = useRef<THREE.Group>(null);

  // const defaultParams = {
  //   chefHatWrinkles: 20,
  // };
  // const [chefHatParams, setChefHatParams] = useState(defaultParams);
  // const gui = new GUI();

  // const chetHatFolder = gui.addFolder("廚師帽控制器");
  // chetHatFolder.add(chefHatParams, "chefHatWrinkles").min(0).max(40).step(1);

  useFrame((state, delta) => {
    // 公轉 - 整個組合圍繞中心點旋轉
    // if (orbitGroupRef.current) {
    //   orbitGroupRef.current.rotation.y += delta * orbitSpeed;
    // }
    // 廚師帽自轉
    if (chefHatRef.current) {
      chefHatRef.current.rotation.y += delta * rotationSpeed;
      chefHatRef.current.rotation.x += delta * rotationSpeed * 0.1;
    }
    // 計算機自轉
    // if (calculatorRef.current) {
    //   calculatorRef.current.rotation.y += delta * rotationSpeed * 0.8;
    //   calculatorRef.current.rotation.z += delta * rotationSpeed * 0.2;
    // }
  });

  // 監聽參數變化
  // const handleChange = () => {
  //   setChefHatParams({ ...chefHatParams });
  // };

  // 為所有控制器添加變化監聽
  // gui.controllersRecursive().forEach((controller) => {
  //   controller.onChange(handleChange);
  // });

  return (
    <group ref={orbitGroupRef} position={position}>
      {/* 廚師帽組件 */}
      <group ref={chefHatRef} position={[1.5, 0, 0]} rotation={[Math.PI, 0, 0]}>
        {/* 廚師帽主體 - 使用圓柱體 */}
        <mesh position={[0, -1, 0]}>
          <cylinderGeometry args={[0.8, 0.7, 1.5, 16]} />
          <meshToonMaterial color={chefHatColor} />
        </mesh>

        {/* 廚師帽頂部 - 使用圓錐體 */}
        <mesh position={[0, -1.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusKnotGeometry args={[0.3, 0.5, 40]} />
          <meshToonMaterial color={chefHatColor} />
        </mesh>

        {/* 廚師帽底部邊緣 */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.93, 0.9, 0.5, 16]} />
          <meshToonMaterial color={chefHatColor} />
        </mesh>
      </group>

      {/* 計算機組件 */}
      <group ref={calculatorRef} position={[-1.5, 0, 0]}>
        {/* 計算機主體 */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.2, 0.8, 0.2]} />
          <meshToonMaterial color={calculatorColor} />
        </mesh>

        {/* 計算機螢幕 */}
        <mesh position={[0, 0.2, 0.11]}>
          <boxGeometry args={[1, 0.4, 0.02]} />
          <meshToonMaterial color={screenColor} />
        </mesh>

        {/* 螢幕邊框 */}
        <mesh position={[0, 0.2, 0.12]}>
          <boxGeometry args={[1.05, 0.45, 0.01]} />
          <meshToonMaterial color={calculatorColor} />
        </mesh>

        {/* 按鈕區域 */}
        <mesh position={[0, -0.15, 0.11]}>
          <boxGeometry args={[1, 0.3, 0.02]} />
          <meshToonMaterial color={buttonColor} />
        </mesh>

        {/* 個別按鈕 */}
        {Array.from({ length: 12 }, (_, i) => {
          const row = Math.floor(i / 4);
          const col = i % 4;
          const x = (col - 1.5) * 0.2;
          const y = -0.15 + (row - 1) * 0.1;

          return (
            <mesh key={i} position={[x, y, 0.12]}>
              <cylinderGeometry args={[0.08, 0.08, 0.01, 8]} />
              <meshToonMaterial color={buttonColor} />
            </mesh>
          );
        })}

        {/* 計算機側邊按鈕 */}
        <mesh position={[0.55, 0, 0.11]}>
          <cylinderGeometry args={[0.05, 0.05, 0.02, 8]} />
          <meshToonMaterial color={buttonColor} />
        </mesh>

        {/* 計算機底部支撐 */}
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[1.4, 0.1, 0.3]} />
          <meshToonMaterial color={calculatorColor} />
        </mesh>
      </group>

      {/* 連接線 - 可選的視覺連接 */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, orbitRadius * 2, 8]} />
        <meshToonMaterial color="#7f8c8d" transparent opacity={0.3} />
      </mesh>

      {/* 中心裝飾球 */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshToonMaterial color="#e74c3c" />
      </mesh>
    </group>
  );
}
