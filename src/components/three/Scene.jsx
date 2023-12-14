import React, { useRef } from 'react'
import { Gym1 } from './Gym'
import { Canvas } from '@react-three/fiber'
import { CameraControls, Environment } from '@react-three/drei'
import { useControls } from 'leva'
import { degToRad } from 'three/src/math/MathUtils'

function Scene() {

  const cameraControlsRef = useRef()



  return (
    <>
      <Canvas
        //frameloop='demand'
        orthographic
        camera={{ zoom:180, near: 0.1, far:1000, position: [3, 2, 3]}}
        //camera={{ fov:45, near: 0.1, far:1000, position: [3, 2, 3]}}
        //shadows
        //flat linear
      >
      {/* 
        <Environment preset='city'intensity={2.1}/>   
      */}  
        <CameraControls ref={cameraControlsRef} />
  
        <Gym1 />

        <ambientLight intensity={1} />
        <pointLight position={[0, 10, 0]} decay={0} distance={45} penumbra={1} intensity={5} /> 
        {/* 
      */}
      
      
      </Canvas>

      
    </>
  )
}

export default Scene