/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 scene.gltf 
Author: quaz30 (https://sketchfab.com/quaz30)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/cyberpunk-laptop-6be01e731cd245d6909cbab1af0ad274
Title: Cyberpunk Laptop
*/

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/scene.gltf');

  // State to control open/close
  const [isOpen, setIsOpen] = useState(false);

  // This could be a constant, adjust based on your model's specific hinge point
  const hingePoint = [0, 0, 0];

  useFrame(() => {
    if (group.current) {
      // Assuming the screen is a separate group and named accordingly in the GLTF file
      const screen = group.current.getObjectByName("Laptop_Screen");

      if (screen) {
        // Rotating the screen to open/close the laptop
        // Replace '0.01' with a different value to control the speed of the animation
        screen.rotation.x += isOpen ? 0.01 : -0.01;

        // Clamping the rotation to avoid over-rotation
        screen.rotation.x = Math.max(-Math.PI / 2, Math.min(screen.rotation.x, 0));
      }
    }
  });

  // Function to toggle the laptop open/close
  const toggleLaptop = () => {
    setIsOpen(!isOpen);
  };

  return (
    <group ref={group} {...props} dispose={null} onClick={toggleLaptop}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Laptop_Top} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.Laptop_Keyboard} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials.Laptop_Bottom} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/scene.gltf');

