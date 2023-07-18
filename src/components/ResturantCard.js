import { CDN_URL } from "../utilits/contants"



const ResturantCard=(props) => {
    const {resData}=props
    const { cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}=resData?.data
    //console.log(props)
    // return(
    //     // <div className="res-card w-[250px] p-2 m-2 shadow-md bg-pink-50 ">
    //     <div className="res-card p-1 w-64 mt-2 mb-2 ml-0 mr-0 ">
    //     <img className="res-logo res-logo w-full h-5/12" alt="res-logo" 
    //     src={CDN_URL+cloudinaryImageId}/>
    //       <div className="res-des ">
    //         <h3 className="font-bold text-xl">{name}</h3>
    //         <h4>{cuisines.join(",")}</h4>
    //         <h4>{avgRating}star</h4>
    //         <h4>{costForTwo/100}FOR TWO</h4>
    //         <h4>{deliveryTime} minute</h4>
    //       </div>
    //     </div>
    // )
    return (
      <div className="res-card p-1 w-64 mt-2 mb-2 ml-0 mr-0 bg-orange-100">
        <img className="res-logo w-full h-5/12" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
        <h3> {name}</h3>
        <h4> {cuisines.join(", ")}</h4>
        <h4> {avgRating} stars</h4>
        <h4> Cost for two: {costForTwo/100}</h4>
        <h4> {deliveryTime} mins</h4>
        
      </div>
    );
}

export default ResturantCard;