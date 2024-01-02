import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const model_url = "models/gym-machines.glb"

export function GymMachines(props) {
  const { nodes, materials } = useGLTF(model_url);
  
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.light001.geometry}
        material={materials.lights}
        position={[1.63, 1.793, -0.095]}
        rotation={[Math.PI, -1.571, 0]}
        scale={[-0.069, -0.069, -0.248]}
      />
      <group position={[1.536, 0, -1.537]} rotation={[0, 1.571, 0]}>
        <mesh
          geometry={nodes.Cube005.geometry}
          material={materials["wall.003"]}
        />
        <mesh
          geometry={nodes.Cube005_1.geometry}
          material={materials["floor.003"]}
        />
      </group>
      <group
        position={[1.575, 0.077, -2.038]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.028, 0.041]}
      >
        <mesh
          geometry={nodes.Cube034.geometry}
          material={materials["mc-beam.006"]}
        />
        <mesh
          geometry={nodes.Cube034_1.geometry}
          material={materials["beams.007"]}
        />
        <mesh
          geometry={nodes.Cube034_2.geometry}
          material={materials["weights.010"]}
        />
        <mesh
          geometry={nodes.Cube034_3.geometry}
          material={materials["mc-pads.004"]}
        />
        <mesh
          geometry={nodes.Cube034_4.geometry}
          material={materials["black.010"]}
        />
      </group>
      <group
        position={[0.96, 0.067, -0.632]}
        rotation={[0, -1.571, 0]}
        scale={0.749}
      >
        <mesh
          geometry={nodes.Plane007.geometry}
          material={materials["mc-beam.007"]}
        />
        <mesh
          geometry={nodes.Plane007_1.geometry}
          material={materials["mc-weight.003"]}
        />
        <mesh
          geometry={nodes.Plane007_2.geometry}
          material={materials["black.011"]}
        />
        <mesh
          geometry={nodes.Plane007_3.geometry}
          material={materials["cable.003"]}
        />
        <mesh
          geometry={nodes.Plane007_4.geometry}
          material={materials["mc-roller.002"]}
        />
        <mesh
          geometry={nodes.Plane007_5.geometry}
          material={materials["mc-pads.005"]}
        />
      </group>
      <group
        position={[2.611, 0.145, -0.158]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={-0.029}
      >
        <mesh
          geometry={nodes.Cube029.geometry}
          material={materials["mc-beam"]}
        />
        <mesh
          geometry={nodes.Cube029_1.geometry}
          material={materials["steel.006"]}
        />
        <mesh
          geometry={nodes.Cube029_2.geometry}
          material={materials["mc-weight"]}
        />
        <mesh
          geometry={nodes.Cube029_3.geometry}
          material={materials["black.004"]}
        />
        <mesh geometry={nodes.Cube029_4.geometry} material={materials.cable} />
        <mesh
          geometry={nodes.Cube029_5.geometry}
          material={materials["mc-roller"]}
        />
        <mesh
          geometry={nodes.Cube029_6.geometry}
          material={materials["mc-pads.001"]}
        />
        <mesh
          geometry={nodes.Cube029_7.geometry}
          material={materials["mc-beam.002"]}
        />
        <mesh
          geometry={nodes.Cube029_8.geometry}
          material={materials["mc-pads"]}
        />
      </group>
      <group
        position={[0.77, 0.097, -1.458]}
        rotation={[0, -1.571, 0]}
        scale={[-0.039, -0.017, -0.017]}
      >
        <mesh
          geometry={nodes.Cube079.geometry}
          material={materials["mc-beam.004"]}
        />
        <mesh
          geometry={nodes.Cube079_1.geometry}
          material={materials["mc-pads.002"]}
        />
        <mesh
          geometry={nodes.Cube079_2.geometry}
          material={materials["mc-weight.002"]}
        />
        <mesh
          geometry={nodes.Cube079_3.geometry}
          material={materials["black.009"]}
        />
        <mesh
          geometry={nodes.Cube079_4.geometry}
          material={materials["mc-beam.005"]}
        />
        <mesh
          geometry={nodes.Cube079_5.geometry}
          material={materials["cable.002"]}
        />
        <mesh
          geometry={nodes.Cube079_6.geometry}
          material={materials["mc-pads.003"]}
        />
      </group>
      <group
        position={[0.183, 0.778, -2.646]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.053, 0.057, 0.019]}
      >
        <mesh
          geometry={nodes.Cube085.geometry}
          material={materials["mc-beam.003"]}
        />
        <mesh
          geometry={nodes.Cube085_1.geometry}
          material={materials["steel.005"]}
        />
        <mesh
          geometry={nodes.Cube085_2.geometry}
          material={materials["mc-weight.001"]}
        />
        <mesh
          geometry={nodes.Cube085_3.geometry}
          material={materials["cable.001"]}
        />
        <mesh
          geometry={nodes.Cube085_4.geometry}
          material={materials["mc-roller.001"]}
        />
        <mesh
          geometry={nodes.Cube085_5.geometry}
          material={materials["mc-beam.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(model_url);