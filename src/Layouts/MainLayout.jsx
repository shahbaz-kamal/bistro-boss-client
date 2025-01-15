import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      <section className="w-full mx-auto">
        {noHeaderFooter || <Navbar></Navbar>}
      </section>
      <section>
        <Outlet></Outlet>
      </section>
      <section className="w-full mx-auto">
        {noHeaderFooter || <Footer></Footer>}
      </section>
    </div>
  );
};

export default MainLayout;
