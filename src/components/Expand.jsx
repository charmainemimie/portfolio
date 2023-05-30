import { useState } from "react";
import { Link} from 'react-router-dom'

const Expand = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative">
      <button
        className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
        onClick={toggleMenu}
      >
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
          />
        </svg>
      </button>
      {isExpanded && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
          
          <Link
            to="/"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            About Me
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Services
          </Link>
          
        </div>
      )}
    </div>
  );
};

export default Expand;
