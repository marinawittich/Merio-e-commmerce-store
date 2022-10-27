// import AllCategories from "./AllCategories";

import Footer from "../../../Footer/Footer";
import Announcement from "../../Announcement/Announcement";
import AllCategories from "../Filters/AllCategories";
import Products from "./Products";





const Shop = () => {
    
    return(
        <div>
            <Announcement/>
            <AllCategories/>
            <Products/>
        <Footer/>
        </div>
    )
}

export default Shop;