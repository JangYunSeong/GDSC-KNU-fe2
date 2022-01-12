import "../../styles/Cards.css"
import Stories from "./Stories";
import Card from "./Card";

function Cards(){
    const commentsOne = [
        {
            user : "ohmyGod",
            text : "아 집가고 싶다!",
            id: 1,
        },
        {
            user : "hihihi",
            text : "나도..",
            id: 2,
        },
        {
            user : "hehe",
            text : "쉬고 싶다.",
            id: 3,
        },
    ];
    const commentsTwo = [
        {
            user : "ohHungry",
            text : "배고파ㅠ",
            id: 4,
        },
        {
            user : "ohHungryToo",
            text : "나도...",
            id: 5,
        },
        {
            user : "realHungry",
            text : "ㄹㅇㅋㅋ",
            id: 6,
        },
    ];
    const commentsThree = [
        {
            user : "ohGood",
            text : "좋아유",
            id: 7,
        },
        {
            user : "ohGoodToo",
            text : "나도!",
            id: 8,
        },
        {
            user : "realGood",
            text : "ㄹㅇㅋㅋ",
            id: 9,
        },
    ];
     return(
         <div className = "cards">
             <Stories />
             <Card
                accountName = "ohmyGod"
                storyBorder = {true} 
                image = "https://picsum.photos/800/900" 
                comments = {commentsOne} 
                likedByText = "Yuns._.sung" 
                likedByNumber = {89} 
                hours = {10}/>
            <Card
                accountName = "hello"
                storyBorder = {true} 
                image = "https://picsum.photos/800" 
                comments = {commentsTwo} 
                likedByText = "hoho" 
                likedByNumber = {126} 
                hours = {2}/>

         </div>
     );
 }

 export default Cards;