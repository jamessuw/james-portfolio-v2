import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model'; /* highlight-line */






function Contact() {
    const modelSrc = 'https://models.readyplayer.me/64c7b1af067a35dfd8b3de7f.glb';

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wmblofu",
        "template_fn5pf0l",
        form.current,
        "G8Hlr2zdNdDizyDKT"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Thank you. Message has been sent! James will be in touch soon :)"); // Display an alert window
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <div className="container">
        <span>
          {" "}
          <h1>CONTACT</h1>
        </span>
        <div className="container-1">
        <Canvas
         camera={{ position: [2, 0, 12.25], fov: 15 }}
         style={{
            backgroundColor: 'transparent',
            width: '100%',
            height: '100vh',

         }}
      >
         <ambientLight />
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         
         <directionalLight 
         intensity={0.4}
         shadow-camera-far={20}
         shadow-camera-bottom={-10}
         shadow-camrea={false}
         color="#FFFFFF"
         shadow-radius={5} 
         castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
         />
         <Suspense fallback={null}>
         <pointLight
        castShadow
        intensity={0.2}
        args={[0xff0000, 1, 100]}
        position={[1, 1, 1]}
      />

      <spotLight
        castShadow
        intensity={1.5}
        args={["grey", 1, 100]}
        position={[-1, 1, 1]}
        distance={10}
      />
            <Model position={[0.025, -0.9, 0]} /> /* highlight-line */
         </Suspense>
         <OrbitControls autoRotate={false} enableZoom={false}/>
         
      </Canvas>


</div> 


        <div className="container-1">
          <section>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="--form-control--crad"
            >
              <input
                type="text"
                placeholder="Full name"
                name="user_name"
                required
              />
              <input
                type="text"
                placeholder="Email"
                name="user_email"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                name="user_subject"
                required
              />

              <textarea
                className="text-area-form"
                name="message"
                placeholder="Messages"
                cols="30"
                rows="10"
              ></textarea>

              <button className="button-contactForm" type="submit">
                Send massages
              </button>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Contact;
