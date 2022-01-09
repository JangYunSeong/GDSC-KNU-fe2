import React, { useState } from 'react';
import styled from 'styled-components';

const Div=styled.div`
  width:236px;
  border:solid 1px #dbdbdb;
`
const Button=styled.div`
  font-size:16px;
  color:#262626;
  padding:16px 16px 16px 30px;
  width:100%;
  height:52px;
`

function Menu() {
  function onMenu(menu){
    return(
      window.location.assign("/setting/"+menu)
    )
  }
  return (
    <Div>
      <Button onClick={()=>{onMenu('edit')}}> 프로필 편집 </Button>
      <Button onClick={()=>{onMenu('password')}}>비밀번호 변경</Button> 
      <Button onClick={()=>{onMenu('manage_access')}}>앱 및 웹사이트</Button>
      <Button onClick={()=>{onMenu('emails')}}>이메일 및 SMS</Button>      
      <Button onClick={()=>{onMenu('push')}}>푸시 알림</Button>
      <Button onClick={()=>{onMenu('contact_history')}}>연락처 관리</Button>
      <Button onClick={()=>{onMenu('privacy_and_security')}}>개인정보 및 보안</Button>
      <Button onClick={()=>{onMenu('login_activity')}}>로그인 활동</Button>
      <Button onClick={()=>{onMenu('emails_sent')}}>Instagram에서 보낸 이메일</Button>     
      <Button onClick={()=>{onMenu('help')}}>도움말</Button>
    </Div>
  );
}

export default Menu;