import { HERO_CONTENT } from "../constants";
import profilePicture from "../assets/AxelMoraProfilePicture.png";
import AxelMoraResume from "../../public/AxelMoraResume.pdf"; // Import PDF

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:pb-16">
      <div className="flex flex-wrap">
        {/* Left Section: Name, Role, Content */}
        <div className="w-full lg:w-1/2 px-4 lg:px-8">
          <div className="flex flex-col items-center lg:items-start">
            <h1
              className="pb-8 text-5xl font-thin tracking-tight sm:text-6xl 
                         lg:mt-16 lg:text-8xl"
            >
              Axel Mora
            </h1>
            <span
              className="bg-gradient-to-r from-blue-300 via-gray-500 
                         to-blue-700 bg-clip-text text-2xl sm:text-3xl 
                         tracking-tight text-transparent"
            >
              Software & Cloud Engineer
            </span>
            <p className="my-4 max-w-xl py-4 font-light tracking-tighter text-center lg:text-left">
              {HERO_CONTENT}
            </p>

            {/* Buttons for Resume */}
            <div className="mt-8 flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
              {/* View Resume Button */}
              <a
                href={AxelMoraResume}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-300 via-gray-500 to-blue-700 
                           px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-white 
                           text-md sm:text-lg font-semibold text-center"
              >
                View Resume
              </a>

              {/* Download Resume Button */}
              <a
                href={AxelMoraResume}
                download="Axel_Mora_Resume.pdf"
                className="bg-gradient-to-r from-blue-300 via-gray-500 to-blue-700 
                           px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-white 
                           text-md sm:text-lg font-semibold text-center"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Profile Picture */}
        <div className="w-full lg:w-1/2 lg:p-8 mt-8 lg:mt-0">
          <div className="flex justify-center">
            <img 
              src={profilePicture} 
              alt="Axel Mora" 
              className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
