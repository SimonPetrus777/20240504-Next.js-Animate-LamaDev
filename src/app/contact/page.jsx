"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSucccess] = useState(false);
  const [error, setError] = useState(false);

  const text = "Halo Bosque";

  // EMAILJS
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // setiap nyoba kirim email, kudu reset state dulu
    setSucccess(false);
    setError(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          setSucccess(true);
          form.current.reset(); // untuk reset form setelah sukses kirim email
        },
        (error) => {
          setError(true);
        },
      );
  };

  return (
    <motion.div
      className=" h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex h-full flex-col px-4 sm:px-8 md:px-12 lg:flex-row lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className=" flex h-1/6 items-center justify-center text-6xl lg:h-full lg:w-1/2">
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
        <form
          onSubmit={sendEmail}
          ref={form}
          className="flex h-5/6 flex-col  justify-center gap-8 rounded-xl bg-red-50 p-24 text-xl lg:h-full lg:w-1/2"
        >
          <span>Dear Simon,</span>
          <textarea
            rows={6}
            className=" resize-none border-b-2 border-b-black bg-transparent outline-none"
            name="user_message"
          />
          <span>My email address</span>
          <input
            type="text"
            className=" border-b-2 border-b-black bg-transparent outline-none"
            name="user_email"
          />
          <span>Regards</span>
          <button className=" rounded bg-purple-200 p-4 font-semibold text-gray-600">
            Send
          </button>
          {success && (
            <span className=" font-semibold text-green-600">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className=" font-semibold text-red-600">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
