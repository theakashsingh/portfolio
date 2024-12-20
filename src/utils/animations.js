/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const slideIn = (direction, delay = 0) => ({
  initial: {
    x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
});

// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// export const fadeInUp = {
//   initial: { opacity: 0, y: 60 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
// };

// export const staggerContainer = {
//   animate: {
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// };

// export const slideIn = (direction, delay = 0) => ({
//   initial: {
//     x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
//     y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
//     opacity: 0
//   },
//   animate: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: {
//       delay,
//       duration: 0.8,
//       ease: [0.6, -0.05, 0.01, 0.99]
//     }
//   }
// });

// export const AnimatedFadeInUp = ({ children }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: false,
//     threshold: 0.1,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial="initial"
//       animate={inView ? "animate" : "initial"}
//       variants={fadeInUp}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export const AnimatedSlideIn = ({ children, direction, delay }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: false,
//     threshold: 0.1,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial="initial"
//       animate={inView ? "animate" : "initial"}
//       variants={slideIn(direction, delay)}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export const AnimatedStaggerContainer = ({ children }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: false,
//     threshold: 0.1,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial="initial"
//       animate={inView ? "animate" : "initial"}
//       variants={staggerContainer}
//     >
//       {children}
//     </motion.div>
//   );
// };