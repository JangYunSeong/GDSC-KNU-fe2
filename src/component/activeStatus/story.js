import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import StoryEle from './storyEle';

const Styles=styled.div`
  .SliderDiv{
    border-radius:3px;
    border:solid 1px #dbdbdb;
    padding:16px 0;
    width:700px;
    height:122px;
    margin: 0 auto;
  }
`

function Story() {
  const setting={
    dots:false,
    slidesToShow:8,
    slidesToScroll:5,
    arrow:true,
    infinite:false
  }
  return (
    <Styles>
      <Slider {...setting} className="SliderDiv">
        {datas.map((data)=><StoryEle key={data.id} img={data.img} name={data.name}/>)}
      </Slider>
    </Styles>
  );
}
const datas=[{
  id:1,
  img:'images/activeStatus/photo.png',
  name:'growing_beomeo'
},
{
  id:2,
  img:'images/activeStatus/photo.png',
  name:'growing_beomeo'
},
{
  id:3,
  img:'images/activeStatus/test.png',
  name:'growing_beomeo'
},{
  id:4,
  img:'images/activeStatus/photo.png',
  name:'growing_beomeo'
},
{
  id:5,
  img:'images/activeStatus/test.png',
  name:'growing_beomeo'
},
{
  id:6,
  img:'images/activeStatus/photo.png',
  name:'growing_beomeo'
},
{
  id:7,
  img:'images/activeStatus/test.png',
  name:'growing_beomeo'
},
{
  id:8,
  img:'images/activeStatus/photo.png',
  name:'growing_beomeo'
},
{
  id:9,
  img:'images/activeStatus/test.png',
  name:'growing_beomeo'
},
{
  id:10,
  img:'images/activeStatus/photo.png',
  name:'growing_beomeo'
},
{
  id:11,
  img:'images/activeStatus/photo.png',
  name:'growing_beomeo'
},
{
  id:12,
  img:'images/activeStatus/photo.png',
  name:'growing_beomeo'
},
{
  id:13,
  img:'images/activeStatus/test.png',
  name:'growing_beomeo'
},
{
  id:14,
  img:'images/activeStatus/photo.png',
  name:'growing_beomeo'
},
{
  id:15,
  img:'images/activeStatus/photo.png',
  name:'growing_beomeo'
}] 
//check 필드를 하나 더 만들어서 확인한 걸로 바뀌면 제일 뒤쪽 데이터로 옮기기 
export default Story;