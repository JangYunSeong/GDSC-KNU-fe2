// import "../../styles/CardMenu.css";
// import React, {useState} from "react";
// import {ReactComponent as Inbox} from "../../images/inbox.svg";
// import {ReactComponent as Comments} from "../../images/comments.svg";
// import {ReactComponent as Notifications} from "../../images/notification.svg";
// import {ReactComponent as Bookmark} from "../../images/bookmark.svg";
// import ShareModal from "./CardModal/ShareModal"
// import JoinModal from "./CardModal/JoinModal"
// function CardMenu(){
//     const [modal,setModal]=useState(false)
//     const [joinmodal, setJoinModal] = useState(false)
//     function onPost(){
//         setModal(true)
//     }
//     function onClose(){
//         setModal(false)
//     }
//     function onJoin(){
//         setJoinModal(true)
//     }
//     function unJoin(){
//         setJoinModal(false)
//     }
//     return(
//         <div className = "cardMenu">
//             <div className = "interactions">
//                 <Notifications className = "icon"/>
//                 <a onClick = {onJoin}><Comments className = "icon"/></a>
//                 <a onClick = {onPost}><Inbox className = "icon"/></a>
//             </div>
//             <Bookmark className = "icon"/>
//             {modal?<ShareModal onClose={onClose}></ShareModal>:null}
//             {joinmodal?<JoinModal onClose={unJoin}></JoinModal>:null}
//         </div>
//     )
// }

// export default CardMenu;