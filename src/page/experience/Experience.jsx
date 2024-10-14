import { Briefcase } from "lucide-react";
import {motion} from "framer-motion"
import { AnimatedSection } from "../../component/Animation/AnimatedSection";
import { fadeInUp } from "../../utils/animations";
import TimelineItem from "./TimelineItem";
import experiences from "./experience.json"

/* eslint-disable react/prop-types */
export default function Experience() {
    return (
      <AnimatedSection id="experience" className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <Briefcase className="inline mr-2 text-purple-400" />
            From Classroom to Workplace
          </motion.h2>
          
          <div className="relative">
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-700"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            {experiences.map((experience, index) => (
              <TimelineItem 
                key={experience.id} 
                experience={experience} 
                isLeft={index % 2 !== 0}
                index={index}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
    );
  }