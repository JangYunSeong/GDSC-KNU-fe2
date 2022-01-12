import "../../styles/CardMenu.css";
import {ReactComponent as Inbox} from "../../images/inbox.svg";
import {ReactComponent as Comments} from "../../images/comments.svg";
import {ReactComponent as Notifications} from "../../images/notification.svg";
import {ReactComponent as Bookmark} from "../../images/bookmark.svg";

function CardMenu(){
    return(
        <div className = "cardMenu">
            <div className = "interactions">
                <Notifications calssName = "icon"/>
                <Comments className = "icon"/>
                <Inbox className = "icon"/>
            </div>
            <Bookmark className = "icon"/>
        </div>
    )
}

export default CardMenu;