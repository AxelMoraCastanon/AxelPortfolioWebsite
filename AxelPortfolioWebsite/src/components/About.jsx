import FarmersWalkImage from "../assets/AxelMoraFarmersWalk.png";
import CapstoneImage from "../assets/AxelMoraCapstone.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-12">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-8 text-center text-3xl sm:text-4xl"
      >
        About<span className="text-blue-300"> Axel</span>
      </motion.h1>

      {/* Text Section with Smooth Transition */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex justify-center mb-8 px-4"
      >
        <p className="max-w-2xl text-center text-lg">{ABOUT_TEXT}</p>
      </motion.div>

      {/* Grid Layout for Side-by-Side Images with Parallax and Hover Effects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 lg:px-32">
        {/* Left Image: Farmers Walk */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          className="flex justify-center"
        >
          <img
            className="rounded-2xl object-cover w-full max-w-sm"
            src={FarmersWalkImage}
            alt="Farmers Walk"
          />
        </motion.div>

        {/* Right Image: Capstone Project */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          className="flex justify-center"
        >
          <img
            className="rounded-2xl object-cover max-w-sm"
            src={CapstoneImage}
            alt="Capstone Project"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
