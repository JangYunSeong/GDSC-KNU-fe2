import React,{useState} from 'react';
import styled from 'styled-components';

const Div=styled.div`
`
const Align=styled.div`
  width:80%;
  margin:0 auto;
`
const Title=styled.div`
  font-weight:300;
  font-size:22px;
  line-height:26px;
`
const B=styled.b`
  font-weight:500;
  font-size:22px;
  line-height:26px;
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
  width:50%;
  &:hover{
    color:black;
    border-bottom:solid 2px black;
    font-weight:500;
  }
`

const Text_gray=styled.div`
  color: gray;
  margin-top:20px;
  font-size:18px;
  line-height:1.37;
`
const A=styled.a`
  color:#00376b;
  font-size:1rem;
`
const TextDiv=styled.div`
  border-top:solid 1px #dbdbdb;
  padding-top:10px;
  margin-top:20px;
`
const LoginTextB=styled.p`
  font-weight:600;
  font-size:14px;
  margin:0;
`
const LoginText=styled.p`
  font-size:14px;
  margin:0;
`
const LoginTextG=styled.p`
  color:#8e8e8e;
  font-size:14px;
  margin:0;
`
function EmailSent() {
  const [security,setSecurity]=useState(true)
  const [etc,setEtc]=useState(false)
  function onCurrent(cur){
    if (cur=='security'){
        setSecurity(true)
        setEtc(false)
    }
    else if(cur=='etc'){
        setSecurity(false)
        setEtc(true)
    }
  }
  return (
    <Align>
      <Title><B>Instagram</B>에서 보낸 이메일</Title>
      {security? <Div>
        <ButtonDiv>
          <Button style={{color:'black',borderBottom:'solid 2px black',fontWeight:'500'}}>보안</Button>
          <Button onClick={()=>{onCurrent('etc')}}>기타</Button>
        </ButtonDiv>
        <Text_gray> 최근 14일 동안 Instagram에서 보낸 보안 및 로그인 이메일이 여기에 표시됩니다. 이 리스트를 사용하여 회원님이 받은 이메일이 실제 Instagram에서 보낸 것이 맞는지 확인할 수 있습니다. <A href='https://help.instagram.com/760602221058803'>더 알아보기.</A></Text_gray>
        <TextDiv>
        <LoginTextB>Mac OS X에서 Chrome 브라우저를 통해 새로운 Instagram 로그인 발생</LoginTextB>
        <LoginText>2022년 1월 5일 오후 2:04</LoginText>
        <LoginTextG>받는 사람: hong1234@gmail.com · security@mail.instagram.com에서 전송됨</LoginTextG>
        </TextDiv>
        </Div>:
        null}
      {etc? <Div>
        <ButtonDiv>
          <Button onClick={()=>{onCurrent('security')}}>보안</Button>
          <Button style={{color:'black',borderBottom:'solid 2px black',fontWeight:'500'}}>기타</Button>
        </ButtonDiv>
        <Text_gray>최근 14일 동안 Instagram에서 보낸 보안 및 로그인 외 다른 내용의 이메일이 여기에 표시됩니다. 이 리스트를 사용하여 회원님이 받은 이메일이 실제 Instagram에서 보낸 것이 맞는지 확인할 수 있습니다.<A href='https://help.instagram.com/760602221058803'>더 알아보기.</A></Text_gray></Div>
        :null}
    </Align>
  );
}

export default EmailSent;
