import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice, increaseCart } from "../../redux/cartSlice";
import CartItem from "./CartItem";
// import { getCartItems, getTotalPrice } from "./redux/cartSlice";




const ShoppingCart = () => {
  const cartItems = useSelector(getCartItems)
  const totalPrice = useSelector(getTotalPrice)
 
  return(
    <div className="shoppingCart">
      {cartItems.length === 0 ? (<p className="totalPrice">Your cart is currently empty</p>) : cartItems.map((cartItem, index) => <CartItem cartItem={cartItem} key={index}/>)}
      <h4 className="totalPrice">Total Price: ${totalPrice.toFixed(2)}</h4>
     
     
    </div>
  )
}

export default ShoppingCart;