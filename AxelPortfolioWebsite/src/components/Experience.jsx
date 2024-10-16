import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Image Column */}
            <div className="w-full lg:w-1/4 flex items-center justify-center mb-6">
              {experience.image && (
                <img
                  src={experience.image}
                  width={150}
                  height={150}
                  alt={experience.company}
                  className="rounded"
                />
              )}
            </div>

            {/* Content Column */}
            <div className="w-full max-w-xl lg:w-3/4">
              <p className="mb-1 text-sm text-neutral-400">{experience.date}</p>
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-blue-300">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-700"
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

export default Experience;
