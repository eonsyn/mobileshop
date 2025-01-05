import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing React Icons for the hamburger
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle the menu toggle

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white text-black py-4 shadow-md border-b-2 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-2xl font-bold">Narayan Mobile Shop</h1>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Menu Items (Desktop) */}
        <ul className="hidden md:flex space-x-4 text-gray-500">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold hover:text-blue-800"
                  : "hover:text-gray-800"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold hover:text-blue-800"
                  : "hover:text-gray-800"
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold hover:text-blue-800"
                  : "hover:text-gray-800"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold hover:text-blue-800"
                  : "hover:text-gray-800"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold hover:text-blue-800"
                  : "hover:text-gray-800"
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold hover:text-blue-800"
                  : "hover:text-gray-800"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>

        {/* Dropdown Menu for Mobile */}
        <ul
          onClick={toggleMenu}
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-16 left-0 w-full bg-white shadow-md text-black p-4 space-y-4`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold hover:text-blue-800"
                  : "hover:text-gray-800"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold hover:text-blue-800"
                  : "hover:text-gray-800"
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold hover:text-blue-800"
                  : "hover:text-gray-800"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold hover:text-blue-800"
                  : "hover:text-gray-800"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold hover:text-blue-800"
                  : "hover:text-gray-800"
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold hover:text-blue-800"
                  : "hover:text-gray-800"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
