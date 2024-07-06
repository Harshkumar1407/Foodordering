import { LOGO_URL } from "../utilits/contants";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import useOnline from "../utilits/useOnline";
import userContext from "../utilits/userContext";
import { useSelector } from "react-redux";
import store from "../utilits/store";

const loggedInUser = () => {
  return false;
};

const Header = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(userContext);

  const cartIteams = useSelector((store) => store.cart.items);
 // console.log(cartIteams);

  const isOnline = useOnline();

  return (
    <div className="flex justify-between bg-orange-200 shadow-md">
      <div className="logo-container">
        <img data-testid="logo" className="h-28 p-2" src={LOGO_URL}></img>
      </div>
      <div className="nav-items flex py-10 list-none   ">
        <Link to="/">
          <li className="px-2 m-2">Home</li>
        </Link>
        <Link to="/about">
          <li className="px-2 m-2">About us</li>
        </Link>
        <Link to="/contact ">
          <li className="px-2 m-2">Contact us</li>
        </Link>

        <Link to="/Instamart">
          <li className="px-2 m-2">Instamart</li>
        </Link>
        <Link to="/cart">
          <li className="px-2 m-2" data-testid="cart">Cart-{cartIteams.length} items</li>
        </Link>
      <Link>
      <h1 className="px-2 m-2" data-testid="online-status"> {isOnline ? "online" : "offline"}</h1>
      </Link>
     
      {/* {user.email} */}
      {isloggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
      </div>
    </div>
  );
};
export default Header;
