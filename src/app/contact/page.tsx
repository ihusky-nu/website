"use client";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

const contactOptions = [
  {
    id: 1,
    title: "Join our Slack",
    image: "./images/slack.png",
    link: "https://join.slack.com/t/ihusky-network/shared_invite/zt-2swv22htu-nhDLM1UoNh2tJrHJKH5kAw",
  },
  {
    id: 2,
    title: "Join our Mailing List",
    image: "./images/mail.png",
    link: "https://forms.gle/v5kwATcWE54Bduro6",
  },
  {
    id: 3,
    title: "Send us an Email",
    image: "./images/email.png",
    link: "mailto:ihuskynu@gmail.com",
  },
];

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
          {contactOptions.map((option, index) => (
            <motion.a
              key={option.id}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[350px] min-h-[450px] border border-gray-200 rounded-lg shadow-sm bg-[rgb(29,29,31)] text-white p-6 flex flex-col justify-between items-center transition-all cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex-grow flex items-center justify-center">
                <img
                  src={option.image}
                  alt={option.title}
                  width="80"
                  height="80"
                />
              </div>
              <h2 className="mt-auto font-semibold text-lg">{option.title}</h2>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
