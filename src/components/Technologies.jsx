import {
  FaHtml5,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPhp,
  FaCss3,
  FaGitAlt,
  FaWordpress,
  FaLaravel,
  FaDatabase,
  FaCss3Alt,
  FaAngular,
  FaPython,
  FaSass,
  FaShopify,
} from "react-icons/fa";

import { motion } from "motion/react";

const Technologies = () => {
  const varient = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div
        id="about"
        className="flex  flex-col h-auto items-center pb-8 pt-20 px-8 md:px-16 md:h-fit lg:min-h-screen"
      >
        <motion.h1
          variants={varient}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className=" text-4xl md:text-6xl text-green-800 py-10 dark:text-green-500"
        >
          About Me
        </motion.h1>
        <p className=" text-left w-full text-lg md:text-2xl md:w-3/4 md:text-center dark:text-white">
          I’m passionate about writing efficient code and delivering exceptional
          user experiences.I maintain a keen eye for detail to ensure
          pixel-perfect designs and smooth functionality.
        </p>
        <motion.div
          variants={varient}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          className="flex  justify-center flex-col  gap-10"
        >
          <div className=" text-2xl md:text-3xl text-green-800 py-10 dark:text-white">
            My Skills
          </div>
          <div className="grid grid-cols-1 p-4 gap-4 md:grid-cols-2 xl:grid-cols-5  bg-gradient-to-r from-green-700 to-green-950 rounded-2xl dark:bg-slate-100">
            <div className="text-black bg-white flex flex-row gap-4 p-4 justify-center items-center rounded-2xl">
              <FaHtml5 className="text-3xl cursor-pointer md:text-5xl  text-green-800" />
              <p className="text-2xl font-semibold">Html</p>
            </div>
            <div className="text-black bg-white flex flex-row gap-4 p-4 justify-center items-center rounded-2xl">
              <FaJs className="text-3xl cursor-pointer md:text-5xl  text-green-800" />
              <p className="text-2xl font-semibold">JavaScript</p>
            </div>
            <div className="text-black bg-white flex flex-row gap-4 p-4 justify-center items-center rounded-2xl">
              <FaCss3 className="text-3xl cursor-pointer md:text-5xl  text-green-800" />
              <p className="text-2xl font-semibold">CSS3</p>
            </div>
            <div className="text-black bg-white flex flex-row gap-4 p-4 justify-center items-center rounded-2xl">
              <FaReact className="text-3xl cursor-pointer md:text-5xl  text-green-800" />
              <p className="text-2xl font-semibold">React</p>
            </div>
            <div className="text-black bg-white flex flex-row gap-4 p-4 justify-center items-center rounded-2xl">
              <FaPhp className="text-3xl cursor-pointer md:text-5xl  text-green-800" />
              <p className="text-2xl font-semibold">PHP</p>
            </div>
            <div className="text-black bg-white flex flex-row gap-4 p-4 justify-center items-center rounded-2xl">
              <FaBootstrap className="text-3xl cursor-pointer md:text-5xl  text-green-800" />
              <p className="text-2xl font-semibold">Bootstrap</p>
            </div>
            <div className="text-black bg-white flex flex-row gap-4 p-4 justify-center items-center rounded-2xl">
              <FaLaravel className="text-3xl cursor-pointer md:text-5xl  text-green-800" />
              <p className="text-2xl font-semibold">Laravel</p>
            </div>
            <div className="text-black bg-white flex flex-row gap-4 p-4 justify-center items-center rounded-2xl">
              <FaWordpress className="text-3xl cursor-pointer md:text-5xl  text-green-800" />
              <p className="text-2xl font-semibold">Wordpress</p>
            </div>
            <div className="text-black bg-white flex flex-row gap-4 p-4 justify-center items-center rounded-2xl">
              <FaGitAlt className="text-3xl cursor-pointer md:text-5xl  text-green-800" />
              <p className="text-2xl font-semibold">Git</p>
            </div>
            <div className="text-black bg-white flex flex-row gap-4 p-4 justify-center items-center rounded-2xl">
              <FaSass className="text-3xl cursor-pointer md:text-5xl  text-green-800" />
              <p className="text-2xl font-semibold">Sass</p>
            </div>
            {/* <div className="text-black bg-white flex flex-row gap-4 p-4 justify-center items-center rounded-2xl">
              <FaDatabase className="cursor-pointer text-5xl  text-green-800" />
              <p className="text-2xl font-semibold">Mysql</p>
            </div>
           
            <div className="text-black bg-white flex flex-row gap-4 p-4 justify-center items-center rounded-2xl">
              <FaAngular className="cursor-pointer text-5xl  text-green-800" />
              <p className="text-2xl font-semibold">Angular</p>
            </div>
            <div className="text-black bg-white flex flex-row gap-4 p-4 justify-center items-center rounded-2xl">
              <FaPython className="cursor-pointer text-5xl  text-green-800" />
              <p className="text-2xl font-semibold">Python</p>
            </div>
            <div className="text-black bg-white flex flex-row gap-4 p-4 justify-center items-center rounded-2xl">
              <FaShopify className="cursor-pointer text-5xl  text-green-800" />
              <p className="text-2xl font-semibold">Shopify</p>
            </div> */}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Technologies;
