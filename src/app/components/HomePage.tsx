"use client"; // Required for animations to work in Next.js App Router

import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div id="home">
      {/* Header Section */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-end w-full p-8 mt-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-bold text-5xl">iHusky</h1>
        <h1 className="font-bold text-xl">
          Northeastern's iOS Development Club.
        </h1>
      </motion.div>

      {/* GIF Section */}
      <motion.div
        className="flex justify-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="flex justify-center items-center md:items-end w-[80%] p-4 mt-6 border-[5px] border-black rounded-lg bg-black">
          <img src="./images/animated.gif" />
        </div>
      </motion.div>

      {/* Learn Swift Section */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-end w-full p-8 mt-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h1 className="font-bold text-4xl">Learn Swift and SwiftUI.</h1>
      </motion.div>

      {/* iHusky Benefits Section (Responsive Cards) */}
      <div className="w-full p-6 flex justify-center">
        {/* Wrapper: Centering and responsive layout */}
        <motion.div
          className="grid grid-cols-1 md:flex md:overflow-x-auto md:space-x-6 gap-6 p-4 items-center mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            "Hands-on iOS Development",
            "Project-Based Learning",
            "Internship & Co-op Prep",
            "Networking & Mentorship",
          ].map((title, index) => (
            <motion.div
              key={index}
              className="bg-black rounded-2xl shadow-lg p-6 flex items-center justify-center text-white text-center transition-transform transform hover:scale-105 duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold">{title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
