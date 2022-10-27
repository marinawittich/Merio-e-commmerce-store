import Footer from "../../Footer/Footer";
import Announcement from "../Announcement/Announcement";



function About (){
return(
    <div>
        <Announcement/>
        <div className="aboutCont">
        <div className="aboutContainer">
        <h2 className="aboutTitle">Our Story</h2>
        <p className="aboutText down">IT STARTED IN 2008. What started off with a couple of friends with a big idea, has become a global phenomenon. We’ve been spreading happiness and color across every continent through our never-before-worn designs, inspired by everything from art, fashion.</p>
        <img  className="aboutImg" src="https://images.unsplash.com/photo-1567958451986-2de427a4a0be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="store"/>
        </div>
        <div className="aboutContainer">
            <img className="aboutImg" src="https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80" alt="team"/>
        <h2 className="aboutTitle">Our Culture</h2>
        <p className="aboutText">We love how each new hire adds to our culture. And, we’re hiring. We believe that what makes us different makes us stronger. Building a more diverse, inclusive, and equitable organization is good for our teams, our customers, and our community. We empower each other to bring unique perspectives and experiences to work, and we continually seek new ways to do so.</p>
        </div>
        </div>
       <div>
       
       </div>
       <Footer/>
    </div>
)
}

export default About;