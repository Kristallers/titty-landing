import React from "react";
import { Scroll, ScrollControls } from "@react-three/drei";

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
				<Scroll>{/* Canvas contents in here will scroll along */}</Scroll>
				<Scroll html style={{ width: "100%", color: "white" }}>
					<div>FIRST ELEMENT</div>
					<div style={{ position: "absolute", top: "100vh" }}>Next element</div>
					{/* DOM contents in here will scroll along */}
				</Scroll>
			</ScrollControls>
		</>
	);
};

export default CanvasComponent;
