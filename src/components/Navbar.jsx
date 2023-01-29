import { async } from "@firebase/util";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate(); 
  const logoutHandler = async (e)=>{
    e.preventDefault(); 
    try {
      await logOut(); 
      navigate("/"); 
    } catch (error) {
      
    }
  }

  return (
    <nav className="text-white z-50 flex justify-between p-4 absolute w-full">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold">NETFLIX</h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="pr-4">Account</button>
          </Link>
            <button className="bg-red-600 px-6 py-2 rounded-lg cursor-pointer" onClick={logoutHandler}>
              LogOut
            </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded-lg cursor-pointer ">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
