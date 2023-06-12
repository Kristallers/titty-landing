import React from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Model } from "./Model.jsx";
import styles from "./CanvasComponent.module.css";

const CanvasComponent = () => {
  return (
    <>
      <ScrollControls pages={2} damping={0.1}>
        {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
        <ambientLight intensity={0.3} />
        <spotLight
          position={[0, 25, 0]}
          angle={1.3}
          penumbra={1}
          castShadow
          intensity={2}
          shadow-bias={-0.0001}
        />
        <Model position={[3, 0.2, 0]} rotation={[Math.PI / 30, -1, 0]} />

        <Scroll>{/* Canvas contents in here will scroll along */}</Scroll>
        <Scroll html style={{ width: "100%", color: "white" }}>
          <div
            style={{
              position: "absolute",
              top: "10vh",
              left: "15vw",
              width: "45%",
            }}
            className={styles.introductionText}
          >
            <h1 className={styles.mainTitle}>Yung Titties Experience</h1>
            <p className={styles.p}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              facere animi at, explicabo voluptatibus veritatis nesciunt nobis,
              error iure officia debitis blanditiis, facilis ipsum perferendis
              quas sint alias perspiciatis harum. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Nemo facere animi at, explicabo
              voluptatibus veritatis nesciunt nobis, error iure officia debitis
              blanditiis, facilis ipsum perferendis quas sint alias perspiciatis
              harum.
            </p>
          </div>

          <div
            style={{
              position: "absolute",
              top: "75vh",
              left: "40vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={styles.video}
          >
            <h2 className={styles.instructionsVideo}>How to play</h2>
            <p className={styles.videoText}>
              You can play the game on mobile or on desktop.<br></br>
              The goal is to hit the spheres coming towars you when they collide
              with the three rings at the bottom. Try to get the best accuracy
              possible!
            </p>
            <video
              className={styles.theVideo}
              autoPlay
              loop
              muted
              style={{ width: "700px", height: "auto" }}
            >
              <source src="video.mp4" type="video/mp4"></source>
            </video>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              className={styles.startBtn}
              style={{ position: "absolute", top: "183vh" }}
            >
              <a href="https://tittieteam.vercel.app">Play the game</a>
            </button>
          </div>

          {/* DOM contents in here will scroll along */}
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default CanvasComponent;
