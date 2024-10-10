/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { staggerContainer } from '../../utils/animations';

export function AnimatedSection({id, children, className }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  );
}