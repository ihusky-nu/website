"use client"; // Ensure this runs on the client-side

import NavBar from "../components/NavBar";
import { motion } from "framer-motion";

const officers = [
  {
    name: "Caroline Pham",
    role: "President",
    image: "./images/headshots/caroline_pham_headshot.jpeg",
    linkedin: "https://www.linkedin.com/in/caroline-t-pham",
  },
  {
    name: "Nicole Contreras",
    role: "Vice President",
    image: "./images/headshots/nicole_contreras_headshot.jpeg",
    linkedin: "https://www.linkedin.com/in/nicole-contreras-/",
  },
  {
    name: "Alan Zhang",
    role: "Vice President",
    image: "./images/headshots/alan_zhang_headshot.jpeg",
    linkedin: "https://www.linkedin.com/in/alanlzhang/",
  },
  {
    name: "Vidyuth Ramkumar",
    role: "Vice President",
    image: "./images/headshots/vidyuth_ramkumar_headshot.jpeg",
    linkedin: "https://www.linkedin.com/in/vidyuth-ramkumar/",
  },
  {
    name: "Allen Ehrhardt",
    role: "Vice President",
    image: "./images/headshots/allen_ehrhardt_headshot.jpeg",
    linkedin: "https://www.linkedin.com/in/lehrhardt3559/",
  },
  {
    name: "Lea Lang",
    role: "Vice President",
    image: "./images/headshots/lea_lang_headshot.jpeg",
    linkedin: "https://www.linkedin.com/in/lea-lang-4263792a3/",
  },
];

const OfficersPage = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full p-4 md:p-8 mt-6 gap-2">
        {/* Animated Officers Heading */}
        <motion.h1
          className="font-bold text-4xl md:text-5xl text-center md:text-left"
          style={{ color: "rgb(29, 29, 31)" }}
          initial={{ opacity: 0, y: 20 }} // Starts slightly lower and transparent
          animate={{ opacity: 1, y: 0 }} // Moves into place and becomes visible
          transition={{ duration: 0.6, ease: "easeOut" }} // Smooth animation
        >
          Officers.
        </motion.h1>
      </div>

      {/* Officers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mx-auto max-w-5xl justify-center">
        {officers.map((officer, index) => (
          <motion.div
            key={index}
            className="w-full max-w-[500px] border border-gray-200 rounded-lg shadow-sm bg-[rgb(29,29,31)] text-white p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.08 }}
          >
            <div className="flex flex-col items-center pb-6">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={officer.image}
                alt={`${officer.name} Headshot`}
              />
              <h5 className="mb-1 text-xl font-medium">{officer.name}</h5>
              <span className="text-sm text-gray-400">{officer.role}</span>
              <div className="mt-4">
                <a href={officer.linkedin} target="_blank">
                  <img src="./images/linkedin.png" className="w-8 h-8" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OfficersPage;
