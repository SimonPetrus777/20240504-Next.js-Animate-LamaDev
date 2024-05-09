"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portofolio", title: "Portofolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  return (
    <div className=" flex h-full items-center justify-between px-4 text-lg sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Desktop Links */}
      <div className="hidden w-1/3 gap-4 md:flex">
        {links.map((link, index) => (
          <NavLink key={index} link={link} />
        ))}
      </div>

      {/* Logo */}
      <div className=" md:hidden lg:flex  xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className=" flex items-center rounded-md bg-black p-1 text-sm font-semibold"
        >
          <span className=" mr-1 text-white">Lama</span>
          <span className=" flex  h-8 w-12 items-center justify-center bg-white text-black">
            .dev
          </span>
        </Link>
      </div>

      {/* Social icons */}
      <div className=" hidden w-1/3 justify-end gap-4 md:flex">
        <Link href="#">
          <Image src="/github.png" width={24} height={24} alt="" />
        </Link>
        <Link href="#">
          <Image src="/dribbble.png" width={24} height={24} alt="" />
        </Link>
        <Link href="#">
          <Image src="/instagram.png" width={24} height={24} alt="" />
        </Link>
        <Link href="#">
          <Image src="/facebook.png" width={24} height={24} alt="" />
        </Link>
        <Link href="#">
          <Image src="/pinterest.png" width={24} height={24} alt="" />
        </Link>
        <Link href="#">
          <Image src="/linkedin.png" width={24} height={24} alt="" />
        </Link>
      </div>

      {/* Responsive Menu */}
      <div className=" md:hidden">
        {/* Menu button */}
        <button
          className=" relative  z-50 flex h-8 w-10 flex-col justify-between"
          onClick={() => setOpen(() => !open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className=" h-1 w-10 rounded bg-black"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className=" h-1 w-10 rounded bg-black"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className=" h-1 w-10 rounded bg-black"
          ></motion.div>
        </button>

        {/* Menu List */}
        {open && (
          <div className=" absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-black text-4xl text-white">
            {links.map((link, index) => (
              <Link href={link.url} key={index}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
