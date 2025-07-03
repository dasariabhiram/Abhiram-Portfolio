import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Skillset = () => {
  return (
    <motion.div
      className="skills-container"
      variants={fadeIn("", "", 0.1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <h2 className="skills-heading">Skillset</h2>
      <div className="skills-wrapper">
        <span>AWS</span>
        <span>Docker</span>
        <span>Kubernetes</span>
        <span>Terraform</span>
        <span>Ansible</span>
        <span>GitLab CI/CD</span>
        <span>GitHub Actions</span>
        <span>Jenkins</span>
        <span>Prometheus</span>
        <span>Grafana</span>
        <span>ELK Stack</span>
        <span>Linux</span>
        <span>Shell Scripting</span>
        <span>Python</span>
        <span>Bash</span>
        <span>Helm</span>
        <span>Istio</span>
        <span>ArgoCD</span>
        <span>Nginx</span>
        <span>PostgreSQL</span>
        <span>MongoDB</span>
      </div>
    </motion.div>
  );
};

export default Skillset;
