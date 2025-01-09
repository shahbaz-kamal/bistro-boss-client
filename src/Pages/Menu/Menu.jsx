import React from "react";
import HelmetDynamic from "../../Components/Shared/HelmetDynamic";
import Cover from "../../Components/Shared/Cover";
import menuBg from "../../assets/menu/banner3.jpg";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import Headline from "../../Components/Shared/Headline";
import MenueItem from "../../Components/Shared/MenueItem";
import Button from "../../Components/Shared/Button";
import { Link } from "react-router-dom";
const Menu = () => {
  const [menu] = useMenu();
  const todaysOffer = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div className="">
      <HelmetDynamic title={"Bistro || Menue"}></HelmetDynamic>
      <section className="w-full h-[700px]">
        <Cover
          img={menuBg}
          title={"Our Menu"}
          description={"Would you like to try a dish?"}
        ></Cover>
      </section>
      {/* Todays offer */}
      <section>
        <header>
          <Headline
            title={"TODAY'S OFFER"}
            description={"Don't miss"}
          ></Headline>
        </header>
        <div className="flex justify-center max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  ">
            {todaysOffer.map((item) => (
              <MenueItem key={item._id} item={item}></MenueItem>
            ))}
          </div>
        </div>
        <div className="mb-10 md:mb-14">
          {" "}
          <Link to={`/order`}>
            {" "}
            <Button btnText={"Order your favourite food"}></Button>
          </Link>
        </div>
      </section>
      {/* desserts*/}
      <section>
        <section className="w-full h-[700px] mb-14 md:mb-28">
          <Cover
            img={dessertBg}
            title={"Desserts"}
            description={"Would you like to eat a dish?"}
          ></Cover>
        </section>

        <div className="flex justify-center max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  ">
            {dessert.map((item) => (
              <MenueItem key={item._id} item={item}></MenueItem>
            ))}
          </div>
        </div>
        <div className="mb-10 md:mb-14">
          <Link to={`/order/${dessert[0]?.category}`}>
            <Button btnText={"Order your favourite food"}></Button>
          </Link>
        </div>
      </section>
      {/* pizza*/}
      <section>
        <section className="w-full h-[700px] mb-14 md:mb-28">
          <Cover
            img={pizzaBg}
            title={"Pizza"}
            description={"Would you like to eat a dish?"}
          ></Cover>
        </section>

        <div className="flex justify-center max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  ">
            {pizza.map((item) => (
              <MenueItem key={item._id} item={item}></MenueItem>
            ))}
          </div>
        </div>
        <div className="mb-10 md:mb-14">
          <Link to={`/order/${pizza[0]?.category}`}>
            <Button btnText={"Order your favourite food"}></Button>
          </Link>
        </div>
      </section>
      {/* Salads*/}
      <section>
        <section className="w-full h-[700px] mb-14 md:mb-28">
          <Cover
            img={saladBg}
            title={"Salads"}
            description={"Would you like to eat a dish?"}
          ></Cover>
        </section>

        <div className="flex justify-center max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  ">
            {salad.map((item) => (
              <MenueItem key={item._id} item={item}></MenueItem>
            ))}
          </div>
        </div>
        <div className="mb-10 md:mb-14">
          <Link to={`/order/${salad[0]?.category}`}>
            <Button btnText={"Order your favourite food"}></Button>
          </Link>
        </div>
      </section>
      {/* Soups*/}
      <section>
        <section className="w-full h-[700px] mb-14 md:mb-28">
          <Cover
            img={soupBg}
            title={"Soups"}
            description={"Would you like to eat a dish?"}
          ></Cover>
        </section>

        <div className="flex justify-center max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  ">
            {soup.map((item) => (
              <MenueItem key={item._id} item={item}></MenueItem>
            ))}
          </div>
        </div>
        <div className="mb-10 md:mb-14">
          <Link to={`/order/${soup[0]?.category}`}>
            <Button btnText={"Order your favourite food"}></Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Menu;
