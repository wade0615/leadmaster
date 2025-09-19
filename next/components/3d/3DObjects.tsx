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
