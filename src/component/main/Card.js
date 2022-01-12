import "../../styles/Card.css";
import Profile from "./Profile";
import {ReactComponent as CardButton} from "../../images/cardButton.svg";
import CardMenu from "./CardMenu";
import Comment from "./Comment";

function Card(props){
    const{
        storyBorder,
        image,
        comments,
        likedByText,
        likedByNumber,
        hours,
    } = props; 
    return (
    <div className ="card">
        <header>
            <Profile iconSize = "medium" storyBorder = {storyBorder} />
            <CardButton className = "cardButton" />
        </header>
        <img className = "cardImage" src = {image} alt = "card content"/>
        <CardMenu />
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
            <div className = "commentText">댓글 달기...</div>
            <div className = "postText">게시</div>
        </div>
    </div>
    );
}

export default Card;