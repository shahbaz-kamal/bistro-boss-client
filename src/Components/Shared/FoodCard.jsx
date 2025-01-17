import React from "react";
import useMenu from "../../Hooks/useMenu";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseCart from "../../Hooks/UseCart";

const FoodCard = ({ item }) => {
  const axiosSecure = useAxiosSecure();
  const [,refetch] = UseCart();
  const { user } = UseAuth();
  const [menu] = useMenu();
  const navigate = useNavigate();
  const location = useLocation();
  const { _id, name, image, price, recipe } = item;
  const handleAddToCart = (food) => {
    // console.log(food, user.email);
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "You need to be logged in add this to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "I want to lig in",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/logIn", { state: { from: location } });
        }
      });
    }
  };
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
          <button
            onClick={() => handleAddToCart(item)}
            className="py-4 px-7 text-color-bb font-medium text-lg md:text-xl border-b-[3px] rounded-lg border-b-color-bb"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
