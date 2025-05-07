'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 30,
    },
  },
};

const StaggeredText = ({ text }: { text: string }) => {
  const words = text.split(' ');

  return (
    <motion.div
      className="flex flex-wrap text-2xl font-bold"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default StaggeredText;
