import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const Div=styled.div`
  border:solid 1px #dbdbdb;
  width:50%;
  min-width:50px;
  display:flex;
`
const MarginDiv=styled.div`
  margin:32px 0;
`
const ProfileDiv=styled.div`
  display:flex;
  margin-left:130px;
  margin-bottom:32px;
`
const ProfileImg=styled.img`
  border-radius:50%;
  width:38px;
  height:38px;
  object-fit:cover;
  margin-right:25px;
`
const ProfileText=styled.div`
  font-size:20px;
  margin-bottom:2px;
  font-weight:bold;
`
const ChangeProfile=styled.div`
  font-size:14px;
  color:#0095f6;
  font-weight:bold;
`
const NameDiv=styled.div`
  display:flex;
  margin-bottom:32px;
`
const Label =styled.div`
  font-size:17px;
  font-weight:bold;
  padding-left:32px;
  padding-right:32px;
  text-align:right;
  flex:0 0 194px;
  margin-top:6px;
`
const Input=styled.input`
  flex:0 1 355px;
  width:100%;
  height:32px;
  padding:0 10px;
  border-radius:3px;
  border:solid 1px #dbdbdb;

`
const Text=styled.div`
  width: 100%;
  max-width:355px;
  color:#8e8e8e;
  font-size:12px;
  line-height:16px;
  margin-top:5px;
`
const A=styled.a`
  font-size:12px;
  text-decoration:none;
  color:#0095f6;
`
const NickNameDiv=styled.div`
  display:flex;
  margin-bottom:32px;
`
const WebSiteDiv=styled.div`
  display:flex;
  margin-bottom:32px;
`
const IntroduceDiv=styled.div`
  display:flex;
  margin-bottom:32px;
`
const Textarea=styled.textarea`
  padding:0 10px;
  border-radius:3px;
  border:solid 1px #dbdbdb;
  flex:0 1 355px;
  width:100%;
  height:60px;
`
const PrivateDiv=styled.div`
  margin-bottom:32px;
`
const PrivateInputDiv=styled.div`
  display:flex;
  margin-bottom:15px;
`
const PrivateTextDiv=styled.div`
  margin-left:194px;
  margin-bottom:5px;
`
const PrivateText=styled.div`
  font-weight:600;
  font-size:14px;
  color:#8e8e8e;
`
const RecommandDiv=styled.div`
  display:flex;
  margin-bottom:32px;
`
const CheckDiv=styled.div`
  display:flex;
  align-items:center;
`
const Button=styled.button`
  margin-left:194px;
  background-color:#0095f6;
  border:none;
  padding:5px 10px;
  color:white;
  border-radius:4px;
  font-weight:bold;
`
function Edit() {
  //input 상태관리
  const [name,setName]=useState('username')
  const [nickname,setNickname]=useState('nickname')
  const [email,setEmail]=useState('aaaaAAAA@abc.com')
  const [phone,setPhone]=useState('+82 10-1234-0483')
  const [gender,setGender]=useState('여성')
  const onChangeName=useCallback(e=>{setName(e.target.value)},[])
  const onChangeNickname=useCallback(e=>{setNickname(e.target.value)},[])
  const onChangeEmail=useCallback(e=>{setEmail(e.target.value)},[])
  const onChangePhone=useCallback(e=>{setPhone(e.target.value)},[])
  const onChangeGender=useCallback(e=>{setGender(e.target.value)},[])

  return (
      <>
      <ProfileDiv>
          <ProfileImg src='../images/activeStatus/photo.png'></ProfileImg>
          <div>
            <ProfileText>username</ProfileText>
            <ChangeProfile>프로필 사진 바꾸기</ChangeProfile>
          </div>
      </ProfileDiv>
      <NameDiv>
          <Label>이름</Label>
          <div>
            <Input type='text' value={name} onChange={onChangeName}></Input>
            <Text>사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을 사용하여 회원님의 계정을 찾을 수 있도록 도와주세요. <br/><br/> 이름은 14일 안에 두 번만 변경할 수 있습니다.</Text>
          </div>     
        </NameDiv>
       <NickNameDiv>
          <Label>사용자 이름</Label>
          <div>
            <Input type='text' value={nickname} onChange={onChangeNickname}></Input>
            <Text>대부분의 경우 14일 이내에 사용자 이름을 다시 nickname(으)로 변경할 수 있습니다. <A href='https://help.instagram.com/876876079327341' target="_blank">더 알아보기</A></Text>
          </div>
        </NickNameDiv>
        <WebSiteDiv>
            <Label>웹사이트</Label>
            <Input type='text' placeholder='웹사이트'></Input>
        </WebSiteDiv>
        <IntroduceDiv>
            <Label>소개</Label>
            <Textarea/>
        </IntroduceDiv>
        <PrivateDiv>
            <PrivateTextDiv>
                <PrivateText>개인정보</PrivateText>
                <Text>비즈니스나 반려동물 등에 사용된 계정인 경우에도 회원님의 개인정보를 입력하세요. 공개 프로필에는 포함되지 않습니다.</Text>
            </PrivateTextDiv>
            <PrivateInputDiv>
                <Label>이메일</Label>
                <Input type='text' value={email} onChange={onChangeEmail}></Input>
            </PrivateInputDiv>
            <PrivateInputDiv>
                <Label>전화번호</Label>
                <Input type='text' value={phone} onChange={onChangePhone}></Input>
            </PrivateInputDiv>
            <PrivateInputDiv>
                <Label>성별</Label>
                <Input type='text' value={gender} onChange={onChangeGender}></Input>
            </PrivateInputDiv>
        </PrivateDiv>
        <RecommandDiv>
            <Label>비슷한 계정 추천</Label>
            <CheckDiv>
              <input style={{marginRight:'10px'}} type='checkbox'></input>
              <span> 팔로우할 만한 비슷한 계정을<br/>추천할 때 회원님의 계정을 포<br/>함합니다. <A style={{fontSize:'16px',fontWeight:'600'}} href='https://help.instagram.com/530450580417848' target="_blank">[?]</A> </span>
            </CheckDiv>
        </RecommandDiv>
        <Button>제출</Button>
        </>
  );
}

export default Edit;