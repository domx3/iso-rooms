import React, { useEffect, useRef, useState } from 'react'
import {MathUtils} from 'three'
import { useFrame } from '@react-three/fiber';
import { GymCardio } from './GymCardio'
import { GymFunctional } from './GymFunctional'
import { GymMachines } from './GymMachines'
import { GymStrength } from './GymStrength'

export default function AllGyms({ gymRotation }) {
  const [targetRotation, setTargetRotation] = useState(0);
  const gymGroup = useRef(null)
  
   const onScrollRotate = (event) => {
    const rotationSpeed = 0.0015;
    console.log(targetRotation)
    setTargetRotation((prevRotation) => {
      console.log(Math.round(prevRotation * 100)/ 100)
      return prevRotation + event.deltaY * rotationSpeed});
  }

  useEffect(() => {
    window.addEventListener('wheel', onScrollRotate);
    
    return () => {
      window.removeEventListener('wheel', onScrollRotate);
    }
  }, []);

  useFrame(() => {

    // Use lerp to smoothly transition the rotation
      gymGroup.current.rotation.y = MathUtils.lerp(
      gymGroup.current.rotation.y,
      targetRotation,
      0.1 // Adjust the smoothing factor
    );
  });
  
  return (
    <group ref={gymGroup} rotation={[0, gymRotation, 0]}>

        <GymCardio />
        <GymFunctional />
        <GymMachines />
        <GymStrength />

    </group>
  )
}
