import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import UseAxiosPublic from "./UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  const axiosPublic = UseAxiosPublic();
  // useEffect(() => {
  //   const fetchMenuData = async () => {
  //     const res = await axiosSecure.get("menu");
  //     setMenu(res.data);
  //     setLoading(false);
  //   };
  //   fetchMenuData();
  // }, []);
const {data:menu=[],isPending:loading,refetch}=useQuery({
  queryKey:['menu'],
  queryFn: async()=>{
    const res=await axiosPublic.get('menu');
    return res.data
  }
})
  return [menu, loading,refetch];
};

export default useMenu;
