/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
https://codesandbox.io/s/39hg8?file=/src/App.js:97-124
*/

import React, { useRef } from 'react'
import { useGLTF,useVideoTexture, Merged, shaderMaterial, } from '@react-three/drei'
import { useFrame, extend } from '@react-three/fiber';
import glb from './Model.glb';
import code1 from './code1.mp4';
import code2 from './code2.mov';
import glsl from 'babel-plugin-glsl/macro';
import * as THREE from 'three';
import { Color, AdditiveBlending } from 'three';

export default function Model(props) {
  const video1 = useVideoTexture(code1)
  const video2 = useVideoTexture(code2)
  const { nodes, materials } = useGLTF(glb)
  const ref = useRef()
  const light = useRef()
  const globeMaterial = useRef()
  useFrame(({ clock }) => {
      // Set positions
    let time = clock.getElapsedTime();
    ref.current.position.y += Math.sin(time) * .002;
    light.current.position.y += Math.sin(time) * .003;
    ref.current.updateMatrix();
    light.current.updateMatrix();
    globeMaterial.current.uTime += Math.sin(time) * .002;
    /*let t = Math.floor(time % 30);
    if( 0 <= t && t < 10){
      globeMaterial.current.whichColor = 0;
    }else if(10 <= t && t < 20){
      globeMaterial.current.whichColor = 1;
    }else if(20 <= t && t < 30){
      globeMaterial.current.whichColor = 2;
    }
    console.log(globeMaterial.current.whichColor);*/
  }, [])
  return (
    <Merged castShadow receiveShadow meshes={nodes}>
    {() => (
    <group {...props} dispose={null}>
      <group position={[0.86, 1.1, -3.72]} scale={[0.14, 1.56, 0.18]}>
        <mesh geometry={nodes.Cylinder003.geometry} material={materials['Wood.003']} />
        <mesh geometry={nodes.Cylinder003_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Cylinder003_2.geometry} material={materials['Wood.001']} />
        <mesh geometry={nodes.Cylinder003_3.geometry} material={materials['Wood.002']} />
      </group>
      <mesh geometry={nodes.Laptop.geometry} material={materials.Gray_Metal} position={[-0.3, 2.78, -1.76]} rotation={[0, -0.11, -1.58]} scale={[0.03, 0.54, 0.97]} />
      <mesh geometry={nodes.Screen.geometry} material={materials['Black_Metal.001']} position={[-0.82, 3.45, -1.82]} rotation={[0, -0.11, 0]} scale={[0.01, 0.55, 0.95]} >
        <meshBasicMaterial map={video2} toneMapped={false} map-flipY={false}/>
      </mesh>
      <mesh geometry={nodes.Mug.geometry} material={materials.Ceramic} position={[0.38, 3, -3.59]} rotation={[-0.08, -0.54, -1.59]} scale={[0.19, 0.28, 0.27]} />
      <group position={[-0.76, 3.76, 2.41]} rotation={[0, 0.21, 0]} scale={[0.02, 0.78, 1.46]}>
        <mesh geometry={nodes.Cube006.geometry} material={materials['Gray_Metal.001']} />
        <mesh geometry={nodes.Cube006_1.geometry} material={materials.Gray_Metal} />
      </group>
      <mesh geometry={nodes.Monitor_screen.geometry} material={materials.Code} position={[-0.73, 3.81, 2.4]} rotation={[0, 0.21, 0]} scale={[0.01, 0.69, 1.41]} >
        <meshBasicMaterial map={video1} toneMapped={false} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.Name.geometry} material={materials['Off-White']} position={[-1.3, 7.85, 4.33]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[2.81, 0.45, 2.81]} >
        <meshBasicMaterial color={[0, 1, 4]} toneMapped={false} />
      </mesh>
      <mesh geometry={nodes.Dev.geometry} material={materials.Purple} position={[-1.28, 6.53, 4.62]} rotation={[Math.PI / 2, -0.05, -Math.PI / 2]} scale={[0.95, 0.24, 1.15]} >
        <meshBasicMaterial color={[4, 0.1, 1]} toneMapped={false} />
      </mesh>
      <group position={[0.07, 2.81, -1.73]} rotation={[0, -0.11, -1.58]} scale={[0, -0.12, -0.22]}>
        <mesh geometry={nodes.Cube013.geometry} material={materials.Black} />
        <mesh geometry={nodes.Cube013_1.geometry} material={materials['Black.006']} />
        <mesh geometry={nodes.Cube013_2.geometry} material={materials['Black.024']} />
      </group>
      <mesh geometry={nodes.Pot.geometry} material={materials.Pot} position={[-0.84, 1.95, -6.56]} scale={[0.41, 0.33, 0.41]} />
      <mesh geometry={nodes.Dirt.geometry} material={materials.Dirt} position={[-0.84, 2.16, -6.55]} scale={[-0.41, 0.06, -0.4]} />
      <group position={[-0.93, 2.23, -6.81]} rotation={[1.3, 0.1, -0.34]} scale={[0.13, 0.04, 0.51]}>
        <mesh geometry={nodes.Sphere009.geometry} material={materials['Leaf.002']} />
        <mesh geometry={nodes.Sphere009_1.geometry} material={materials.Leaf} />
        <mesh geometry={nodes.Sphere009_2.geometry} material={materials['Leaf.001']} />
        <mesh geometry={nodes.Sphere009_3.geometry} material={materials['Leaf.003']} />
        <mesh geometry={nodes.Sphere009_4.geometry} material={materials['Leaf.004']} />
        <mesh geometry={nodes.Sphere009_5.geometry} material={materials['Leaf.005']} />
        <mesh geometry={nodes.Sphere009_6.geometry} material={materials['Leaf.006']} />
        <mesh geometry={nodes.Sphere009_7.geometry} material={materials['Leaf.007']} />
        <mesh geometry={nodes.Sphere009_8.geometry} material={materials['Leaf.008']} />
      </group>
      <mesh geometry={nodes.Coffee.geometry} material={materials.Dirt} position={[0.24, 3.17, -3.39]} rotation={[-Math.PI, 1.04, -Math.PI]} scale={[-0.2, -0.03, -0.2]} />
      <mesh geometry={nodes.Plane.geometry} material={materials.Paper} position={[0.3, 2.77, 1.28]} rotation={[0, 0.62, 0]} scale={[-0.62, -0.27, -0.42]} />
      <mesh geometry={nodes.Paper1.geometry} material={materials.Paper} position={[0.3, 2.77, 0.93]} rotation={[0, 0.41, 0]} scale={[-0.62, -0.27, -0.42]} />
      <mesh geometry={nodes.Paper2.geometry} material={materials.Paper} position={[0.3, 2.77, 0.3]} rotation={[0, -0.37, 0]} scale={[-0.62, -0.27, -0.42]} />
      <mesh geometry={nodes.Pencil.geometry} material={materials.Pencil} position={[0.36, 2.79, 0.81]} rotation={[-0.04, -0.56, -1.59]} scale={[-0.02, -0.43, -0.02]} />
      <mesh geometry={nodes.Walls.geometry} material={materials.Walls} position={[1.75, 5.88, 0.1]} scale={[3.75, 6.27, 10.68]} />
      <mesh geometry={nodes.Lamp_base.geometry} material={materials.Black} position={[-0.71, 1.71, -7.85]} scale={[0.26, 0.05, 0.26]} />
      <mesh ref={ref} geometry={nodes.Lamp.geometry} material={materials.Lamp} position={[-0.68, 2.18, -7.83]} scale={0.25} >
        {/*<meshBasicMaterial color={[4, 0.1, 1]} toneMapped={false} />*/}
        <colorShiftMaterial ref={globeMaterial}/>
      </mesh>
      <pointLight ref={light} color={[4, 0.1, 1]} position={[-0.68, 2.18, -7.83]} intensity={1}/>
      <mesh geometry={nodes.Chair_top.geometry} material={materials.Seat} position={[-0.15, 1.47, 6.75]} scale={[1.26, 0.77, 1.26]} />
      <mesh geometry={nodes.Chair_legs.geometry} material={materials.Material} position={[-0.23, 0.19, 5.65]} scale={[0.04, 0.52, 0.04]} />
      <mesh geometry={nodes.Rug.geometry} material={materials.Rug} position={[2.34, -0.37, 0.06]} scale={[3.78, 1.02, 10.6]} />
      <mesh geometry={nodes.Shelf.geometry} material={materials.Shelf} position={[-0.75, 1.53, -7.68]} scale={[0.56, 1.95, 2.12]} />
      <mesh geometry={nodes.Book.geometry} material={materials.Light_Book} position={[-0.55, 2.24, -9.59]} scale={[0.28, 0.58, 0.09]} />
      <mesh geometry={nodes.Book2.geometry} material={materials.Dark_book} position={[-0.55, 2.32, -9.39]} scale={[0.28, 0.67, 0.09]} />
      <mesh geometry={nodes.Book2001.geometry} material={materials.Darkest_book} position={[-0.55, 2.32, -8.83]} scale={[0.28, 0.67, 0.09]} />
      <mesh geometry={nodes.Book001.geometry} material={materials.Darkest_book} position={[-0.55, 2.24, -9.2]} scale={[0.28, 0.58, 0.09]} />
      <mesh geometry={nodes.Book003.geometry} material={materials.Dark_book} position={[-0.55, 0.26, -6.39]} scale={[0.28, 0.47, 0.09]} />
      <mesh geometry={nodes.Book002.geometry} material={materials.Dark_book} position={[-0.55, 0.38, -6.01]} scale={[0.28, 0.58, 0.09]} />
      <mesh geometry={nodes.Book2003.geometry} material={materials.Darkest_book} position={[-0.55, 0.47, -6.2]} scale={[0.28, 0.67, 0.09]} />
      <mesh geometry={nodes.Book2002.geometry} material={materials.Light_Book} position={[-0.55, 0.47, -5.82]} scale={[0.28, 0.67, 0.09]} />
      <mesh geometry={nodes.Book004.geometry} material={materials.Dark_book} position={[-0.55, 2.24, -8.64]} scale={[0.28, 0.58, 0.09]} />
      <mesh geometry={nodes.Book005.geometry} material={materials.Light_Book} position={[-0.55, 2.16, -9.02]} scale={[0.28, 0.49, 0.09]} />
      <mesh geometry={nodes.Book006.geometry} material={materials.Light_Book} position={[-0.55, 0.38, -6.58]} scale={[0.28, 0.58, 0.09]} />
      <mesh geometry={nodes.Lamp_Shade.geometry} material={materials['Lamp Shade']} position={[-0.13, 6.62, 9.82]} scale={[0.91, 0.59, 0.91]} >
      </mesh>
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['Lamp Base']} position={[-0.33, -0.32, 9.85]} scale={[0.55, 0.07, 0.55]} >
        <meshStandardMaterial color={"black"} />
      </mesh>
      <mesh geometry={nodes.Cube.geometry} material={materials['Dark Wood']} position={[-0.63, 0.38, -8.81]} scale={[0.35, 0.53, 0.77]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials.Latch} position={[-0.24, 0.52, -8.84]} scale={[-0.01, -0.05, -0.1]} />
    </group>
    )}
    </Merged>
  )
}

