import React from "react";
import Headline from "./Shared/Headline";
import featuredImage from "../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item py-8 md:py-28 px-5 md:px-40 bg-fixed">
      <header>
        <div className="my-8 md:my-16">
          <p className="italic text-center text-color-d9 text-base md:text-xl mb-3 md:mb-4">
            ---Check it out---
          </p>

          <div className="text-center">
            <div className=" border-y-4 border-y-color-dark6 inline-block py-3 md:py-4 px-5 md:px-[30px]">
              <h3 className=" text-white text-3xl md:text-[40px] ">
                FROM OUR MENU
              </h3>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="max-w-[648px]">
          <img
            className="w-full h-full object-cover"
            src={featuredImage}
            alt=""
          />
        </div>
        <div className="space-y-1 text-white">
          <p className="text-xl md:text-2xl">MARCH 20,2023</p>
          <p className="text-xl md:text-2xl">WHERE CAN I GET SOME?</p>
          <p className="text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="transition duration-300 ease-in-out font-semibold text-lg md:text-xl text-white mt-2 border-b-[3px] border-b-white rounded-lg py-4  px-5 md:px-7 hover:border-b-color-d9 hover:text-color-d9">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
