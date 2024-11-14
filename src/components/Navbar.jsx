import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links=<>
     <li>
       <NavLink>Home</NavLink>
      </li>
      <li>
         <NavLink>About</NavLink>
      </li>
      <li>
         <NavLink>Career</NavLink>
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
        <a className="btn btn-ghost text-xl"></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 bg-white">
           {links}
        </ul>
      </div>
      <div className="navbar-end text-xl space-x-2 cursor-pointer">
        <Link className="text-4xl"><FaUserCircle /></Link>
        <a className="bg-[#403F3F] px-6 py-2 text-white font-medium ">Login</a>
      </div>
    </div>
  );
};

export default Navbar;