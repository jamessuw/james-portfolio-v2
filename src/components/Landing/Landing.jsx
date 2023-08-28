import Spline from '@splinetool/react-spline';
import React, { useState, useEffect } from "react";
import './landing.css';
import Blob from "../Landing/Blob.jsx";
import { Canvas } from '@react-three/fiber';





function Landing() {


  return (

    <section id='sct-landing-mobile'>
      <div className="container" id='landing-container'>
        <div className="container-1" id="landing-page">
   

 <div className="binary-cube">
 <div className='blob-container'>
      <Canvas camera={{position:[0.0,0.0,8.0]}} >
<Blob/>
</Canvas>
</div>
</div> 
   


<div className='container-text'>
<div className="landing-text">
{/* <h1>{text}</h1> */}
<h5>James Wijaya</h5><a href="#" title="LinkedIn"><i class="fa fa-linkedin fa-fw"></i> LinkedIn</a> | <a href="#" title="LinkedIn"><i class="fa fa-linkedin fa-fw"></i> GitHub</a>


</div>
<div className='spacing'>

</div>

<div className='landing-catalog'>
  <div className='circle' id='catalog-circle'></div>
<h1>HEY, WELCOME TO MY PORTFOLIO FEEL FREE TO BROWSE AROUND! </h1>
</div>
</div>
          
        </div>
      </div>
    </section>
  );
}

export default Landing;
