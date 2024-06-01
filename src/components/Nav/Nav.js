import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import AuthContext from "../contexts/AuthContext";
import { FaUser } from "react-icons/fa";

function Nav() {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const userNickname = user?.nickname || "Guest";
  const menuRef = useRef(null);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleShare = () => {
    const subject = encodeURIComponent("Check out No Routine!");
    const body = encodeURIComponent(
      "Yo! You got to come to No Routine! www.noroutinenyc.com"
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="py-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
        <Link to="/" className="text-2xl font-bold">
          No Routine
        </Link>
        <div className="hidden lg:flex space-x-6">
          <Link to="/events" className="text-base">
            Events
          </Link>
          <Link to="/about" className="text-base">
            About
          </Link>
          <div className="relative">
            <button
              className="text-base flex items-center"
              onClick={toggleMenu}
            >
              <FaUser className="mr-2" /> {userNickname}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isOpen && (
              <ul
                ref={menuRef}
                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50"
              >
                <Link to="/profile">
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-red-500 hover:text-white w-full">
                    Profile
                  </li>
                </Link>
                <Link to="/" onClick={handleSignOut}>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-red-500 hover:text-white w-full">
                    Sign Out
                  </li>
                </Link>
              </ul>
            )}
          </div>
        </div>
        <div className="lg:hidden">
          <button className="text-black" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          ref={menuRef}
          className="lg:hidden absolute right-0 top-12 bg-white shadow-lg rounded-md z-50 w-1/3"
        >
          <nav className="flex flex-col items-start space-y-2 mt-2 p-4 w-full">
            <Link
              to="/events"
              className="text-base text-gray-700 hover:bg-red-500 hover:text-white px-4 py-2 rounded-md w-full"
            >
              Events
            </Link>
            <Link
              to="/about"
              className="text-base text-gray-700 hover:bg-red-500 hover:text-white px-4 py-2 rounded-md w-full"
            >
              About
            </Link>
            <Link
              to="/profile"
              className="text-base text-gray-700 hover:bg-red-500 hover:text-white px-4 py-2 rounded-md w-full"
            >
              Profile
            </Link>
            <div className="flex flex-col w-full gap-2">
              <button
                onClick={handleShare}
                className="bg-green-500 text-white hover:bg-green-400 px-2 py-2 rounded-md w-full"
              >
                Share
              </button>
              <button
                onClick={handleSignOut}
                className="bg-red-500 text-white hover:bg-red-700 px-4 py-2 rounded-md w-full"
              >
                Sign Out
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Nav;
