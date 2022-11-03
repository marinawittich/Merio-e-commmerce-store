import { useDispatch } from "react-redux";
import dataClothes from "../../Data/dataClothes";
import { removeItemFromCart } from "../../redux/cartSlice";
import remove from '../../image/remove.png';



const CartItem = ({cartItem, index}) => {
    const products = dataClothes.find(item=>item.id === cartItem.productID)
    const dispatch = useDispatch()
    return(
        <div className="cartCont">
            <div className="cartContainer">
            <div className="cartPosition" key={index}>
            <div><img src={products.image} width="100" height="150"/></div>
           <div className="cartInfo">
           <p>{products.name}</p>
            <p>Quantity: {cartItem.quantity}</p>
            <p>Price: ${products.price.toFixed(2) * cartItem.quantity}</p>
           </div>
            </div>
            
            <span onClick={() => {
                dispatch(removeItemFromCart({cartItemId: cartItem.id}))
            }}><img className="pointer" src={remove} width="30"/></span>
        </div>
        </div>
    )
}

export default CartItem;