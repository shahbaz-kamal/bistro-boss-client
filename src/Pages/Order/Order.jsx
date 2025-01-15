import React, { useState } from "react";
import Cover from "../../Components/Shared/Cover";
import coverImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../Components/Shared/FoodCard";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = category ? categories.indexOf(category) : 0;
  // const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  console.log(menu);
  console.log(category);
  const todaysOffer = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div className="max-w-[1320px] mx-auto px-2">
      <header className="mb-32">
        <Cover
          img={coverImg}
          title={"Order"}
          description={"Would you like to try a dish?"}
        ></Cover>
      </header>
      <section>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel className="mt-12">
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel className="mt-12">
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel className="mt-12">
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel className="mt-12">
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel className="mt-12">
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default Order;
