import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <section className="w-full mx-auto">
        <Navbar></Navbar>
      </section>
      <section>
        <Outlet></Outlet>
      </section>
      <section className="w-full mx-auto">
        <Footer></Footer>
      </section>
    </div>
  );
};

export default MainLayout;
