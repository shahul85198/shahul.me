"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React", level: 95 },
        { name: "Redux", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 95 },
        { name: "JavaScript", level: 98 },
      ],
    },
    // {
    //   category: "Backend Development",
    //   items: [
    //     { name: "Node.js", level: 90 },
    //     { name: "Python", level: 85 },
    //     { name: "Java", level: 80 },
    //     { name: "RESTful APIs", level: 95 },
    //     { name: "GraphQL", level: 85 },
    //   ],
    // },
    // {
    //   category: "AI/ML Integration",
    //   items: [
    //     { name: "TensorFlow", level: 80 },
    //     { name: "PyTorch", level: 75 },
    //     { name: "NLP", level: 85 },
    //     { name: "LLMs", level: 80 },
    //     { name: "Data Analysis", level: 90 },
    //   ],
    // },
    // {
    //   category: "Cloud & DevOps",
    //   items: [
    //     { name: "AWS", level: 85 },
    //     { name: "Docker", level: 90 },
    //     { name: "Kubernetes", level: 80 },
    //     { name: "CI/CD", level: 90 },
    //     { name: "Microservices", level: 85 },
    //   ],
    // },
  ]

  return (
    <section id="skills" className="section-padding elegant-border">
      <div className="container mx-auto container-padding">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6">{skillCategory.category}</h3>
              <div className="space-y-4">
                {skillCategory.items.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium">{skill.name}</span>
                      <span className="text-sm font-medium text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-1" >
                      <motion.div
                        className="bg-primary h-1 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

