import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// const ExperienceCard = ({ experience }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background: "#1d1836",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "7px solid  #232631" }}
//       date={experience.date}
//       iconStyle={{ background: experience.iconBg }}
//       icon={
//         <div className='flex justify-center items-center w-full h-full'>
//           <img
//             src={experience.icon}
//             alt={experience.company_name}
//             className='w-[60%] h-[60%] object-contain'
//           />
//         </div>
//       }
//     >
//       <div>
//         <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
//         <p
//           className='text-secondary text-[16px] font-semibold'
//           style={{ margin: 0 }}
//         >
//           {experience.company_name}
//         </p>
//       </div>

//       <ul className='mt-5 list-disc ml-5 space-y-2'>
//         {experience.points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className='text-white-100 text-[14px] pl-1 tracking-wider'
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   );
// };

const Experience = () => {
  return (
   
    <div class="about-experience-section">
      <h2 class="about-experience-heading">Experience</h2>
    <div class="about-experience-item">
      <div class="about-experience-date">May 2021 - Present</div>
      <div>
        <h2 class="about-experience-title">Agile Solutions- Fullstack Developer</h2>
        <p class="about-experience-description">I lead the initiative for developing and maintaining frontend components using HTML5, CSS3, and JavaScript/TypeScript, ensuring the delivery of high-quality and seamless user experiences. I collaborate seamlessly with cross-functional teams to translate design concepts into fully functional web applications. My responsibilities include conducting comprehensive code reviews, performance testing, and providing constructive feedback to ensure code quality, utilizing tools like ESLint and Jest. Additionally, I implement performance optimizations, administer lazy loading, and implement code splitting, resulting in a significant 60% reduction in page load times, ultimately enhancing the overall user experience. 🚀</p
        ><div class="about-experience-technologies">
        <span class="about-experience-technology">Javascript</span>
        <span class="about-experience-technology">React.js</span>
        <span class="about-experience-technology">Node.js</span>
          <span class="about-experience-technology">Next.js</span>
          <span class="about-experience-technology">TypeScript</span>
          <span class="about-experience-technology">SCSS</span>
          <span class="about-experience-technology">Styled Components</span>
          <span class="about-experience-technology">Tailwind</span>
          <span class="about-experience-technology">Storybook</span>
          <span class="about-experience-technology">GraphQL</span>
       </div>
    </div>
      </div>
      
      </div>
  );
};

{/* export default SectionWrapper(Experience, "work"); */}
export default SectionWrapper(Experience, "experience");
