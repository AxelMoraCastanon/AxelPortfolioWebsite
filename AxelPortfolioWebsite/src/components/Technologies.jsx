import React from 'react';

// Languages and Databases
import { BsFiletypeSql, BsFiletypeHtml } from "react-icons/bs";
import { PiFileCppBold, PiFileCBold } from "react-icons/pi";
import { SiPhp, SiMysql } from "react-icons/si";
import { RiJavaLine, RiJavascriptFill, RiReactjsLine } from "react-icons/ri";
import { TbBrandKotlin, TbFileTypeXml } from "react-icons/tb";

// Tools and Platforms
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaAws, FaGitSquare, FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

// Operating Systems
import { FaLinux, FaUbuntu, FaApple, FaWindows } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";

// Color-coded TechnologyCard component
const TechnologyCardComponent = ({ Icon, color }) => (
  <div className="rounded-2xl border-4 border-neutral-800 p-4">
    <Icon className="text-7xl" style={{ color }} />
  </div>
);

const TechnologyCard = React.memo(TechnologyCardComponent);

const Technologies = () => {
  const languages = [
    { Icon: BsFiletypeSql, color: "#CC2927" }, // SQL (Red)
    { Icon: SiMysql, color: "#00758F" }, // MySQL (Teal)
    { Icon: PiFileCppBold, color: "#00599C" }, // C++ (Blue)
    { Icon: PiFileCBold, color: "#A8B9CC" }, // C (Light Gray)
    { Icon: SiPhp, color: "#777BB4" }, // PHP (Purple)
    { Icon: RiJavaLine, color: "#5382A1" }, // Java (Blue-Gray)
    { Icon: TbBrandKotlin, color: "#7F52FF" }, // Kotlin (Violet)
    { Icon: TbFileTypeXml, color: "#FF6600" }, // XML (Orange)
    { Icon: BsFiletypeHtml, color: "#E34F26" }, // HTML (Orange-Red)
    { Icon: RiJavascriptFill, color: "#F7DF1E" }, // JavaScript (Yellow)
    { Icon: RiReactjsLine, color: "#61DAFB" } // React (Cyan)
  ];

  const tools = [
    { Icon: VscVscodeInsiders, color: "#007ACC" }, // VS Code (Blue)
    { Icon: FaAws, color: "#FF9900" }, // AWS (Orange)
    { Icon: SiPostman, color: "#FF6C37" }, // Postman (Orange-Red)
    { Icon: FaGitSquare, color: "#F05032" }, // Git (Red-Orange)
    { Icon: FaGithub, color: "#A8B9CC" } // GitHub (Light Gray)
  ];

  const operatingSystems = [
    { Icon: FaLinux, color: "#FCC624" }, // Linux (Yellow)
    { Icon: FaUbuntu, color: "#E95420" }, // Ubuntu (Orange)
    { Icon: FaApple, color: "#A2AAAD" }, // Apple (Gray)
    { Icon: IoLogoAndroid, color: "#3DDC84" }, // Android (Green)
    { Icon: FaWindows, color: "#00ADEF" } // Windows (Blue)
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Render Languages and Databases */}
        {languages.map(({ Icon, color }, index) => (
          <TechnologyCard Icon={Icon} color={color} key={`language-${index}`} />
        ))}

        {/* Render Tools and Platforms */}
        {tools.map(({ Icon, color }, index) => (
          <TechnologyCard Icon={Icon} color={color} key={`tool-${index}`} />
        ))}

        {/* Render Operating Systems */}
        {operatingSystems.map(({ Icon, color }, index) => (
          <TechnologyCard Icon={Icon} color={color} key={`os-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
