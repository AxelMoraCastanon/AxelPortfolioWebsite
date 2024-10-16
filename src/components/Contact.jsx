import { CONTACT } from "../constants";
import AxelMoraResume from "../../public/AxelMoraResume.pdf"; // Import PDF
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const hoverEffect = {
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 },
  },
};

const underlineEffect = {
  hover: {
    width: "100%",
    transition: { duration: 0.3 },
  },
};

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Title with Parallax Effect */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
        className="my-10 text-center text-4xl"
      >
        Axel's Contact Information
      </motion.h1>

      <motion.div
        className="text-center tracking-tighter space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Email Section */}
        {CONTACT.email && (
          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <span className="font-semibold text-blue-300">Email: </span>
            <motion.a
              href={`mailto:${CONTACT.email}`}
              className="border-b relative overflow-hidden"
              variants={hoverEffect}
              whileHover="hover"
            >
              {CONTACT.email}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-blue-300"
                initial={{ width: 0 }}
                animate={underlineEffect}
              />
            </motion.a>
          </motion.div>
        )}

        {/* LinkedIn Section */}
        {CONTACT.linkedin && (
          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <span className="font-semibold text-blue-300">LinkedIn: </span>
            <motion.a
              href={CONTACT.linkedin}
              className="border-b relative overflow-hidden"
              target="_blank"
              rel="noopener noreferrer"
              variants={hoverEffect}
              whileHover="hover"
            >
              {CONTACT.linkedin}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-blue-300"
                initial={{ width: 0 }}
                animate={underlineEffect}
              />
            </motion.a>
          </motion.div>
        )}

        {/* GitHub Section */}
        {CONTACT.github && (
          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <span className="font-semibold text-blue-300">GitHub: </span>
            <motion.a
              href={CONTACT.github}
              className="border-b relative overflow-hidden"
              target="_blank"
              rel="noopener noreferrer"
              variants={hoverEffect}
              whileHover="hover"
            >
              {CONTACT.github}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-blue-300"
                initial={{ width: 0 }}
                animate={underlineEffect}
              />
            </motion.a>
          </motion.div>
        )}

        {/* Resume Section */}
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <span className="font-semibold text-blue-300">Axel Mora's Resume: </span>
          <motion.a
            href={AxelMoraResume}
            download="Axel_Mora_Resume.pdf"
            className="border-b relative overflow-hidden"
            variants={hoverEffect}
            whileHover="hover"
          >
            Download
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-blue-300"
              initial={{ width: 0 }}
              animate={underlineEffect}
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
