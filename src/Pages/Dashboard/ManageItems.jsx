import React from "react";
import Headline from "../../Components/Shared/Headline";
import useMenu from "../../Hooks/useMenu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const axiosSecure = useAxiosSecure();
  const [menu] = useMenu();
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`menu/${item._id}`);
        if (res.data.deletedCount > 0) {
          console.log(res.data);
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been deleted.`,
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div className="w-10/12 mx-auto">
      <header>
        <Headline title={"MANAGE ITEM"} description={"Hurry Up"}></Headline>
      </header>
      <section className="bg-white p-12 ">
        <h3 className="font-bold font-cinzel text-2xl md:text-3xl mb-4">
          TOTAL ITEMS: {menu.length}{" "}
        </h3>
        <div className="overflow-x-auto rounded-t-2xl">
          <table className="table">
            {/* head */}
            <thead className="bg-color-d1 font-semibold text-base text-white ">
              <tr className="">
                <th className="uppercase py-6">#</th>
                <th className="uppercase py-6">Item Image</th>
                <th className="uppercase py-6">Item Name</th>
                <th className="uppercase py-6">price</th>
                <th className="uppercase py-6">Update</th>
                <th className="uppercase py-6">Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {menu.map((item, index) => (
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
                  <td>
                    <Link to={`/dashboard/update-item/${item._id}`}>
                      {" "}
                      <button className="bg-color-d1 p-[13px] rounded-xl">
                        <FaEdit color="#ffffff" size={24} />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="bg-color-b9 p-[13px] rounded-xl"
                    >
                      <RiDeleteBin6Line color="#ffffff" size={24} />
                    </button>
                  </td>
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

export default ManageItems;
