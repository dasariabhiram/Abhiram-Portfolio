import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <div className="about-experience-section">
      <h2 className="about-experience-heading">Experience</h2>

      <div className="about-experience-item">
        <div className="about-experience-date">May 2021 - Present</div>
        <div>
          <h2 className="about-experience-title">
            Agile Solutions – AWS DevOps Engineer
          </h2>
          <p className="about-experience-description">
            As an AWS DevOps Engineer, I designed and implemented scalable CI/CD pipelines 
            using GitLab CI and Jenkins to streamline application delivery. I managed cloud 
            infrastructure using AWS services like EC2, S3, Lambda, IAM, and CloudFormation. 
            I containerized microservices with Docker and orchestrated deployments using 
            Kubernetes (EKS). I also implemented robust monitoring and logging solutions 
            using CloudWatch, Prometheus, and Grafana to ensure high availability and 
            reliability of critical systems. Worked closely with development and QA teams 
            to enable automated testing and efficient release processes.
          </p>

          <div className="about-experience-technologies">
            <span className="about-experience-technology">AWS</span>
            <span className="about-experience-technology">EC2</span>
            <span className="about-experience-technology">S3</span>
            <span className="about-experience-technology">EKS</span>
            <span className="about-experience-technology">Docker</span>
            <span className="about-experience-technology">Kubernetes</span>
            <span className="about-experience-technology">GitLab CI/CD</span>
            <span className="about-experience-technology">Jenkins</span>
            <span className="about-experience-technology">CloudWatch</span>
            <span className="about-experience-technology">Grafana</span>
            <span className="about-experience-technology">Prometheus</span>
            <span className="about-experience-technology">CloudFormation</span>
            <span className="about-experience-technology">Linux</span>
            <span className="about-experience-technology">Shell Scripting</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
