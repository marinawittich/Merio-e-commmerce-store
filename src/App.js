


import "./App.css"
import React from 'react';
import cart from './image/cart.png';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";

import ShoppingCart from "./Components/Cart/ShoppingCart";
import Shop from "./Components/Shop/ProductComponents/Shop";





function App() {
  return <Router>
    
<nav className="cont">
  <Link to="/Merio-e-commmerce-store/" className='homeLink'>Merio</Link>
  <Link to="/Merio-e-commmerce-store/about" className='link'>About</Link>
  <Link to="/Merio-e-commmerce-store/shop" className='link'>Shop</Link>
  <Link to="/Merio-e-commmerce-store/ShoppingCart" className='link'><img src={cart} width='40' alt ='cart'/></Link>
</nav>

<Routes>
  <Route path="/Merio-e-commmerce-store/about" element={<About/>}/>
  <Route path="/Merio-e-commmerce-store/" element={<Home/>}/>
  <Route path="/Merio-e-commmerce-store/shop" element={<Shop/>}/>
  <Route path="/Merio-e-commmerce-store/ShoppingCart" element={<ShoppingCart/>}/>
</Routes>
</Router>
  
}

export default App;