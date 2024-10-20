import { useState } from 'react';
import { useSwipeable } from 'react-swipeable'; 
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

// Helper: Get formatted image title
const getFormattedTitle = (imagePath) => {
  const fileName = imagePath.split('/').pop().split('.')[0];
  const cleanName = fileName.replace(/([a-z])([A-Z])/g, '$1 $2')
                            .replace(/_/g, ' ')
                            .replace(/screen|Screen/gi, '');
  return cleanName.trim() + ' Screen';
};

// Organize project images
const projectImages = PROJECTS.reduce((acc, project) => {
  if (Array.isArray(project.image)) acc[project.title] = project.image;
  return acc;
}, {});

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  // Initialize the image index for each project if it doesn't exist
  const initializeImageIndex = (projectTitle) => {
    if (currentImageIndex[projectTitle] === undefined) {
      setCurrentImageIndex(prevState => ({
        ...prevState,
        [projectTitle]: 0, // Start with the first image
      }));
    }
  };

  // Handle "Next" image
  const handleNextImage = (projectTitle) => {
    setCurrentImageIndex(prevState => {
      const currentIndex = prevState[projectTitle] ?? 0;
      const nextIndex = (currentIndex + 1) % projectImages[projectTitle].length;
      return { ...prevState, [projectTitle]: nextIndex };
    });
  };

  // Handle "Prev" image
  const handlePrevImage = (projectTitle) => {
    setCurrentImageIndex(prevState => {
      const currentIndex = prevState[projectTitle] ?? 0;
      const prevIndex = (currentIndex - 1 + projectImages[projectTitle].length) % projectImages[projectTitle].length;
      return { ...prevState, [projectTitle]: prevIndex };
    });
  };

  // Swipe handlers
  const handlers = (projectTitle) => {
    initializeImageIndex(projectTitle);
    return useSwipeable({
      onSwipedLeft: () => handleNextImage(projectTitle),
      onSwipedRight: () => handlePrevImage(projectTitle),
    });
  };

  return (
    <div className="border-b border-neutral-900 pb-12">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      <motion.div className="space-y-12" variants={containerVariants} initial="hidden" whileInView="visible">
        {PROJECTS.map((project, index) => {
          const hasImages = projectImages[project.title]?.length > 0;
          const currentIndex = currentImageIndex[project.title] ?? 0;
          const currentImage = projectImages[project.title]?.[currentIndex] || null;

          return (
            <motion.div key={index} className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:items-start" variants={itemVariants}>
              {/* Image column */}
              <motion.div className="lg:col-span-1 flex flex-col items-center justify-center" {...handlers(project.title)}>
                {currentImage ? (
                  <>
                    <img
                      src={currentImage}
                      alt={project.title}
                      className="rounded shadow-md"
                      style={{ maxWidth: '400px', maxHeight: '400px' }}
                    />
                    <div className="mt-2 text-center text-gray-300 text-sm">
                      {getFormattedTitle(currentImage)}
                    </div>
                    {/* Navigation buttons */}
                    {projectImages[project.title].length > 1 && (
                      <div className="mt-4 flex justify-center space-x-4">
                        <button
                          onClick={() => handlePrevImage(project.title)}
                          className="px-4 py-2 bg-gradient-to-r from-blue-300 via-gray-500 to-blue-700 rounded text-white"
                        >
                          Prev
                        </button>
                        <button
                          onClick={() => handleNextImage(project.title)}
                          className="px-4 py-2 bg-gradient-to-r from-blue-300 via-gray-500 to-blue-700 rounded text-white"
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="lg:col-span-1" />
                )}
              </motion.div>

              {/* Project description */}
              <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: index * 0.2 }}>
                <h6 className="text-sm text-neutral-500">{project.date}</h6>
                <h6 className="text-sm text-neutral-500">{project.position}</h6>
                <h6 className="mb-2 font-semibold text-blue-300">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span key={techIndex} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-small font-medium text-blue-700" variants={itemVariants}>
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Projects;
