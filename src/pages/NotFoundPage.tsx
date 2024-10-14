import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">
        Oops! This page doesn't exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;