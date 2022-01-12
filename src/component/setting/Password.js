import React, {useState,useCallback} from 'react';
import styled from 'styled-components';

const Div=styled.div`
  border:solid 1px #dbdbdb;
  width:50%;
  min-width:50px;
`
const MarginDiv=styled.div`
  margin:32px auto;
`
const ProfileDiv=styled.div`
  font-size:24px;
  font-weight:400;
  line-height:38px;
  margin-top :80px;
  margin-left:130px;
  margin-bottom:32px;
  display:flex;
`
const ProfileImg=styled.img`
  border-radius:50%;
  width:38px;
  height:38px;
  object-fit:cover;
  margin-right:25px;
`
const Prev=styled.div`
  margin-bottom:32px;
  display:flex;
`
const New=styled.div`
  margin-bottom:32px;
  display:flex;
`
const NewCheck=styled.div`
  margin-bottom:32px;
  display:flex;
`
const Label=styled.div`
  font-size:16px;
  font-weight:600;
  padding:0 32px;
  flex:0 0 194px;
  text-align:right;
  margin-top:15px;
`
const Input=styled.input`
  border:1px solid #dbdbdb;
  font-size:14px;
  padding:4px 12px;
  border-radius:6px;
  height:40px;
  width:100%;
  margin-right:60px;
  background-color:#fafafa;

  &:focus{
    outline:none;
    border:1px solid #a8a8a8;
  }
`
const Button=styled.button`
  margin-left:194px;
  background-color:#0095f6;
  border:none;
  padding:7px 10px;
  color:white;
  border-radius:4px;
  font-weight:bold;
  margin-bottom:32px;

  &:disabled {
    background-color:#A6D6DD;
    color: #D7F1FA;
  }
`
const A=styled.a`
  font-size:13px;
  font-weight:bold;
  text-decoration:none;
  color:#0095f6;
`
const Forgot=styled.div`
  margin-left:194px;
`

function Password() {
  const [prev,setPrev]=useState(false)
  const [new_,setNew]=useState(false)
  const [newCheck,setNewcheck]=useState(false)

  const onChangePrev=useCallback(e=>{setPrev(true)},[])
  const onChangeNew=useCallback(e=>{setNew(true)},[])
  const onChangeNewCheck=useCallback(e=>{setNewcheck(true)},[])

  return (
    <>
        <ProfileDiv><ProfileImg src='../images/activeStatus/photo.png'></ProfileImg><span>username</span></ProfileDiv>
        <Prev><Label>이전 비밀번호</Label><Input onChange={onChangePrev}/></Prev>
        <New><Label>새 비밀번호</Label><Input onChange={onChangeNew}/></New>
        <NewCheck><Label>새 비밀번호 확인</Label><Input onChange={onChangeNewCheck}/></NewCheck>
        {prev&&new_&&newCheck?<Button>비밀번호 변경</Button>:<Button disabled>비밀번호 변경</Button>}
        <Forgot><A href='https://www.instagram.com/accounts/password/reset/' target='_blank'>비밀번호를 잊으셨나요?</A></Forgot>
    </>
  );
}

export default Password;