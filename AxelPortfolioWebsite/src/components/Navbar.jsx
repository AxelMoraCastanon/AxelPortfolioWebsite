import logo from "../assets/AxelMoraLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { CONTACT } from "../constants"; // Correct Import

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-30" src={logo} alt="logo" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn Icon with Dynamic Redirect */}
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin />
        </a>

        {/* GitHub Icon with Dynamic Redirect */}
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-500"
        >
          <FaGithub />
        </a>

        {/* Instagram Icon (optional placeholder) */}
        <a
          href="https://www.instagram.com/axelsmora16/profilecard/?igsh=MzRlODBiNWFlZA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
