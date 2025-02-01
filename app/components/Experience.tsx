"use client"

import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      company: "SAP SuccessFactors",
      position: "Senior Software Engineer",
      period: "Since Aug 2021",
      description:
        "Driving innovation by delivering impactful features across multiple SAP SuccessFactors modules, and leading the Growth Portfolio module to deliver market-leading functionalities.",
      achievements: [
        "Strategically enhanced the Growth Portfolio module through innovative UI solutions, integrating state-of-the-art AI technologies.",
        "Spearheaded the creation of scalable and high-performance UI architecture.",
        "Led and mentored a team of frontend engineers, fostering a culture of continuous learning and innovation.",
        "Pioneered the integration of AI/ML technologies, notably Large Language Models (LLMs) and Natural Language Processing (NLP).",
      ],
    },
    {
      company: "SwoopTalent (Acquired by SAP)",
      position: "Senior Software Engineer",
      period: "Apr 2019 - Aug 2021",
      description:
        "Contributed to the creation of SwoopTalent's AI-powered data platform that combines, analyzes, and trains data from human resource systems and workflows.",
      achievements: [
        "Directed the frontend development for the AI-powered data platform, enhancing user experience through intuitive UI designs.",
        "Steered the development of responsive UI patterns and best practices, significantly improving application performance and user engagement.",
        "Enhanced the team's agile practices, improving sprint velocity and project delivery times.",
        "Crafted and executed a strategic project roadmap, aligning with business goals, resulting in successful on-time delivery of key initiatives.",
      ],
    },
    {
      company: "Turpy Mobile Apps Pvt Ltd",
      position: "Senior Software Engineer",
      period: "Nov 2014 – Apr 2019",
      description:
        "Designed, developed, and maintained robust full-stack web applications utilizing a variety of front-end technologies.",
      achievements: [
        "Developed full-stack web applications using React, VueJS, Angular, and backend technologies such as NodeJS, Java, and Python.",
        "Integrated new technologies to drive innovation and maintain competitiveness in software solutions.",
        "Led the development efforts for the Playat Application, providing strategic guidance and ensuring successful project delivery.",
        "Implemented best practices throughout the software development lifecycle, emphasizing testing, integration, and code quality.",
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding elegant-border">
      <div className="container mx-auto container-padding">
        <h2 className="section-title">Work Experience</h2>
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="border-l-2 border-primary pl-6"
            >
              <h3 className="text-2xl font-bold">{exp.company}</h3>
              <h4 className="text-xl font-semibold text-primary">{exp.position}</h4>
              <p className="text-muted-foreground mb-4">{exp.period}</p>
              <p className="mb-4">{exp.description}</p>
              <ul className="list-disc pl-5 space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

