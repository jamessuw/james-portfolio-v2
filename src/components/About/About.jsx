
import './about.css';
// import aboutJamesImage from '../src/assets/images/about-james.jpg';
import { Avatar } from '@readyplayerme/visage';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model'; /* highlight-line */




const modelSrc = 'https://models.readyplayer.me/64c7b1af067a35dfd8b3de7f.glb';


function About() {
  return (
    <section id='About-section'>
        <div className='container'>

          
            <div className='container-1'>
              <div className='avatar-3D'>
                
      <h5>This is Me!</h5>
            <Canvas
         camera={{ position: [2, 0, 12.25], fov: 15 }}
         style={{
            backgroundColor: 'transparent',
            width: '100%',
            height: '100vh',
            id:'canvaId'
         }}
      >
         <ambientLight intensity={0.1} />
         <ambientLight intensity={0.1} />
         <directionalLight 
         intensity={1.5}
         shadow-camera-far={90}
         />
         <Suspense fallback={null}>
            <Model position={[0.025, -0.9, 0]} /> /* highlight-line */
         </Suspense>
         <OrbitControls autoRotate={false} enableZoom={false}/>
         
      </Canvas>
</div>

            {/* <div className='avatar-3D'><Avatar
  ambientLightColor="#fff5b6"
  ambientLightIntensity={0.25}
 
  background={{}}
  cameraInitialDistance={0}
  cameraTarget={1.65}
  cameraZoomTarget={null}
  className="avatar"
  dirLightColor="#002aff"
  dirLightIntensity={5}
  environment="hub"
  headMovement
  idleRotation
  modelSrc="https://models.readyplayer.me/64c7b1af067a35dfd8b3de7f.glb"
  poseSrc='https://models.readyplayer.me/64c7b1af067a35dfd8b3de7f.glb'
  onLoaded={function noRefCheck(){}}
  onLoading={function noRefCheck(){}}
  scale={1}
  spotLightAngle={0.314}
  spotLightColor="#fff5b6"
  spotLightIntensity={1}

  style={{
    background: 'transparent'
  }} */}

            {/* <img src="about-james.jpg" alt="About James" id='image-about' /> */}
            <div className='icon-container-profile'>
            <div className='icon-profile'><a href='https://github.com/jamessuw'><img className="github-logo-icon"src='github-logo-icon.png'></img></a></div> 
            <div className='icon-profile'><a href='https://www.linkedin.com/in/jamessuryawijaya/'><img className="linkedin-logo-icon"src='linkedin-logo-icon.png'></img></a></div> 
           </div>

            </div>
            <div className='container-1'>
              <div className='text-container'>
            <span className='about-text'><h1>ABOUT-ME</h1> 
            <div><img src='varified.png'></img></div></span>
            <span className='about-para'><p>Hi, Thank you for visiting my profile! I'm a Front-end Developer that passionate about Innovative technology. I always Incorporate my creativity into my work. For the past few years, I have helped businesses and individuals to achieve functional aesthetic websites. I'm fortunate to be able to work with amazing clients and companies that use Innovative technology.</p>
</span>
<div className='skills-container'>
  <span className='skills-pill'>HTML5</span> <span className='skills-pill'>CSS</span> <span className='skills-pill'>Javacripts</span> <span className='skills-pill'>React.js</span> <span className='skills-pill'>Typescripts</span> <span className='skills-pill'>Github</span> <span className='skills-pill'>Tailwind</span> <span className='skills-pill'>Figma</span>


</div>

</div>
            </div>

        </div>

    </section>
      
    
  )
}

export default About
