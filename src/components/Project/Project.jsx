import React, { useState } from 'react'
import './project.css'
import { Container } from 'reactstrap'
// import Popup from 'reactjs-popup';


function Project() {
  const [hoveredItem, setHoveredItem] = useState(null);

  
  const handleMouseEnter = (itemName) => {
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const projectItems = [
    {
      name: "KumalaJingga",
      imageSrc: "kumalajingga.png",
      text: "",
      tech:"Wordpress",
      service:"Web Development",
      location:"Indonesia"
    },
    {
      name:"ClearDynamics",
      imageSrc:"CD.png",
      text:"",
      service:"Contract",
      location:"Melbourne",
      tech:"Professionals"
  },
    {
      name: "Meetbowl",
      imageSrc: "meetbowl.png",
      text: "",
      tech:"SquareSpace",
      service:"Web Development",
      location:"Melbourne"
    },
    {
      name: "etome",
      imageSrc: "etome.png",
      text: "",
      tech:"Shopify",
      service:"Web Development",
      location:"Indonesia"
    },

    // Add more project items here

    
  ];

  return (

    
    <section id='project-section-container'>
      <h1>PROJECT</h1>
      <h2>ARC`HIVE</h2>
      <div className='container'>
      {/* list container descriptions*/}
      <div className='container-1'>

        {projectItems.map((item) => (
          <div
            key={item.name}
            className='project-container'
            onMouseEnter={() => handleMouseEnter(item.name)}
            onMouseLeave={handleMouseLeave}
          >
            <div className='list-text'>
              <h4>{item.name}</h4>   
              <div className='project-pill-container'>
              <div className='project-pill'> <p>{item.tech}</p></div><div className='project-pill'> <p>{item.location}</p></div><div className='project-pill'> <p>{item.service}</p></div>
              </div>
            </div>
          </div>
        ))}
        
      </div>

    {/* Image container -project */}
      <div className='container-1'>

        {projectItems.map((item) => (
          <div
            key={item.name}
            className='image-container'
          >
            {hoveredItem === item.name && (
              <div className='hovered-item'>
                <img
                  className='img-project'
                  src={item.imageSrc}
                  alt={item.name}
                />
                <p>{item.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* ... */}</div>
      
    </section>



    
  )
}

export default Project
