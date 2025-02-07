"use client"

import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      company: "Ingrain Systems Pvt. Ltd (Client was GAP Inc)",
      position: "UI Developer",
      period: "Since Aug 2024",
      description:
        "Driving innovation by delivering impactful features across multiple GAP Product modules, and building the managing retail or inventory orders to deliver market-leading functionalities.",
      achievements: [
        "Strategically enhanced the GAP Product module through innovative UI solutions, integrating state-of-the-art UI development.",
        "Spearheaded the creation of scalable and high-performance UI development.",
        "I am part of a team of frontend engineers, fostering a culture of continuous learning and innovation.",
        "Pioneered the integration of updated technologies, notably React Js latest versions and  Next Js versions",
      ],
    },
    {
      company: "Trangla Innovations Pvt Ltd (Client was HCL Technologies)",
      position: "Frontend Developer",
      period: "May 2019 - july 2024",
      description:
        "Contributed to the creation of Trangla's Service data platform that combines, analyzes, and trains data from human resource systems and workflows.",
      achievements: [
        "Directed the frontend development for the Service data platform, enhancing user experience through intuitive UI designs.",
        "Steered the development of responsive UI patterns and best practices, significantly improving application performance and user engagement.",
        "Enhanced the team's agile practices, improving sprint velocity and project delivery times.",
        "Crafted and executed a strategic project roadmap, aligning with business goals, resulting in successful on-time delivery of key initiatives.",
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

