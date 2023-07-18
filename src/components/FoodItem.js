import { CDN_URL } from "../utilits/contants";

const FoodItem = ({ imageId, name, description, price }) => {
  return (
    <div className="res-card p-1 w-64 mt-2 mb-2 ml-0 mr-0 bg-orange-100">
      <img
        className="res-logo w-full h-5/12"
        alt="res-logo"
        src={CDN_URL + imageId}
      />
      <h1> {name}</h1>
      <h4> {description} stars</h4>
      <h4> Rupees: {price / 100}</h4>
    </div>
  );
};

export default FoodItem;
