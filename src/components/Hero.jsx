import { motion } from "framer-motion";
import { styles } from "../styles";
import React from "react";
import Typed from "typed.js";

const Hero = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<span style='color: Cyan;'>DevOps Engineer</span>",
        "<span style='color: #cc99ff;'>Cloud Practitioner</span>",
        "<span style='color: #90ee90;'>CI/CD Architect</span>",
        "<span style='color: #FFD700;'>Infrastructure Automator</span>"
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-white">
          <span>Hello. I'm Abhi Dasari</span>
        </h1>
        <p className={`${styles.heroSubDescText} mt-4 text-white text-xl`}>
          <span ref={el} />
        </p>
        <p className="max-w-xl mx-auto mt-4 text-white-100 text-base">
          I build scalable, secure, and automated infrastructure solutions on the cloud. 
          Passionate about enhancing developer workflows, optimizing deployments, and ensuring 
          high availability across environments.
        </p>

        <a
          href="https://drive.google.com/uc?export=download&id=1gzze7yH_JmwDxHLxiUde--3NByRZN7yO"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-6 rounded-lg shadow transition-all duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
