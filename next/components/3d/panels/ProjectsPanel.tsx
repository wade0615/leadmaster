import { RotatingSphere, RotatingOctahedron } from "../3DObjects";

export default function ProjectsPanel() {
  return (
    <>
      <RotatingSphere position={[0, 1, 0]} color="#3498DB" radius={0.8} />
      <RotatingOctahedron position={[2, 0, 0]} color="#E74C3C" radius={0.6} />
    </>
  );
}
