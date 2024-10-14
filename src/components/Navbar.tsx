import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">
            YourPlatform
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <NavItem to="/" label="Home" currentPath={location.pathname} />
            <NavItem
              to="/about"
              label="About"
              currentPath={location.pathname}
            />
            <NavItem
              to="/sign-in"
              label="Sign In"
              currentPath={location.pathname}
            />
            <NavItem
              to="/sign-up"
              label="Sign Up"
              currentPath={location.pathname}
            />
            <NavItem
              to="/profile"
              label="Profile"
              currentPath={location.pathname}
            />
            <NavItem
              to="/contact"
              label="Contact Us"
              currentPath={location.pathname}
            />
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <ul className="flex flex-col space-y-2">
            <NavItem to="/" label="Home" currentPath={location.pathname} />
            <NavItem
              to="/about"
              label="About"
              currentPath={location.pathname}
            />
            <NavItem
              to="/signin"
              label="Sign In"
              currentPath={location.pathname}
            />
            <NavItem
              to="/signup"
              label="Sign Up"
              currentPath={location.pathname}
            />
            <NavItem
              to="/profile"
              label="Profile"
              currentPath={location.pathname}
            />
            <NavItem
              to="/contact"
              label="Contact Us"
              currentPath={location.pathname}
            />
          </ul>
        </div>
      )}
    </nav>
  );
};

interface NavItemProps {
  to: string;
  label: string;
  currentPath: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, currentPath }) => {
  const isActive = to === currentPath;

  return (
    <li>
      <Link
        to={to}
        className={`${
          isActive ? "bg-gray-900" : ""
        } block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700`}
      >
        {label}
      </Link>
    </li>
  );
};

export default Navbar;
