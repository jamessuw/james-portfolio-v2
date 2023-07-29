// import logo from './logo.svg';
import './App.css';
import NavMenu from "./components/Nav/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
// import ParticleComp from './components/Particle/ParticleComp';
import Landing from './components/Landing/Landing';
import About from './components/About/About';


function App() {
  return (
    <>
    {/* <ParticleComp/> */}
    <NavMenu/>
    <Landing/>
    <About/>

</>
  );
}

export default App;
