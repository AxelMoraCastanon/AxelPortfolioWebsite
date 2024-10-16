import React from 'react';

const recommendations = [
  {
    name: 'Hycel Taylor',
    connection: 'First degree connection',
    title: 'Founder, CTO & Chief Architect at GenRocket, Inc',
    date: 'December 13, 2023',
    relationship: 'Hycel was Axel’s mentor',
    text: `I want to give a huge shoutout and my highest recommendation to Axel Mora. 
    I recently had the opportunity to meet Axel at CSU Channel Islands, where he presented 
    his senior project, his GymPulse IOS application.

    Axel identified an opportunity to simplify and centralize the management of gyms through 
    a single app. The goal was to replace multiple apps and physical notebooks with an 
    all-in-one solution. This resulted in a more efficient and user-friendly scheduling, 
    client management, and payment system.

    Through extensive research, Axel gathered a diverse set of components such as AWS EC2, 
    MySQL with RDS, Stripe, Swift, Apache, Xcode, and Git to build his GymPulse app and 
    bring his vision to fruition.

    Not only did Axel create an excellent app, but he also delivered a well-organized, 
    effective, and persuasive presentation with enthusiasm and professionalism.`,
    technologies: [
      'AWS EC2', 
      'MySQL with RDS', 
      'Stripe', 
      'Swift', 
      'Apache', 
      'Xcode', 
      'Git'
    ],
    linkedin: 'https://www.linkedin.com/in/hycel-taylor-569137/',
  },
];

const Recommendations = () => {
  return (
    <div className="border-b border-neutral-900 text-white py-12 px-8">
      <h2 className="text-center text-3xl font-bold mb-8">Recommendations</h2>
      {recommendations.map((rec, index) => (
        <div key={index} className="mb-8 border-b border-neutral-900 pb-8">
          {/* Name as a Clickable Link */}
          <a
            href={rec.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 underline hover:text-blue-500"
          >
            <h3 className="text-xl font-semibold">{rec.name}</h3>
          </a>

          <p className="text-sm">{rec.connection}</p>
          <p className="text-sm">{rec.title}</p>
          <p className="text-sm">{rec.date}</p>
          <p className="text-sm mb-4">{rec.relationship}</p>

          {/* Quoted Recommendation Text */}
          <blockquote className="italic mb-4">
            "{rec.text}"
          </blockquote>

          {/* Recommender Name Prefixed with Dash */}
          <p className="text-md italic font-medium text-blue-300">- {rec.name}</p>

          {/* Technologies and Skills Section */}
          <div className="flex flex-wrap gap-2 mt-4">
            {rec.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="mr-2 rounded bg-neutral-900 px-2 py-1 text-small font-medium text-blue-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
