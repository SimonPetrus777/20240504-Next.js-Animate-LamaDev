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
        <div className=" mb-8 flex items-center justify-center text-lg lg:mb-0 lg:h-full lg:w-1/2 lg:text-6xl">
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
          className="flex  flex-col  justify-center rounded-xl bg-red-50 p-5 text-xl lg:h-full lg:w-1/2 lg:p-14"
        >
          <span className="mb-2 font-semibold">Your Message:</span>
          <textarea
            className=" mb-5 h-36 resize-none rounded-md p-2 outline-none"
            name="user_message"
            required
          />
          <span className=" mb-2 font-semibold">Your Email Address:</span>
          <input
            type="email"
            className="mb-10 h-10 rounded  p-2 outline-none"
            name="user_email"
            required
          />

          <button className="mb-4 rounded bg-purple-200 p-4 font-semibold text-gray-600">
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
