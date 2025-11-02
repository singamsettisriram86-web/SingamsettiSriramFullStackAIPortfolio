import { motion, useScroll } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-accent-600 dark:bg-accent-500 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};
