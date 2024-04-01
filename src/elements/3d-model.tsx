import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./models/bench/Scene";


function ModelBench() {
  return (
    <div className="mx-auto w-full h-full">
      <Canvas>
          <ambientLight intensity={2.0} />
          <Model />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ModelBench;
