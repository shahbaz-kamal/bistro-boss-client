import React from "react";
import Navbar from "../Components/Shared/Navbar";
import Banner from "../Components/Banner";
import OrderOnline from "../Components/OrderOnline";
import PopularMenue from "../Components/PopularMenue";
import Featured from "../Components/Featured";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <section>
        <OrderOnline></OrderOnline>
      </section>
      <section>
        <PopularMenue></PopularMenue>
      </section>
      <section className="max-w-[1920px] mx-auto px-2 md:px-0">
        <Featured></Featured>
      </section>
      <section className="max-w-[1320px] mx-auto">
        <Testimonials></Testimonials>
      </section>
    </div>
  );
};

export default Home;
