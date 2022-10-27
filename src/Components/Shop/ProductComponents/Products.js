import OneItem from "./OneItem";

import { useSelector } from "react-redux";

import dataClothes from "../../../Data/dataClothes";
import { getSelectedCategory } from "../../../redux/filterSlice";

const Products = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return(
        <div className="productsCont">
        {dataClothes
        .filter (item => {
            if (selectedCategory === 'All') return true
            return selectedCategory === item.category;
        })
        .map((item, index) => <OneItem item={item} key={index}/>)}
        </div>
    )
}

export default Products;