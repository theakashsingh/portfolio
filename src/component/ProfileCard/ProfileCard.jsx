/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { Code, Sparkles, Cpu, Coffee } from 'lucide-react';

export function ProfileCard() {
  return (
    <motion.div 
      className="relative w-80 h-96 mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {/* Main card */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-xl p-1"
        animate={{ 
          background: [
            "linear-gradient(to bottom right, #9333EA, #EC4899, #F97316)",
            "linear-gradient(to bottom right, #3B82F6, #8B5CF6, #EC4899)",
            "linear-gradient(to bottom right, #10B981, #3B82F6, #9333EA)"
          ]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <div className="bg-slate-900 h-full w-full rounded-lg p-6 relative overflow-hidden">
          {/* Animated background shapes */}
          <AnimatedBackground />
          
          {/* Profile content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Profile picture frame */}
            <motion.div 
              className="w-48 h-48 rounded-full p-2 bg-gradient-to-r from-purple-500 to-pink-500 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-900">
                <img 
                  src="/api/placeholder/200/200" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            {/* Tech icons */}
            <div className="flex justify-around w-full mb-4">
              <AnimatedIcon Icon={Code} label="Frontend" />
              <AnimatedIcon Icon={Cpu} label="Backend" />
              <AnimatedIcon Icon={Coffee} label="DevOps" />
            </div>
            
            {/* Experience highlights */}
            <div className="text-center">
              <motion.div 
                className="text-purple-400 font-bold mb-2"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="inline mr-2" />
                3+ Years Experience
              </motion.div>
              <motion.div 
                className="text-sm text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Turning coffee into code since 2021
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}


function AnimatedIcon({ Icon, label }) {
    return (
      <motion.div 
        className="flex flex-col items-center"
        whileHover={{ y: -5 }}
      >
        <motion.div
          className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-purple-400"
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' 
          }}
        >
          <Icon size={20} />
        </motion.div>
        <span className="text-xs mt-1 text-gray-400">{label}</span>
      </motion.div>
    );
  }


  function AnimatedBackground() {
    return (
      <>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-40 h-40 bg-purple-500/10 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              x: [0, 100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: i * 5,
            }}
          />
        ))}
      </>
    );
  }