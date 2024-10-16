import { CONTACT } from "../constants";
import AxelMoraResume from "../../public/AxelMoraResume.pdf"; // Import PDF
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Axel's Contact Information
      </motion.h1>

      <div className="text-center tracking-tighter space-y-4">
        {/* Email Section - Left to Right */}
        {CONTACT.email && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            <span className="font-semibold text-blue-300">Email: </span>
            <a href={`mailto:${CONTACT.email}`} className="border-b">
              {CONTACT.email}
            </a>
          </motion.div>
        )}

        {/* LinkedIn Section - Right to Left */}
        {CONTACT.linkedin && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >
            <span className="font-semibold text-blue-300">LinkedIn: </span>
            <a
              href={CONTACT.linkedin}
              className="border-b"
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTACT.linkedin}
            </a>
          </motion.div>
        )}

        {/* GitHub Section - Left to Right */}
        {CONTACT.github && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            <span className="font-semibold text-blue-300">GitHub: </span>
            <a
              href={CONTACT.github}
              className="border-b"
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTACT.github}
            </a>
          </motion.div>
        )}

        {/* Resume Section - Right to Left */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          <span className="font-semibold text-blue-300">Axel Mora's Resume: </span>
          <a
            href={AxelMoraResume}
            download="Axel_Mora_Resume.pdf"
            className="border-b"
          >
            Download
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
