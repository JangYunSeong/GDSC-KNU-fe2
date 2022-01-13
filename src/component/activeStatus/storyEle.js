import React, { useState } from 'react';
import styled from 'styled-components';

const Div=styled.div`
  padding: 0 4px;
`
const Img=styled.img`
  object-fit:cover;
  width:60px;
  height:60px;
  border-radius:50%;
  border:solid 1px rgba(142,142,142,0.5);
`
const Check=styled.span`
  width:66px;
  height:66px;
  border:solid 1px rgba(142,142,142,0.5);
  overflow:hidden;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:white;
  margin: 0 auto;
`
const NotCheck=styled.span`
  width:66px;
  height:66px;
  border:solid 2px transparent;
  background-image: linear-gradient(#fff, #fff), linear-gradient(to right, #FC466B, purple);
  background-origin: border-box;
  background-clip: content-box, border-box;
  overflow:hidden;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  margin: 0 auto;
`
const Name=styled.div`
  font-size:12px;
  color:#262626;
  overflow:hidden;
  text-overflow:ellipsis;
  postion:absolute;
  top:50px;
  margin-top: 5px;
`
function StoryEle({img,name}) {
  const [check,setCheck]=useState(false)
  function onCheck(){
    setCheck(true)
  }
  function onStory(){
    window.location.assign("/stories")
  }
  return (
   <Div onClick={onStory}>
      {check?
      <Check>
      <Img src={img}/>
      </Check>:
      <NotCheck>
        <Img onClick={onCheck} src={img}/>
      </NotCheck>
      }
      {check?
      <Name style={{color:'#8e8e8e'}}>growing_beomeo</Name>:
      <Name>{name}</Name>
      }
   </Div>
  );
}

export default StoryEle;