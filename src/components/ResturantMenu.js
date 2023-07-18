import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { addItem } from "../utilits/cartSlice";
import { CDN_URL } from "../utilits/contants";
import useResturant from "../utilits/useResturant";
import Shimmer from "./Shimmer";
//import { addItem } from "../utilits/cartSlice";
import { useDispatch } from "react-redux";

//import { addItem } from "../utilits/cartSlice";



const ResturantMenu = () => {
  const params = useParams();
  //console.log(resId +"testing params");
  // const [res, setRes] = useState(null);
  //const [resInfo, setResInfo] = useState([{}]);
  const [res, resInfo] = useResturant(params.id);

  //useEffect(() => {
  // getResturantInfo();
  //}, []);
  //const getResturantInfo = async () => {
  //const data = await fetch(
  //"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9580069&lng=77.6092188&restaurantId=" +
  //params.id
  // );
  //const json = await data.json();
  //console.log(json.data);
  //setResturant(json.data);
  //setRes(json?.data?.cards[0]?.card?.card?.info);
  //setResInfo(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  // console.log(resInfo);
  // };



  const dispatch = useDispatch();
  const addFoodItem= (item) => {
    dispatch(addItem(item));
  };

  

  const renderSubMenu = (some) => {
    if (some?.card?.card?.hasOwnProperty("itemCards")) {
      return some?.card?.card?.itemCards.map((some) => {
       // console.log(some?.card?.info?.name);
        return (
          <div key={some?.card?.info?.id}>
            {some?.card?.info?.name}{" "}
            <button
              className="p-1 m-1 bg-green-500  rounded-md  text-white text-bold"
              onClick={() => addFoodItem(some?.card?.info)}
            >
              Add-item
            </button>
          </div>
        );
      });
    }
  };

  return !res && !resInfo ? (
    <Shimmer />
  ) : (
    <div className="menu flex p-2 m-5">
      <div>
        <h1> Resturant id:{params.id}</h1>
        <h2>Restaurant name: {res.name}</h2>
        <img src={CDN_URL + res.cloudinaryImageId} />
        <h3>{res.areaName}</h3>
        <h3>{res.city}</h3>
        <h3>{res.avgRating} star</h3>
        <h3>{res.costForTwoMessage}</h3>
      </div>
     
      <div className="p-2  m-2">
        <h2>menu</h2>
        {resInfo.map((some,id) => {
          return (
            <div key={id}>
              <div>{some?.card?.card?.title} </div>
              <div>{renderSubMenu(some)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ResturantMenu;
