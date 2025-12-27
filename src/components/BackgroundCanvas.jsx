import {Canvas} from "@react-three/fiber";
import SineWaveLine from "./SineWaveLine";

export default function BackgroundCanvas () {
  return (
    //canvas is the root of your 3D scene
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      className="fixed inset-0 -z-10"
       //set up camera position and fov
       //</>style={{
        //height: '100vh', //fullscreen height
        //width:'100vw', //fullscreen width
        //background: '#000000' //background color
     //}}
  >
    {/*-------------------LIGHTING--------------------*/}
    <directionalLight
     position={[1, 1, 1]}  //line position in 3D space
     intensity={10} //brightness
     color={0xFF6633} //light color
    />

    <ambientLight intensity={1} />
    <SineWaveLine z={0} amplitude={.25} frequency={0.25} pointsCount={200} />
    </Canvas>
  )
}