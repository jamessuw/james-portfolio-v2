import Spline from '@splinetool/react-spline';
import React, { useState, useEffect } from "react";
import './landing.css';






function Landing() {
const [text, setText] = useState("")
const [fullText, setfullText] = useState("FRONT-END ENGINNIERS")
const [index, setIndex] = useState(0)

useEffect(() => {
  if (index < fullText.length) {
    setTimeout(() => {
      setText(text + fullText [index])
        setIndex(index + 1)
    }, 60)
    
  }
}, [index]);




  return (
    <section id='sct-landing-mobile'>
      <div className="container" id='landing-container'>
        <div className="container-1" id="landing-page">
<div className="binary-cube">
<Spline  id="cube-canva" scene="https://prod.spline.design/1YV3mver-qvdV2nK/scene.splinecode" />


</div>

<div className='container-text'>
<div className="landing-text">
<h1>{text}</h1>
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
