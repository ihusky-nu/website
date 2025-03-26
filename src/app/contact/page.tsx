"use client";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

const ContactPage = () => {
  return (
    <div id="contact-page">
      <NavBar />
      <div className="flex flex-col items-center min-h-screen">
        {/* Page Header */}
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
            Contact.
          </h1>
        </motion.div>

        {/* Contact Cards Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-4xl w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Slack Card */}
          <motion.a
            href="https://join.slack.com/t/ihusky-network/shared_invite/zt-2swv22htu-nhDLM1UoNh2tJrHJKH5kAw"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full max-w-[350px] min-h-[450px] border border-gray-200 rounded-lg shadow-sm bg-[rgb(29,29,31)] text-white p-6 flex flex-col justify-between items-center transition-all cursor-pointer"
          >
            <div className="flex-grow flex items-center justify-center">
              <img
                src="./images/slack.png"
                alt="Slack"
                width="80"
                height="80"
              />
            </div>
            <h2 className="mt-auto font-semibold text-lg">Join our Slack</h2>
          </motion.a>

          {/* Mailing List Card */}
          <motion.a
            href="https://forms.gle/v5kwATcWE54Bduro6"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full max-w-[350px] min-h-[450px] border border-gray-200 rounded-lg shadow-sm bg-[rgb(29,29,31)] text-white p-6 flex flex-col justify-between items-center transition-all cursor-pointer"
          >
            <div className="flex-grow flex items-center justify-center">
              <img
                src="./images/mail.png"
                alt="Mailing List"
                width="80"
                height="80"
              />
            </div>
            <h2 className="mt-auto font-semibold text-lg">
              Join our Mailing List
            </h2>
          </motion.a>

          {/* Email Card */}
          <motion.a
            href="mailto:ihuskynu@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full max-w-[350px] min-h-[450px] border border-gray-200 rounded-lg shadow-sm bg-[rgb(29,29,31)] text-white p-6 flex flex-col justify-between items-center transition-all cursor-pointer"
          >
            <div className="flex-grow flex items-center justify-center">
              <img
                src="./images/email.png"
                alt="Email Us"
                width="80"
                height="80"
              />
            </div>
            <h2 className="mt-auto font-semibold text-lg">Send us an Email</h2>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
