import { useFrame } from '@react-three/fiber'
import React, { useEffect } from 'react'

export default function SetTouchAction({changeSetTouchAction}) {
  
  function updateTouchAction() {
      const canvasElement = document.getElementsByTagName('canvas')[0]
      if(canvasElement){
        const sibling =  canvasElement.parentElement.children[1]
        if(sibling && sibling.style.touchAction === "none"){
          sibling.style.touchAction = 'auto'
          changeSetTouchAction(false)
        }
      }
  }

 /*  useEffect(()=>{
    return () => console.log("unmount")
  }, []) */

  useFrame(()=>{
    updateTouchAction()
  })

  return (
    <></>
  )
}
