import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./models/bench/Scene";
import ChestPress from "./models/objtest/model";
import { PerspectiveCamera } from '@react-three/drei'
import { Euler } from "three";


function ModelBench({ id }: { id: number }) {

  let model: JSX.Element = <Model />;
  let zoom: number = 5;

  if (id === 1) {
    model = <Model />;
  }
  else if (id === 2) {
    model = <ChestPress />;
    zoom = 0.5;
  }
  else if (id === 3) {
    model = <ChestPress />;
    zoom = 0.5;
  }
  else {
    model = <Model />;
  }

  return (
    <div className="mx-auto w-full justify-center items-center h-full">
      <Canvas className="content-center mx-auto h-60" camera={{manual: true}}>
        <ambientLight intensity={2.25} />
        <OrbitControls enableRotate={true} autoRotate={true} />
        <PerspectiveCamera makeDefault position={[-5, 1, 10]} zoom={zoom} />
        {model}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ModelBench;
