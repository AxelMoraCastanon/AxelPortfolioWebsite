import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const techVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
};

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-12 flex flex-wrap lg:justify-center"
            variants={itemVariants}
          >
            {/* Image Column */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full lg:w-1/4 flex items-center justify-center mb-6"
            >
              {experience.image && (
                <img
                  src={experience.image}
                  width={150}
                  height={150}
                  alt={experience.company}
                  className="rounded"
                />
              )}
            </motion.div>

            {/* Content Column */}
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.p
                variants={itemVariants}
                className="mb-1 text-sm text-neutral-400"
              >
                {experience.date}
              </motion.p>

              <motion.h6
                variants={itemVariants}
                className="mb-2 font-semibold"
              >
                {experience.role} -{" "}
                <span className="text-sm text-blue-300">
                  {experience.company}
                </span>
              </motion.h6>

              <motion.p
                variants={itemVariants}
                className="mb-4 text-neutral-400"
              >
                {experience.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                animate="visible"
              >
                {experience.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-700"
                    variants={techVariants}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
