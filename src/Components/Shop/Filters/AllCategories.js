
import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div className="category">
           {['All', 'SHIRT STYLE', 'LOVE SHOES', 'COMFY SHORTS', 'LIGHT JACKET', 'NICE DRESSES', 'THE PERFECT JEANS!']
           .map((category, index) => <Filter category={category} key={index}/>)}
        </div>
    )
}

export default AllCategories;