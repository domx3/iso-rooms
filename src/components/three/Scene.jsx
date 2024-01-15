import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Canvas, } from '@react-three/fiber'
import { CameraControls, ScrollControls } from '@react-three/drei'
//import { useControls } from 'leva'
import AllGyms from './AllGyms'

let zoomIn = false

function updateTouchAction(element) {
  if (element.style.touchAction === 'none') {
      element.style.touchAction = 'auto';
  }
  for (var i = 0; i < element.children.length; i++) {
      updateTouchAction(element.children[i]);
  }
}

function Scene() {

  //const cameraControlsRef = useRef(null)
  const [cameraControlsRef, setCameraControlsRef] = useState(null)
//  const [zoomIn, setZoomIn] = useState(false)
  const meshFitCameraHome = useRef(null)
  

/*   const { setVis } = useControls({
    setVis: {
      value: true
    }
  }) */
  
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
      cameraControlsRef.touches.one = 0
      cameraControlsRef.touches.two = 0
      cameraControlsRef.touches.three = 0
      fitCamera()
    }
  }

  const onClickZoom = () => {
    let zoomValue;
    if(zoomIn){
      fitCamera()
    } else {
      zoomValue = window.innerWidth > 1000 ? 300 : 200
      cameraControlsRef.zoomTo(zoomValue, true )
    }
    //setZoomIn(()=>!zoomIn)
    zoomIn = !zoomIn
  }

  useEffect(()=>{
    updateTouchAction(document.getElementById("canvas-container"))
    return window.removeEventListener("resize", fitCamera);
  },[])

  const cameraCallback = useCallback(node => {
    if(node !== null){
      setCameraControlsRef(node)
      setCameraControls()
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
        onClick={onClickZoom}
      >
        <mesh ref={meshFitCameraHome} position={[1.5,1,1.5]} visible={true}>
          <sphereGeometry args={[2.7, 16, 16]} />
          <meshBasicMaterial color="red" transparent opacity={0.0} />
        </mesh>
        {/* 
        <Environment preset='city'intensity={2.1}/>   
      */}  
        <CameraControls ref={cameraCallback} 
          dollySpeed={0}   
          polarRotateSpeed={0}
          azimuthRotateSpeed={0}
          
        />
        <ScrollControls pages={4} damping={0.1}>
          
          <AllGyms 
           
          />
        </ScrollControls>

        <ambientLight intensity={3} />
        <pointLight position={[0, 10, 0]} decay={0} distance={45} penumbra={1} intensity={5} /> 
        {/* 
        */}
      
      
      </Canvas>

      
    </>
  )
}

export default Scene