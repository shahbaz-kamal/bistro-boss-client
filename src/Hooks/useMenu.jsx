import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const fetchMenuData = async () => {
      const res = await axiosSecure.get("menu");
      setMenu(res.data);
      setLoading(false);
    };
    fetchMenuData();
  }, []);

  return [menu, loading];
};

export default useMenu;
