import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const techVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } },
};

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      {/* Title with Entrance Animation */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:items-start"
            variants={itemVariants}
          >
            {/* Image Column with Hover Animation */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="lg:col-span-1 flex items-center justify-center"
            >
              {project.image && (
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="rounded shadow-md"
                />
              )}
            </motion.div>

            {/* Content Column with Slide-In Animation */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <h6 className="text-sm text-neutral-500">{project.date}</h6>
              <h6 className="text-sm text-neutral-500">{project.position}</h6>
              <h6 className="mb-2 font-semibold text-blue-300">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {/* Technologies with Bounce Animation */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-small font-medium text-blue-700"
                    variants={techVariants}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
