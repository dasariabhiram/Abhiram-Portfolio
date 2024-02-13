import { motion } from "framer-motion";

import { styles} from "../styles";
import { ComputersCanvas } from "./canvas";
import BgAnimation from './canvas/BackgrooundAnimation/BackgroundAnimation';
import React from 'react';
import Typed from 'typed.js';

const Hero = () => {
  
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<span style='color: Cyan;'>Frontend Developer</span>", "<span style='color: #cc99ff;'>Backend Developer</span>", "<span style='color: #90ee90;'>FullStack Web Developer</span>"],
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
        <BgAnimation />
      <div
        className={`absolute inset-0 top-[150px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Hello,It's Me <br className='sm:block hidden' />
          </p>
          <h1 className={`${styles.heroHeadText} text-white`}>
           <span className='text-[#915EFF]'>Abhi Dasari</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
           <h2>And I'm a   <span ref={el} /></h2>
          </p>
        </div>
       
      </div>
      
     
      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
        </a>
      </div>
    </section>
   
  );
};

export default Hero;
