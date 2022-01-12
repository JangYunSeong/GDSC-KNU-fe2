import "../../styles/Navigation.css";
import logo from "../../images/instagramLogo.png";
import { ReactComponent as Search} from "../../images/searchIcon.svg";
import Menu from "./Menu.js";

function Navigation(){
    return (
        <div className = "navigation">
            <div className = "container">
                <img className = "logo" src = {logo} alt = "instagram logo"/>
                <div className = "search">
                <Search className = "icon" alt = "search icon"/>
                <span className = "searchText">search</span>
                </div>
                <Menu />
            </div>
        </div>
    );
}

export default Navigation;