import { HERO_CONTENT } from "../constants";
import profilePicture from "../assets/AxelMoraProfilePicture.png";
import AxelMoraResume from "../../public/AxelMoraResume.pdf"; // Import PDF

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Left Section: Name, Role, Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16
                         lg:text-8xl"
            >
              Axel Mora
            </h1>
            <span
              className="bg-gradient-to-r from-blue-300 via-gray-500 
                         to-blue-700 bg-clip-text text-3xl tracking-tight 
                         text-transparent"
            >
              Software & Cloud Engineer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>

            {/* Buttons for Resume */}
            <div className="mt-8 space-x-4">
              {/* View Resume Button */}
              <a
                href={AxelMoraResume}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-300 via-gray-500 to-blue-700 
                           px-6 py-3 rounded-lg text-white text-lg font-semibold"
              >
                View Resume
              </a>

              {/* Download Resume Button */}
              <a
                href={AxelMoraResume}
                download="Axel_Mora_Resume.pdf"
                className="bg-gradient-to-r from-blue-300 via-gray-500 to-blue-700 
                           px-6 py-3 rounded-lg text-white text-lg font-semibold"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Profile Picture */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={profilePicture} alt="Axel Mora" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
