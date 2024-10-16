import React from 'react';
import { motion } from "framer-motion";

// Import Icons
import { BsFiletypeSql, BsFiletypeHtml } from "react-icons/bs";
import { PiFileCppBold, PiFileCBold } from "react-icons/pi";
import { SiPhp, SiMysql, SiPostman, SiIntellijidea, SiXcode } from "react-icons/si";  // Added IntelliJ and Xcode
import { RiJavaLine, RiJavascriptFill, RiReactjsLine } from "react-icons/ri";
import { TbBrandKotlin, TbFileTypeXml } from "react-icons/tb";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaAws, FaGitSquare, FaGithub, FaLinux, FaUbuntu, FaApple, FaWindows } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io5";

// Technology Card Component with Hover Effect
const TechnologyCardComponent = ({ Icon, color, duration }) => (
  <motion.div
    initial={{ y: -10 }}
    animate={{ y: [10, -10], rotate: [0, 1, -1, 0] }}
    transition={{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }}
    whileHover={{ scale: 1.1, backgroundColor: "#333", boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.5)" }}
    className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300"
  >
    <Icon className="text-7xl" style={{ color }} />
  </motion.div>
);

const TechnologyCard = React.memo(TechnologyCardComponent);

const Technologies = () => {
  const languages = [
    { Icon: BsFiletypeSql, color: "#CC2927", duration: 2.1 },
    { Icon: SiMysql, color: "#00758F", duration: 2.3 },
    { Icon: PiFileCppBold, color: "#00599C", duration: 2.5 },
    { Icon: PiFileCBold, color: "#A8B9CC", duration: 2.7 },
    { Icon: SiPhp, color: "#777BB4", duration: 2.9 },
    { Icon: RiJavaLine, color: "#5382A1", duration: 3.1 },
    { Icon: TbBrandKotlin, color: "#7F52FF", duration: 3.3 },
    { Icon: TbFileTypeXml, color: "#FF6600", duration: 3.5 },
    { Icon: BsFiletypeHtml, color: "#E34F26", duration: 3.7 },
    { Icon: RiJavascriptFill, color: "#F7DF1E", duration: 3.9 },
    { Icon: RiReactjsLine, color: "#61DAFB", duration: 4.1 },
  ];

  // Updated Tools & Platforms Array
  const tools = [
    { Icon: VscVscodeInsiders, color: "#007ACC", duration: 2.4 },
    { Icon: FaAws, color: "#FF9900", duration: 2.6 },
    { Icon: SiPostman, color: "#FF6C37", duration: 2.8 },
    { Icon: FaGitSquare, color: "#F05032", duration: 3.0 },
    { Icon: FaGithub, color: "#A8B9CC", duration: 3.2 },
    { Icon: SiIntellijidea, color: "7F52FF", duration: 3.4 },  // IntelliJ IDEA Icon
    { Icon: SiXcode, color: "#1575F9", duration: 3.6 },  // Xcode Icon
  ];

  const operatingSystems = [
    { Icon: FaLinux, color: "#FCC624", duration: 2.3 },
    { Icon: FaUbuntu, color: "#E95420", duration: 2.5 },
    { Icon: FaApple, color: "#A2AAAD", duration: 2.7 },
    { Icon: IoLogoAndroid, color: "#3DDC84", duration: 2.9 },
    { Icon: FaWindows, color: "#00ADEF", duration: 3.1 },
  ];

  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className="border-b border-neutral-800 pb-24"
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      {/* Section: Languages */}
      <h2 className="text-2xl text-center mb-4">Languages & Databases</h2>
      <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
        {languages.map(({ Icon, color, duration }, index) => (
          <TechnologyCard
            Icon={Icon}
            color={color}
            duration={duration}
            key={`language-${index}`}
          />
        ))}
      </div>

      {/* Section: Tools & Platforms */}
      <h2 className="text-2xl text-center mb-4">Tools & Platforms</h2>
      <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
        {tools.map(({ Icon, color, duration }, index) => (
          <TechnologyCard
            Icon={Icon}
            color={color}
            duration={duration}
            key={`tool-${index}`}
          />
        ))}
      </div>

      {/* Section: Operating Systems */}
      <h2 className="text-2xl text-center mb-4">Operating Systems</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {operatingSystems.map(({ Icon, color, duration }, index) => (
          <TechnologyCard
            Icon={Icon}
            color={color}
            duration={duration}
            key={`os-${index}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;
