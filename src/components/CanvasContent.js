import React, { Suspense } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Earth from "../components/Earth";

const CanvasContent = ({ animationComplete }) => {
    const { camera } = useThree(); // Access the camera

    useFrame(({ clock }) => {
        if (animationComplete.kyrin && animationComplete.engineer) {
            const elapsedTime = clock.getElapsedTime();
            const fallStartTime = 3;
            if (elapsedTime > fallStartTime) {
                const fallSpeed = 0.1;
                camera.position.y -= fallSpeed; // Modify camera position
            }
        }
    });

    return (
        <>
            <ambientLight color={"white"} intensity={5.5} />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls />
            <Suspense fallback={null}>
                <Earth scale={[3, 3, 3]} />
            </Suspense>
        </>
    );
};

export default CanvasContent;
