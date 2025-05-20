import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  useEffect(() => {
    // Check if the user is already logged in by looking for a token in localStorage
  }, []);
  return (
    <nav className="bg-gray-900 p-4 fixed w-full top-0 left-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Anonymous App</div>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link to="/" className="hover:text-red-500 transition duration-300">
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard"
              className="hover:text-red-500 transition duration-300"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-red-500 transition duration-300"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="api/user/logout"
              className="hover:text-red-500 transition duration-300"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
