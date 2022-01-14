import "../../styles/Navigation.css";
import logo from "../../images/instagramLogo.png";
import { ReactComponent as Search} from "../../images/searchIcon.svg";
import "../../styles/menu.css";
import React, {useState} from "react";
import { ReactComponent as Home } from "../../images/home.svg";
import { ReactComponent as Inbox } from "../../images/inbox.svg";
import { ReactComponent as Create } from "../../images/create.svg";
import { ReactComponent as Searchpeople} from "../../images/searchPeople.svg";
import { ReactComponent as Pid} from "../../images/pid.svg";
import image from "../../images/profile.jpg";
import ProfileIcon from "./ProfileIcon";
import Modal from '../newPost/modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Navigation(){
  const [show, setShow] = useState(false);
    const [modal,setModal]=useState(false)
    function onPost(){
        setModal(true)
    }
    function onClose(){
        setModal(false)
    }
    function onMessage(){
        window.location.assign("../message")
    }
    function onSetting(){
    window.location.assign("../setting/edit")
    }
    return (
        <div className = "navigation">
            <div className = "container">
                <a href = "/"><img className = "logo" src = {logo} alt = "instagram logo"/></a>
                <div className = "search">
                <Search className = "icon" alt = "search icon"/>
                <span className = "searchText">search</span>
                </div>
                <div className = "menu">
                    <a href = "/" className = "icon"><Home/></a>
                    <a onClick = {onMessage} className = "icon"><Inbox/></a>
                    <a onClick={onPost} className = "icon"><Create/></a>
                    <a href = "/" className = "icon"><Searchpeople/></a>
                    <a href = "/" className = "icon"><Pid/></a>
                    <a onClick={onSetting} className = "icon"><ProfileIcon iconSize = "small" image= {image} /></a>
                {/* profileIconComponent */}
                </div>
            </div>
            {modal?<Modal onClose={onClose}></Modal>:null}
        </div>
    );
}

export default Navigation;