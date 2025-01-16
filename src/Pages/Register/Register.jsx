import React from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import loginImg from "../../assets/others/authentication2.png";
import "../Login/Login.css";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const {
    googleSignInUser,
    setLoading,
    setUser,
    user,
    createUser,
    updateUser,
  } = UseAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;

      updateUser(data.name, data.photoURL)
        .then(() => {
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });
        })
        .catch((error) => console.log("ERROR", error.message));
      console.log(loggedUser);
    });
  };
  // console.log(watch("example"));
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  // handle google sign in
  const handleGoogleSignIn = () => {
    googleSignInUser()
      .then((result) => {
        setLoading(false);
        Swal.fire({
          title: "Google sign in successfull",
          icon: "success",
          draggable: true,
        });
        console.log(user);
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="login min-h-screen py-14 md:py-20 lg:py-28">
        <div className="w-11/12 mx-auto flex justify-around shadow-2xl py-14 items-center">
          <div className="w-[45%] max-w-[536px]">
            <h3 className="text-center font-bold md:text-[40px] text-color-15">
              Sign Up
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-400">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  {...register("photoURL", { required: true })}
                  type="url"
                  placeholder="photoURL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-400">PhotoURL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-400">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*/,
                  })}
                  name="password"
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have 1 uppercase 1 lowercase and number
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  className=" bg-color-d1-70 py-6 font-bold text-lg md:text-xl text-white rounded-lg"
                  type="submit"
                  value=" Sign Up"
                />
              </div>
            </form>
            <div>
              <h3 className="mt-8 text-color-d1 text-lg md:text-xl text-center">
                Already Registered?{" "}
                <span className="font-bold">
                  <Link to={"/login"}>Go to log In</Link>
                </span>
              </h3>
              <p className="text-color-dark2 font-medium text-lg md:text-xl text-center mt-6 mb-4">
                Or Sign Up With
              </p>
              <div className="flex justify-center gap-14">
                <div className="border-2 rounded-full border-color-dark2 p-[14px]">
                  <FaFacebookF size={24} />
                </div>
                <div
                  onClick={handleGoogleSignIn}
                  className="border-2 rounded-full border-color-dark2 p-[14px]"
                >
                  <FaGoogle size={24} />
                </div>
                <div className="border-2 rounded-full border-color-dark2 p-[14px]">
                  <FaGithub size={24} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[45%]">
            <img className="max-w-[648px]" src={loginImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
