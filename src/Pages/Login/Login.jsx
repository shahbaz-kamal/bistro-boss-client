import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import "./Login.css";
import { useEffect, useState } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import UseAuth from "../../Hooks/UseAuth";

const Login = () => {
  const { signInUser, setLoading } = UseAuth();

  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password).then((result) => {
      setLoading(false);
      console.log(result.user);
      Swal.fire({
        title: "Log in Successfull",
        icon: "success",
        draggable: true,
      });
    });
  };
  const handleValidate = (e) => {
    const userCaptchaValue = e.target.value;
    // console.log(userCaptchaValue);
    if (validateCaptcha(userCaptchaValue) == true) {
      setDisabled(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>{" "}
      <div className="login min-h-screen py-14 md:py-20 lg:py-28">
        <div className="w-11/12 mx-auto flex justify-around shadow-2xl py-14 items-center">
          <div className="w-[45%]">
            <img className="max-w-[648px]" src={loginImg} alt="" />
          </div>
          <div className="w-[45%] max-w-[536px]">
            <h3 className="text-center font-bold md:text-[40px] text-color-15">
              Login
            </h3>
            <form onSubmit={handleSubmit} className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidate}
                  name="captcha"
                  type="text"
                  placeholder="Type the text above"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  disabled={disabled}
                  className=" bg-color-d1-70 py-6 font-bold text-lg md:text-xl text-white rounded-lg"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div>
              <h3 className="mt-8 text-color-d1 text-lg md:text-xl text-center">
                New here?{" "}
                <span className="font-bold">
                  <Link to={"/register"}>Create a New Account</Link>
                </span>
              </h3>
              <p className="text-color-dark2 font-medium text-lg md:text-xl text-center mt-6 mb-4">
                Or Sign In With
              </p>
              <div className="flex">
                <div className="border-2 rounded-full border-color-dark2 p-[14px]">
                  <FaFacebookF size={24} />
                </div>
                <div className="border-2 rounded-full border-color-dark2 p-[14px]">
                  <FaGoogle size={24} />
                </div>
                <div className="border-2 rounded-full border-color-dark2 p-[14px]">
                  <FaGithub size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
