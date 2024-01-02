import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const model_url = "models/gym-strength.glb"

export function GymStrength(props) {
  
  const { nodes, materials } = useGLTF(model_url);
  
  return (
    <group {...props} dispose={null}>
      <group position={[-1.536, 0, 1.535]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.wall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.floor}
        />
      </group>
      <group position={[-2.193, 0.094, 2.19]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials["black.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_1.geometry}
          material={materials["lift-pad"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_2.geometry}
          material={materials["steel.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_3.geometry}
          material={materials["weights.006"]}
        />
      </group>
      <group position={[-1.212, 0.343, 1.43]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials["beams.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_1.geometry}
          material={materials["weights.004"]}
        />
      </group>
      <group position={[-5.03, -1.137, -3.423]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials["steel.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_1.geometry}
          material={materials["beams.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_2.geometry}
          material={materials["iron-coat.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_3.geometry}
          material={materials["kb-handle.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_4.geometry}
          material={materials["weights.002"]}
        />
      </group>
      <group
        position={[-0.572, 0.797, 2.876]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder046.geometry}
          material={materials["weights.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder046_1.geometry}
          material={materials["beams.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder046_2.geometry}
          material={materials["black.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder046_3.geometry}
          material={materials["steel-coat.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder046_4.geometry}
          material={materials["seat.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder046_5.geometry}
          material={materials["iron-coat.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder046_6.geometry}
          material={materials["steel.003"]}
        />
      </group>
      <group
        position={[-0.799, 0.218, 0.543]}
        rotation={[0.197, 0, -Math.PI / 2]}
        scale={[0.029, 0.163, 0.084]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials["beams.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_1.geometry}
          material={materials["steel.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_2.geometry}
          material={materials["weights.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.light.geometry}
        material={materials.lights}
        position={[-1.52, 1.793, 0.076]}
        rotation={[Math.PI, -1.571, 0]}
        scale={[-0.069, -0.069, -0.248]}
      />
      <group
        position={[-2.677, 0.065, 1.457]}
        rotation={[-1.277, 0.183, 2.909]}
        scale={0.011}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials["kb-black"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials["kb-blue"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_2.geometry}
          material={materials["kb-red"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_3.geometry}
          material={materials["kb-yellow"]}
        />
      </group>
      <group
        position={[-0.177, 1.031, 1.026]}
        rotation={[0, -1.571, 0]}
        scale={[0.255, 0.31, 0.106]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube060.geometry}
          material={materials["lift-pad.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube060_1.geometry}
          material={materials["weights.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube060_2.geometry}
          material={materials["black.008"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(model_url);