import React from "react";
import useMenu from "../../Hooks/useMenu";

const FoodCard = ({ item }) => {
  const [menu] = useMenu();
  const { _id, name, image, price, recipe } = item;
  return (
    <div className="card bg-color-dark7 shadow-xl rounded-none">
      <figure className="w-full">
        <img className="w-full h-full object-cover" src={image} />
        <p className="bg-color-11 text-white py-[11px] px-[22px] font-semibold text-sm md:text-base absolute right-5 top-5">
          ${price}
        </p>
      </figure>
      <div className="card-body">
        <h2 className="text-color-dark1 font-semibold text-xl md:text-2xl text-center">
          {name}
        </h2>
        <p className="text-sm md:text-base text-color-dark3">{recipe}</p>
        <div className="card-actions justify-center">
          <button className="py-4 px-7 text-color-bb font-medium text-lg md:text-xl border-b-[3px] rounded-lg border-b-color-bb">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
