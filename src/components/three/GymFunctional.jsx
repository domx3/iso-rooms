import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const model_url = "models/gym-functional.glb"

export function GymFunctional(props) {
  const { nodes, materials } = useGLTF(model_url);
  
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.light002.geometry}
        material={materials.lights}
        position={[-0.094, 1.793, -1.499]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.069, -0.069, -0.248]}
      />
      <group position={[-1.536, 0, -1.537]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          geometry={nodes.Cube004.geometry}
          material={materials["wall.001"]}
        />
        <mesh
          geometry={nodes.Cube004_1.geometry}
          material={materials["floor.001"]}
        />
      </group>
      <group position={[-1.536, 0, 1.535]} rotation={[0, -1.571, 0]}>
        <mesh
          geometry={nodes.Cube010.geometry}
          material={materials["fn-steel.001"]}
        />
        <mesh
          geometry={nodes.Cube010_1.geometry}
          material={materials["fn-red.002"]}
        />
      </group>
      <group position={[-2.352, 0.153, -2.256]} rotation={[0, 0.937, 0]}>
        <mesh geometry={nodes.Cube013.geometry} material={materials.black} />
        <mesh
          geometry={nodes.Cube013_1.geometry}
          material={materials["black.003"]}
        />
        <mesh
          geometry={nodes.Cube013_2.geometry}
          material={materials["beams.003"]}
        />
        <mesh
          geometry={nodes.Cube013_3.geometry}
          material={materials["weights.007"]}
        />
        <mesh
          geometry={nodes.Cube013_4.geometry}
          material={materials["weights.001"]}
        />
        <mesh
          geometry={nodes.Cube013_5.geometry}
          material={materials["weights.008"]}
        />
      </group>
      <group
        position={[-0.164, 1.31, -1.135]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.043, 0.037]}
      >
        <mesh
          geometry={nodes.Cube014.geometry}
          material={materials["beams.005"]}
        />
        <mesh
          geometry={nodes.Cube014_1.geometry}
          material={materials["fn-red"]}
        />
        <mesh geometry={nodes.Cube014_2.geometry} material={materials.wood} />
        <mesh geometry={nodes.Cube014_3.geometry} material={materials.strip} />
      </group>
      <group position={[-1.589, 1.498, -0.416]}>
        <mesh
          geometry={nodes.Cube023.geometry}
          material={materials["fn-steel"]}
        />
        <mesh
          geometry={nodes.Cube023_1.geometry}
          material={materials["fn-red.001"]}
        />
      </group>
      <group
        position={[-2.668, 0.091, -0.15]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.041]}
      >
        <mesh
          geometry={nodes.Cylinder006.geometry}
          material={materials["wood.002"]}
        />
        <mesh
          geometry={nodes.Cylinder006_1.geometry}
          material={materials["wood.001"]}
        />
        <mesh
          geometry={nodes.Cylinder006_2.geometry}
          material={materials["beams.006"]}
        />
      </group>
      <group position={[-2.7, 0.08, -1.094]} rotation={[0, -1.571, 0]}>
        <mesh geometry={nodes.Circle005.geometry} material={materials.rope} />
        <mesh
          geometry={nodes.Circle005_1.geometry}
          material={materials["rope-handle"]}
        />
      </group>
      <mesh
        geometry={nodes.rope003.geometry}
        material={materials.black}
        position={[-2.686, 0.097, -0.179]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.623}
      />
      <mesh
        geometry={nodes.tyre.geometry}
        material={materials.tyre}
        position={[-1.657, 0.224, -1.245]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.726}
      />
    </group>
  );
}

useGLTF.preload(model_url);