import { RotatingBox, RotatingCone } from "../3DObjects";

export default function RecruitmentPanel() {
  return (
    <>
      <RotatingBox
        position={[0, 1, 0]}
        color="#34495E"
        size={[1.2, 1.2, 1.2]}
      />
      <RotatingCone
        position={[2, 0, 0]}
        color="#E67E22"
        radius={0.7}
        height={1.3}
      />
    </>
  );
}
