import React from 'react'

import { MeshReflectorMaterial } from '@react-three/drei';

function Mirror() {


  return (
    <mesh position={[0, 1, -1.4]} rotation={[Math.PI, Math.PI, 0]} >
        <planeGeometry args={[2, 1]} />
        <MeshReflectorMaterial
        color="#999"
/*           blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          metalness={0.5} */
        />
      </mesh>
  )
}

export default Mirror