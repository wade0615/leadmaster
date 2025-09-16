import { RotatingOctahedron, RotatingCylinder } from "../3DObjects";

export default function AboutPanel() {
  return (
    <>
      <RotatingOctahedron position={[0, 1, 0]} color="#8B4513" radius={0.8} />
      <RotatingCylinder
        position={[2, 0, 0]}
        color="#228B22"
        radius={0.6}
        height={1.5}
      />
    </>
  );
}
