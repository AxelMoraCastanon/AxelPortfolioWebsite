import React from 'react';
import { motion } from 'framer-motion';

// Import institution logos
import csuciLogo from '../assets/certifications/csuci_logo.jpeg';
import amigosCodeLogo from '../assets/certifications/amigoscode_logo.jpeg';
import awsLogo from '../assets/certifications/aws.jpeg';
import awsNewbiesLogo from '../assets/certifications/awsnewbies.jpeg';
import dataCumulusLogo from '../assets/certifications/datacumulus.jpeg';
import learnProgrammingLogo from '../assets/certifications/learn_programming_academy_logo.jpeg';
import linkedinLogo from '../assets/certifications/linkedin.jpeg';

const certifications = [
  {
    title: 'Bachelor of Science (B.S.) in Computer Science',
    institution: 'California State University Channel Islands (CSUCI)',
    date: 'December 15, 2023',
    url: 'https://www.michaelsutter.com/ediploma',
    logo: csuciLogo,
  },
  {
    title: 'AWS Certified Cloud Practitioner (CLF-C02)',
    institution: 'Amazon Web Services (AWS)',
    date: 'January 19, 2024',
    url: 'https://www.credly.com/badges/e36006de-4eeb-4117-a60c-10d93339aa21/public_url',
    logo: awsLogo,
  },
  {
    title: 'Ultimate AWS Certified Cloud Practitioner CLF-C02',
    institution: 'DataCumulus',
    date: 'January 16, 2024',
    url: 'https://www.udemy.com/certificate/UC-79803a95-f9f9-482f-9dcd-eb1219e333fa/',
    logo: dataCumulusLogo,
  },
  {
    title: 'AWS Essential Training for Developers',
    institution: 'LinkedIn Learning',
    date: 'June 2023',
    url: '',
    logo: linkedinLogo,
  },
  {
    title: 'Prepare for the AWS Certified Cloud Practitioner (CLF-C01) Certification Exam',
    institution: 'AWS Newbies',
    date: 'April 2023',
    url: '',
    logo: awsNewbiesLogo,
  },
  {
    title: 'Beginning C++ Programming From Beginner to Beyond',
    institution: 'Learn Programming Academy',
    date: 'October 3, 2022',
    url: 'https://www.udemy.com/certificate/UC-f53c77f7-f256-44f3-8286-8655d3c74da8/',
    logo: learnProgrammingLogo,
  },
  {
    title: 'Data Structures and Algorithms: Deep Dive Using Java',
    institution: 'Learn Programming Academy',
    date: 'October 3, 2022',
    url: 'https://www.udemy.com/certificate/UC-b5b74fe5-b589-4947-a3ae-cd5972e976e3/',
    logo: learnProgrammingLogo,
  },
  {
    title: 'Java Programming Masterclass Covering Java 11 & Java 17',
    institution: 'Learn Programming Academy',
    date: 'October 3, 2022',
    url: 'https://www.udemy.com/certificate/UC-e7e7b6b5-f89f-450f-a2f6-f12d222cd905/',
    logo: learnProgrammingLogo,
  },
  {
    title: 'Getting Started with Spring Boot',
    institution: 'AmigosCode',
    date: 'September 2022',
    url: '',
    logo: amigosCodeLogo,
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Certifications = () => {
  return (
    <motion.div
      className="border-b border-neutral-900 text-white py-12 px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="my-10 text-center text-4xl">Certifications</h2>
      <motion.ul className="space-y-6">
        {certifications.map((cert, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-4"
            variants={itemVariants}
          >
            {/* Display Logo with Hover Animation */}
            {cert.logo && (
              <motion.img
                src={cert.logo}
                alt={`${cert.institution} logo`}
                className="w-20 h-20 object-cover rounded"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            )}

            {/* Certification Details */}
            <div className="flex flex-col">
              <motion.a
                href={cert.url || '#'}
                target={cert.url ? '_blank' : '_self'}
                rel={cert.url ? 'noopener noreferrer' : ''}
                className={`text-blue-300 underline hover:text-blue-500 ${
                  !cert.url && 'cursor-default'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold">{cert.title}</h3>
              </motion.a>
              <p className="text-sm text-neutral-400">{cert.institution}</p>
              <p className="text-sm text-neutral-500">{cert.date}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Certifications;
