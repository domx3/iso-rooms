import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const model_url = "models/gym-functional.glb"

export function GymFunctional(props) {
  const { nodes, materials } = useGLTF(model_url);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.light002.geometry}
        material={materials.lights}
        position={[-1.63, 1.793, -3.034]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.069, -0.069, -0.248]}
      />
      <group position={[-3.072, 0, -3.072]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials["wall.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials["floor.001"]}
        />
      </group>
      <group position={[-3.072, 0, 0]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials["fn-steel.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_1.geometry}
          material={materials["fn-red.002"]}
        />
      </group>
      <group position={[-3.888, 0.153, -3.791]} rotation={[0, 0.937, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials.black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_1.geometry}
          material={materials["black.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_2.geometry}
          material={materials["beams.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_3.geometry}
          material={materials["weights.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_4.geometry}
          material={materials["weights.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_5.geometry}
          material={materials["weights.008"]}
        />
      </group>
      <group
        position={[-1.701, 1.31, -2.67]}
        rotation={[0, -1.571, 0]}
        scale={[0.037, 0.043, 0.037]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials["beams.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014_1.geometry}
          material={materials["fn-red"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014_2.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014_3.geometry}
          material={materials.strip}
        />
      </group>
      <group position={[-3.125, 1.498, -1.951]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials["fn-steel"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_1.geometry}
          material={materials["fn-red.001"]}
        />
      </group>
      <group
        position={[-4.205, 0.091, -1.685]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials["wood.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_1.geometry}
          material={materials["wood.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_2.geometry}
          material={materials["beams.006"]}
        />
      </group>
      <group position={[-4.237, 0.08, -2.629]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005.geometry}
          material={materials.rope}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_1.geometry}
          material={materials["rope-handle"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rope003.geometry}
        material={materials.black}
        position={[-4.222, 0.097, -1.714]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.623}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tyre.geometry}
        material={materials.tyre}
        position={[-3.193, 0.224, -2.78]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.726}
      />
    </group>
  );
}

useGLTF.preload(model_url);