import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Axel's Contact Information</h1>
      <div className="text-center tracking-tighter space-y-4">
        {/* Email Section */}
        {CONTACT.email && (
          <div>
            <span className="font-semibold text-blue-300" >Email: </span>
            <a href={`mailto:${CONTACT.email}`} className="border-b">
              {CONTACT.email}
            </a>
          </div>
        )}

        {/* LinkedIn Section */}
        {CONTACT.linkedin && (
          <div>
            <span className="font-semibold text-blue-300">LinkedIn: </span>
            <a
              href={CONTACT.linkedin}
              className="border-b"
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTACT.linkedin}
            </a>
          </div>
        )}

        {/* GitHub Section */}
        {CONTACT.github && (
          <div>
            <span className="font-semibold text-blue-300">GitHub: </span>
            <a
              href={CONTACT.github}
              className="border-b"
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTACT.github}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
