import Spline from '@splinetool/react-spline';
import React, { useState, useEffect } from "react";
import './landing.css';
import Blob from "../Landing/Blob.jsx";
import { Canvas } from '@react-three/fiber';





function Landing() {


  return (

    <section id='sct-landing-mobile' className='Landing-section'>
      <div className="container" id='landing-container'>
        <div className="container-1" id="landing-page">
   

 <div className="binary-cube">
 <div className='blob-container'>
      <Canvas camera={{position:[0.0,0.0,8.0]}} shadow>
<Blob />
</Canvas>
</div>
</div> 
   


<div className='container-text'>
<div className="landing-text">
{/* <h1>{text}</h1> */}
<span className="pill-design"><h5>James Wijaya</h5></span>
<span className="pill-design"><a href="#" title="LinkedIn"><i class="fa fa-linkedin fa-fw"></i> LinkedIn</a> | <a href="#" title="LinkedIn"><i class="fa fa-linkedin fa-fw"></i> GitHub</a></span>


</div>
<div className='spacing'>

</div>

<div className='landing-catalog'>
  <div className='circle' id='catalog-circle'></div>
<h1>HI, IM A FRONT-END ENGINNERS! WELCOME TO MY PORTFOLIO FEEL FREE TO BROWSE. MORE UPDATE ARE COMMING SOON! </h1>
</div>
</div>
          
        </div>
      </div>
    </section>
  );
}

export default Landing;
