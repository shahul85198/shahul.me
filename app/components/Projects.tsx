"use client"

import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "Shared Components UI",
      description:
        "Shared Components UI is a reusable library of pre-built, customizable components like buttons, modals, and forms. It ensures design consistency, boosts development efficiency, and follows accessibility standards across projects.",
      technologies: ["Javascript", "React.js", "Redux", "Next.js", "Tailwindcss", "RadixUi", "Typescript"],
    },
    {
      title: "Gloss Order UI [Global Logistics Order Supply System]",
      description:
        "Gloss Order UI is a front-end project for managing retail or inventory orders. It offers a clean, user-friendly interface for order creation, tracking, updates, and management. Designed with a modular architecture, it ensures scalability and easy maintenance.",
      technologies: ["Javascript", "React.js", "Redux", "Next.js", "Tailwindcss", "RadixUi", "xlsx", "Typescript"],
    },
    {
      title: "Job Board",
      description:
        "The React-based job board connects job seekers and employers through a user-friendly interface. Job seekers can browse, filter, and apply for jobs, while employers can post listings and manage applications. The platform includes authentication, data storage, and third-party API integration for enhanced functionality.",
      technologies: ["Next.js", "TypeScript", "Tailwindcss", "Shadcn/UI", "Javascript", "React.js", "Redux"],
    },
    {
      title: "SquareMHCS",
      description:
        "Square Medical and Health Care Services, led by ex-servicemen with 20+ years in the Indian Armed Forces, provides doorstep healthcare. Committed to community health, it promotes awareness, builds partnerships, and continuously improves services to stay at the forefront of healthcare innovation.",
      technologies: ["Next.js", "TypeScript", "React Router", "React.js", "Redux", "Tailwindcss"],
    },
    {
      title: "Screen Sharing Application",
      description:
        "LIntegrated a robust screen-sharing feature in a React-based project for seamless real-time collaboration. Developed intuitive frontend components for session management and implemented backend authentication and session tracking for security. Demonstrated expertise in React, real-time communication, and backend integration.",
      technologies: ["Javascript", "React.js", "tailwindcss", "RadixUi", "Typescript"],
    },
  ]

  return (
    <section id="projects" className="section-padding elegant-border">
      <div className="container mx-auto container-padding">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 border-primary pt-6"
            >
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p className="mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-primary text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

