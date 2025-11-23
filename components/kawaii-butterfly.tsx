"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function Butterfly() {
  const groupRef = useRef<THREE.Group>(null)
  const leftWingRef = useRef<THREE.Mesh>(null)
  const rightWingRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!groupRef.current) return

    // Gentle floating motion
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3

    // Wing flapping
    if (leftWingRef.current && rightWingRef.current) {
      const flap = Math.sin(state.clock.elapsedTime * 3) * 0.5
      leftWingRef.current.rotation.y = -flap
      rightWingRef.current.rotation.y = flap
    }
  })

  return (
    <group ref={groupRef}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.1, 0.6, 8, 16]} />
        <meshStandardMaterial color="#8B5CF6" />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.4, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#A78BFA" />
      </mesh>

      {/* Antennae */}
      <mesh position={[-0.08, 0.5, 0]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.01, 0.01, 0.2]} />
        <meshStandardMaterial color="#6D28D9" />
      </mesh>
      <mesh position={[0.08, 0.5, 0]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.01, 0.01, 0.2]} />
        <meshStandardMaterial color="#6D28D9" />
      </mesh>

      {/* Left Wing */}
      <mesh ref={leftWingRef} position={[-0.3, 0.1, 0]} rotation={[0, 0, 0]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial color="#EC4899" transparent opacity={0.8} side={THREE.DoubleSide} />
      </mesh>

      {/* Right Wing */}
      <mesh ref={rightWingRef} position={[0.3, 0.1, 0]} rotation={[0, 0, 0]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial color="#EC4899" transparent opacity={0.8} side={THREE.DoubleSide} />
      </mesh>

      {/* Wing decorations */}
      <mesh position={[-0.3, 0.1, 0.05]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#FDE047" />
      </mesh>
      <mesh position={[0.3, 0.1, 0.05]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#FDE047" />
      </mesh>
    </group>
  )
}

export function KawaiiButterfly() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Butterfly />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
