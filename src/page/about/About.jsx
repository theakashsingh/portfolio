import { AnimatedSection } from "../../component/Animation/AnimatedSection"
import { motion } from "framer-motion"
import { fadeInUp, slideIn } from "../../utils/animations"
import { Code, Palette, Terminal, Brain, Coffee, Rocket } from 'lucide-react'
import { useState } from 'react'

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skills = [
    { 
      icon: <Code className="w-6 h-6" />, 
      title: "Frontend Development", 
      description: "Mastering JavaScript, TypeScript, and React to build dynamic, responsive web applications.",
      tech: ["JavaScript", "TypeScript", "React", "Redux"],
      color: "from-purple-400 to-pink-400"
    },
    { 
      icon: <Palette className="w-6 h-6" />, 
      title: "Styling Expertise", 
      description: "Crafting beautiful UIs with modern CSS tools like Tailwind and Sass for pixel-perfect designs.",
      tech: ["Tailwind CSS", "Sass"],
      color: "from-blue-400 to-cyan-400"
    },
    { 
      icon: <Terminal className="w-6 h-6" />, 
      title: "Backend & Tools", 
      description: "Utilizing Node.js for backend development and Git for version control in collaborative projects.",
      tech: ["Node.js", "Git"],
      color: "from-green-400 to-emerald-400"
    }
  ]

  const funFacts = [
    { icon: <Coffee className="text-orange-400" />, text: "Cups of coffee per day", number: "4" },
    { icon: <Brain className="text-purple-400" />, text: "Projects completed", number: "15+" },
    { icon: <Rocket className="text-blue-400" />, text: "Git commits", number: "1000+" }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <AnimatedSection id="about" className="py-16 px-4 bg-slate-900/50">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"
            whileHover={{ width: "120px", transition: { duration: 0.3 } }}
          />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* About Text */}
          <motion.div
            className="md:w-1/2"
            variants={slideIn('left')}
          >
            <motion.h3 
              className="text-2xl font-bold mb-4 text-purple-400"
              whileHover={{ x: 10 }}
            >
              Passionate Frontend Developer
            </motion.h3>
            <motion.p 
              className="text-gray-300 mb-4 text-lg leading-relaxed"
              variants={fadeInUp}
            >
              I specialize in building exceptional digital experiences using modern web technologies. 
              With a strong foundation in JavaScript and TypeScript, I create robust and scalable 
              applications that prioritize both functionality and user experience.
            </motion.p>
            <motion.p 
              className="text-gray-300 mb-6 text-lg leading-relaxed"
              variants={fadeInUp}
            >
              My expertise in React, combined with styling tools like Tailwind and Sass, allows me 
              to transform complex requirements into elegant, user-friendly interfaces. I&apos;m also 
              comfortable working with Node.js for backend development when needed.
            </motion.p>

            {/* Fun Facts */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/50"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {fact.icon}
                  </motion.div>
                  <p className="text-2xl font-bold mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{fact.number}</p>
                  <p className="text-sm mt-1 text-gray-400">{fact.text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="flex flex-wrap gap-3"
              variants={container}
              initial="hidden"
              whileInView="show"
            >
              {["JavaScript", "TypeScript", "React", "Tailwind", "Sass", "Redux", "Git", "Node.js"].map((skill) => (
                <motion.span 
                  key={skill}
                  className="px-4 py-2 bg-slate-800 text-purple-400 rounded-full text-sm border border-purple-400/20 cursor-pointer"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "rgba(168, 85, 247, 0.2)",
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="md:w-1/2 grid gap-6"
            variants={slideIn('right')}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="relative bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 overflow-hidden"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400 }
                }}
                onHoverStart={() => setHoveredSkill(index)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0`}
                  animate={{ 
                    opacity: hoveredSkill === index ? 0.1 : 0
                  }}
                />
                <div className="flex items-center mb-4">
                  <motion.div 
                    className={`p-3 bg-gradient-to-r ${skill.color} rounded-lg mr-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h4 className="text-xl font-semibold">{skill.title}</h4>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-900/50 rounded text-sm text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default About