"use client";

import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";
import CanvasComponent from "@/components/CanvasComponent";

export default function Home() {
	return (
		<main className={styles.mainContainer}>
			{/* <img
				className={styles.backgroundImage}
				src="./LOVE_YOUR_SPACE.png"
				alt="background image"
			/> */}
			<Canvas style={{ height: "100vh" }}>
				<CanvasComponent />
			</Canvas>
		</main>
	);
}
