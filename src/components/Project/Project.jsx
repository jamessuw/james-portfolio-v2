import React, { useState } from 'react'
import './project.css'
import { Container } from 'reactstrap'
// import Popup from 'reactjs-popup';







function Project() {
   
// const [isOpen, setIsOpen] = useState (false);  

// const togglePopup = () => {
//     setIsOpen(!isOpen);
//   }
const [isHovered, setIsHovered] = useState(false);


const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <section id='project-section-container'>
      <div className='project-head'> 
            <h1>PROJECT</h1>
            <h2>ARCHIVE</h2>
        </div>  
    <div className='container'>
    
    <div className='container-1' id='project-container'>
        
        <div className='container-image-project'>
           
            <div className='list-project'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
             <div className='list-text'><h4>KumalaJingga</h4>
             </div>
            <div className='project-pill-container'><div className='project-pill'><p>Indonesia</p></div><div className='project-pill'><p>Web Development</p></div><div className='project-pill'><p>WordPress</p></div><div className='project-pill'><p>SEO</p></div></div>
            
           </div>
           <div className='list-project'>
             <div className='list-text'><h4>Meetbowl</h4>
             </div>
            <div className='project-pill-container'><div className='project-pill'><p>Indonesia</p></div><div className='project-pill'><p>Web Development</p></div><div className='project-pill'><p>WordPress</p></div><div className='project-pill'><p>SEO</p></div></div>  
           </div>

           <div className='list-project'>
             <div className='list-text'><h4>Etome</h4>
             </div>
            <div className='project-pill-container'><div className='project-pill'><p>Indonesia</p></div><div className='project-pill'><p>Web Development</p></div><div className='project-pill'><p>WordPress</p></div><div className='project-pill'><p>SEO</p></div></div>
            
             {/* <div className='img-project'> <img src="meetbowl.png" alt="" /></div> */}
           </div>

           <div className='list-project'>
             <div className='list-text'><h4>Admin Dashboard</h4>
             </div>
            <div className='project-pill-container'><div className='project-pill'><p>Indonesia</p></div><div className='project-pill'><p>Web Development</p></div><div className='project-pill'><p>WordPress</p></div><div className='project-pill'><p>SEO</p></div></div>
            
             {/* <div className='img-project'> <img src="meetbowl.png" alt="" /></div> */}
           </div>

         
        
        
</div>


       

{/* 

    <Popup trigger=
                { <button id="folder-button" onClick={togglePopup}>
                <div class="folder">
                  <div class="folder__back">
                    <div class="paper"></div>
                    <div class="paper"></div>
                    <div class="paper"></div>
                    <div class="paper"></div>
                    <div class="folder__front"></div>
                    <div class="folder__front right"></div>
                  </div>
                  <span class="project_name">
                  <p>Meetbowl</p>
                  </span>
                  </div>
                </button>}
                position="top center">
                <div className='window-pop'>GeeksforGeeks</div>
               
            </Popup>
 */}

    </div>
      <div className='container-1'></div>
     {isHovered && <img className='img-project'src="kumalajingga.png" alt="Hovered Image" />}
      </div>
    




    </section>



    
  )
}

export default Project
