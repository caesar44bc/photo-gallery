import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineUpload } from "react-icons/ai";

const Navbar = () => {
  const [user, setUser] = useState(true);

  const handleLogin = () => {
    setUser(!user);
  };

  return (
    <nav className="flex justify-between items-center font-semibold h-16 mx-4 sm:mx-8 md:mx-16 lg:mx-32 backdrop-blur-lg border-b">
      <button aria-label="Menu" className="w-40 md:w-48">
        <RxHamburgerMenu size={20} />
      </button>
      <h1 className="text-lg uppercase tracking-widest">
        <Link to="/">Momento</Link>
      </h1>
      {user ? (
        <>
          <div className="hidden md:flex gap-4 w-40 md:w-48 text-sm md:text-base items-center justify-end">
            <button>Upload</button>
            <button className="px-4 py-2 bg-gradient-to-t from-gray-800 hover:from-gray-800 to-gray-600 hover:to-gray-500 text-white rounded-full">
              Profile
            </button>
          </div>
          <div className="flex md:hidden gap-4 w-40 md:w-48 text-sm md:text-base items-center justify-end">
            <button>
              <AiOutlineUpload size={22} />
            </button>
            <button className="h-6 w-6 bg-gradient-to-t from-gray-800 hover:from-gray-800 to-gray-600 hover:to-gray-500 text-white rounded-full"></button>
          </div>
        </>
      ) : (
        <>
          <div className="hidden md:flex gap-4 w-40 md:w-48 text-sm md:text-base items-center justify-end">
            <button onClick={handleLogin}>Sign in</button>
            <button className="px-4 py-2 bg-gradient-to-t from-gray-800 hover:from-gray-800 to-gray-600 hover:to-gray-500 text-white rounded-full">
              Get started
            </button>
          </div>
          <div className="flex md:hidden gap-4 w-40 md:w-48 text-sm md:text-base items-center justify-end">
            <button
              onClick={handleLogin}
              className="px-4 py-2 bg-gradient-to-t from-gray-800 hover:from-gray-800 to-gray-600 hover:to-gray-500 text-white rounded-full"
            >
              Get started
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
