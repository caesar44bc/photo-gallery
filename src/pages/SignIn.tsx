import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      email: email,
      password: password,
    });
    navigate("/");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-teal-500">Welcome back.</h1>
        <p className="text-sm mt-2">
          Don't have an account?{" "}
          <Link to="/sign-up" className="font-semibold text-teal-500">
            Sign Up
          </Link>
        </p>
      </div>
      <div>
        <form onSubmit={handleSignIn} className="flex flex-col w-96 gap-2">
          <label htmlFor="email" className="font-semibold text-sm">
            Email*
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 text-sm rounded-md outline-none hover:border-teal-500 focus:border-teal-500"
            required
          />
          <label htmlFor="password" className="font-semibold text-sm mt-2">
            Password*
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 text-sm rounded-md outline-none hover:border-teal-500 focus:border-teal-500"
            required
          />
          <button className="px-4 py-2 border border-teal-500 bg-teal-500 hover:bg-teal-600 transition duration-200 rounded-md text-white text-sm mt-2">
            Sign In
          </button>
        </form>
        <div className="flex w-full items-center justify-center py-5">
          <hr className="flex-grow" />
          <p className="px-3 text-sm text-gray-600">OR</p>
          <hr className="flex-grow" />
        </div>
        <button className="px-4 py-2 border hover:bg-gray-100 transition duration-200 rounded-md text-sm w-full">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
