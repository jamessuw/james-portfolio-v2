// import logo from './logo.svg';
import './App.css';
import NavMenu from "./components/Nav/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
// import ParticleComp from './components/Particle/ParticleComp';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';






function App() {
  let sections = gsap.utils.toArray(".panel");

  useEffect(() => {
    const sections = gsap.utils.toArray('.panel');

    ScrollTrigger.config({ 
      ignoreMobileResize: true
    });

    sections.forEach((panel, i) => {
      gsap.to(panel, {
        scrollTrigger: {
          trigger: panel,
          start: 'top top',
          scrub: 1,
          makers:true,
          pin: true,
          pinSpacing: false,
          end: "+=150%",
          // scroller: '.container', // for mobile responsive 
          snap: {
            snapTo: 1,
            duration: { min: 0.5, max: 0.5 }
          }
        }
      });
    });
  }, []);

  
  ScrollTrigger.config({ 
    ignoreMobileResize: true
  });
  return (
    <>
    {/* <ParticleComp/> */}
    <NavMenu/>
    <section class="panel">
    <Landing/>
    </section>
    <section class="panel">
     <About/>
    </section>
    <section className='panel'>
    <Project/>
    </section>
    <section class="panel">
    <Contact/>
   </section>
</>
  );
}

export default App;
