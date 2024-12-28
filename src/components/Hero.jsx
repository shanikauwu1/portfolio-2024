import proPic from "/blaclnWhite-shanika-pic.jpg";
import { FaDownload, FaCode } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
const Hero = () => {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/public/Web-Developer-Resume-Shanika.pdf";
    //link.download = "Web-Developer-Resume-Shanika.pdf";
    link.click();
  };
  return (
    <>
      <section
        id="home"
        className="h-auto  md:min-h-screen  flex flex-col py-8 px-8 items-center justify-center  md:px-11 "
      >
        <aside className="w-full pt-20 text-center flex flex-col justify-center items-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center flex flex-col justify-center items-center"
          >
            <img
              src={proPic}
              alt="Shanika E"
              className="rounded-full cursor-pointer w-2/3 h-auto md:w-1/2 shadow-2xl shadow-gray-500 transition-all duration-200 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-gray-900"
            />
          </motion.div>
          <motion.p
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl  mt-12 dark:text-white"
          >
            Hello World!
          </motion.p>
          <h2 className="text-2xl h-16 my-3  bg-gradient-to-r md:h-auto md:text-3xl from-blue-500 to-green-500 bg-clip-text text-transparent  font-bold lg:text-5xl ">
            <TypeAnimation
              sequence={[
                "My name is Shanika",
                1000,
                // Same substring at the start will only be typed out once, initially
                "Web developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Frontend developer",
                1500,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h2>
        </aside>

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className=" flex flex-col md:flex-row gap-10 my-10"
        >
          <button className="px-8 py-4 flex flex-row items-center justify-center gap-4 text-lg md:text-xl bg-gradient-to-r from-green-700 to-green-950 text-white  rounded-md shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-300 ">
            <FaCode size={30} />

            <span>Projects</span>
          </button>
          <button
            onClick={downloadFile}
            className="px-8 py-4 flex flex-row items-center justify-center gap-4 text-lg md:text-xl bg-gradient-to-r from-green-700 to-green-950 text-white  rounded-md shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <FaDownload size={30} />
            Download CV
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
