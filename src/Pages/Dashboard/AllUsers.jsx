import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Headline from "../../Components/Shared/Headline";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { HiUserGroup } from "react-icons/hi2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("users");
      return res.data;
    },
  });
  console.log(users);
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an admin now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (id) => {
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
        axiosSecure.delete(`users/${id}`).then((res) => {
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
        <Headline
          title={"MANAGE ALL USERS"}
          description={"How many?"}
        ></Headline>
      </header>
      <section className="p-12 bg-white">
        <h3 className="mb-4 font-bold font-cinzel text-2xl md:text-3xl text-color-dark1">
          TOTAL USERS: {users.length}
        </h3>
        <div className="overflow-x-auto rounded-t-2xl">
          <table className="table table-zebra ">
            {/* head */}
            <thead className="bg-color-d1 font-semibold text-base text-white">
              <tr>
                <th className="uppercase py-6"></th>
                <th className="uppercase py-6">Name</th>
                <th className="uppercase py-6">Email</th>
                <th className="uppercase py-6">Role</th>
                <th className="uppercase py-6">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="bg-color-d1 text-white p-[13px] rounded-xl"
                      >
                        <HiUserGroup size={24} />
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="bg-color-b9 p-[13px] rounded-xl"
                    >
                      <RiDeleteBin6Line color="#ffffff" size={24} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AllUsers;
