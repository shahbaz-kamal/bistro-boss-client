import React, { useEffect, useState } from "react";
import Headline from "./Shared/Headline";
import MenueItem from "./Shared/MenueItem";

const PopularMenue = () => {
  const [menue, setMenue] = useState([]);
  useEffect(() => {
    fetch("menue.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenue = data.filter((item) => item.category === "popular");
        setMenue(popularMenue);
      });
  }, []);
  console.log(menue);
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
          {menue.map((item) => (
            <MenueItem key={item._id} item={item}></MenueItem>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularMenue;
