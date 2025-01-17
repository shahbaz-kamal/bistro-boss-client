import axios from "axios";
import React from "react";

const axiosPublic = axios.create({
  baseURL: "http://localhost:4800/",
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
