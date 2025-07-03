import React from "react";
import { SectionWrapper } from "../hoc";

const projects = [
  {
    name: "CI/CD Pipeline for Java App",
    description:
      "Built a complete CI/CD pipeline using Jenkins with declarative pipeline, SonarQube for code analysis, Docker for containerization, Kubernetes for deployment, and ArgoCD for continuous delivery.",
    tags: ["Jenkins", "SonarQube", "Docker", "Kubernetes", "ArgoCD"],
  },
  {
    name: "Microservices Deployment on EKS",
    description:
      "Deployed a microservices-based application on AWS EKS using Terraform for IaC, GitLab Actions for CI and ArgoCD for CD. Integrated Ingress and Route 53 for DNS management.",
    tags: ["Terraform", "GitLab Actions", "ArgoCD", "AWS EKS", "Docker", "Ingress"],
  },
  {
    name: "AWS Cost Optimization",
    description:
      "Built an AWS Lambda function that automatically deletes stale EBS snapshots by analyzing EC2 instance associations, saving cloud storage costs using CloudWatch and Boto3 logic.",
    tags: ["AWS Lambda", "CloudWatch", "EC2", "EBS", "Boto3"],
  },
  {
    name: "Tech Resource Hub",
    description:
      "A frontend web app that aggregates developer resources, tools, and websites using Sanity.io CMS and Next.js. Mobile responsive and content manageable.",
    tags: ["Next.js", "React", "Tailwind CSS", "Sanity.io"],
  },
];

const Works = () => {
  return (
    <div className="px-4 md:px-10 py-8">
      <h2 className="text-2xl font-semibold mb-6 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#1f1f1f] p-6 rounded-lg shadow-md text-white flex flex-col justify-between">
            <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs text-blue-300">
              {project.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
