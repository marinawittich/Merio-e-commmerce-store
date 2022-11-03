
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
import ChangeQuantity from "../../Cart/ChangeQuantity";


const OneItem = ({item, index}) => {

    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)
    return(
            <div className="product-card" item>
                <img className="productImg" src={item.image} width="350px" height="500px"  />           
                <h4>{item.name}</h4>
                <p className="price">$ {item.price}</p>
                <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                <button className="cartBtn" onClick={() => {dispatch(addToCart({item, quantity}))}} >ADD TO CART</button>
            </div>
        
        
    )
}

export default OneItem;