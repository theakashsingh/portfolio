/* eslint-disable react/prop-types */
import { slideIn } from "../../utils/animations";
import { motion } from "framer-motion"

export default function TimelineItem({ experience, isLeft, index }) {
  const { role, company, date, description } = experience;

  return (
    <motion.div 
      className={`flex justify-between items-center w-full mb-8 ${isLeft ? 'flex-row-reverse' : ''}`}
      variants={slideIn(isLeft ? 'left' : 'right')}
      custom={index}
    >
      <div className="w-5/12">
        <motion.div 
          className="p-6 bg-slate-800 rounded-lg shadow-lg"
          whileHover={{ 
            y: -5,
            boxShadow: '0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.04)'
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-xl font-bold text-purple-400">{role}</h3>
          <h4 className="text-lg text-gray-300">{company}</h4>
          <p className="text-gray-400 mb-2">{date}</p>
          <p className="text-gray-300">{description}</p>
        </motion.div>
      </div>
      
      <div className="w-2/12 flex justify-center">
        <motion.div 
          className="w-4 h-4 bg-purple-500 rounded-full relative"
          whileHover={{ scale: 1.5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div 
            className="absolute w-8 h-8 bg-purple-500/20 rounded-full -left-2 -top-2"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
      
      <div className="w-5/12" />
    </motion.div>
  );
}