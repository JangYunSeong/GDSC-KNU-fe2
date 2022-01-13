import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const Style=styled.div`
  .SliderDiv{
    width:300px;
    margin:0 auto;
  }
  background-color:rgba(0,0,0,0.8);
  width:100%;
  height:100vh;
  display:flex;
  align-items:center;
`
const Div=styled.div`
  color:white;
  overflow:hidden;
  display:flex;
  width:300px;
  position:relative;
`

const Img=styled.img`
  border-radius:8px;
  width:300px;
  height:500px;
  object-fit:cover;
`
const Message=styled.input`
  color:white;
  width:235px;
  height:30px;
  border:solid 1px white;
  background-color:transparent;
  border-radius:30px;
  ::placeholder{
    color:white;
    font-weight:600;
  }
  margin-left:15px;
  position:absolute;
  bottom:10px;
`
const Arrow=styled.svg`
  position:absolute;
  bottom:12px;
  right:15px;
`
const Play=styled.svg`
  position:absolute;
  top:17px;
  right:90px;
`
const Sound=styled.svg`
  position:absolute;
  top:17px;
  right:62px;
`
const More=styled.svg`
  position:absolute;
  top:13px;
  right:30px;
`
const Profile=styled.img`
  position:absolute;
  top:10px;
  left:20px;
  border-radius:50%;
  width:35px;
  height:35px;
  border:solid 1px #dbdbdb;
  object-fit:cover;
`
const Name=styled.h1`
  color:white;
  font-size:14px;
  position:absolute;
  top:19px;
  left: 65px;
  font-weight:bold;
`

const Grid=styled.div`
  grid-template-columns:repeat(3,1fr);
  display:grid;
`
function StoryModal(){
  const stories= story.map((story) => (<Div>
    <Profile src={story.profile}></Profile>
    <Name>{story.id}</Name>
    <Play aria-label="재생" class="_8-yf5 " color="#ffffff" fill="#ffffff" height="16" role="img" viewBox="0 0 24 24" width="16">
    <path d="M5.888 22.5a3.46 3.46 0 01-1.721-.46l-.003-.002a3.451 3.451 0 01-1.72-2.982V4.943a3.445 3.445 0 015.163-2.987l12.226 7.059a3.444 3.444 0 01-.001 5.967l-12.22 7.056a3.462 3.462 0 01-1.724.462z"></path>
    </Play>
    <Sound aria-label="소리가 없는 동영상입니다." class="_8-yf5 " color="#ffffff" fill="#ffffff" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M11.403 1.083a1.001 1.001 0 00-1.082.187L5.265 6H2a1 1 0 00-1 1v10.003a1 1 0 001 1h3.265l5.01 4.682.02.021a1 1 0 001.704-.814L12.005 2a1 1 0 00-.602-.917zM20.704 12l1.94-1.94a1.5 1.5 0 00-2.122-2.12l-1.939 1.939-1.94-1.94a1.5 1.5 0 10-2.12 2.122L16.461 12l-1.94 1.94a1.5 1.5 0 102.122 2.12l1.939-1.939 1.94 1.94a1.5 1.5 0 002.12-2.122z"></path></Sound>
    <More aria-label="메뉴" class="_8-yf5 " color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12 9.75A2.25 2.25 0 1014.25 12 2.25 2.25 0 0012 9.75zm-6 0A2.25 2.25 0 108.25 12 2.25 2.25 0 006 9.75zm12 0A2.25 2.25 0 1020.25 12 2.25 2.25 0 0018 9.75z" fill-rule="evenodd"></path></More>
    <Img src={story.image}></Img>
    <Message type='text' placeholder='  growing_beomeo님에게 답장하기...'></Message>
    <Arrow aria-label="Direct로 보내기" class="_8-yf5 " color="#dbdbdb" fill="#dbdbdb" height="24" role="img" viewBox="0 0 24 24" width="24">
      <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
      <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon>
      </Arrow>
  </Div>));
  const setting={
    dots:false,
    slidesToShow:1,
    slidesToScroll:1,
    arrow:true,
    infinite:false
  }
  return(
    <Style>
      <Slider {...setting} className="SliderDiv">
      {stories}
      </Slider>
    </Style>
  );
}

const story=[
  {
    image:'images/activeStatus/photo.png',
    id:'growing_beomeo',
    profile:'images/activeStatus/photo.png'
  },
  {
    image:'images/activeStatus/photo.png',
    id:'growing_beomeo',
    profile:'images/activeStatus/photo.png'
  },
  {
    image:'images/activeStatus/photo.png',
    id:'growing_beomeo',
    profile:'images/activeStatus/photo.png'
  },
  {
    image:'images/activeStatus/photo.png',
    id:'growing_beomeo',
    profile:'images/activeStatus/photo.png'
  },
  {
    image:'images/activeStatus/photo.png',
    id:'growing_beomeo',
    profile:'images/activeStatus/photo.png'
  },
  {
    image:'images/activeStatus/photo.png',
    id:'growing_beomeo',
    profile:'images/activeStatus/photo.png'
  },
  {
    image:'images/activeStatus/photo.png',
    id:'growing_beomeo',
    profile:'images/activeStatus/photo.png'
  },
  {
    image:'images/activeStatus/photo.png',
    id:'growing_beomeo',
    profile:'images/activeStatus/photo.png'
  },
  {
    image:'images/activeStatus/photo.png',
    id:'growing_beomeo',
    profile:'images/activeStatus/photo.png'
  },
  {
    image:'images/activeStatus/photo.png',
    id:'growing_beomeo',
    profile:'images/activeStatus/photo.png'
  },
  {
    image:'images/activeStatus/photo.png',
    id:'growing_beomeo',
    profile:'images/activeStatus/photo.png'
  },{
    image:'images/activeStatus/photo.png',
    id:'growing_beomeo',
    profile:'images/activeStatus/photo.png'
  },
  {
    image:'images/activeStatus/photo.png',
    id:'growing_beomeo',
    profile:'images/activeStatus/photo.png'
  }
]

export default StoryModal;