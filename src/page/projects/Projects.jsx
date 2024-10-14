/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { fadeInUp, slideIn } from '../../utils/animations';
import { AnimatedSection } from '../../component/Animation/AnimatedSection';
import { Star, Github, ExternalLink } from 'lucide-react';
import projects from "./projects.json"

export function Projects() {
  return (
    <AnimatedSection id="projects" className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          <Star className="inline mr-2 text-yellow-400" />
          Featured Projects
        </motion.h2>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectItem 
              key={project.id} 
              project={project} 
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function ProjectItem({ project, isReversed }) {
  return (
    <motion.div 
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
      variants={slideIn(isReversed ? 'left' : 'right')}
    >
      {/* Iframe Section */}
      <div className="flex-1 w-full">
        <motion.div 
          className="bg-slate-900 rounded-lg overflow-hidden shadow-lg border border-slate-700"
          whileHover={{ y: -5 }}
        >
          <iframe 
            src={project.iframeUrl}
            title={project.title}
            className="w-full h-[300px] lg:h-[400px] border-0"
          />
        </motion.div>
      </div>

      {/* Project Details Section */}
      <div className="flex-1">
        <motion.div 
          className={`text-left ${isReversed ? 'lg:pr-8' : 'lg:pl-8'}`}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <span 
                key={i} 
                className="bg-slate-800 px-3 py-1 rounded-full text-sm text-purple-400 border border-purple-400/20"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <motion.a 
              href={project.github}
              className="flex-1 flex items-center justify-center px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="mr-2" />
              GitHub
            </motion.a>
            <motion.a 
              href={project.live}
              className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="mr-2" />
              Live Demo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Projects;