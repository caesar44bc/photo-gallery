import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineUpload } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSignIn = () => {
    setUser(true);
  };

  const handleSignUp = () => {
    setUser(true);
  };

  return (
    <nav className="flex justify-between items-center font-semibold h-16 mx-4 sm:mx-8 md:mx-16 lg:mx-32 backdrop-blur-lg border-b">
      <div className="flex items-center justify-start gap-3 w-40 md:w-48">
        <button
          onClick={toggleNavbar}
          aria-label="Menu"
          className="flex items-center gap-3 md:hidden"
        >
          <RxHamburgerMenu size={20} />
          <span className="hidden md:flex">Menu</span>
        </button>
        <button aria-label="Search" className="flex items-center gap-3">
          <CiSearch size={20} />
          <span className="hidden md:flex">Search</span>
        </button>
      </div>
      <h1 className="text-lg uppercase tracking-widest">
        <Link to="/">Momento</Link>
      </h1>
      {user ? (
        <>
          <div className="hidden md:flex gap-4 w-40 md:w-48 text-sm md:text-base items-center justify-end">
            <button>Create</button>
            <Link to="/profile">
              <button className="px-4 py-2 bg-gradient-to-t from-gray-800 hover:from-gray-800 to-gray-600 hover:to-gray-500 text-white rounded-full">
                Profile
              </button>
            </Link>
          </div>
          <div className="flex md:hidden gap-4 w-40 md:w-48 text-sm md:text-base items-center justify-end">
            <button>
              <AiOutlineUpload size={22} />
            </button>
            <Link to="/profile">
              <button className="h-6 w-6 bg-gradient-to-t from-gray-800 hover:from-gray-800 to-gray-600 hover:to-gray-500 text-white rounded-full"></button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="hidden md:flex gap-4 w-40 md:w-48 text-sm md:text-base items-center justify-end">
            <Link to="/sign-in">
              <button onClick={handleSignIn}>Sign in</button>
            </Link>
            <Link to="/sign-up">
              <button
                onClick={handleSignUp}
                className="px-4 py-2 bg-gradient-to-t from-gray-800 hover:from-gray-800 to-gray-600 hover:to-gray-500 text-white rounded-full"
              >
                Get started
              </button>
            </Link>
          </div>
          <div className="flex md:hidden gap-4 w-40 md:w-48 text-sm md:text-base items-center justify-end">
            <Link to="/sign-up">
              <button
                onClick={handleSignUp}
                className="px-4 py-2 bg-gradient-to-t from-gray-800 hover:from-gray-800 to-gray-600 hover:to-gray-500 text-white rounded-full"
              >
                Get started
              </button>
            </Link>
          </div>
        </>
      )}
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
