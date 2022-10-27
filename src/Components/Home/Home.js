import Announcement from "../Announcement/Announcement";
import Slide from "./Slide";
import Category from "./Category";
import Newsletter from "./Newsletter";
import Footer from "../../Footer/Footer";

function Home (){
    return(
        <div>
            <Announcement/>
            <Slide/>
            <Category/>
            <Newsletter/>
            <Footer/>
        </div>
    )
    }
    
    export default Home;