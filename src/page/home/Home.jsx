import { AnimatedSection } from "../../component/Animation/AnimatedSection"
import { ProfileCard } from "../../component/ProfileCard/ProfileCard"
import { fadeInUp, slideIn } from "../../utils/animations"
import { motion } from "framer-motion"
import * as Icons from 'lucide-react'
import profileData from "./profileData.json"

const Home = () => {
  const socialIcons = {
    github: <Icons.GithubIcon />,
    linkedin: <Icons.LinkedinIcon />,
    twitter: <Icons.TwitterIcon />
  }

  return (
    <AnimatedSection id="home" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            variants={fadeInUp}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {profileData.name}
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-400 mb-4"
              variants={fadeInUp}
            >
              {profileData.role}
            </motion.p>
            
            <motion.p
              className="text-base sm:text-lg text-gray-300 mb-8 max-w-lg mx-auto md:mx-0"
              variants={fadeInUp}
            >
              {profileData.description}
            </motion.p>
            
            {/* Social Icons */}
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
                  className="p-3 bg-slate-800/50 rounded-lg text-gray-400 hover:text-purple-400 hover:bg-slate-700/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="w-6 h-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {socialIcons[platform]}
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>

            {/* Resume Button */}
            <motion.div variants={fadeInUp}>
              <motion.a
                href={profileData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icons.FileTextIcon className="w-5 h-5 mr-2" />
                View Resume
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right side - Profile Card */}
          <motion.div 
            className="flex-1 w-full max-w-md"
            variants={slideIn('right')}
          >
            <ProfileCard />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default Home