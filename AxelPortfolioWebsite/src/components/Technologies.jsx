import React from 'react';
import { motion } from "framer-motion";

// Import Icons
import { BsFiletypeSql, BsFiletypeHtml } from "react-icons/bs";
import { PiFileCppBold, PiFileCBold } from "react-icons/pi";
import { SiPhp, SiMysql, SiPostman } from "react-icons/si";
import { RiJavaLine, RiJavascriptFill, RiReactjsLine } from "react-icons/ri";
import { TbBrandKotlin, TbFileTypeXml } from "react-icons/tb";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaAws, FaGitSquare, FaGithub, FaLinux, FaUbuntu, FaApple, FaWindows } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io5";

// Technology Card Component
const TechnologyCardComponent = ({ Icon, color, duration }) => (
  <motion.div
    initial={{ y: -10 }}
    animate={{ y: [10, -10] }}
    transition={{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }}
    className="rounded-2xl border-4 border-neutral-800 p-4"
  >
    <Icon className="text-7xl" style={{ color }} />
  </motion.div>
);

const TechnologyCard = React.memo(TechnologyCardComponent);

// Technologies Component
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

  const tools = [
    { Icon: VscVscodeInsiders, color: "#007ACC", duration: 2.4 },
    { Icon: FaAws, color: "#FF9900", duration: 2.6 },
    { Icon: SiPostman, color: "#FF6C37", duration: 2.8 },
    { Icon: FaGitSquare, color: "#F05032", duration: 3.0 },
    { Icon: FaGithub, color: "#A8B9CC", duration: 3.2 },
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

      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Render Languages and Databases */}
        {languages.map(({ Icon, color, duration }, index) => (
          <TechnologyCard
            Icon={Icon}
            color={color}
            duration={duration}
            key={`language-${index}`}
          />
        ))}

        {/* Render Tools and Platforms */}
        {tools.map(({ Icon, color, duration }, index) => (
          <TechnologyCard
            Icon={Icon}
            color={color}
            duration={duration}
            key={`tool-${index}`}
          />
        ))}

        {/* Render Operating Systems */}
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
