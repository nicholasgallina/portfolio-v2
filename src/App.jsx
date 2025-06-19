import * as THREE from "three";
import {Canvas, useThree} from "@react-three/fiber";

//locals
import SineWaveLine from "./components/SineWaveLine";

//--------------------------------------------Main Application--------------------------------------------------------//

export default function App() {
  return (
    //canvas is the root of your 3D scene
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }} //set up camera position and fov
       style={{
        height: '100vh',                                     //fullscreen height
        width:'100vw',                                        //fullscreen width
        background: '#e8e8e8'                                 //background color
     }}
  >
    {/*-------------------LIGHTING--------------------*/}
    <directionalLight
     position={[1, 1, 1]}                          //line position in 3D space
     intensity={10}                                               //brightness
     color={0xFF6633}                                            //light color
    />

    <ambientLight intensity={1} />

    {/*-------------------COMPONENTS------------------*/}
    <SineWaveLine z={0} amplitude={0.5} frequency={3} pointsCount={200} />
      
    </Canvas>
  );
}