import React from "react";
import Headline from "../../Components/Shared/Headline";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
  const { name, recipe, image, category, price,_id } = useLoaderData();

  const axiosPublic = UseAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      console.log(res.data);
      // now send the item data data
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };

      const menuRes = await axiosSecure.patch(`menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount>0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} updated successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div className="w-10/12 mx-auto ">
      <header>
        <Headline
          title={"Update AN ITEM"}
          description={"What's new?"}
        ></Headline>
      </header>
      <section className="w-full bg-white p-12">
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              defaultValue={name}
              {...register("name")}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered bg-color-dark7"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue={category}
              {...register("category")}
              className="select select-bordered w-full bg-color-dark7"
              required
            >
              <option disabled value="default">
                Select a category
              </option>
              <option value={"salad"}>Salad</option>
              <option value={"pizza"}>Pizza</option>
              <option value={"soup"}>Soup</option>
              <option value={"dessert"}>Dessert</option>
              <option value={"drinks"}>Drinks</option>
            </select>
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              defaultValue={price}
              {...register("price")}
              type="number"
              placeholder="Price"
              className="input input-bordered bg-color-dark7"
              required
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              defaultValue={recipe}
              {...register("recipe")}
              className="textarea bg-color-dark7 h-[250px]"
              placeholder="Recipe Details"
              required
            ></textarea>
          </div>
          <div className="form-control col-span-2">
            <input
              {...register("image")}
              type="file"
              className="file-input w-full max-w-xs bg-color-dark6 text-color-dark-2"
              required
            />
          </div>
          {/* <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select> */}

          {/* <input type="submit" /> */}
          <div className="form-control  text-white justify-self-start">
            <button className="font-bold text-lg md:text-xl py-4 px-7 flex items-center gap-2 bg-gradient-to-r from-[#835D23] to-[#B58130]">
              Update Item <FaUtensils color="#ffffff" />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateItem;
