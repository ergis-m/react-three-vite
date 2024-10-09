import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { SoftShadows, Float, CameraControls, Sky, PerformanceMonitor } from "@react-three/drei";
import { Model } from "./Model";

const App = () => {
  return (
    <Canvas shadows camera={{ position: [5, 2, 10], fov: 50 }}>
      <CameraControls makeDefault />
      <color attach='background' args={["#d0d0d0"]} />
      <ambientLight intensity={0.4} />
      <Model scale={0.05} position={[0, -1, 0]} />
      <Sky inclination={0.52} scale={20} />
    </Canvas>
  );
};

export default App;
