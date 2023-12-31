import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const model_url = "models/gym-machines.glb"

export function GymMachines(props) {
  const { nodes, materials } = useGLTF(model_url);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.light001.geometry}
        material={materials.lights}
        position={[0.094, 1.793, -1.63]}
        rotation={[Math.PI, -1.571, 0]}
        scale={[-0.069, -0.069, -0.248]}
      />
      <group position={[0, 0, -3.072]} rotation={[0, 1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials["wall.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials["floor.003"]}
        />
      </group>
      <group
        position={[0.039, 0.077, -3.573]}
        rotation={[0, -1.571, 0]}
        scale={[0.041, 0.028, 0.041]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={materials["mc-beam.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034_1.geometry}
          material={materials["beams.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034_2.geometry}
          material={materials["weights.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034_3.geometry}
          material={materials["mc-pads.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034_4.geometry}
          material={materials["black.010"]}
        />
      </group>
      <group
        position={[-0.576, 0.067, -2.166]}
        rotation={[0, -1.571, 0]}
        scale={0.749}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials["mc-beam.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007_1.geometry}
          material={materials["mc-weight.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007_2.geometry}
          material={materials["black.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007_3.geometry}
          material={materials["cable.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007_4.geometry}
          material={materials["mc-roller.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007_5.geometry}
          material={materials["mc-pads.005"]}
        />
      </group>
      <group
        position={[1.075, 0.145, -1.693]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={-0.029}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={materials["mc-beam"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029_1.geometry}
          material={materials["steel.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029_2.geometry}
          material={materials["mc-weight"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029_3.geometry}
          material={materials["black.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029_4.geometry}
          material={materials.cable}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029_5.geometry}
          material={materials["mc-roller"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029_6.geometry}
          material={materials["mc-pads.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029_7.geometry}
          material={materials["mc-beam.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029_8.geometry}
          material={materials["mc-pads"]}
        />
      </group>
      <group
        position={[-0.767, 0.097, -2.993]}
        rotation={[0, -1.571, 0]}
        scale={[-0.039, -0.017, -0.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube079.geometry}
          material={materials["mc-beam.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube079_1.geometry}
          material={materials["mc-pads.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube079_2.geometry}
          material={materials["mc-weight.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube079_3.geometry}
          material={materials["black.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube079_4.geometry}
          material={materials["mc-beam.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube079_5.geometry}
          material={materials["cable.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube079_6.geometry}
          material={materials["mc-pads.003"]}
        />
      </group>
      <group
        position={[-1.353, 0.778, -4.18]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.053, 0.057, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube085.geometry}
          material={materials["mc-beam.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube085_1.geometry}
          material={materials["steel.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube085_2.geometry}
          material={materials["mc-weight.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube085_3.geometry}
          material={materials["cable.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube085_4.geometry}
          material={materials["mc-roller.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube085_5.geometry}
          material={materials["mc-beam.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(model_url);