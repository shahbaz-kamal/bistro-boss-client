import React from "react";
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="mt-6 md:mt-10 lg:mt-14">
      <div className="flex flex-col md:flex-row justify-around">
        <div className="text-white bg-color-1f w-full md:w-1/2 flex flex-col  md:items-end py-20 md:pr-20 lg:pr-36 ">
          <div className="space-y-2 flex flex-col justify-center items-center">
            <h3 className="font-medium text-2xl md:text-3xl mb-4 md:mb-6 text-center">
              CONTACT US
            </h3>
            <p className="font-medium text-lg md:text-xl text-white">
              123 ABS Street, Uni 21, Bangladesh
            </p>
            <p className="font-medium text-lg md:text-xl text-white">
              +88 123456789
            </p>
            <p className="font-medium text-lg md:text-xl text-white">
              Mon - Fri: 08:00 - 22:00
            </p>
            <p className="font-medium text-lg md:text-xl text-white">
              Sat - Sun: 10:00 - 23:00
            </p>
          </div>
        </div>
        <div className="text-white bg-color-11 w-full md:w-1/2 flex flex-col  md:items-start md:pl-20 lg:pl-36 py-20">
          <div className="flex flex-col items-center">
            <h3 className="font-medium text-2xl md:text-3xl mb-4 md:mb-6 ">
              Follow Us
            </h3>
            <p className="font-medium text-white text-lg md:text-xl mb-6 md:mb-8">
              Join us on social media
            </p>

            <div className="flex gap-8">
            <FaFacebook size={30} color="#ffffff" />
            <FaInstagram size={30} color="#ffffff" />
            <FaTwitter size={30} color="#ffffff" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer footer-center bg-color-dark1 text-base-content p-4">
        <aside>
          <p className="font-medium text-white ">
            Copyright © {new Date().getFullYear()} - CulinaryCloud. All rights reserved
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
