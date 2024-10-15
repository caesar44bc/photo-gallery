import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineUpload } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { account } from "../appwrite";

const Navbar = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await account.get();
      if (user) {
        setUser(true);
      }
    };

    fetchUser();
  }, []);

  return (
    <nav className="flex justify-between items-center font-semibold h-16 mx-4 sm:mx-8 md:mx-16 lg:mx-32 backdrop-blur-lg border-b">
      <div className="flex items-center justify-start gap-3 w-40 md:w-48">
        <button aria-label="Menu" className="flex items-center gap-3">
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
            <Link to="sign-in">
              <button>Sign in</button>
            </Link>
            <Link to="sign-up">
              <button className="px-4 py-2 bg-gradient-to-t from-gray-800 hover:from-gray-800 to-gray-600 hover:to-gray-500 text-white rounded-full">
                Get started
              </button>
            </Link>
          </div>
          <div className="flex md:hidden gap-4 w-40 md:w-48 text-sm md:text-base items-center justify-end">
            <Link to="sign-up">
              <button className="px-4 py-2 bg-gradient-to-t from-gray-800 hover:from-gray-800 to-gray-600 hover:to-gray-500 text-white rounded-full">
                Get started
              </button>
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
