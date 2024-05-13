import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Images/aastha-logo.png";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-gray-100 shadow sticky top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-16 lg:h-20" alt="Logo" />
            <h2 className="font-mono text-lg lg:text-2xl font-bold text-gray-800 ml-3">
              Aastha Insurance & Investments
            </h2>
          </Link>
          <ul
            className={`lg:flex space-x-8 ml-8 ${
              isDropdownOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <NavLink
                to="/"
                exact
                activeClassName="text-orange-700"
                className="text-gray-700 hover:text-orange-700"
                onClick={closeDropdown}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="text-orange-700"
                className="text-gray-700 hover:text-orange-700"
                onClick={closeDropdown}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="text-orange-700"
                className="text-gray-700 hover:text-orange-700"
                onClick={closeDropdown}
              >
                Contact
              </NavLink>
            </li>
            <li
              className="relative"
              onMouseEnter={toggleDropdown}
              onMouseLeave={closeDropdown}
            >
              <NavLink
                to="/insurance"
                className="text-gray-700 hover:text-orange-700 cursor-pointer"
                onClick={closeDropdown}
              >
                Products
              </NavLink>
              {isDropdownOpen && (
                <ul className="absolute bg-white border border-gray-200 py-2 mt-2 w-40 rounded-lg shadow-lg">
                  <li>
                    <NavLink
                      to="/products/plans"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      activeClassName="text-orange-700"
                    >
                      Plans
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/mutualfunds"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      activeClassName="text-orange-700"
                    >
                      Mutual Funds
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/all-calculators"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      activeClassName="text-orange-700"
                    >
                      Calculators
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div>
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLSePLmiQK_Mp17y8rSkbeH0YopduUKPbJ6ByvkvMzVT-z-LfvQ/viewform?embedded=true"
            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
          >
            Buy Policy
          </Link>
        </div>
      </nav>
    </header>
  );
}
