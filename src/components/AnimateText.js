import { motion } from "framer-motion";

const AnimateText = ({ text }) => {
  const words = text.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04 * i,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffiness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        damping: 12,
        stiffiness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-wrap overflow-hidden"
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="mr-1">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimateText;
