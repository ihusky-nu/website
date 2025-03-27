"use client";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const WorkshopsPage = () => {
  return (
    <div id="workshops-page">
      <NavBar />
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end w-full p-4 md:p-8 mt-6 gap-2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="font-bold text-4xl md:text-5xl text-center md:text-left"
            style={{ color: "rgb(29, 29, 31)" }}
          >
            Workshops.
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "90%",
              maxWidth: "1400px",
              height: "80vh",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
              background: "white",
            }}
          >
            <iframe
              src="https://v2-embednotion.com/4dae0050834a4af8ab76f651f5a0f43e"
              style={{ width: "100%", height: "100%", border: "none" }}
            ></iframe>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkshopsPage;
