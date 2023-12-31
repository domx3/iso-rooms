import React, { useRef } from 'react'
import { MeshReflectorMaterial, Reflector, useEnvironment, useGLTF, useTexture } from '@react-three/drei'
import Mirror from './Mirror'


const model_url = 'models/gym1.glb'

export function Gym1(props) {
  
  const { nodes, materials } = useGLTF(model_url)


  //console.log(nodes)

  return (
    <group {...props} dispose={null} position={[0,-1,0]}>
      <group position={[0.655, 0.094, -0.762]}>
        <mesh geometry={nodes.Cube007.geometry} material={materials['black.002']} />
        <mesh geometry={nodes.Cube007_1.geometry} material={materials['lift-pad']} />
        <mesh geometry={nodes.Cube007_2.geometry} material={materials['steel.004']} />
        <mesh geometry={nodes.Cube007_3.geometry} material={materials['weights.006']} />
      </group>
     {/*  
     <Mirror /> 
     <mesh geometry={nodes.mirror1.geometry} material={materials.mirror} position={[0.041, 1.055, -1.447]} rotation={[Math.PI / 2, 0, 0]}/>
     */}
      <group position={[-0.168, 0.343, 0.32]}>
        <mesh geometry={nodes.Cube016.geometry} material={materials['beams.003']} />
        <mesh geometry={nodes.Cube016_1.geometry} material={materials['weights.004']} />
      </group>
      <group position={[-4.958, -1.137, 3.495]} rotation={[0, 1.571, 0]}>
        <mesh geometry={nodes.Cube024.geometry} material={materials['steel.001']} />
        <mesh geometry={nodes.Cube024_1.geometry} material={materials['beams.001']} />
        <mesh geometry={nodes.Cube024_2.geometry} material={materials['iron-coat.001']} />
        <mesh geometry={nodes.Cube024_3.geometry} material={materials['kb-handle.001']} />
        <mesh geometry={nodes.Cube024_4.geometry} material={materials['weights.002']} />
      </group>
      <group position={[1.342, 0.797, 0.599]} rotation={[Math.PI, 0, Math.PI / 2]}>
        <mesh geometry={nodes.Cylinder046.geometry} material={materials['weights.005']} />
        <mesh geometry={nodes.Cylinder046_1.geometry} material={materials['beams.004']} />
        <mesh geometry={nodes.Cylinder046_2.geometry} material={materials['black.001']} />
        <mesh geometry={nodes.Cylinder046_3.geometry} material={materials['steel-coat.001']} />
        <mesh geometry={nodes.Cylinder046_4.geometry} material={materials['seat.001']} />
        <mesh geometry={nodes.Cylinder046_5.geometry} material={materials['iron-coat.002']} />
        <mesh geometry={nodes.Cylinder046_6.geometry} material={materials['steel.003']} />
      </group>
      <group position={[-0.991, 0.218, -0.737]} rotation={[Math.PI / 2, 1.373, Math.PI]} scale={[0.029, 0.163, 0.084]}>
        <mesh geometry={nodes.Plane005.geometry} material={materials['beams.002']} />
        <mesh geometry={nodes.Plane005_1.geometry} material={materials['steel.002']} />
        <mesh geometry={nodes.Plane005_2.geometry} material={materials['weights.003']} />
      </group>
      <mesh geometry={nodes['light-r'].geometry} material={materials.lights} position={[-1.458, 1.8, -0.717]} rotation={[0, 0, -Math.PI]} scale={[-0.069, -0.069, -0.248]} />
      <mesh geometry={nodes['light-l'].geometry} material={materials.lights} position={[-1.459, 1.786, 0.685]} rotation={[0, 0, -Math.PI]} scale={[-0.069, -0.069, -0.248]} />
      <group position={[-0.078, 0.065, 1.142]} rotation={[-1.762, 0.289, -1.748]} scale={0.011}>
        <mesh geometry={nodes.Cylinder002.geometry} material={materials['kb-black']} />
        <mesh geometry={nodes.Cylinder002_1.geometry} material={materials['kb-blue']} />
        <mesh geometry={nodes.Cylinder002_2.geometry} material={materials['kb-red']} />
        <mesh geometry={nodes.Cylinder002_3.geometry} material={materials['kb-yellow']} />
      </group>
      <mesh geometry={nodes.Cube001.geometry} material={materials.wall} />
      <mesh geometry={nodes.Cube001_1.geometry} material={materials.floor} />
    </group>
  )
}

useGLTF.preload(model_url)
