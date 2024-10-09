// import { AnimatedSection } from "../../component/Animation/AnimatedSection"
// import { ProfileCard } from "../../component/ProfileCard/ProfileCard"
// import { fadeInUp, slideIn } from "../../utils/animations"
// import {motion} from "framer-motion"
// import profileData from "./profileData.json"

// const Home = () => {
//   return (
//     <AnimatedSection id="home" className="pt-24 pb-16 px-4">
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
//           {/* Text content */}
//           <motion.div 
//             className="md:w-1/2 text-center md:text-left md:pr-8"
//             variants={fadeInUp}
//           >
//             <motion.h1 
//               className="text-5xl md:text-6xl font-bold mb-4"
//               variants={fadeInUp}
//             >
//               Hi, I&apos;m <span className="text-purple-400">
//                 {profileData.name}
//                 </span>
//             </motion.h1>
//             <motion.p 
//               className="text-xl text-gray-400 mb-8"
//               variants={fadeInUp}
//             >
//               {profileData.role}
//             </motion.p>
//             <motion.div 
//               className="flex justify-center md:justify-start space-x-4"
//               variants={fadeInUp}
//             >
//               {/* Social links */}
//             </motion.div>
//           </motion.div>
          
//           {/* Profile card */}
//           <motion.div 
//             className="md:w-1/2 flex justify-center mt-12 md:mt-0"
//             variants={slideIn('right')}
//           >
//             <ProfileCard />
//           </motion.div>
//         </div>
//       </AnimatedSection>
//   )
// }

// export default Home

import { AnimatedSection } from "../../component/Animation/AnimatedSection"
import { ProfileCard } from "../../component/ProfileCard/ProfileCard"
import { fadeInUp, slideIn } from "../../utils/animations"
import { motion } from "framer-motion"
import * as Icons from 'lucide-react'
import profileData from "./profileData.json"

const Home = () => {
  const socialIcons = {
    github: <Icons.GithubIcon className="w-6 h-6" />,
    linkedin: <Icons.LinkedinIcon className="w-6 h-6" />,
    twitter: <Icons.TwitterIcon className="w-6 h-6" />
  }

  return (
    <AnimatedSection id="home" className="pt-24 pb-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Text content */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left md:pr-8"
          variants={fadeInUp}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            variants={fadeInUp}
          >
            Hi, I&apos;m <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {profileData.name}
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 mb-4"
            variants={fadeInUp}
          >
            {profileData.role}
          </motion.p>
          <motion.p
            className="text-lg text-gray-300 mb-8"
            variants={fadeInUp}
          >
            {profileData.description}
          </motion.p>
          
          {/* Social links */}
          <motion.div 
            className="flex justify-center md:justify-start space-x-4 mb-8"
            variants={fadeInUp}
          >
            {Object.entries(profileData.social).map(([platform, url]) => (
              <motion.a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg text-gray-400 hover:text-purple-400 hover:bg-slate-700 transition-colors"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {socialIcons[platform]}
              </motion.a>
            ))}
          </motion.div>

          {/* Resume button */}
          <motion.div
            variants={fadeInUp}
          >
            <motion.a
              href={profileData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icons.FileTextIcon className="w-5 h-5 mr-2" />
              View Resume
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Profile card */}
        <motion.div 
          className="md:w-1/2 flex justify-center mt-12 md:mt-0"
          variants={slideIn('right')}
        >
          <ProfileCard />
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default Home