import React from "react";

const MenueItem = ({ item }) => {
  const { _id, name, image, price, recipe } = item;
  return (
    <div className="flex ">
      <div className=" w-28 mr-8">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className=" w-full h-full object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-cinzel text-lg md:text-xl text-color-dark1">
          {name}------------------
        </h3>
        <p className="text-sm md:text-base text-color-dark3">{recipe}</p>
      </div>
      {/*  */}
      <div>
        <h3 className="text-color-bb text-lg md:text-xl">${price}</h3>
      </div>
    </div>
  );
};

export default MenueItem;
