import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const {user,handleSignOut} = useContext(AuthContext)
    const links=<>
     <li>
       <NavLink to='/'>Home</NavLink>
      </li>
      <li>
         <NavLink to='/about'>About</NavLink>
      </li>
      <li>
         <NavLink to="/career">Career</NavLink>
      </li>
    </>
       
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">{<span>{user?.email}</span>}</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 bg-white">
           {links}
        </ul>
      </div>
      <div className="navbar-end text-xl space-x-2 cursor-pointer">
          {
            user? <><img className="w-10 h-10 rounded-full" src={user?.photoURL}/><span className="capitalize">{user?.displayName}</span> <Link onClick={handleSignOut} className="bg-[#403F3F] px-6 py-2 text-white font-medium">Sign Out</Link></> : <Link to='/auth/login' className="flex justify-center items-center gap-3"> <FaUserCircle className="text-4xl " /><span className="bg-[#403F3F] px-6 py-2 text-white font-medium ">Login</span></Link>
          }
      </div>
    </div>
  );
};

export default Navbar;
