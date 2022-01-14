import "../../styles/Card.css";
import Profile from "./Profile";
import styled from "styled-components";
import React, {useState} from "react";
import {ReactComponent as CardButton} from "../../images/cardButton.svg";
import {ReactComponent as Inbox} from "../../images/inbox.svg";
import {ReactComponent as Comments} from "../../images/comments.svg";
import {ReactComponent as Notifications} from "../../images/notification.svg";
import {ReactComponent as Bookmark} from "../../images/bookmark.svg";
import Comment from "./Comment";
import Modal from './CardModal/SettingModal';
import ShareModal from "./CardModal/ShareModal"
import JoinModal from "./CardModal/JoinModal"
function Card(props){
    const{
        storyBorder,
        image,
        comments,
        likedByText,
        likedByNumber,
        hours,
    } = props;
    const [show, setShow] = useState(false);
    const [modal,setModal]=useState(false);
    const [joinmodal, setJoinModal] = useState(false)
    const [sharemodal, setShareModal] = useState(false)
    function onShare(){
        setShareModal(true)
    }
    function CloseShare(){
        setShareModal(false)
    }
    function onJoin(){
        setJoinModal(true)
    }
    function CloseJoin(){
        setJoinModal(false)
    }
    function onPost(){
        setModal(true)
    }
    function onClose(){
        setModal(false)
    }
    return (
    <div className ="card">
        <header>
            <Profile iconSize = "medium" storyBorder = {storyBorder} />
            <a onClick = {onPost}><CardButton className = "cardButton" /></a>
            {modal?<Modal onClose={onClose}></Modal>:null}
        </header>
        <img className = "cardImage" src = {image} alt = "card content"/>
        <CardMenu>
            <Interactions>
                <Icon><Notifications/></Icon>
                <Icon onClick = {onJoin}>
                    <Comments />
                </Icon>
                <Icon onClick = {onShare}><Inbox/></Icon>
            </Interactions>
            <Icon><Bookmark/></Icon>
            {sharemodal?<ShareModal onClose={CloseShare}></ShareModal>:null}
            {joinmodal?<JoinModal 
                        storyBorder = {storyBorder}
                        image = {image}
                        comments = {comments} 
                        likedByText = {likedByText} 
                        likedByNumber = {likedByNumber} 
                        hours = {hours}
                        onClose={CloseJoin}></JoinModal>:null}
        </CardMenu>
        <div className = "likedBy">
            <Profile iconSize = "small" hideAccountName = {true}/>
            <span>
                <strong>{likedByText}</strong>님 외 <strong>{likedByNumber}</strong>명이 좋아합니다.
            </span>
        </div>
        <div className = "comments">
            {comments.map((comment) => {
                return(
                    <Comment 
                    key = {comment.id}
                    accountName = {comment.user}
                    comment = {comment.text}/>
                )
            })}
        </div>
        <div className = "timePosted">{hours} 시간 전</div>
        <div className = "addComment">
            <input className = "commentText" type = "text" placeholder="댓글 입력..."/>
            <a href = "/"><div className = "postText">게시</div></a>
        </div>
    </div>
    );
}

export default Card;

const CardMenu = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1em 0;
`
const Interactions = styled.div`
    display: flex;
    padding-left: 1em;
`
const Icon = styled.a`
    margin-left: 0.1em;
    width: 40px;
    height: 23px;
    &:hover{
        cursor: pointer;
    }
`