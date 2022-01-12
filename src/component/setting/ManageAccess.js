import React, {useState,useCallback} from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin-top :80px;
`

const Title=styled.h1`
  font-size:28px;
  line-height:32px;
  font-weight:300;
`

const ButtonDiv=styled.div`
  display:flex;
`
const Button=styled.button`
  color:gray;
  border:none;
  border-bottom:solid 1px gray;
  background-color:white;
  padding: 14px 0;
  font-size:16px;
  text-align:center;
  width:150px;

  &:hover{
    color:black;
    border-bottom:solid 2px black;
    font-weight:400;
  }
`
function ManageAccess() {
  const [active,setActive]=useState(true)
  const [expire,setExpire]=useState(false)
  const [delete_,setDelete]=useState(false)

  return (
    <Div>
      <Title>앱 및 웹사이트</Title>
      <ButtonDiv>
        <Button>활성</Button>
        <Button>만료됨</Button>
        <Button>삭제됨</Button>
      </ButtonDiv>
    </Div>
  );
}

export default ManageAccess;