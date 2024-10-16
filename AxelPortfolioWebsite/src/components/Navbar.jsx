import React, { useState } from 'react';
import logo from '../assets/AxelMoraLogo.png';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdQrCode } from 'react-icons/md'; // Import Icons
import { CONTACT } from '../constants'; // Import CONTACT
import { QRCodeCanvas } from 'qrcode.react'; // Import QR Code Library

const Navbar = () => {
  const [showQR, setShowQR] = useState(false); // Manage QR modal visibility

  const toggleQRModal = () => setShowQR(!showQR);

  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-30" src={logo} alt="logo" />
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          {/* Email Icon */}
          <a href={`mailto:${CONTACT.email}`} className="hover:text-red-500">
            <MdEmail />
          </a>

          {/* LinkedIn Icon */}
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin />
          </a>

          {/* GitHub Icon */}
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <FaGithub />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/axelsmora16/profilecard/?igsh=MzRlODBiNWFlZA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>

          {/* Share Button */}
          <button onClick={toggleQRModal} className="hover:text-green-500">
            <MdQrCode />
          </button>
        </div>
      </nav>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-bold mb-4">Scan to Share My Website</h3>
            <QRCodeCanvas value={window.location.href} size={200} />
            <button
              onClick={toggleQRModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
