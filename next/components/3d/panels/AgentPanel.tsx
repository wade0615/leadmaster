import { RotatingCone, RotatingBox } from "../3DObjects";

export default function AgentPanel() {
  return (
    <>
      <RotatingCone
        position={[0, 1, 0]}
        color="#FF6347"
        radius={0.8}
        height={1.5}
      />
      <RotatingBox position={[2, 0, 0]} color="#E67E22" size={[1, 1, 1]} />
    </>
  );
}
