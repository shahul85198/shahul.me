"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
            <span className="block">Shaik Shahul Hameed</span>
            <span className="block text-primary mt-2">
              <TypeAnimation
                sequence={["Software Engineer", 2000, "UI Developer", 2000 ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
            Visionary Front-End Developer with 5+ years of experience in cross-functional teams and
            spearheading the development of best-in-class UI solutions.
          </p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a
              href="#contact"
              className="hidden md:inline px-8 py-3 border border-primary text-base font-medium rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              Get in Touch
            </a>

            <a
              href="/Shaik Shahul Hameed-Software-Engineer.pdf"
              download
              className="ml-4 px-8 py-3 bg-primary text-base font-medium rounded-full text-primary-foreground hover:bg-primary hover:opacity-70 transition-colors duration-300">
              Download Resume
            </a>

          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

