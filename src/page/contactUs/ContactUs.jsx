// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { Mail, Send, User, AtSign } from 'lucide-react'
// import { AnimatedSection } from "../../component/Animation/AnimatedSection"
// import { fadeInUp } from "../../utils/animations"

// const ContactUs
//  = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)
    
//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 1500))
    
//     // Here you would typically send the form data to your backend
//     console.log('Form submitted:', formData)
    
//     setIsSubmitting(false)
//     setFormData({ name: '', email: '', message: '' })
//   }

//   const inputClasses = "w-full mb-4 p-3 bg-slate-900 rounded-lg border border-slate-700 focus:border-purple-400 outline-none transition-all duration-300 text-gray-300"
  
//   return (
//     <AnimatedSection id="contact" className="py-16 bg-slate-800/50 relative overflow-hidden">
//       {/* Background decoration */}
//       <motion.div 
//         className="absolute inset-0 opacity-30"
//         animate={{ 
//           backgroundPosition: ['0% 0%', '100% 100%'],
//         }}
//         transition={{ 
//           duration: 20,
//           repeat: Infinity,
//           repeatType: "reverse"
//         }}
//         style={{
//           backgroundImage: 'radial-gradient(circle at 2px 2px, purple 1px, transparent 0)',
//           backgroundSize: '50px 50px'
//         }}
//       />

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <motion.h2 
//             className="text-4xl font-bold mb-4 inline-flex items-center justify-center"
//             whileHover={{ scale: 1.05 }}
//           >
//             <Mail className="mr-2 text-purple-400" />
//             Get In Touch
//           </motion.h2>
//           <motion.p 
//             className="text-gray-400 max-w-md mx-auto"
//             variants={fadeInUp}
//           >
//             Have a question or want to work together? Feel free to reach out!
//           </motion.p>
//         </motion.div>

//         <motion.form 
//           className="max-w-lg mx-auto"
//           onSubmit={handleSubmit}
//         >
//           <div className="relative mb-4">
//             <motion.div
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//               whileHover={{ scale: 1.1, color: '#A855F7' }}
//             >
//               <User size={20} />
//             </motion.div>
//             <motion.input
//               whileFocus={{ scale: 1.02 }}
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className={`${inputClasses} pl-10`}
//               required
//             />
//           </div>

//           <div className="relative mb-4">
//             <motion.div
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//               whileHover={{ scale: 1.1, color: '#A855F7' }}
//             >
//               <AtSign size={20} />
//             </motion.div>
//             <motion.input
//               whileFocus={{ scale: 1.02 }}
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className={`${inputClasses} pl-10`}
//               required
//             />
//           </div>

//           <motion.textarea
//             whileFocus={{ scale: 1.02 }}
//             name="message"
//             placeholder="Your Message"
//             rows="4"
//             value={formData.message}
//             onChange={handleChange}
//             className={inputClasses}
//             required
//           />

//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className={`w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? (
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                 className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
//               />
//             ) : (
//               <>
//                 <Send className="mr-2" size={20} />
//                 Send Message
//               </>
//             )}
//           </motion.button>
//         </motion.form>
//       </div>
//     </AnimatedSection>
//   )
// }

// export default ContactUs


import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, User, AtSign, MessageCircle, Sparkles, Coffee } from 'lucide-react'
import { AnimatedSection } from "../../component/Animation/AnimatedSection"
import { fadeInUp } from "../../utils/animations"
import emailjs from '@emailjs/browser';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)


    emailjs
      .send('service_kijt8y5', 'template_ffpjjld', formData, {
        publicKey: '6KMWkpFp5wnaC4vut',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    
    setIsSubmitting(false)
    setShowThankYou(true)
    setTimeout(() => {
      setShowThankYou(false)
      setFormData({ user_name: '', user_email: '', message: '' })
    }, 3000)
  }

  const inputClasses = "w-full mb-4 p-3 bg-slate-900/80 rounded-lg border border-slate-700 focus:border-purple-400 outline-none transition-all duration-300 text-gray-300 backdrop-blur-sm"
  
  return (
    <AnimatedSection id="contact" className="py-16 bg-gradient-to-b from-slate-800/50 to-slate-900/50 relative overflow-hidden">
      {/* Floating elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute hidden sm:block"
          initial={{ y: 0 }}
          animate={{ 
            y: [-20, 20],
            x: i % 2 === 0 ? [-10, 10] : [10, -10],
          }}
          transition={{ 
            duration: 4 + i,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.5
          }}
          style={{
            left: `${20 + i * 20}%`,
            top: `${10 + i * 15}%`,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            className="text-purple-400/30"
          >
            {i % 2 === 0 ? <Coffee size={20 + i * 4} /> : <Sparkles size={20 + i * 4} />}
          </motion.div>
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-4xl font-bold mb-4 inline-flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="mr-2 text-purple-400" />
            Let&apos;s Create Something Amazing
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-md mx-auto"
            variants={fadeInUp}
          >
            Whether you have a question, a project in mind, or just want to say hi - 
            I&apos;m all ears! ✨
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Why Reach Out?</h3>
              <ul className="space-y-3">
                {[
                  { icon: <Coffee className="text-yellow-400" />, text: "Collaborate on projects" },
                  { icon: <MessageCircle className="text-green-400" />, text: "Get expert advice" },
                  { icon: <Sparkles className="text-pink-400" />, text: "Discuss new ideas" }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center space-x-3"
                    whileHover={{ x: 5 }}
                  >
                    {item.icon}
                    <span className="text-gray-300">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.form 
            className="lg:w-1/2 w-full max-w-lg"
            onSubmit={handleSubmit}
          >
            <div className="relative mb-4">
              <motion.div
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                whileHover={{ scale: 1.1, color: '#A855F7' }}
              >
                <User size={20} />
              </motion.div>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="user_name"
                placeholder="name"
                value={formData.user_name}
                onChange={handleChange}
                className={`${inputClasses} pl-10`}
                required
              />
            </div>

            <div className="relative mb-4">
              <motion.div
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                whileHover={{ scale: 1.1, color: '#A855F7' }}
              >
                <AtSign size={20} />
              </motion.div>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="user_email"
                placeholder="email"
                value={formData.user_email}
                onChange={handleChange}
                className={`${inputClasses} pl-10`}
                required
              />
            </div>

            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              name="message"
              placeholder="Share your thoughts..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={inputClasses}
              required
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                />
              ) : showThankYou ? (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center"
                >
                  <Sparkles className="mr-2" size={20} />
                  Thanks! I&apos;ll be in touch soon!
                </motion.span>
              ) : (
                <>
                  <Send className="mr-2" size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default ContactUs