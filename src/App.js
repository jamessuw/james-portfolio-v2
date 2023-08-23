// import logo from './logo.svg';
import './App.css';
import NavMenu from "./components/Nav/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
// import ParticleComp from './components/Particle/ParticleComp';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';



function App() {
  return (
    <>
    {/* <ParticleComp/> */}
    <NavMenu/>
    <Landing/>
    <About/>
    <Project/>
    <Contact/>
   
</>
  );
}

export default App;
