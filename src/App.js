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
  useEffect(() => {
    const mediaQueryHandler = () => {
      const sections = gsap.utils.toArray('.panel');

      ScrollTrigger.config({
        ignoreMobileResize: true,
      });

      sections.forEach((panel, i) => {
        gsap.to(panel, {
          scrollTrigger: {
            trigger: panel,
            scrub: 2,
            pin: true,
            pinSpacing: false,
            start: "top", 
            end: () => `+=${panel.clientHeight}`,
            onUpdate: self => console.log("progress:", self.progress),
            
            
          
          },
        });
      });
    };
    

    const mm = window.matchMedia('(min-width: 800px)');

    if (mm.matches) {
      mediaQueryHandler();
    }

    const mediaQueryListener = (event) => {
      if (event.matches) {
        mediaQueryHandler();
      } else {
        // Optional: Custom cleanup code here (runs when it stops matching)
      }
    };

    mm.addListener(mediaQueryListener);

    return () => {
      mm.removeListener(mediaQueryListener);
    };
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