extend({ 
  ColorShiftMaterial: shaderMaterial(
      {uTime: 0, whichColor: 0},
      // vertex shader
      glsl`
      varying vec2 vUv;
      uniform float uTime;

      void main() {
        vUv = uv;
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
      
        gl_Position = projectedPosition;
      }
      `,
      // fragment shader
      glsl`
      varying vec2 vUv;
      uniform float uTime;
      uniform int whichColor;

      vec3 colorA = vec3(0.912,0.191,0.652);
      vec3 colorB = vec3(1.000,0.777,0.052);
      vec3 colorC = vec3(1.000,1.000,1.000);
      
      void main() {
          vec3 color = mix(colorA, colorC, uTime);
          gl_FragColor = vec4(color,1.0);
      }
      `,
    ),
 });

 /*
       varying vec2 vUv;
      uniform float uTime;
      uniform int whichColor;

      vec3 colorA = vec3(0.912,0.191,0.652);
      vec3 colorB = vec3(1.000,0.777,0.052);
      vec3 colorC = vec3(0.768,1.0,0.988);
      
      void main() {
        if(whichColor == 0){
          vec3 color = mix(colorA, colorB, uTime);
          gl_FragColor = vec4(color,1.0);
        }else if(whichColor == 1){
          vec3 color = mix(colorB, colorC, uTime);
          gl_FragColor = vec4(color,1.0);
        }else{
          vec3 color = mix(colorC, colorA, uTime);
          gl_FragColor = vec4(color,1.0);
        }
      }*/

useGLTF.preload(glb)
