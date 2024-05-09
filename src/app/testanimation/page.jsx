"use client";
import { motion } from "framer-motion";

const TestPage = () => {
  const variants = {
    variant1: {
      x: 400,
      y: 300,
      opacity: 0.5,
      transition: {
        duration: 3,
      },
    },
    variant2: {
      x: 100,
      y: -300,
      rotation: 90,
    },
  };

  return (
    <div className=" flex h-full items-center justify-center">
      <motion.div
        className=" h-96 w-96 rounded bg-red-400"
        initial={{ x: -100 }}
        variants={variants}
        animate="variant1"
      ></motion.div>
    </div>
  );
};

export default TestPage;
