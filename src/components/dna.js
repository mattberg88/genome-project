import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from 'react-three-fiber'
import dna from '../assets/DNA_berg_3.glb'

export default function DNA() {
  const gltf = useLoader(GLTFLoader, dna)
  return <primitive object={gltf.scene} color={'red'} rotation={[0, 0, 20]} position={[0, 0, 0]} scale={[0.6, 0.6, 0.6]}/>
}