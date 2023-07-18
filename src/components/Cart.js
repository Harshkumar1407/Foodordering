import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utilits/cartSlice";
import store from "../utilits/store";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector(
    
    
    (store) => store.cart.items);
 // console.log(cartItems)

 const dispatch=useDispatch()

 const handleClearCart=()=>{
    dispatch(clearCart())
 }

  return (
    <div>
      <h1 className="font-bold text-lg"> cart- item-{cartItems.length}</h1>
      <button className="bg-green-100 p-2 m-2" onClick={()=>handleClearCart()}> clear-Cart</button>


    <div className="flex p-5 m-5 gap-5 shadow-sm">
    {cartItems.map((item) => (
        <FoodItem key={item.id} {...item} />
      ))}
    </div>
    </div>
  );
};
export default Cart;
