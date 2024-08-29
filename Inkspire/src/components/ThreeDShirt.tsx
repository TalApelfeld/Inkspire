// src/components/ThreeDShirt.tsx
// import React, { useEffect, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import * as THREE from "three";

// const Shirt: React.FC = () => {
//   const shirtRef = useRef<THREE.Group>(null);

//   // Load the .glb model
//   const { scene } = useGLTF("/assets/shirt.glb");

//   // Automatically rotate the shirt
//   useFrame(() => {
//     if (shirtRef.current) {
//       shirtRef.current.rotation.y += 0.01; // Adjust rotation speed if necessary
//     }
//   });

//   useEffect(() => {
//     if (scene) {
//       scene.scale.set(3, 3, 3); // Increase the scale to make the model bigger
//       scene.position.set(0, -2, 0); // Center the model by adjusting its position
//     }
//   }, [scene]);

//   return <primitive ref={shirtRef} object={scene} />;
// };

// const ThreeDShirt: React.FC = () => {
//   return (
//     <div className="shirt ">
//       <Canvas
//         style={{ width: "100%", height: "500px" }}
//         camera={{ fov: 15, position: [0, 20, 0] }} // Adjust FOV and camera position
//       >
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <Shirt />
//         <OrbitControls
//           enableZoom={false} // Disable zooming
//           enablePan={false} // Disable panning
//           maxPolarAngle={Math.PI / 2} // Limit vertical rotation
//           minPolarAngle={Math.PI / 2} // Limit vertical rotation
//         />
//       </Canvas>
//     </div>
//   );
// };

// export default ThreeDShirt;

import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Shirt: React.FC<{ color: string }> = ({ color }) => {
  const shirtRef = useRef<THREE.Group>(null);

  // Load the .glb model
  const { scene, materials } = useGLTF("/assets/shirt.glb");

  // Automatically rotate the shirt
  useFrame(() => {
    if (shirtRef.current) {
      shirtRef.current.rotation.y += 0.01; // Adjust rotation speed if necessary
    }
  });

  useEffect(() => {
    if (scene && materials) {
      Object.values(materials).forEach((material) => {
        if (
          material instanceof THREE.MeshStandardMaterial ||
          material instanceof THREE.MeshPhongMaterial
        ) {
          (
            material as THREE.MeshStandardMaterial | THREE.MeshPhongMaterial
          ).color = new THREE.Color(color);
        }
      });

      scene.scale.set(3, 3, 3); // Increase the scale to make the model bigger
      scene.position.set(0, -2, 0); // Center the model by adjusting its position
    }
  }, [scene, materials, color]);

  return <primitive ref={shirtRef} object={scene} />;
};

const ThreeDShirt: React.FC = () => {
  const [shirtColor, setShirtColor] = useState("#ff0000"); // Default color: red

  return (
    <div className="shirt">
      <Canvas
        style={{ width: "100%", height: "500px" }}
        camera={{ fov: 15, position: [0, 20, 0] }} // Adjusted camera position
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Shirt color={shirtColor} />
        <OrbitControls
          enableZoom={false} // Disable zooming
          enablePan={false} // Disable panning
          maxPolarAngle={Math.PI / 2} // Limit vertical rotation
          minPolarAngle={Math.PI / 2} // Limit vertical rotation
        />
      </Canvas>

      <div className="bg-orange-300 mt-28">
        <label htmlFor="colorPicker">Choose Shirt Color: </label>
        <input
          type="color"
          id="colorPicker"
          value={shirtColor}
          onChange={(e) => setShirtColor(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ThreeDShirt;
