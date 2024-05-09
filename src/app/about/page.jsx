"use client";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className=" h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="">
        {/* TEXT CONTAINER */}
        <div className=" flex flex-col gap-24 p-4 sm:p-8 md:gap-32 md:p-12 lg:gap-48 lg:p-20 xl:gap-64 xl:p-48">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col justify-center gap-12">
            <h1>BIOGRAPHY</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, debitis mollitia ducimus illo autem doloremque
              repudiandae aliquid enim consequuntur rerum, itaque voluptatibus
              quo, blanditiis quam! Culpa corporis dolorum maxime ab!
            </p>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="">SKILLS</div>
          {/* EXPERIENCE CONTAINER */}
          <div className="">EXPERIENCE</div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
