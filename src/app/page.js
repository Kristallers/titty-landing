"use client";

import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";
import CanvasComponent from "@/components/CanvasComponent";
import styles1 from "../components/CanvasComponent.module.css";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      {/* <img
				className={styles.backgroundImage}
				src="./LOVE_YOUR_SPACE.png"
				alt="background image"
			/> */}
      <div className={styles1.bg1}> </div>
      <Canvas
        style={{
          height: "100vh",
          zIndex: 2,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <CanvasComponent />
      </Canvas>
    </main>
  );
}
