import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const { user, logIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signHandler = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
     setError("Username and Password not valid"); 
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ac9aedf1-a687-4c5d-965c-2fc3eac84aea/82215b4e-5428-4a9d-8c4b-383b872250d4/BD-en-20221206-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
        <div className="w-full h-screen absolute top-0 bg-black/60"></div>
        <div className="w-full  absolute z-50 top-[12%] text-white">
          <div className="w-[450px] h-[600px]  bg-black/75 mx-auto p-16  z-50">
            <h1 className=" text-4xl font-bold mb-4">Sign In</h1>
            <h1 className="text-red-500">{
                error? error : ""  
              }</h1>
            <form className="flex flex-col " onSubmit={signHandler}>
              <label htmlFor="email"></label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                id="email"
                placeholder="Email"
              />
              <label htmlFor="password"></label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 bg-gray-700 my-2 rounded"
                type="password"
                id="password"
                placeholder="Password"
              />
              <button className="bg-red-600 py-2 text-lg font-bold rounded my-6">
                Sign In
              </button>
              <div className="flex justify-between text-gray-500 text-sm">
                <div>
                  <input type="checkbox" name="rememberme" id="rememberme" />
                  <label htmlFor="rememberme"> Remember Me</label>
                </div>
                <h1>Need Help?</h1>
              </div>
            </form>
            <p className="text-gray-500 mt-7">
              New to Netflix?{" "}
              <Link to="/signup">
                <span className="text-white"> Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
