import { EXPERIENCES } from "../constants";
import {motion} from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 0.5}}
      className="my-20 text-center text-4xl">Experience</motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Image Column */}
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1}}
            className="w-full lg:w-1/4 flex items-center justify-center mb-6">
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
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: -100}}
              transition={{duration: 1}}
              className="mb-1 text-sm text-neutral-400">{experience.date}</motion.p>
              <motion.h6 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: -100}}
              transition={{duration: 1}}
              className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-blue-300">
                  {experience.company}
                </span>
              </motion.h6>
              <motion.p 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: +100}}
              transition={{duration: 1}}
              className="mb-4 text-neutral-400">{experience.description}</motion.p>
              <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: +100}}
              transition={{duration: 1}}
              className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-700"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
