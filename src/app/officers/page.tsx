"use client"; // Ensure this runs on the client-side

import { useState } from "react";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const officers = [
  {
    name: "Caroline Pham",
    role: "President",
    image: "./images/headshots/caroline_pham_headshot.jpeg",
    linkedin: "https://www.linkedin.com/in/caroline-t-pham",
    year: "3rd Year",
    major: "Computer Science & Design",
    funFact: "I have 4 siblings",
  },
  {
    name: "Nicole Contreras",
    role: "Vice President",
    image: "./images/headshots/nicole_contreras_headshot.jpeg",
    linkedin: "https://www.linkedin.com/in/nicole-contreras-/",
    year: "3rd Year",
    major: "Computer Science & Business",
    funFact: "I love cats",
  },
  {
    name: "Alan Zhang",
    role: "Club Coordinator",
    image: "./images/headshots/alan_zhang_headshot.jpeg",
    linkedin: "https://www.linkedin.com/in/alanlzhang/",
    year: "3rd Year",
    major: "Computer Science",
    funFact: "-",
  },
  {
    name: "Vidyuth Ramkumar",
    role: "Club Coordinator",
    image: "./images/headshots/vidyuth_ramkumar_headshot.jpeg",
    linkedin: "https://www.linkedin.com/in/vidyuth-ramkumar/",
    year: "3rd Year",
    major: "Computer Science & Business",
    funFact: "I play for the NU table tennis team",
  },
  {
    name: "Allen Ehrhardt",
    role: "Club Consultant",
    image: "./images/headshots/allen_ehrhardt_headshot.jpeg",
    linkedin: "https://www.linkedin.com/in/lehrhardt3559/",
    year: "3rd",
    major: "Computer Science",
    funFact: "I rode my bike from MA to VT",
  },
  {
    name: "Lea Lang",
    role: "Lead UX Designer",
    image: "./images/headshots/lea_lang_headshot.jpeg",
    linkedin: "https://www.linkedin.com/in/lea-lang-4263792a3/",
    year: "2nd Year",
    major: "Computer Science",
    funFact: "-",
  },
];

const OfficersPage = () => {
  const [flipped, setFlipped] = useState(Array(officers.length).fill(false));

  const handleFlip = (index: number) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <div>
      <NavBar />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full p-4 md:p-8 mt-6 gap-2">
        <motion.h1
          className="font-bold text-4xl md:text-5xl text-center md:text-left"
          style={{ color: "rgb(29, 29, 31)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Officers.
        </motion.h1>
      </div>

      {/* Officers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mx-auto max-w-5xl place-items-center">
        {officers.map((officer, index) => (
          <motion.div
            key={index}
            className="relative w-[300px] h-[350px] cursor-pointer perspective-1000"
            onClick={() => handleFlip(index)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <motion.div
              className="absolute w-full h-full transform-style-3d"
              initial={false}
              animate={{ rotateY: flipped[index] ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Front Side */}
              <div
                className="absolute w-full h-full flex flex-col items-center justify-center bg-[rgb(29,29,31)] text-white p-6 rounded-lg border border-gray-200 shadow-lg"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
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

              {/* Back Side */}
              <div
                className="absolute w-full h-full flex flex-col items-center justify-center text-center bg-[rgb(29,29,31)] text-white p-6 rounded-lg border border-gray-200 shadow-lg"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <h5 className="text-xl font-bold">{officer.name}</h5>
                <p className="text-md text-gray-300">{officer.year}</p>
                <p className="text-md text-gray-300">{officer.major}</p>
                <p className="text-sm mt-3 text-gray-300">
                  Fun Fact: {officer.funFact}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default OfficersPage;
