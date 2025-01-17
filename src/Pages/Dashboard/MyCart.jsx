import React from "react";
import Headline from "../../Components/Shared/Headline";
import UseCart from "../../Hooks/UseCart";
import { FaDeleteLeft } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyCart = () => {
  const [cart, refetch] = UseCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`carts/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className="w-10/12 mx-auto">
      <header>
        <Headline title={"WANNA ADD MORE"} description={"My cart"}></Headline>
      </header>
      <section className="flex justify-between mb-9">
        <p className="font-bold font-cinzel text-2xl md:text-3xl">
          TOTAL ORDERS: {cart.length}
        </p>
        <p className="font-bold font-cinzel text-2xl md:text-3xl">
          TOTAL PRICE: $ {totalPrice}
        </p>
        <button className="bg-color-d1 text-lg md:text-xl py-[14px] px-[17px] dont-cinzel text-white rounded-lg">
          PAY
        </button>
      </section>
      <section>
        <div className="overflow-x-auto rounded-t-2xl">
          <table className="table">
            {/* head */}
            <thead className="bg-color-d1 font-semibold text-base text-white ">
              <tr className="">
                <th className="uppercase py-6"></th>
                <th className="uppercase py-6">Item Image</th>
                <th className="uppercase py-6">Item Name</th>
                <th className="uppercase py-6">price</th>
                <th className="uppercase py-6">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th className="font-bold text-lg md:text-xl text-color-dark1">
                    {index + 1}
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-color-dark3 text-base md:text-lg">
                    {item.name}
                  </td>
                  <td className="text-color-dark3 text-base md:text-lg">
                    $ {item.price}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-color-b9 p-[13px] rounded-xl"
                    >
                      <RiDeleteBin6Line color="#ffffff" size={24} />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </section>
    </div>
  );
};

export default MyCart;
