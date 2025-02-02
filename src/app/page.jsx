"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className=" h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex h-full flex-col px-4 sm:px-8 md:px-12 lg:flex-row lg:px-20 xl:px-48">
        {/* Image Container */}
        <div className=" relative h-1/2 lg:h-full lg:w-1/2">
          <Image src="/hero.png" alt="" fill className=" object-contain" />
        </div>
        {/* Text Container */}
        <div className=" flex h-1/2 flex-col items-start justify-center gap-4 lg:h-full lg:w-1/2 lg:gap-8">
          {/* Title */}
          <h1 className=" text-xl font-bold md:text-6xl">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit
          </h1>
          {/* Desc */}
          <p className=" md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className=" flex w-full gap-4">
            <Link href="/portofolio">
              <button className=" rounded-lg bg-black p-4 text-white ring-1 ring-black">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className=" rounded-lg p-4 ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
