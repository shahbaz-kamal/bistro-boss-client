import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import UseAuth from "../../Hooks/UseAuth";

const Navbar = () => {
  const { user, logOutUser } = UseAuth();
  const handleLogOut = () => {
    logOutUser().then(() => {
      console.log("Log Out SuccessFull");
    });
  };
  const links = (
    <>
      {/*  isActive
            ? "font-extrabold text-lg md:text-xl text-[#EEFF25]"
            : "font-extrabold text-lg md:text-xl text-white"; */}
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "font-extrabold text-lg md:text-xl text-[#EEFF25]"
            : "font-extrabold text-lg md:text-xl text-white"
        }
      >
        <li className="">Home</li>
      </NavLink>
      <NavLink
        to={"/contact-us"}
        className={({ isActive }) =>
          isActive
            ? "font-extrabold text-lg md:text-xl text-[#EEFF25]"
            : "font-extrabold text-lg md:text-xl text-white"
        }
      >
        <li className="">Contact Us</li>
      </NavLink>
      <NavLink
        to={"/dashboard"}
        className={({ isActive }) =>
          isActive
            ? "font-extrabold text-lg md:text-xl text-[#EEFF25]"
            : "font-extrabold text-lg md:text-xl text-white"
        }
      >
        <li className="">Dashboard</li>
      </NavLink>
      <NavLink
        to={"/our-menu"}
        className={({ isActive }) =>
          isActive
            ? "font-extrabold text-lg md:text-xl text-[#EEFF25]"
            : "font-extrabold text-lg md:text-xl text-white"
        }
      >
        <li className="">Our Menu</li>
      </NavLink>

      <NavLink
        to={"/order"}
        className={({ isActive }) =>
          isActive
            ? "font-extrabold text-lg md:text-xl text-[#EEFF25]"
            : "font-extrabold text-lg md:text-xl text-white"
        }
      >
        <li className="">Order</li>
      </NavLink>

      {user && user?.email ? (
        <> <li onClick={handleLogOut} className="font-extrabold text-lg md:text-xl text-white">
        Log Out
      </li>
          {/* <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-extrabold text-lg md:text-xl text-[#EEFF25]"
                : "font-extrabold text-lg md:text-xl text-white"
            }
          >
           
          </NavLink> */}
        </>
      ) : (
        <>
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive
                ? "font-extrabold text-lg md:text-xl text-[#EEFF25]"
                : "font-extrabold text-lg md:text-xl text-white"
            }
          >
            <li className="">Login</li>
          </NavLink>
        </>
      )}
      <NavLink
        to={"/register"}
        className={({ isActive }) =>
          isActive
            ? "font-extrabold text-lg md:text-xl text-[#EEFF25]"
            : "font-extrabold text-lg md:text-xl text-white"
        }
      >
        <li className="">Register</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-color-nav  px-3 md:px-12 fixed z-10 py-6 w-full">
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
            className="gap-2 menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="font-cinzel text-white">
          <h1 className="font-extrabold text-2xl md:text-[32px]">
            BISTRO BOSS
          </h1>
          <p className="text-lg md:text-2xl font-bold tracking-widest">
            Restaurant
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">bbutton</a>
      </div>
    </div>
  );
};

export default Navbar;
