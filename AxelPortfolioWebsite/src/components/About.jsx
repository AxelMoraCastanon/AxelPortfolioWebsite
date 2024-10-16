import FarmersWalkImage from "../assets/AxelMoraFarmersWalk.png";
import CapstoneImage from "../assets/AxelMoraCapstone.png";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-blue-300"> Axel</span>
      </h1>

      <div className="flex flex-wrap">
        {/* Left Section: Farmers Walk Image */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl"
              src={FarmersWalkImage}
              alt="Farmers Walk"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        {/* Right Section: About Text and Capstone Image */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* About Text */}
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>

            {/* Capstone Image */}
            <div className="mt-8">
              <img
                className="rounded-2xl"
                src={CapstoneImage}
                alt="Capstone Project"
                style={{ width: "100%", maxWidth: "400px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
