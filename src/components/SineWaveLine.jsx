//components -> SineWaveLine
import * as THREE from "three";
import {useThree, useFrame} from "@react-three/fiber";
import {Line} from "@react-three/drei";
import {useState, useMemo, useRef} from "react";

export default function SineWaveLine({
    z = 0,
    amplitude = 0.5,
    frequency = 10,
    pointsCount = 100,
})  {
    const { camera } = useThree();
    const [phase, setPhase] = useState(0);                                                   //keeps track of phase wave

     //-------------------------HELPER: convert screen-space coordinates (NDC) to world-space-------------------------//
    
      const screenToWorld = (xNDC, yNDC, zWorld) => {
        //step 1: start with a point in normalized deviced coordinates (-1 to 1)
        const ndc = new THREE.Vector3(xNDC, yNDC, 0.5).unproject(camera);
    
        //step 2: get a direction vector from the camera to that point
        const dir = ndc.clone().sub(camera.position).normalize();
    
        //step 3: solve for long to travel along that vector to reach a desired z
        const distance = (zWorld - camera.position.z) / dir.z;
    
        //step 4: final world coordinate = camera position + scaled direction
        return camera.position.clone().add(dir.multiplyScalar(distance));
      };

      //animate phase increment
      useFrame(() => {
        setPhase((p) => p + 0.05);
      });
  
      //recompute points on phase change
        const points = useMemo(() => {
         const pts = [];
          for (let i = 0; i <= pointsCount; i++) {
            const xNDC = -1 + (2 * i) / pointsCount;                                                      //from -1 to 1
            const yNDC = amplitude * Math.sin(frequency * xNDC * Math.PI * 2 + phase);                     //sine NDC Y space
            const worldPoint = screenToWorld(xNDC, yNDC, z);
            pts.push(worldPoint.toArray());
          }
          return pts;
        }, [camera, z, amplitude, frequency, pointsCount, phase]);
        
        
        return (
      <Line 
        points={points}                                                     //sine wave made from the points array above
        color="black"                                                                                       //line color
       linewidth={3}                                                                                        //line width
     />                                                          
    );
  };