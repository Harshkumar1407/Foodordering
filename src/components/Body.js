import ResturantCard from "./ResturantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utilits/helper";
import useOnline from "../utilits/useOnline";
import { RESTAURANT_DATA } from "../mocks/mockData";



const Body = () => {
  const [listOfAllResturants, setListOfAllResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getResturants();
  }, []);

  const getResturants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9580069&lng=77.6092188&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(RESTAURANT_DATA?.data?.cards[2]?.data?.data?.cards);
    //console.log(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredResturants(RESTAURANT_DATA?.data?.cards[2]?.data?.data?.cards);
    setListOfAllResturants(RESTAURANT_DATA?.data?.cards[2]?.data?.data?.cards);
  };

  // console.log("rerender");
 const isOnline =useOnline();

 if(!isOnline){
  return <h1>offline please check your internet</h1>
  }

  if (!listOfAllResturants) return null;
  //   if (filteredResturants?.length === 0) return <h1>not found</h1>;

  return listOfAllResturants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container py-2 m-2">
        <input data-testid="search-input"
          type="text"
          placeholder="searching"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button data-testid="search-btn"
        className="bg-orange-500 px-2  hover:bg-yellow-200 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchText, listOfAllResturants);
            setFilteredResturants(data);
          }}
        >
          search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfAllResturants.filter(
              (restaurant) => restaurant.data.avgRating > 4
            );
            setListOfAllResturants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {/* <div className="resturant-containers flex flex-wrap justify-around"> */}
      <div className="res-container flex justify-around p-2 flex-wrap">
        {filteredResturants.map((restaurant) => (
          <Link
            to={"/resturant/" + restaurant.data.id}
            key={restaurant.data.id}
          >
            <ResturantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
