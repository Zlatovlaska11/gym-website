import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'

export default function ChestPress() {
  const obj = useLoader(OBJLoader, './chestPress.obj')
  
  return (
    <mesh>
      <primitive object={obj} />
    </mesh>
  );
}

