import { motion } from "motion/react";
import CardGrid from "../components/Card";
const Projects = () => {
  const varient = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <div
        id="projects"
        className="flex  flex-col h-auto items-center  pt-20 px-16 md:px-11 "
      >
        <motion.h1
          variants={varient}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className=" text-4xl md:text-6xl text-green-800 py-10"
        >
          Projects
        </motion.h1>

        <div className="h-auto w-full">
          <CardGrid />
        </div>
      </div>
    </>
  );
};

export default Projects;
