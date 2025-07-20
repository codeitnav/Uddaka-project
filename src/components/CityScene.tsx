"use client"

import React, { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import * as THREE from "three"

// Define colors based on the image
const COLORS = {
  ground: "#f0f0f0", // Light gray/white
  road: "#ffffff", // White
  buildingWhite: "#ffffff",
  buildingGreen: "#4CAF50", // Green
  buildingOrange: "#FF9800", // Orange
  buildingBlue: "#2196F3", // Blue
  deliveryPath: "#8BC34A", // Lighter green for path
  truckBody: "#4CAF50", // Green for truck
  truckCabin: "#ffffff", // White for truck cabin
  pin: "#4CAF50", // Green for pin
  fountainBlue: "#2196F3", // Blue for fountain
}

// Building component
const Building = ({
  position,
  size,
  color,
}: { position: [number, number, number]; size: [number, number, number]; color: string }) => (
  <mesh position={position}>
    <boxGeometry args={size} />
    <meshStandardMaterial color={color} />
  </mesh>
)

// Road segment component
const Road = ({
  points,
  width = 0.5,
  color = COLORS.road,
}: { points: [number, number, number][]; width?: number; color?: string }) => {
  const lineRef = useRef<THREE.Line | null>(null)

  React.useEffect(() => {
    if (lineRef.current) {
      const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)))
      const geometry = new THREE.TubeGeometry(curve, 64, width / 2, 8, false)
      lineRef.current.geometry = geometry
    }
  }, [points, width])

  return (
    <line ref={lineRef}>
      <bufferGeometry />
      <lineBasicMaterial color={color} />
    </line>
  )
}

// Simple Truck component
const Truck = ({ position }: { position: [number, number, number] }) => (
  <group position={position}>
    {/* Truck Body */}
    <mesh position={[0, 0.25, 0]}>
      <boxGeometry args={[0.8, 0.5, 0.5]} />
      <meshStandardMaterial color={COLORS.truckBody} />
    </mesh>
    {/* Truck Cabin */}
    <mesh position={[0.3, 0.45, 0]}>
      <boxGeometry args={[0.3, 0.3, 0.5]} />
      <meshStandardMaterial color={COLORS.truckCabin} />
    </mesh>
    {/* Wheels */}
    <mesh position={[-0.2, 0.05, 0.2]}>
      <cylinderGeometry args={[0.1, 0.1, 0.5, 16]} />
      <meshStandardMaterial color="#333333" />
    </mesh>
    <mesh position={[-0.2, 0.05, -0.2]}>
      <cylinderGeometry args={[0.1, 0.1, 0.5, 16]} />
      <meshStandardMaterial color="#333333" />
    </mesh>
    <mesh position={[0.2, 0.05, 0.2]}>
      <cylinderGeometry args={[0.1, 0.1, 0.5, 16]} />
      <meshStandardMaterial color="#333333" />
    </mesh>
    <mesh position={[0.2, 0.05, -0.2]}>
      <cylinderGeometry args={[0.1, 0.1, 0.5, 16]} />
      <meshStandardMaterial color="#333333" />
    </mesh>
  </group>
)

// Location Pin component
const LocationPin = ({ position }: { position: [number, number, number] }) => (
  <group position={position}>
    <mesh position={[0, 0.7, 0]}>
      <cylinderGeometry args={[0.1, 0.3, 1.2, 8]} />
      <meshStandardMaterial color={COLORS.pin} />
    </mesh>
    <mesh position={[0, 1.3, 0]}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial color={COLORS.pin} />
    </mesh>
  </group>
)

// Fountain component
const Fountain = ({ position }: { position: [number, number, number] }) => (
  <group position={position}>
    <mesh position={[0, 0.1, 0]}>
      <cylinderGeometry args={[1.5, 1.5, 0.2, 32]} />
      <meshStandardMaterial color={COLORS.buildingWhite} />
    </mesh>
    <mesh position={[0, 0.3, 0]}>
      <cylinderGeometry args={[1, 1, 0.2, 32]} />
      <meshStandardMaterial color={COLORS.fountainBlue} />
    </mesh>
    <mesh position={[0, 0.5, 0]}>
      <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
      <meshStandardMaterial color={COLORS.fountainBlue} />
    </mesh>
  </group>
)

// Tree component
const Tree = ({ position }: { position: [number, number, number] }) => (
  <group position={position}>
    <mesh position={[0, 0.25, 0]}>
      <cylinderGeometry args={[0.1, 0.1, 0.5, 8]} />
      <meshStandardMaterial color="#8B4513" /> {/* Brown trunk */}
    </mesh>
    <mesh position={[0, 0.7, 0]}>
      <coneGeometry args={[0.3, 0.8, 16]} />
      <meshStandardMaterial color="#228B22" /> {/* Forest green leaves */}
    </mesh>
  </group>
)

// Bench component
const Bench = ({ position, rotationY }: { position: [number, number, number]; rotationY: number }) => (
  <group position={position} rotation-y={rotationY}>
    <mesh position={[0, 0.1, 0]}>
      <boxGeometry args={[0.8, 0.1, 0.2]} />
      <meshStandardMaterial color={COLORS.buildingGreen} />
    </mesh>
    <mesh position={[-0.3, 0.05, 0.05]}>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color="#8B4513" />
    </mesh>
    <mesh position={[0.3, 0.05, 0.05]}>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color="#8B4513" />
    </mesh>
  </group>
)

