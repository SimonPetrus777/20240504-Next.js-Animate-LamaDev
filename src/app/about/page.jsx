"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  // console.log(scrollYProgress); // angkanya antara 0-1

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, { once: true }); // "once"kalau mau sekali muncul aja
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" }); // "margin" kalau mau animasinya muncul ketika udah elemennya udah masuk (discroll) 100px

  const experienceRef = useRef();
  const isExperienceInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className=" h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className=" h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className=" flex flex-col gap-24 p-4 sm:p-8 md:gap-32 md:p-12 lg:w-2/3 lg:gap-48  lg:p-20 lg:pr-0 xl:w-1/2 xl:gap-64 xl:p-48">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col justify-center gap-12">
            {/* BIOGRAPHY TITLE */}
            <h1>BIOGRAPHY</h1>
            {/* BIOGRAPHY DESCRIPTION */}
            <p className=" text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, debitis mollitia ducimus illo autem doloremque
              repudiandae aliquid enim consequuntur rerum, itaque voluptatibus
              quo, blanditiis quam! Culpa corporis dolorum maxime ab!
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className=" italic">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY SIGN SVG */}
            <div className=" self-end">
              <svg
                width="185"
                height="77"
                viewBox="0 0 370 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.013,73.939A50,50,0,0,1,21.66,72.653,33.4,33.4,0,0,1,11.594,68.57a21.533,21.533,0,0,1-7.214-7.214A20.422,20.422,0,0,1,1.7,50.562a20.861,20.861,0,0,1,1.286-6.487A30.768,30.768,0,0,1,6.9,36.469a26.935,26.935,0,0,1,6.767-6.711,25.442,25.442,0,0,1,9.955-4.027,2.91,2.91,0,0,1,.895-.112,2.451,2.451,0,0,1,1.79.559,1.831,1.831,0,0,1,.559,1.342q0,1.79-2.237,2.349A21.831,21.831,0,0,0,16.4,33.393a24.905,24.905,0,0,0-5.816,5.7A27.784,27.784,0,0,0,7.12,45.361a15.116,15.116,0,0,0-1.174,5.2A15.787,15.787,0,0,0,9.636,61.3a21.981,21.981,0,0,0,9.843,6.32,42.236,42.236,0,0,0,13.534,2.069,57.909,57.909,0,0,0,14.093-1.678A43.312,43.312,0,0,0,59.019,63.2a26.907,26.907,0,0,0,8.221-7.382,15.858,15.858,0,0,0,3.02-9.4,11.673,11.673,0,0,0-2.74-7.886,25.487,25.487,0,0,0-7.27-5.648q-4.53-2.461-9.9-4.921-8.389-3.8-11.912-7.941t-3.523-8.053a12.891,12.891,0,0,1,3.8-8.836A27.489,27.489,0,0,1,48.952-3.574,37.767,37.767,0,0,1,63.1-6.146q10.626,0,15.212,2.964T82.9,3.7q0,4.138-4.586,8T66.121,16.559h-.447a2.2,2.2,0,0,1-2.237-2.125q0-1.23,1.454-1.566a21.956,21.956,0,0,0,9.451-3.411Q78.2,6.828,78.2,4.032q0-2.349-3.467-4.138T63.1-1.9A33.027,33.027,0,0,0,50.686.229a22.242,22.242,0,0,0-8.109,5.2,9.193,9.193,0,0,0-2.852,6.208,8.589,8.589,0,0,0,2.461,6.152A21.847,21.847,0,0,0,48,22.1q3.356,1.734,5.928,2.852a96.418,96.418,0,0,1,9.619,4.81,27.119,27.119,0,0,1,7.83,6.6A15.615,15.615,0,0,1,74.51,46.424a19.994,19.994,0,0,1-3.579,11.8,30.007,30.007,0,0,1-9.619,8.613A49.826,49.826,0,0,1,47.946,72.15,62.7,62.7,0,0,1,33.013,73.939Zm77.848-48.1a3.51,3.51,0,0,1-2.4-.951,3.087,3.087,0,0,1-1.063-2.4,3.484,3.484,0,0,1,1.007-2.573,3.347,3.347,0,0,1,2.461-1.007,3.446,3.446,0,0,1,3.579,3.579,3.087,3.087,0,0,1-1.063,2.4A3.649,3.649,0,0,1,110.862,25.843ZM94.308,59.4a3.3,3.3,0,0,1-2.349-.839,3.615,3.615,0,0,1-.895-2.74,19.12,19.12,0,0,1,1.119-5.76,54.324,54.324,0,0,1,2.908-7.047A57.529,57.529,0,0,1,98.95,36.3a28.724,28.724,0,0,1,3.971-4.866,2.589,2.589,0,0,1,1.9-.783,2.757,2.757,0,0,1,1.566.447,1.315,1.315,0,0,1,.671,1.119,1.611,1.611,0,0,1-.559,1.119,18.092,18.092,0,0,0-1.957,2.517q-1.174,1.734-2.293,3.579a30.863,30.863,0,0,0-1.678,3.076q-1.007,2.125-2.237,4.81a45.845,45.845,0,0,0-1.79,4.362,6.487,6.487,0,0,0-.336,1.678q0,1.23.895,1.23a3.192,3.192,0,0,0,1.79-.727q1.007-.727,1.79-1.286a52.816,52.816,0,0,0,5.2-4.754q2.4-2.517,4.418-4.754a1.377,1.377,0,0,1,1.119-.559,1.4,1.4,0,0,1,1.063.615,2.307,2.307,0,0,1,.5,1.51,2.532,2.532,0,0,1-.559,1.678,38.683,38.683,0,0,1-4.642,5.2,57.8,57.8,0,0,1-5.2,4.53,20.745,20.745,0,0,1-3.859,2.237A10.58,10.58,0,0,1,94.308,59.4Zm17.337,3.915a2.666,2.666,0,0,1-1.678-.615,1.766,1.766,0,0,1-.783-1.4,1.838,1.838,0,0,1,.056-.447,2.184,2.184,0,0,1,.168-.447q2.237-4.81,4.25-8.277T116.9,46.2a51.554,51.554,0,0,0,3.188-7.047,16.088,16.088,0,0,0,.951-5.145,5.985,5.985,0,0,0-.168-1.454A5.984,5.984,0,0,1,120.7,31.1a3.216,3.216,0,0,1,.951-2.461,2.968,2.968,0,0,1,2.069-.895,2,2,0,0,1,2.013,1.79,12.475,12.475,0,0,1,.336,3.02q0,.671-.056,1.454t-.168,1.566q1.566-2.125,2.908-3.8t2.349-2.8a19.65,19.65,0,0,1,4.754-3.691,10.166,10.166,0,0,1,4.866-1.454,4.671,4.671,0,0,1,3.691,1.678q1.454,1.678,1.454,5.7a33.78,33.78,0,0,1-.559,5.928q-.559,3.132-1.454,6.376a51.092,51.092,0,0,1,7.047-6.487,66.013,66.013,0,0,1,6.487-4.362q4.25-2.349,6.152-2.349,2.125,0,2.125,2.461a12.784,12.784,0,0,1-.336,2.573,18.607,18.607,0,0,1-1.23,3.579l-4.474,10.961q-.447,1.23-.839,2.461a7.18,7.18,0,0,0-.391,2.125q0,1.566,1.342,1.566a8.585,8.585,0,0,0,3.356-1.119,23.909,23.909,0,0,0,4.921-3.747q2.349-2.293,3.915-3.971.112-.112,1.063-1.119l1.9-2.013a5.615,5.615,0,0,1,1.063-1.007,1.377,1.377,0,0,1,1.119-.559,1.4,1.4,0,0,1,1.063.615,2.307,2.307,0,0,1,.5,1.51,2.532,2.532,0,0,1-.559,1.678,48.858,48.858,0,0,1-4.642,5.145q-2.852,2.8-5.089,4.586A49.411,49.411,0,0,1,163.1,59.51a10.746,10.746,0,0,1-5.257,1.678,4.788,4.788,0,0,1-3.244-1.063q-1.23-1.063-1.007-4.194a23.469,23.469,0,0,1,1.23-4.642q1.007-2.852,2.293-5.984t2.4-5.928a41.832,41.832,0,0,0,1.566-4.474,87.67,87.67,0,0,0-9.507,6.431A59.66,59.66,0,0,0,140.95,52.128q-.559,1.454-1.174,2.852t-1.286,2.852a1.741,1.741,0,0,1-1.79,1.119,2.012,2.012,0,0,1-1.566-.783,1.734,1.734,0,0,1-.224-1.9,98.427,98.427,0,0,0,4.81-13.2,43.051,43.051,0,0,0,1.79-11.521q0-3.691-1.9-3.691a4.681,4.681,0,0,0-2.629,1.119,21.685,21.685,0,0,0-2.964,2.684q-1.79,1.9-5.089,5.872t-6.655,8.445l-.447.895q-1.454,3.02-3.356,6.32a86.484,86.484,0,0,0-4.027,8.109,2.99,2.99,0,0,1-1.23,1.566A3.132,3.132,0,0,1,111.645,63.313Zm72.032-.783q-3.8,0-5.369-2.181a9.062,9.062,0,0,1-1.566-5.425,23.2,23.2,0,0,1,.839-5.872,45.3,45.3,0,0,1,2.181-6.32,19.016,19.016,0,0,1,2.4-8.613,20.3,20.3,0,0,1,6.264-7.047,15.8,15.8,0,0,1,9.34-2.8q5.257,0,7.326,3.02a12.353,12.353,0,0,1,2.069,7.158,22.891,22.891,0,0,1-.559,4.977,30.727,30.727,0,0,1-1.454,4.754,33.935,33.935,0,0,1-2.237,4.53,47.81,47.81,0,0,1-3.02,4.53,15.375,15.375,0,0,0,5.872-2.181,25.138,25.138,0,0,0,5.089-4.53q2.573-2.908,6.04-7.382a1.918,1.918,0,0,1,1.454-.783,2.163,2.163,0,0,1,1.51.559,1.874,1.874,0,0,1,.615,1.454,1.925,1.925,0,0,1-.447,1.23,88.581,88.581,0,0,1-6.543,8.053,24.877,24.877,0,0,1-7.438,5.593,22.572,22.572,0,0,1-9.955,2.013,24.42,24.42,0,0,1-5.816,3.8A15.487,15.487,0,0,1,183.677,62.53Zm6.487-28.969a15.709,15.709,0,0,0-3.244,4.027,49.917,49.917,0,0,0-3.467,6.6,9.682,9.682,0,0,0,2.852,6.208q2.629,2.74,8.109,3.076a30.768,30.768,0,0,0,6.487-9.228,23.126,23.126,0,0,0,2.461-9.563,7.632,7.632,0,0,0-1.342-4.7,4.966,4.966,0,0,0-4.25-1.79,11.679,11.679,0,0,0-3.915.671,13.871,13.871,0,0,0-3.467,1.79,1.831,1.831,0,0,1,.559,1.342A2.012,2.012,0,0,1,190.164,33.561ZM180.657,54.7a4.973,4.973,0,0,0,.727,2.852,2.582,2.582,0,0,0,2.293,1.063,12.779,12.779,0,0,0,6.6-2.013,14.3,14.3,0,0,1-5.481-2.517,12.883,12.883,0,0,1-3.467-3.971A19.4,19.4,0,0,0,180.657,54.7Zm34.674,8.5a2.227,2.227,0,0,1-1.454-.559,1.694,1.694,0,0,1-.671-1.342,3.661,3.661,0,0,1,.224-.895q2.237-4.81,4.418-8.78t4.53-7.774q1.007-1.566,2.293-4.083t2.517-5.481q1.23-2.964,2.069-5.648a15.392,15.392,0,0,0,.839-4.362,4.5,4.5,0,0,0-.112-1.23.648.648,0,0,1-.112-.447,1.822,1.822,0,0,1,.839-1.51,2.763,2.763,0,0,1,1.622-.615,2.287,2.287,0,0,1,1.678.839,4.143,4.143,0,0,1,.783,2.852,18.156,18.156,0,0,1-.727,4.418,45.859,45.859,0,0,1-2.4,6.543q-.895,1.9-1.678,3.523t-1.566,3.076a86.78,86.78,0,0,1,8.948-8.221,75.925,75.925,0,0,1,8.165-5.76q3.579-2.125,4.81-2.125a2.177,2.177,0,0,1,1.9.783,3,3,0,0,1,.559,1.79,8.119,8.119,0,0,1-.839,3.3,29.972,29.972,0,0,1-1.734,3.3q-.895,1.454-1.23,2.013-1.23,1.9-3.356,5.7a66.482,66.482,0,0,0-3.579,7.382q-.447,1.23-.839,2.517a7.724,7.724,0,0,0-.391,2.181q0,1.454,1.23,1.454a7.873,7.873,0,0,0,3.244-1.119,21.538,21.538,0,0,0,4.977-3.747l3.971-3.971q.112-.112,1.063-1.119l1.9-2.013.951-1.007a1.377,1.377,0,0,1,1.118-.559,1.4,1.4,0,0,1,1.063.615,2.307,2.307,0,0,1,.5,1.51,2.533,2.533,0,0,1-.559,1.678,38.072,38.072,0,0,1-4.586,5.145q-2.908,2.8-5.145,4.586A23.622,23.622,0,0,1,245.81,58.9a11.694,11.694,0,0,1-4.754,1.063,6.573,6.573,0,0,1-3.356-.783q-1.342-.783-1.342-4.138a17.818,17.818,0,0,1,2.181-8.389,84.735,84.735,0,0,1,4.921-8.165,66.567,66.567,0,0,0,4.53-7.606q-2.8,1.678-7.438,5.145t-9.731,8.109a74.154,74.154,0,0,0-9.228,10.123q-.783,1.454-1.678,3.132t-1.79,3.691A3.1,3.1,0,0,1,215.331,63.2Zm58.275,5.7q-7.047,0-10.123-3.02a9.227,9.227,0,0,1-3.076-6.711,10.165,10.165,0,0,1,3.02-7.047,10.616,10.616,0,0,1,8.165-3.244,16.532,16.532,0,0,1,3.244.336,2.072,2.072,0,0,1,1.51.783,2.231,2.231,0,0,1,.5,1.342,1.377,1.377,0,0,1-.559,1.119,1.792,1.792,0,0,1-1.566.224,2.992,2.992,0,0,0-1.119-.224h-1.119a7.753,7.753,0,0,0-5.648,2.125,6.342,6.342,0,0,0-2.181,4.586,5.092,5.092,0,0,0,2.069,3.971q2.069,1.734,6.879,1.734a26.73,26.73,0,0,0,11.577-2.461,36.152,36.152,0,0,0,9.451-6.487,73.922,73.922,0,0,0,7.886-8.78q3.635-4.754,6.879-9.228,4.7-6.6,9.731-13.7T329.2,10.631A94.537,94.537,0,0,1,339.262-.554,50.027,50.027,0,0,0,333-1.56q-3.355-.336-7.27-.336A87.726,87.726,0,0,0,304.98.285a60.6,60.6,0,0,0-15.1,5.648,37.275,37.275,0,0,0-9.787,7.494,22.839,22.839,0,0,0-4.81,7.718,16.153,16.153,0,0,0-.783,4.921,6.984,6.984,0,0,0,2.293,5.7,9.067,9.067,0,0,0,5.984,1.9,22.361,22.361,0,0,0,8.557-2.069,36.312,36.312,0,0,0,9.9-6.6A46.929,46.929,0,0,0,310.4,13.2a1.949,1.949,0,0,1,1.678-1.119,1.483,1.483,0,0,1,1.678,1.678,2.784,2.784,0,0,1-.336,1.23,53.744,53.744,0,0,1-9.9,12.863,40.054,40.054,0,0,1-10.85,7.438,25.1,25.1,0,0,1-10.122,2.4,12.955,12.955,0,0,1-8.724-2.964q-3.467-2.964-3.467-8.445a20.169,20.169,0,0,1,1.119-6.376,25.357,25.357,0,0,1,5.593-9.172A41.776,41.776,0,0,1,287.978,2.41,65.2,65.2,0,0,1,304.2-3.63a91.679,91.679,0,0,1,21.531-2.293,72.716,72.716,0,0,1,9.34.559A52,52,0,0,1,342.841-3.8a28.1,28.1,0,0,1,6.208-4.139,13.956,13.956,0,0,1,5.984-1.454,2.419,2.419,0,0,1,1.79.671,1.933,1.933,0,0,1,.671,1.342q0,1.342-1.678,1.342-3.579,0-8.5,3.8,6.6,2.8,9.675,7.214a16.24,16.24,0,0,1,3.076,9.451A20.28,20.28,0,0,1,357.1,24.613a32.912,32.912,0,0,1-8.5,9.451,43.862,43.862,0,0,1-13.366,6.879,55.694,55.694,0,0,1-17.449,2.573q-1.79,0-3.579-.112t-3.356-.336a156.289,156.289,0,0,1-10.4,12.7,47.111,47.111,0,0,1-11.912,9.507A30.226,30.226,0,0,1,273.605,68.906Zm40.826-30.759q-.224.336-.447.615t-.447.615q2.013.112,3.915.112a52.131,52.131,0,0,0,15.715-2.237,43.024,43.024,0,0,0,12.248-5.928,29.225,29.225,0,0,0,7.886-8.053,16.289,16.289,0,0,0,2.74-8.724A12.447,12.447,0,0,0,353.076,6.6q-2.964-3.691-9.228-5.928a92.285,92.285,0,0,0-10.682,11.465q-4.977,6.32-9.619,13.031T314.431,38.147Zm57.156,20.8A2.944,2.944,0,0,1,369.35,58a3.091,3.091,0,0,1-.895-2.181,2.853,2.853,0,0,1,.895-2.181,3.144,3.144,0,0,1,2.237-.839,2.877,2.877,0,0,1,3.02,3.02A3.2,3.2,0,0,1,373.768,58,2.772,2.772,0,0,1,371.587,58.951Z"
                  // stroke="black"
                  fill="#5d5d5d"
                  strokeWidth="2"
                />
              </svg>
            </div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className=" flex flex-col justify-center gap-12" ref={skillRef}>
            <motion.h1
              className=" text-2xl font-bold"
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              className=" flex flex-wrap gap-4 "
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
            >
              <div className=" cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Javascript
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Nest.js
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Apollo
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                WebGL
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="cursor-pointer  rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className=" flex flex-col justify-center gap-12 pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              className=" text-2xl font-bold"
              initial={{ x: "-300px" }}
              animate={isExperienceInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              EXPERIENCE
            </motion.h1>

            {/* EXPERIENCE LIST */}
            <motion.div
              className=""
              initial={{ x: "-300px" }}
              animate={isExperienceInView ? { x: 0 } : {}}
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className=" flex h-48 justify-between">
                {/* LEFT */}
                <div className=" w-1/3 ">
                  {/* JOB TITLE */}
                  <div className=" rounded-b-lg rounded-s-lg bg-white p-3 font-semibold">
                    Senior JavaScript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm font-semibold text-red-400">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className=" w-fit   rounded bg-white p-1 text-sm font-semibold">
                    Apple
                  </div>
                </div>
                {/* CENTER */}
                <div className="flex w-1/6 justify-center">
                  {/* LINE */}
                  <div className=" relative h-full w-1 rounded bg-gray-600">
                    {/* LINE CIRCLE */}
                    <div className=" absolute -left-2 h-5 w-5 rounded-full bg-white ring-4 ring-red-400"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className=" w-1/3 "></div>
              </div>

              {/* EXPERIENCE LIST ITEM */}
              <div className="flex h-48 justify-between">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="flex w-1/6 justify-center">
                  {/* LINE */}
                  <div className=" relative h-full w-1 rounded bg-gray-600">
                    {/* LINE CIRCLE */}
                    <div className=" absolute -left-2 h-5 w-5 rounded-full bg-white ring-4 ring-red-400"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="rounded-b-lg rounded-s-lg bg-white p-3 font-semibold">
                    Senior React Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm font-semibold text-red-400">
                    2019 - 2024
                  </div>
                  {/* JOB COMPANY */}
                  <div className="w-fit   rounded bg-white p-1 text-sm font-semibold">
                    Microsoft
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM */}
              <div className="flex h-48 justify-between">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="rounded-b-lg rounded-s-lg bg-white p-3 font-semibold">
                    Freelancer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm font-semibold text-red-400">
                    2010 - 2019
                  </div>
                  {/* JOB COMPANY */}
                  <div className="w-fit   rounded bg-white p-1 text-sm font-semibold">
                    Microsoft
                  </div>
                </div>
                {/* CENTER */}
                <div className="flex w-1/6 justify-center">
                  {/* LINE */}
                  <div className="relative h-full w-1 rounded bg-gray-600">
                    {/* LINE CIRCLE */}
                    <div className="absolute -left-2 h-5 w-5 rounded-full bg-white ring-4 ring-red-400"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="sticky top-0 z-30 hidden w-1/3 lg:block xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
