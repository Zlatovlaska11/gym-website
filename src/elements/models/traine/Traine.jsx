/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 traine.gltf 
Author: Gerhald (https://sketchfab.com/Gerhald)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/gym-trainer-9cb04641558e40dbbee9f61ac55fdcb5
Title: Gym Trainer
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Traine(props) {
  const { nodes, materials } = useGLTF('/traine.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[60.341, 0.206, 2.667]}>
        <mesh geometry={nodes.Object_11.geometry} material={materials.Metall} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Rubber} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Tubes_2} />
      </group>
      <group position={[-10.841, 122.261, 22.641]}>
        <mesh geometry={nodes.Object_15.geometry} material={materials.Rubber} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Tubes} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.Tubes_2} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.Metall} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.Cloth} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.Plastic} />
      </group>
      <group position={[-53.004, 49.197, 0]}>
        <mesh geometry={nodes.Object_24.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.Metall} />
      </group>
      <group position={[58.077, 61.828, 0]}>
        <mesh geometry={nodes.Object_27.geometry} material={materials.Rubber} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.Metall} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.Rubber_temnee} />
      </group>
      <group position={[-92.907, 0.016, 13.478]}>
        <mesh geometry={nodes.Object_31.geometry} material={materials.Tubes} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.Cloth} />
      </group>
      <group position={[-29.685, 174.593, 0.038]}>
        <mesh geometry={nodes.Object_36.geometry} material={materials.Tubes} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.Cloth} />
      </group>
      <group position={[46.778, 32.29, -0.007]}>
        <mesh geometry={nodes.Object_41.geometry} material={materials.Metall} />
        <mesh geometry={nodes.Object_42.geometry} material={materials.Plastic} />
      </group>
      <group position={[60.341, 0.206, 2.667]}>
        <mesh geometry={nodes.Object_53.geometry} material={materials.Cloth} />
        <mesh geometry={nodes.Object_54.geometry} material={materials.Plastic} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Tubes} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.Rubber} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Cloth} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.Tubes_2} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.Metall} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.Plastic} />
      <mesh geometry={nodes.Object_22.geometry} material={materials.Tubes_2} position={[-2.41, 24.389, 0]} />
      <mesh geometry={nodes.Object_34.geometry} material={materials.Tubes_2} position={[42.646, 89.254, 0.551]} />
      <mesh geometry={nodes.Object_39.geometry} material={materials.Metall} position={[46.518, 4.288, 0.002]} />
      <mesh geometry={nodes.Object_44.geometry} material={materials.Metall} position={[46.502, 25.784, 0.163]} />
      <mesh geometry={nodes.Object_46.geometry} material={materials.material_0} position={[18.848, 42.459, -0.052]} />
      <mesh geometry={nodes.Object_48.geometry} material={materials.Plastic} position={[30.795, 128.614, 7.251]} />
      <mesh geometry={nodes.Object_50.geometry} material={materials.Leather_Black} />
      <mesh geometry={nodes.Object_51.geometry} material={materials.Leather_Red} />
      <mesh geometry={nodes.Object_56.geometry} material={materials.Rubber} position={[0, 0, -1.005]} />
      <mesh geometry={nodes.Object_58.geometry} material={materials.Metall} position={[44.853, -6.906, -1.876]} />
      <mesh geometry={nodes.Object_60.geometry} material={materials.Metall} position={[-58.059, 2.547, 0.064]} />
      <mesh geometry={nodes.Object_62.geometry} material={materials.Tubes_2} position={[-28.125, 190.599, 2.55]} />
      <mesh geometry={nodes.Object_64.geometry} material={materials.Metall} position={[-1.943, 148.411, 22.198]} />
      <mesh geometry={nodes.Object_66.geometry} material={materials.Rubber} position={[0, 0, -1.005]} />
    </group>
  )
}

useGLTF.preload('/traine.gltf')
