import { AnimatedSection } from "../../component/Animation/AnimatedSection"
import { ProfileCard } from "../../component/ProfileCard/ProfileCard"
import { fadeInUp, slideIn } from "../../utils/animations"
import {motion} from "framer-motion"

const Home = () => {
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
              Hi, I&apos;m <span className="text-purple-400">
                {/* {portfolioData.personal.name} */}
                Akash Singh
                </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-400 mb-8"
              variants={fadeInUp}
            >
              {/* {portfolioData.personal.role} */}
              Frontend Developer
            </motion.p>
            <motion.div 
              className="flex justify-center md:justify-start space-x-4"
              variants={fadeInUp}
            >
              {/* Social links */}
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