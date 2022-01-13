import React from 'react';
import styled from 'styled-components';

const Div=styled.div`
  padding: 10px 60px;
`
const Header=styled.div`
  font-size:1.5rem;
`
const Checkbox=styled.input`
  border:solid 1px gray;
  margin-right:5px;
`
const CheckDiv=styled.div`
  margin: 20px 0 10px 0;
`
const CheckText=styled.div`
  color:gray;
  margin-top:5px;
`

function Emails() {
  return (
    <Div>
      <Header>받아보기:</Header>
      <CheckDiv>
        <Checkbox id='1' type='checkbox'></Checkbox>
        <label for='1'>의견 이메일</label>
        <CheckText>Instagram에서 의견을 보내보세요.</CheckText>
      </CheckDiv>
      <CheckDiv>
        <Checkbox id='2' type='checkbox'></Checkbox>
        <label for='2'>알림 이메일</label>
        <CheckText>확인하지 않은 알림을 받아보세요.</CheckText>
      </CheckDiv>
      <CheckDiv>
        <Checkbox id='3' type='checkbox'></Checkbox>
        <label for='3'>제품 이메일</label>
        <CheckText>Instagram 도구에 관한 팁을 확인해보세요.</CheckText>
      </CheckDiv>
      <CheckDiv>
        <Checkbox id='4' type='checkbox'></Checkbox>
        <label for='4'>뉴스 이메일</label>
        <CheckText>Instagram의 새로운 기능에 대해 자세히 알아보세요.</CheckText>
      </CheckDiv>
    </Div>
  );
}

export default Emails;