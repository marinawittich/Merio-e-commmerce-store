import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    count: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   
    addToCart: (state, action) => {
        const timeId = new Date().getTime()
      state.cartItems.push({
        id : timeId,
        productID: action.payload.item.id,
        quantity: action.payload.quantity,
        totalPrice: action.payload.quantity * action.payload.item.price
      })
    },


    removeItemFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(
            CartItem => CartItem.id !== action.payload.cartItemId
        )
       }
  },
})


export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
    },0)
}
export const getCartItems = state => state.cart.cartItems;
export const { addToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;