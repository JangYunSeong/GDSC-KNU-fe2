import "../../styles/Suggestions.css";
import Profile from "./Profile";

function Suggestions(){
    return (
    <div className ="suggestions">
        <div className = "titleContainer">
            <div className = "title">회원님을 위한 추천</div>
            <a href = "/">모두 보기</a>
        </div>
        
        <Profile 
            caption = "yuns._.sung님 외 3명이 팔로우합니다"
            urlText = "팔로우"
            iconSize = "medium"
            captionSize = "small"
            storyBorder = {true}/>
        <Profile 
            caption = "yuns._.sung님 외 5명이 팔로우합니다"
            urlText = "팔로우"
            iconSize = "medium"
            captionSize = "small"
            storyBorder = {true}/>
        <Profile 
            caption = "yuns._.sung님 외 2명이 팔로우합니다"
            urlText = "팔로우"
            iconSize = "medium"
            captionSize = "small"
            storyBorder = {true}/>
        <Profile 
            caption = "yuns._.sung님이 팔로우합니다"
            urlText = "팔로우"
            iconSize = "medium"
            captionSize = "small"
            storyBorder = {true}/>
            
    </div>
    );
}

export default Suggestions;