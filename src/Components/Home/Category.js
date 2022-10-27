

import '../../App.css';
import { useState } from "react";
import { dataCategory } from '../../Data/dataCategory';



function Category (){
    const[category, setCategory] = useState(dataCategory);

   return(
    <div className="categoryCont">
        {category.map((item =>{
            const {image, title} = item;
            return(
                <div className='categoryContainer'>
                
                    <img className="categoryImage" src={image} alt={title}/>
                    
                    <div className="categoryInfo">
                    <p className="categoryTitle">{title}</p>
                    
                    </div>
                  </div>
                
                   
                 
                   
                
            )
        }))}
    </div>
   )
}
export default Category;