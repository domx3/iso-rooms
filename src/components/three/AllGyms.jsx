import React, { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber';
import { GymCardio } from './GymCardio'
import { GymFunctional } from './GymFunctional'
import { GymMachines } from './GymMachines'
import { GymStrength } from './GymStrength'
import { useScroll } from '@react-three/drei';
import SetTouchAction from '../SetTouchAction';

export default function AllGyms(props) {
  
  const gymGroup = useRef(null)
  const [setTouchAction, changeSetTouchAction] = useState(true)
  const [room, setRoom] = useState('strength')
  const [oldRoom, setOldRoom] = useState(null)
  const [gymBanner, setGymBanner] = useState(null)
  
  const strengthRef = useRef()
  const functionalRef = useRef()
  const machinesRef = useRef()
  const cardioRef = useRef()

  const roomRefs = {
    strength: strengthRef,
    functional: functionalRef,
    machines: machinesRef,
    cardio: cardioRef
  }

  const setNewRoom = (newRoom) => {
    setRoom((prevRoom) => {
      setOldRoom(prevRoom)
      return newRoom
    })
  }

  // onOff: true - lights on / false - ligths off
  const setOpacity = (ref, onOff) => {
    if(ref && ref.current) {
      ref.current.traverse((object) => {
        if (object.isMesh && object.material) {
          object.material.opacity = onOff ? 1 : 0.1;
          object.material.transparent = onOff ? false : true;
          
        }
      })
    }
  }

  useEffect(() => {
    //console.log('new room: '+ room+' , old room:'+oldRoom)
    setOpacity(roomRefs[room], true)
    setOpacity(roomRefs[oldRoom], false)
  }, [room]);

  useEffect(() => {
    setGymBanner(document.getElementById("gym-banner"))
    //setOpacity(strengthRef, false)
    setOpacity(functionalRef, false)
    setOpacity(machinesRef, false)
    setOpacity(cardioRef, false)
  },[])

  const scroll = useScroll()

  useFrame(() => {
    gymGroup.current.rotation.y = Math.PI / 2 + scroll.offset * Math.PI * 3 / 2

    gymBanner.style.transform = 'translateX(' + scroll.offset *100+ '%)';

    const a = scroll.range(0, 0.18)
    const b = scroll.range(0.18, 0.32)
    const c = scroll.range(0.5, 0.32)
    const d = scroll.range(0.82, 0.18)
    if(a > 0 && a < 1 && room != 'strength'){
      setNewRoom('strength')
    }else if (b > 0 && b < 1 && room != 'functional') {
      setNewRoom('functional')
    }else if (c < 1 && c > 0 && room != 'machines') {
      setNewRoom('machines')
    }else if(d > 0 && d < 1 && room != 'cardio') {
      setNewRoom('cardio')
    }

  });
  
  return (
    <group ref={gymGroup} rotation={[0, Math.PI / 2, 0]}>

        <GymCardio cardioRef={cardioRef} />
        <GymFunctional functionalRef={functionalRef} />
        <GymMachines machinesRef={machinesRef} />
        <GymStrength strengthRef={strengthRef} />
        {setTouchAction &&
          <SetTouchAction 
            changeSetTouchAction={changeSetTouchAction}
          />
        }

    </group>
  )
}
