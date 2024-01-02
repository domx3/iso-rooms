import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Gym1 } from './Gym'
import { Canvas, useFrame } from '@react-three/fiber'
import { CameraControls, Environment, ScrollControls, useScroll } from '@react-three/drei'
import { useControls } from 'leva'
import { degToRad } from 'three/src/math/MathUtils'
import AllGyms from './AllGyms'


function Scene() {

  //const cameraControlsRef = useRef(null)
  const [cameraControlsRef, setCameraControlsRef] = useState(null)
  const meshFitCameraHome = useRef(null)


  const { gymRotation, setVis } = useControls({
    gymRotation: {
      value: 0,
      min: 0,
      max: Math.PI * 2,
      step: 0.1
    },
    setVis: {
      value: true
    }
  })
  
  const cardioRef = useRef()

  useEffect(()=> {
    //setCameraControls()
    if(cardioRef.current) {
      cardioRef.current.traverse((object) => {
        if (object.isMesh && object.material) {
          object.material.opacity = 0.5;
          object.material.transparent = true;
          //console.log(object.material)
        }
      })
    }
    
    fitCamera()
  }, [setVis])

  const fitCamera = async () => {
    //console.log(cameraControlsRef)
    if(cameraControlsRef) {
      //console.log('fit')
      cameraControlsRef.fitToSphere(meshFitCameraHome.current, true);
    };
  }

  const setCameraControls = () => {
    
    if(cameraControlsRef) {
      cameraControlsRef.smoothTime = 1.25;
      cameraControlsRef.mouseButtons.right = 0
      cameraControlsRef.mouseButtons.left = 0
      cameraControlsRef.mouseButtons.wheel = 0
      fitCamera()
    }
  }

/* 
  useEffect(() => {
    
    window.addEventListener("resize", fitCamera);
    
    return () => {
      window.removeEventListener("resize", fitCamera)
    }
  }, []); */


/*   const scroll = useScroll()
*/
  const cameraCallback = useCallback(node => {
    if(node !== null){
      setCameraControls()
      setCameraControlsRef(node)
      window.addEventListener("resize", fitCamera);
    }
  })


  return (
    <>
      <Canvas
        //frameloop='demand'
        orthographic
        camera={{ zoom:100, near: 0.1, far:1000, position: [3, 2, 3]}}
        //camera={{ fov:45, near: 0.1, far:1000, position: [3, 2, 3]}}
        //shadows
        //flat linear
      >
        <mesh ref={meshFitCameraHome} position={[1.5,1,1.5]} visible={true}>
          <sphereGeometry args={[2.7, 16, 16]} />
          <meshBasicMaterial color="red" transparent opacity={0.5} />
        </mesh>
        {/* 
        <Environment preset='city'intensity={2.1}/>   
      */}  
        <CameraControls ref={cameraCallback} 
          dollySpeed={0}   
          polarRotateSpeed={0}
          azimuthRotateSpeed={0}
          
        />
  
        <AllGyms 
          gymRotation={gymRotation}
        />
     {/*    <ScrollControls pages={1} damping={0.1}>
        </ScrollControls> */}

        <ambientLight intensity={1} />
        <pointLight position={[0, 10, 0]} decay={0} distance={45} penumbra={1} intensity={5} /> 
        {/* 
        */}
      
      
      </Canvas>

      
    </>
  )
}

export default Scene