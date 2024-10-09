/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { fadeInUp, slideIn } from '../../utils/animations';
import { AnimatedSection } from '../../component/Animation/AnimatedSection';
import { Star } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectIframe from './ProjectIFrame';
import projects from "./projects.json"

export function Projects() {
  return (
    <AnimatedSection id="projects" className="py-16 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          variants={fadeInUp}
        >
          <Star className="inline mr-2 text-yellow-400" />
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={slideIn(index % 2 === 0 ? 'left' : 'right')}
            >
              <ProjectCard project={project} />
              <ProjectIframe project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}