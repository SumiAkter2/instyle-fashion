import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-slate-300 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
                d="M4 6NavLink6M4 12h8m-8 6NavLink6"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/shop">SHOP</NavLink>
            </li>

            <li>
              <NavLink to="/order">ORDER</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img
            style={{ width: "100px" }}
            src="favicon.ico"
            alt="fashion-logo"
          />

          <NavLink to="/" className="text-2xl font-sans font-bold">
            Instyle Fashion
          </NavLink>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0  font-bold">
          <li>
            <NavLink to="/shop">SHOP</NavLink>
          </li>

          <li>
            <NavLink to="/order">ORDER</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
