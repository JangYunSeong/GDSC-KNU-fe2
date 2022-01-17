import React from 'react';
import styled from 'styled-components';

const Div=styled.div`
  height:186px;
  margin-top:-10px;
`
const TextDiv=styled.div`
  font-weight:500;
  margin-left:20px;
  margin-right:20px;
  border-bottom:solid 1px #dbdbdb;
  padding-bottom:20px;
`
const Title=styled.h2`
  font-size:22px;
  margin-bottom:20px;
`
const Radio=styled.input`
  margin-right:4px;
`
const Label=styled.label`
  
`
const RadioDiv=styled.div`
  margin:5px;
`
const Text=styled.div`
  font-size:14px;
  color:#8e8e8e;
  font-weight:400;
  margin-top:10px;
`

function Push() {
  function CheckDivAll({title,text,name}){
    return(
    <Div>
      <TextDiv>
        <Title>{title}</Title>
        <RadioDiv>
          <Radio id='1' type='radio' name={name}></Radio>
          <Label for='1'>해제</Label>
        </RadioDiv>
        <RadioDiv>
        <Radio id='2' type='radio' name={name}></Radio>
        <Label for='2'>내가 팔로우하는 사람</Label>
        </RadioDiv>
        <RadioDiv>
        <Radio id='3' type='radio' name={name}></Radio>
        <Label for='3'>모든 사람</Label>
        </RadioDiv>
        <Text>{text}</Text>
      </TextDiv>
    </Div>
    )
  }
  function CheckDivTwo1({title,text,name}){
    return(
    <Div>
      <TextDiv>
        <Title>{title}</Title>
        <RadioDiv>
          <Radio id='1' type='radio' name={name}></Radio>
          <Label for='1'>해제</Label>
        </RadioDiv>
        <RadioDiv>
          <Radio id='2' type='radio' name={name}></Radio>
          <Label for='2'>내가 팔로우하는 사람</Label>
        </RadioDiv>
        <Text>{text}</Text>
      </TextDiv>
    </Div>
    )
  }
  function CheckDivTwo2({title,text,name}){
    return(
    <Div>
      <TextDiv>
        <Title>{title}</Title>
        <RadioDiv>
          <Radio id='1' type='radio' name={name}></Radio>
          <Label for='1'>해제</Label>
        </RadioDiv>
        <RadioDiv>
          <Radio id='3' type='radio' name={name}></Radio>
          <Label for='3'>모든 사람</Label>
        </RadioDiv>
        <Text>{text}</Text>
      </TextDiv>
    </Div>
    )
  }
  function CheckDivX({title,text,name}){
    return(
    <Div>
      <TextDiv>
        <Title>{title}</Title>
        <RadioDiv>
          <Radio id='1' type='radio' name={name}></Radio>
          <Label for='1'>해제</Label>
        </RadioDiv>
        <RadioDiv>
          <Radio id='2' type='radio' name={name}></Radio>
          <Label for='2'>설정</Label>
        </RadioDiv>
        <Text>{text}</Text>
      </TextDiv>
    </Div>
    )
  }
  return (
    <div>
      <CheckDivAll title='좋아요' text='johnappleseed님이 회원님의 사진을 좋아합니다.' name='like'></CheckDivAll>
      <CheckDivAll title='댓글' text='johnappleseed님이 댓글을 남겼습니다: "멋지네요!"' name='post'></CheckDivAll>
      <CheckDivTwo1 title='댓글 좋아요' text='johnappleseed님이 회원님의 댓글을 좋아합니다: "멋지네요!"' name='likepost'></CheckDivTwo1>
      <CheckDivAll title='회원님이 나온 사진의 좋아요 및 댓글' text='johnappleseed님이 회원님이 태그된 게시물에 댓글을 남겼습니다.' name='taglike'></CheckDivAll>
      <CheckDivTwo2 title='수락한 팔로우 요청' text='John Appleseed(@johnappleseed)님이 팔로우 요청을 수락했습니다.' name='follow_allow'></CheckDivTwo2>
      <CheckDivTwo2 title='Instagram Direct 요청' text='johnappleseed님이 메시지를 보내고 싶어합니다.' name='direct_req'></CheckDivTwo2>
      <CheckDivTwo2 title='Instagram Direct' text='johnappleseed님이 메시지를 보냈습니다.' name='direct'></CheckDivTwo2>
      <CheckDivTwo2 title='알림' text='"알림을 읽지 않으셨습니다" 등을 안내하는 알림입니다.' name='alert'></CheckDivTwo2>
      <CheckDivAll title='첫 게시물과 스토리' text='johnappleseed님의 첫 Instagram 스토리 게시 등을 안내하는 알림입니다.' name='first'></CheckDivAll>
      <CheckDivTwo2 title='동영상 조회수' text='회원님의 동영상 조회수가 10만회를 넘었습니다.' name='view'></CheckDivTwo2>
      <CheckDivX title='지원 요청' text='7월 10에 요청하신 지원에 대한 내용이 업데이트되었습니다.' name='support'></CheckDivX>
      <CheckDivX title='라이브 방송' text='johnappleseed님이 라이브 방송을 시작했습니다. 지금 바로 시청해보세요!' name='live'></CheckDivX>

    </div>
  );
}

export default Push;