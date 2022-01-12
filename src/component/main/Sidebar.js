import "../../styles/Sidebar.css"
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestion";
import Footer from "./Footer";
import image from "../../images/profile.jpg";

function Sidebar(){
    return(
        <Sticky topOffset = {-80}>
            <div className = "sidebar">
                <Profile 
                    username = "Yuns._.sung"
                    caption = "장윤성"
                    urlText = "전환"
                    iconSize = "big"
                    image = {image}/>
                <Suggestions />
                <Footer />
            </div>
        </Sticky>
    );
}

export default Sidebar;