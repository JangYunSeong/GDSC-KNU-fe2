
import Profile from "../Profile";
import styled, { keyframes } from 'styled-components';
import React, {useState} from "react";
import {ReactComponent as CardButton} from "../../../images/cardButton.svg";
import {ReactComponent as Inbox} from "../../../images/inbox.svg";
import {ReactComponent as Comments} from "../../../images/comments.svg";
import {ReactComponent as Notifications} from "../../../images/notification.svg";
import {ReactComponent as Bookmark} from "../../../images/bookmark.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPhotoVideo} from '@fortawesome/free-solid-svg-icons';
import Comment from "../Comment";
import Modal from './SettingModal';
import ShareModal from "./ShareModal"
import JoinModal from "./JoinModal"

const ModalDiv=styled.div`
  width:60%;
  height:100%;
  background-color:rgba(0,0,0,0.6);
  display:flex;
  vertical-align: middle;
  align-items:center;
  justify-content:center;
  position:absolute;
  top:0;
  z-index:1000;
`

const blowUpModal=keyframes`
  0% { transform: scale(0); } 
  100% { transform: scale(1);}
`
const PopupDiv = styled.div`
    width: 75%;
    height: 70%;
    border: 1px solid #dbdbdb;
    background-color: #ffffff;
    margin-bottom: 3.5em;
    border-radius: 4px;
    display : flex;
    animation:${blowUpModal} 0.3s cubic-bezier(0.165,0.84,0.44,1) forwards;
    @media only screen and (max-width : 640px){
        border: none;
        background-color: #fafafa;
        margin-bottom: 0.75em;
    }
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75em;
`

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
const Profiles = styled.div`
    margin-bottom: 0;
`
const CardB = styled.div`
    height: 30px;
    &:hover{
        cursor: pointer;
    }
`

const Image = styled.div`
    width : 67%;
    height : 100%;
    display: block;
    border-right:solid 1px lightgray;
`
const Img = styled.img`
    width: 100%;
    height : 100%;
    display: block;
    border-radius: 4px;
`
const Contents = styled.div`
    width:100%:
    height:100%;
    @media only screen and (max-width : 640px){
        display: none !important;
    }
`
const Main = styled.div`
    width : 100%;
    height : 65%;
    border-top:solid 1px lightgray;
    border-bottom :solid 1px lightgray;
`
const Comm = styled.div`
    margin-top : 0.75em;
    margin-bottom: 0.75em;
`
const LikedBy = styled.div`
    display: flex;
    padding-left: 1em;
`
const Span = styled.span`
    font-size: 0.75em;
    margin-left: 0.5em;
    padding-top: 0.5em;
`
const TimePosted = styled.div`
    font-size: 0.6em;
    padding-left: 2em;
    padding-bottom: 1em;
    color: "$font-color-secondary";
    border-bottom: 1px solid #efefef;
    @media only screen and (max-width : 640px){
        border: none;
    }
`
const AddComment = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.85em;
    padding: 0.5em 1.25em;

    @media only screen and (max-width : 640px){
        display: none;
    }
`
const CommentText = styled.input`
    color: #8e8e8e;
    width : 80%;
    height : 10%;
    border:none; border-right:0px; border-top:0px; border-left:0px; border-bottom:0px;
    &:focus{
        outline: none;
    }
`
const PostText = styled.div`
    color: #0095f6;
`
const Close=styled.div`
  color:white;
  position:absolute;
  top:20px;
  right:20px;
`
function Join(props) {
    const{
        storyBorder,
        image,
        comments,
        likedByText,
        likedByNumber,
        hours,
        onClose,
    } = props;
    function onClick(){
        onClose()
      }
    const [modal,setModal]=useState(false);
    const [sharemodal, setShareModal] = useState(false)
    function onShare(){
        setShareModal(true)
    }
    function CloseShare(){
        setShareModal(false)
    }
    function onPost(){
        setModal(true)
    }
    function ClosePost(){
        setModal(false)
    }
  return (
    <ModalDiv>
        <PopupDiv>
            <Image>
                <Img src = {image} alt = "card content"/>
            </Image>
            <Contents>
                <Header>
                    <Profiles><Profile iconSize = "medium" storyBorder = {storyBorder} /></Profiles>
                    <CardB onClick = {onPost}><CardButton className = "cardButton" /></CardB>
                    {modal?<Modal onClose={ClosePost}></Modal>:null}
                </Header>
                <Main>
                    <Comm>
                    {comments.map((comment) => {
                        return(
                        <Comment 
                            key = {comment.id}
                            accountName = {comment.user}
                            comment = {comment.text}/>
                        )
                    })}
                    </Comm>
                </Main>
                <CardMenu>
                    <Interactions>
                        <Icon><Notifications/></Icon>
                        <Icon><Comments/></Icon>
                        <Icon onClick = {onShare}><Inbox/></Icon>
                    </Interactions>
                    <Icon><Bookmark/></Icon>
                    {sharemodal?<ShareModal onClose={CloseShare}></ShareModal>:null}
                </CardMenu>
                <LikedBy>
                    <Profile iconSize = "small" hideAccountName = {true}/>
                    <Span>
                        <strong>{likedByText}</strong>님 외 <strong>{likedByNumber}</strong>명이 좋아합니다.
                    </Span>
                </LikedBy>
                <TimePosted>{hours} 시간 전</TimePosted>
                <AddComment>
                    <CommentText type = "text" placeholder = "댓글 입력..."/>
                    <a href = "/"><PostText>게시</PostText></a>
                </AddComment>
            </Contents>
        </PopupDiv>
        <Close onClick={onClick}><FontAwesomeIcon icon={faTimes} size='2x'/></Close>
    </ModalDiv>
  );
}

export default Join;
