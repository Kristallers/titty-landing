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

        <Scroll html style={{ width: "100%", color: "white", zIndex: -1 }}>
          <div
            style={{
              position: "absolute",
              top: "5vh",
              left: "10vw",
              width: "50%",
            }}
            className={styles.introductionText}
          >
            <h1 className={styles.mainTitle}>Yung Titties Experience</h1>
            <p className={styles.p}>
              This all-female hip-hop trio from Sweden is about to blow your
              mind. Since 2016, they've been defying the music industry's rules,
              creating major music without major labels. With their debut single
              "Tsunami," they celebrate the power of the Pussy and give a
              defiant nod to those who underestimate it. <br></br>
              <br></br> And now, here's a treat for you — a fun game that lets
              you experience their next single and new sound. Tap on your iPhone
              or use the keys 'a,' 's,' and 'd' on your browser—it's like Guitar
              Hero, Yung Titties style! Let's make music magic together!
            </p>
          </div>

          <div
            style={{ position: "absolute", top: "70vh", left: "50vw" }}
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
