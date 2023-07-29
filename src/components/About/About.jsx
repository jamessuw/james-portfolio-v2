import React from 'react'
import './about.css';
// import aboutJamesImage from '../src/assets/images/about-james.jpg';





function About() {
  return (
    <section id='About-section'>
        <div className='container'>

          
            <div className='container-1'>
            
            <img src="about-james.jpg" alt="About James" id='image-about' />
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
