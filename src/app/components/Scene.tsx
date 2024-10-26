// check https://github.com/yomotsu/camera-controls for camera controls

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import Mars from "./Mars";

const Scene = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, -200],
        fov: 75,
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <Mars />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
