"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PortofolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      className=" h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="relative h-[600vh]" ref={ref}>
        <div className=" flex h-[calc(100vh-6rem)] w-screen items-center justify-center text-center text-8xl">
          My Works
        </div>

        {/* akan top-0 dari parentnya, karena parentnya ada "relative" */}
        <div className="sticky top-0 flex h-screen items-center gap-4"></div>
      </div>
    </motion.div>
  );
};

export default PortofolioPage;
