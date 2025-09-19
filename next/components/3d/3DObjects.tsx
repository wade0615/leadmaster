import { useRef, forwardRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

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
