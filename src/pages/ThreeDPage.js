import React from 'react'
import { Container } from 'react-bootstrap'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

const Box3 = () => {
    return (
        <mesh style={{width: '100%', height: '100%'}}>
            
            <boxBufferGeometry attach='geometry' />
            <meshLambertMaterial attach="material" color="skyblue" />
        </mesh>
    )
}
const Plane = () =>{
    return <mesh rotation={[-Math.PI /2 , 0, 0 ]} position={[0,0,0]} >
        <planeBufferGeometry attach='geometry' args={[100, 100]} />
        <meshLambertMaterial attach="material" color="hotpick" />
    </mesh>
}


const ThreeDPage = () => {
    return <div>
            <Canvas>
            <Stars />
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <Box3 />
                <Plane />
            </Canvas>
            </div>
}


export default ThreeDPage;