const CityScene = () => {
  return (
    <Canvas
      orthographic
      camera={{
        zoom: 100, // Adjust zoom for isometric effect
        position: [10, 10, 10], // Camera position
        near: 0.1,
        far: 1000,
      }}
      style={{ background: COLORS.ground }}
      shadows
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <directionalLight position={[-5, -10, -5]} intensity={0.3} />
      {/* Ground Plane */}
      <mesh rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color={COLORS.ground} />
      </mesh>
      {/* Roads */}
      <Road
        points={[
          [-5, 0.01, 0],
          [5, 0.01, 0],
        ]}
      />
      <Road
        points={[
          [0, 0.01, -5],
          [0, 0.01, 5],
        ]}
      />
      <Road
        points={[
          [-5, 0.01, 2],
          [5, 0.01, 2],
        ]}
      />
      <Road
        points={[
          [-2, 0.01, -5],
          [-2, 0.01, 5],
        ]}
      />
      <Road
        points={[
          [2, 0.01, -5],
          [2, 0.01, 5],
        ]}
      />
      {/* Delivery Path */}
      <Road
        points={[
          [-4, 0.02, -4],
          [-4, 0.02, -2],
          [-2, 0.02, -2],
          [-2, 0.02, 0],
          [0, 0.02, 0],
          [0, 0.02, 2],
          [2, 0.02, 2],
          [2, 0.02, 4],
          [4, 0.02, 4],
        ]}
        width={0.8}
        color={COLORS.deliveryPath}
      />
      {/* Buildings */}
      <Building position={[-4, 1.5, -4]} size={[2, 3, 2]} color={COLORS.buildingWhite} />
      <Building position={[-4, 2.5, -2]} size={[2, 5, 2]} color={COLORS.buildingWhite} />
      <Building position={[-4, 1.0, 0]} size={[2, 2, 2]} color={COLORS.buildingGreen} />
      <Building position={[-4, 2.0, 2]} size={[2, 4, 2]} color={COLORS.buildingWhite} />
      <Building position={[-4, 1.5, 4]} size={[2, 3, 2]} color={COLORS.buildingOrange} />
      <Building position={[-2, 1.0, -4]} size={[2, 2, 2]} color={COLORS.buildingBlue} />
      <Building position={[-2, 2.0, 4]} size={[2, 4, 2]} color={COLORS.buildingWhite} />
      <Building position={[0, 1.5, -4]} size={[2, 3, 2]} color={COLORS.buildingWhite} />
      <Building position={[0, 2.5, 4]} size={[2, 5, 2]} color={COLORS.buildingWhite} />
      <Building position={[2, 1.0, -4]} size={[2, 2, 2]} color={COLORS.buildingGreen} />
      <Building position={[2, 2.0, -2]} size={[2, 4, 2]} color={COLORS.buildingWhite} />
      <Building position={[2, 1.5, 0]} size={[2, 3, 2]} color={COLORS.buildingBlue} />
      <Building position={[2, 2.5, 4]} size={[2, 5, 2]} color={COLORS.buildingWhite} />
      <Building position={[4, 1.5, -4]} size={[2, 3, 2]} color={COLORS.buildingWhite} />
      <Building position={[4, 2.5, -2]} size={[2, 5, 2]} color={COLORS.buildingOrange} />
      <Building position={[4, 1.0, 0]} size={[2, 2, 2]} color={COLORS.buildingWhite} />
      <Building position={[4, 2.0, 2]} size={[2, 4, 2]} color={COLORS.buildingBlue} />
      <Building position={[4, 1.5, 4]} size={[2, 3, 2]} color={COLORS.buildingWhite} />
      {/* Specific buildings from image */}
      <Building position={[-6, 3, -1]} size={[2, 6, 2]} color={COLORS.buildingGreen} />
      <Building position={[-6, 2, 3]} size={[2, 4, 2]} color={COLORS.buildingOrange} />
      <Building position={[-1, 2.5, -6]} size={[2, 5, 2]} color={COLORS.buildingBlue} />
      <Building position={[6, 2.5, -1]} size={[2, 5, 2]} color={COLORS.buildingBlue} />
      <Building position={[6, 2, 3]} size={[2, 4, 2]} color={COLORS.buildingOrange} />
      {/* Truck and Pin on the path */}
      <Truck position={[-2, 0.25, -2]} />
      <LocationPin position={[4, 0.02, 4]} />
      {/* Fountain */}
      <Fountain position={[0, 0.02, 0]} />
      {/* Trees */}
      <Tree position={[-3, 0.02, -1]} />
      <Tree position={[-1, 0.02, -3]} />
      <Tree position={[1, 0.02, -1]} />
      <Tree position={[3, 0.02, -3]} />
      <Tree position={[-1, 0.02, 1]} />
      <Tree position={[1, 0.02, 3]} />
      <Tree position={[-3, 0.02, 3]} />
      <Tree position={[3, 0.02, 1]} />
      {/* Benches */}
      <Bench position={[-0.5, 0.02, 0.8]} rotationY={Math.PI / 2} />
      <Bench position={[0.5, 0.02, -0.8]} rotationY={-Math.PI / 2} />
      <Bench position={[-0.8, 0.02, -0.5]} rotationY={0} />
      <Bench position={[0.8, 0.02, 0.5]} rotationY={Math.PI} />
      <OrbitControls makeDefault />
      <Environment preset="warehouse" /> {/* A simple environment for lighting */}
    </Canvas>
  )
}

export default CityScene
