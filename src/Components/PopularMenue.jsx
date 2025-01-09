import React, { useEffect, useState } from "react";
import Headline from "./Shared/Headline";
import MenueItem from "./Shared/MenueItem";
import useMenu from "../Hooks/useMenu";
import Button from "./Shared/Button";

const PopularMenue = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="max-w-[1320px] mx-auto px-2 md:px-0 mb-10 md:mb-12">
      <header>
        <Headline
          description={"Check it out"}
          title={"FROM OUR MENUE"}
        ></Headline>
      </header>
      <section className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  ">
          {popular.map((item) => (
            <MenueItem key={item._id} item={item}></MenueItem>
          ))}
        </div>
      </section>
      <div>
        <Button btnText="view full menu "></Button>
      </div>
    </div>
  );
};

export default PopularMenue;
