import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navlink = ["About", "Skills", "Education", "Projects", "Contact"];

  return (
    <div className="navbar bg-gray-900 container m-auto">
      <div className="navbar-start">
        {/* hamburger menu */}
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlink.map((link, index) => (
              <li key={index}>
                <Link to={`/${link.toLowerCase()}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* hamburger menu */}

        {/* logo */}
        <Link to={"/"} className="text-xl text-white font-bold">
          Syed <span className="text-red-400">Shahriar</span>
        </Link>
        {/* logo */}
      </div>

      {/* Navbar End */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            navlink.map((link,index)=> (
              <li key={index}>
                <NavLink className='text-red-400 text-xl hover:font-bold' to={`/${link.toLowerCase()}`}>
                  {link}
                </NavLink>
              </li>
            ))
          }
          {/* {navlink.map((link, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-2 rounded-lg border-primary text-primary hover:bg-primary hover:text-white"
                    : "hover:bg-primary hover:text-white"
                }
                to={`/${link.toLowerCase()}`}
              >
                {link}
              </NavLink>
            </li>
          ))} */}
        </ul>
      </div>
      {/* Navbar End */}
    </div>
  );
};

export default Navbar;
