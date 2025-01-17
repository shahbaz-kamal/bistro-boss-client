import React from "react";
import { BsFillCalendar2DayFill } from "react-icons/bs";
import { CiMenuBurger, CiShop } from "react-icons/ci";
import {
  FaCalendar,
  FaCartArrowDown,
  FaHamburger,
  FaHome,
  FaMailBulk,
  FaWallet,
} from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const userLinks = (
    <>
      <NavLink
        to={"/dashboard/user-home"}
        className={({ isActive }) =>
          isActive ? "font-bold  text-white " : "font-medium  text-color-dark1"
        }
      >
        <li className="font-cinzel text-sm md:text-base flex gap-3 items-center">
          <FaHome></FaHome> User Home
        </li>
      </NavLink>
      <NavLink
        to={"/dashboard/reservation"}
        className={({ isActive }) =>
          isActive ? "font-bold  text-white " : "font-medium  text-color-dark1"
        }
      >
        <li className="font-cinzel text-sm md:text-base flex gap-3 items-center">
          <FaCalendar></FaCalendar> Reservation
        </li>
      </NavLink>
      <NavLink
        to={"/dashboard/payment-history"}
        className={({ isActive }) =>
          isActive ? "font-bold  text-white " : "font-medium  text-color-dark1"
        }
      >
        <li className="font-cinzel text-sm md:text-base flex gap-3 items-center">
          <FaWallet></FaWallet> Payment History
        </li>
      </NavLink>
      <NavLink
        to={"/dashboard/my-cart"}
        className={({ isActive }) =>
          isActive ? "font-bold  text-white " : "font-medium  text-color-dark1"
        }
      >
        <li className="font-cinzel text-sm md:text-base flex gap-3 items-center">
          <FaCartArrowDown></FaCartArrowDown> My cart
        </li>
      </NavLink>
      <NavLink
        to={"/dashboard/add-review"}
        className={({ isActive }) =>
          isActive ? "font-bold  text-white " : "font-medium  text-color-dark1"
        }
      >
        <li className="font-cinzel text-sm md:text-base flex gap-3 items-center">
          <MdOutlineReviews /> Add Review
        </li>
      </NavLink>
      <NavLink
        to={"/dashboard/my-booking"}
        className={({ isActive }) =>
          isActive ? "font-bold  text-white " : "font-medium  text-color-dark1"
        }
      >
        <li className="font-cinzel text-sm md:text-base flex gap-3 items-center">
          <BsFillCalendar2DayFill /> My Booking
        </li>
      </NavLink>
    </>
  );

  const defaultLinks = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "font-bold  text-white " : "font-medium  text-color-dark1"
        }
      >
        <li className="font-cinzel text-sm md:text-base flex gap-3 items-center">
          <FaHome></FaHome> Home
        </li>
      </NavLink>
      <NavLink
        to={"/order"}
        className={({ isActive }) =>
          isActive ? "font-bold  text-white " : "font-medium  text-color-dark1"
        }
      >
        <li className="font-cinzel text-sm md:text-base flex gap-3 items-center">
          <CiMenuBurger /> Menu
        </li>
      </NavLink>
      <NavLink
        to={"/menu"}
        className={({ isActive }) =>
          isActive ? "font-bold  text-white " : "font-medium  text-color-dark1"
        }
      >
        <li className="font-cinzel text-sm md:text-base flex gap-3 items-center">
          <CiShop /> Shop
        </li>
      </NavLink>
      <NavLink
        to={"/menu"}
        className={({ isActive }) =>
          isActive ? "font-bold  text-white " : "font-medium  text-color-dark1"
        }
      >
        <li className="font-cinzel text-sm md:text-base flex gap-3 items-center">
          <FaMailBulk></FaMailBulk> Contact
        </li>
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="flex">
        {/* Sidebar */}
        <div className="min-h-screen w-72 bg-color-d1 px-4 pt-12">
          <div className="mb-12">
            <h3 className="text-color-dark1 font-extrabold text-xl md:text-2xl font-cinzel">
              BISTRO BOSS
            </h3>
            <p className="font-bold text-sm md:text-base tracking-[.38em] w-full">
              Restaurant
            </p>
          </div>
          {/* user icons */}
          <div>
            <ul className="flex flex-col gap-6">{userLinks}</ul>
          </div>
          <hr className="my-6 border-t border-t-white" />
          <div>
            <ul className="flex flex-col gap-6">{defaultLinks}</ul>
          </div>
        </div>
        {/* content */}
        <div className="flex-1 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
