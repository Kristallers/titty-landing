import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

export function Model(props) {
  const { nodes, materials } = useGLTF(
    "/car-model/source/model-transformed.glb"
  );
  const carRef = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });
    console.log("ref", carRef.current);
    console.log("timeline", tl);

    tl.current

      .to(carRef.current.rotation, { y: 1.1 }, 3)
      .to(carRef.current.position, { x: -2.5, z: 1.5 }, 3)

      .to(carRef.current.rotation, { y: 0, x: 0.5 }, 16)
      .to(carRef.current.position, { x: 0, z: 1, y: -1 }, 16);
  }, []);
  return (
    <group ref={carRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.mirror_left.geometry}
        material={nodes.mirror_left.material}
      />
      <mesh geometry={nodes.cube.geometry} material={nodes.cube.material} />
      <mesh
        geometry={nodes.cylinder.geometry}
        material={nodes.cylinder.material}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload("/car-model/source/model-transformed.glb");
