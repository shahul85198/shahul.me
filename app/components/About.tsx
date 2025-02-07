"use client"

import { motion } from "framer-motion"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="section-padding elegant-border">
      <div className="container mx-auto container-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto space-y-6 text-lg">
            <p>
              As a Technology and Innovation Enthusiast, I excel in both startup environments and large-scale
              enterprises, bringing dynamic creativity and a proactive &apos;can-do&apos; attitude to every project.
            </p>
            <p>
              My career is marked by demonstrated excellence in driving innovative solutions, delivering impactful UI
              architectures, and seamlessly integrating backend systems to create exceptional user experiences.
            </p>
            <p>
            As a dedicated team member, I have contributed to the growth and success of my team by collaborating effectively, 
            sharing knowledge, and taking initiative in developing high-quality UI components. I strive to elevate team capabilities 
            and encourage ownership in delivering exceptional results.
            </p>
            {/* <p>
              In the realm of AI Integration, I&apos;ve leveraged cutting-edge technologies including Large Language Models
              (LLMs) and Natural Language Processing (NLP) to enhance data-driven decision-making processes and elevate
              user experiences to new heights.
            </p> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

