import React from "react";
import { useGLTF } from "@react-three/drei";

const model_url = "models/gym-cardio.glb"

export function GymCardio({cardioRef}) {
  const { nodes, materials } = useGLTF(model_url);
  
  
  return (
    <group dispose={null} ref={cardioRef} name="cardio">
      <mesh
        geometry={nodes.light003.geometry}
        material={materials.lights}
        position={[0.11, 1.793, 1.574]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.069, -0.069, -0.248]}
      />
      <group position={[1.536, 0, 1.535]}>
        <mesh
          geometry={nodes.Cube006.geometry}
          material={materials["wall.002"]}
        />
        <mesh
          geometry={nodes.Cube006_1.geometry}
          material={materials["floor.002"]}
        />
      </group>
      <group position={[0.092, 1.186, 1.562]} rotation={[0, -1.571, 0]}>
        <mesh geometry={nodes.Cube041.geometry} material={materials.tv} />
        <mesh
          geometry={nodes.Cube041_1.geometry}
          material={materials.tvscreen}
        />
        <mesh geometry={nodes.Cube041_2.geometry} material={materials.btns} />
      </group>
      <group
        position={[2.614, 0.103, 2.255]}
        rotation={[Math.PI, -1.309, Math.PI]}
        scale={[0.65, 0.527, 0.503]}
      >
        <mesh geometry={nodes.Cube043.geometry} material={materials.stepper} />
        <mesh
          geometry={nodes.Cube043_1.geometry}
          material={materials["stepper.001"]}
        />
      </group>
      <group position={[2.653, 0.253, 1.488]} scale={[0.066, 0.035, 0.054]}>
        <mesh
          geometry={nodes.Cube018.geometry}
          material={materials["cardio-beams"]}
        />
        <mesh geometry={nodes.Cube018_1.geometry} material={materials.black} />
        <mesh
          geometry={nodes.Cube018_2.geometry}
          material={materials["black.005"]}
        />
        <mesh
          geometry={nodes.Cube018_3.geometry}
          material={materials["black.004"]}
        />
        <mesh geometry={nodes.Cube018_4.geometry} material={materials.cable} />
        <mesh
          geometry={nodes.Cube018_5.geometry}
          material={materials["c-handle"]}
        />
      </group>
      <group
        position={[2.025, 0.069, 2.586]}
        rotation={[0, 0.471, 0]}
        scale={0.496}
      >
        <mesh
          geometry={nodes.BezierCurve011.geometry}
          material={materials["wood.003"]}
        />
        <mesh
          geometry={nodes.BezierCurve011_1.geometry}
          material={materials.skiprope}
        />
      </group>
      <group position={[1.907, 0.332, 1.114]} scale={[0.294, 0.246, 0.246]}>
        <mesh
          geometry={nodes.Cube098.geometry}
          material={materials["cardio-beams"]}
        />
        <mesh geometry={nodes.Cube098_1.geometry} material={materials.black} />
        <mesh
          geometry={nodes.Cube098_2.geometry}
          material={materials["black.007"]}
        />
        <mesh
          geometry={nodes.Cube098_3.geometry}
          material={materials["black.005"]}
        />
        <mesh
          geometry={nodes.Cube098_4.geometry}
          material={materials["black.004"]}
        />
        <mesh
          geometry={nodes.Cube098_5.geometry}
          material={materials["black.006"]}
        />
        <mesh
          geometry={nodes.Cube098_6.geometry}
          material={materials["c-red"]}
        />
        <mesh
          geometry={nodes.Cube098_7.geometry}
          material={materials["fn-steel"]}
        />
      </group>
      <group
        position={[0.793, 0.081, 0.92]}
        rotation={[0, 1.571, 0]}
        scale={[0.087, 0.083, 0.087]}
      >
        <mesh
          geometry={nodes.Cube113.geometry}
          material={materials["cardio-beams.001"]}
        />
        <mesh
          geometry={nodes.Cube113_1.geometry}
          material={materials["black.015"]}
        />
        <mesh
          geometry={nodes.Cube113_2.geometry}
          material={materials["black.014"]}
        />
        <mesh
          geometry={nodes.Cube113_3.geometry}
          material={materials["black.013"]}
        />
        <mesh
          geometry={nodes.Cube113_4.geometry}
          material={materials["cardio-beams.005"]}
        />
      </group>
      <group position={[1.536, 0, 1.535]}>
        <mesh
          geometry={nodes.Cube036.geometry}
          material={materials["black.012"]}
        />
        <mesh
          geometry={nodes.Cube036_1.geometry}
          material={materials["cardio-beams.004"]}
        />
        <mesh
          geometry={nodes.Cube036_2.geometry}
          material={materials["cardio-beams.003"]}
        />
        <mesh
          geometry={nodes.Cube036_3.geometry}
          material={materials["cardio-beams.002"]}
        />
      </group>
      <group position={[2.221, 1.082, 0.09]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.Cube041.geometry} material={materials.tv} />
        <mesh
          geometry={nodes.Cube041_1.geometry}
          material={materials.tvscreen}
        />
        <mesh geometry={nodes.Cube041_2.geometry} material={materials.btns} />
      </group>
    </group>
  );
}

useGLTF.preload(model_url);