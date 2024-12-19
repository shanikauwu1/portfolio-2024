import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const Contact = () => {
  const varient = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <div
        id="contact"
        className="flex  flex-col  items-center justify-center   px-16 md:px-20 h-screen "
      >
        <motion.h1
          variants={varient}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className=" text-4xl md:text-6xl text-green-800 py-10 "
        >
          Let's Talk
        </motion.h1>

        <motion.div
          variants={varient}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="flex flex-row justify-center items-center gap-5"
        >
          <ul className="flex gap-5">
            <li className="cursor-pointer text-7xl opacity-70 transition-all duration-300 hover:opacity-100">
              <FaLinkedin className="text-black transition-all duration-300 hover:-translate-y-5 hover:fill-gradient hover:fill-clip-text" />
            </li>
            <li className="cursor-pointer text-7xl opacity-70 transition-all duration-300 hover:opacity-100">
              <FaEnvelope className="text-black  transition-all duration-300 hover:-translate-y-5 hover:fill-gradient hover:fill-clip-text" />
            </li>
            <li className="cursor-pointer text-7xl opacity-70 transition-all duration-300 hover:opacity-100">
              <FaGithub className="text-black transition-all duration-300 hover:-translate-y-5 hover:fill-gradient hover:fill-clip-text" />
            </li>
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
