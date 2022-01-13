import React, {useState,useCallback} from 'react';
import styled from 'styled-components';

const Title=styled.h1`
  font-size:28px;
  line-height:32px;
  font-weight:300;
  margin-left:60px;
`

const ButtonDiv=styled.div`
  display:flex;
  margin-top:20px;
  width:100%;
`
const Button=styled.button`
  color:gray;
  border:none;
  border-bottom:solid 1px gray;
  background-color:white;
  padding: 14px 0;
  font-size:16px;
  text-align:center;
  width:200px;
  &:hover{
    color:black;
    border-bottom:solid 2px black;
    font-weight:500;
  }
`
const Div=styled.div`
  width:600px;
  margin-left:60px;
`
const Text_bold=styled.div`
  color:black;
  font-size:1rem;
  margin-top:20px;
  line-height:1.57;
`
const Text_gray=styled.div`
  color: gray;
  margin-top:20px;
`
function ManageAccess() {
  const [active,setActive]=useState(true)
  const [expire,setExpire]=useState(false)
  const [deleted,setDeleted]=useState(false)

  function onCurrent(cur){
    if (cur=='active'){
        setActive(true)
        setExpire(false)
        setDeleted(false)
    }
    else if(cur=='expire'){
        setActive(false)
        setExpire(true)
        setDeleted(false)
    }
    else if(cur=='deleted'){
        setActive(false)
        setExpire(false)
        setDeleted(true)
    }
  }
  return (
    <>
      <Title>앱 및 웹사이트</Title>
      {active? <Div>
        <ButtonDiv>
          <Button style={{color:'black',borderBottom:'solid 2px black',fontWeight:'500'}}>활성</Button>
          <Button onClick={()=>{onCurrent('expire')}}>만료됨</Button>
          <Button onClick={()=>{onCurrent('deleted')}}>삭제됨</Button>
        </ButtonDiv>
        <Text_bold> Instagram을 사용하여 로그인하고 최근에 사용했으며, 회원님이 공유하기로 선택한 정보를 요청할 수 있는 앱과 웹사이트입니다.</Text_bold>
        <Text_gray> Instagram 계정에 액세스하도록 허용한 앱이 없습니다.</Text_gray></Div>:
        null}
      {expire? <Div>
        <ButtonDiv>
          <Button onClick={()=>{onCurrent('active')}}>활성</Button>
          <Button style={{color:'black',borderBottom:'solid 2px black',fontWeight:'500'}}>만료됨</Button>
          <Button onClick={()=>{onCurrent('deleted')}}>삭제됨</Button>
        </ButtonDiv>
        <Text_bold> 회원님이 Instagram을 사용하여 로그인하고 한동안 사용하지 않은 앱과 웹사이트입니다. 이 앱과 웹사이트는 아직 회원님이 이전에 공유한 정보를 가지고 있을 수 있지만, 추가로 개인정보를 요청할 수는 없습니다. 앱에 회원님의 정보 삭제를 요청할 수 있습니다. 정보 삭제를 요청하려면 해당 앱의 개인정보처리방침에 명시된 자세한 내용과 연락처 정보를 검토하세요. 앱에 연락하는 경우 사용자 ID가 필요할 수 있습니다.</Text_bold>
        <Text_gray> Instagram 계정에 액세스가 만료된 앱이 없습니다.</Text_gray></Div>
        :null}
      {deleted? <Div>
        <ButtonDiv>
          <Button onClick={()=>{onCurrent('active')}}>활성</Button>
          <Button onClick={()=>{onCurrent('expire')}}>만료됨</Button>
          <Button style={{color:'black',borderBottom:'solid 2px black',fontWeight:'500'}}>삭제됨</Button>
        </ButtonDiv>
        <Text_bold> 회원님이 계정에서 삭제한 앱과 웹사이트입니다. 이 앱과 웹사이트는 아직 회원님이 이전에 공유한 정보를 가지고 있을 수 있지만, 추가로 정보를 요청할 수는 없습니다. 앱에 회원님의 정보 삭제를 요청할 수 있습니다. 정보 삭제를 요청하려면 해당 앱의 개인정보처리방침에 명시된 자세한 내용과 연락처 정보를 검토하세요. 앱에 연락하는 경우 사용자 ID가 필요할 수 있습니다.</Text_bold>
        <Text_gray> Instagram 계정에 대한 액세스 권한을 보유한 앱 중 삭제된 앱이 없습니다.</Text_gray></Div>
        :null}
    </>
  );
}

export default ManageAccess;