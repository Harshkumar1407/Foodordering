import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "./contants";


const useResturant = (id) => {
  const [res, setRes] = useState(null);
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    getResturantInfo();
  }, []);
  const getResturantInfo = async () => {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    //console.log(json.data);
    //setResturant(json.data);
    setRes(json?.data?.cards[0]?.card?.card?.info);
    setResInfo(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
   //console.log(resInfo);
  };
  return [res,resInfo];
};
export default useResturant;
