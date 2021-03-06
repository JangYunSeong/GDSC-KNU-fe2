import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const Div=styled.div`
  width:100%;
  min-width:50px;
  margin-top:-30px;
`

const ProfileDiv=styled.div`
  display:flex;
  margin-top :80px;
  margin-left:194px;
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
  //input ????????????
  const [name,setName]=useState('username')
  const [nickname,setNickname]=useState('nickname')
  const [email,setEmail]=useState('aaaaAAAA@abc.com')
  const [phone,setPhone]=useState('+82 10-1234-0483')
  const [gender,setGender]=useState('??????')
  const onChangeName=useCallback(e=>{setName(e.target.value)},[])
  const onChangeNickname=useCallback(e=>{setNickname(e.target.value)},[])
  const onChangeEmail=useCallback(e=>{setEmail(e.target.value)},[])
  const onChangePhone=useCallback(e=>{setPhone(e.target.value)},[])
  const onChangeGender=useCallback(e=>{setGender(e.target.value)},[])

  return (
      <Div>
        <ProfileDiv>
            <ProfileImg src='../images/activeStatus/photo.png'></ProfileImg>
            <div>
              <ProfileText>username</ProfileText>
              <ChangeProfile>????????? ?????? ?????????</ChangeProfile>
            </div>
        </ProfileDiv>
        <NameDiv>
            <Label>??????</Label>
            <div>
              <Input type='text' value={name} onChange={onChangeName}></Input>
              <Text>???????????? ??????, ?????? ?????? ???????????? ?????? ??? ???????????? ????????? ????????? ???????????? ???????????? ????????? ?????? ??? ????????? ???????????????. <br/><br/> ????????? 14??? ?????? ??? ?????? ????????? ??? ????????????.</Text>
            </div>     
          </NameDiv>
        <NickNameDiv>
            <Label>????????? ??????</Label>
            <div>
              <Input type='text' value={nickname} onChange={onChangeNickname}></Input>
              <Text>???????????? ?????? 14??? ????????? ????????? ????????? ?????? nickname(???)??? ????????? ??? ????????????. <A href='https://help.instagram.com/876876079327341' target="_blank">??? ????????????</A></Text>
            </div>
          </NickNameDiv>
          <WebSiteDiv>
              <Label>????????????</Label>
              <Input type='text' placeholder='????????????'></Input>
          </WebSiteDiv>
          <IntroduceDiv>
              <Label>??????</Label>
              <Textarea/>
          </IntroduceDiv>
          <PrivateDiv>
              <PrivateTextDiv>
                  <PrivateText>????????????</PrivateText>
                  <Text>??????????????? ???????????? ?????? ????????? ????????? ???????????? ???????????? ??????????????? ???????????????. ?????? ??????????????? ???????????? ????????????.</Text>
              </PrivateTextDiv>
              <PrivateInputDiv>
                  <Label>?????????</Label>
                  <Input type='text' value={email} onChange={onChangeEmail}></Input>
              </PrivateInputDiv>
              <PrivateInputDiv>
                  <Label>????????????</Label>
                  <Input type='text' value={phone} onChange={onChangePhone}></Input>
              </PrivateInputDiv>
              <PrivateInputDiv>
                  <Label>??????</Label>
                  <Input type='text' value={gender} onChange={onChangeGender}></Input>
              </PrivateInputDiv>
          </PrivateDiv>
         <RecommandDiv>
              <Label>????????? ?????? ??????</Label>
              <CheckDiv>
                <input style={{marginRight:'10px'}} type='checkbox'></input>
                <span> ???????????? ?????? ????????? ?????????<br/>????????? ??? ???????????? ????????? ???<br/>????????????. <A style={{fontSize:'16px',fontWeight:'600'}} href='https://help.instagram.com/530450580417848' target="_blank">[?]</A> </span>
              </CheckDiv>
          </RecommandDiv>
          <Button>??????</Button>
          </Div>
  );
}

export default Edit;