import React from 'react'

import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Skillset = () => {
  return (
    <div class="skills-container">
        <h2 class="skills-heading">Skillset</h2>
        <div class="skills-wrapper">
             <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Next.js</span>
            <span>Sass</span>
            <span>Tailwind</span>
            <span>Material-UI</span>
            <span>Git</span>
            <span>Framer-Motion</span>
            <span>Firebase</span>
            <span>Jira</span>
            <span>Storybook</span>
            <span>Styled-Components</span>
            <span>GraphQL</span>
            <span>GitLab</span>
            <span>Web Accessibility</span>
            <span>Postman</span>
        </div>
    </div>
    
    
  )

}

export default Skillset