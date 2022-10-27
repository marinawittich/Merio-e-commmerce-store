const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuantity = () => {
    const updateQuantity = quantity + 1;
    setQuantity(updateQuantity)
    }
    
    const removeQuantity = () => {
        if (quantity <= 1) return;
        const updateQuantity = quantity - 1;
        setQuantity(updateQuantity)
    }
        return(
            <div className="quantityCount">
                <button className="quantityBtn1" onClick={addQuantity}>+</button>
                <span className="quantitySpan">{quantity}</span>
                <button className="quantityBtn2" onClick={removeQuantity}>-</button>
            </div>
        )
    }
    
    export default ChangeQuantity;