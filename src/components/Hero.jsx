import { motion } from "framer-motion";

import { styles} from "../styles";
//import { ComputersCanvas } from "./canvas";

import React from 'react';
import Typed from 'typed.js';

const Hero = () => {
  
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<span style='color: Cyan;'>Software Engineer</span>", "<span style='color: #cc99ff;'>Frontend Developer</span>", "<span style='color: #90ee90;'>FullStack  Developer</span>"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    
       <section className={`relative w-full h-screen mx-auto `}>
       
      <div className="hero">
        <div className="hero-wrapper">
          <h1 className="hero-wrapper-title">
            <span>Hello. I'm Abhi Dasari</span>

          </h1>
          <p className={`${styles.heroSubDescText} mt-2 text-white-100`}>
           <h1>A <span ref={el} /></h1>
          </p>
          <p className="hero-wrapper-description">I'm passionate about creating experiences that are easy to use, accessible, and that meet the user's needs.</p>
        </div>
      </div>
      
     
      

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
        </a>
      </div> */}
    </section>
   
  );
};

export default Hero;
