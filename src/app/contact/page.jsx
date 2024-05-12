"use client";
import { motion } from "framer-motion";

const ContactPage = () => {
  const text = "Halo Bosque";

  return (
    <motion.div
      className=" h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex h-full flex-col px-4 sm:px-8 md:px-12 lg:flex-row lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className=" flex h-1/2 items-center justify-center text-6xl lg:h-full lg:w-1/2">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>

        {/* FORM CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2">B</div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
