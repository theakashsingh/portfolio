/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {motion} from "framer-motion"
import { Github } from "lucide-react";

export default function ProjectCard({ project }) {
    return (
      <motion.div 
        className="bg-slate-900 rounded-lg overflow-hidden shadow-lg"
        whileHover={{ 
          y: -10,
          boxShadow: '0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.04)'
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* ... rest of the card content ... */}
        <div className="bg-slate-900 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all hover:-translate-y-2">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, i) => (
            <span key={i} className="bg-slate-800 px-3 py-1 rounded-full text-sm">
              {t}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a href={project.github} target="_blank" className="flex-1 bg-slate-800 text-center py-2 rounded hover:bg-slate-700">
            <Github className="inline mr-2" /> GitHub
          </a>
          <a href={project.live} target="_blank" className="flex-1 bg-purple-600 text-center py-2 rounded hover:bg-purple-700">
            Live Demo
          </a>
        </div>
      </div>
    </div>
      </motion.div>
    );
  }