import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../../redux/filterSlice";




const Filter = ({category, index}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);

    return(
        <div key={index}>
           <p  onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'selectedCategory' : 'notSelectedCategory'}>{category}</p>
        </div>
    )
}

export default Filter;