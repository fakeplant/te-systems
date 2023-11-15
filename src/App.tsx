import React, { Suspense, useRef } from "react"
import "./App.css"
import { Canvas } from "@react-three/fiber"
import Scene from "./Scene"
import Cameras from "./Cameras"

function Loading() {
  return (
    <div className="loading">
      <h1>Loading...</h1>
    </div>
  )
}

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  return (
    <Canvas
      ref={canvasRef}
      shadows
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Cameras />
      <Suspense fallback={<Loading />}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}

export default App
