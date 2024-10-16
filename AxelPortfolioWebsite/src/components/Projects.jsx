import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 grid grid-cols-1 lg:grid-cols-4 gap-6 lg:items-start"
          >
            {/* Image Column */}
            <div className="lg:col-span-1 flex items-center justify-center">
              {project.image && (
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="rounded"
                />
              )}
            </div>

            {/* Content Column */}
            <div className="lg:col-span-3">
              <h6>{project.date}</h6>
              <h6>{project.position}</h6>
              <h6 className="mb-2 font-semibold text-blue-300">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-small font-medium text-blue-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
