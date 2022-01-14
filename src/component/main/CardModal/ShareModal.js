import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPhotoVideo} from '@fortawesome/free-solid-svg-icons';

const ModalDiv=styled.div`
  width:50vw;
  height:100vh;
  background-color:rgba(0,0,0,0.6);
  display:flex;
  vertical-align: middle;
  align-items:center;
  justify-content:center;
  position:absolute;
  top:0;
  z-index:1000;
`
const blowUpModal=keyframes`
  0% { transform: scale(0); } 
  100% { transform: scale(1);}
`
const PopupDiv=styled.div`
  width: 500px;
  height: 600px;
  background-color:white;
  border-radius:12px;
  text-align:center;
  animation:${blowUpModal} 0.3s cubic-bezier(0.165,0.84,0.44,1) forwards;
`
const Close=styled.div`
  color:black;
  position:absolute;
  top:15px;
  right:20px;
`
const TitleDiv=styled.div`
  height:10%;
  border-bottom:solid 1px lightgray;
  display:flex;
  align-items:center;
  justify-content:center;
`
const TitleSend=styled.div`
  height:10%;
  padding-left : 10px;
  border-bottom:solid 1px lightgray;
  display:flex;
  align-items:left;
  justify-content:left;
`
const Title=styled.h1`
  font-size:1rem;
`
const Content = styled.h1`
    height:5%;
    padding-left : 10px;
    font-size:0.9rem;
    display:flex;
    align-items:left;
    justify-content:left;
`
const PVdiv=styled.div`
  padding:24px;
  width:100%:
  height:100%;
  display:flex;
  align-items:center; 
  justify-content:center;
  border-bottom:solid 1px lightgray;
  padding-top:300px;
`

const SendButton = styled.button`
  width : 80%:
  height : 80%;
  background-color : #0095f6;    
  border-radius:5px;
`
const Search = styled.input`
    padding-left : 10px;
    color: #8e8e8e;
    width : 80%;
    height : 80%;
    border:none; border-right:0px; border-top:0px; border-left:0px; border-bottom:0px;
    &:focus{
        outline: none;
    }
`
function Modal({onClose}) {
  function onClick(){
    onClose()
  }
  return (
    <ModalDiv>
      <PopupDiv>
        <TitleDiv>
            <Title>공유</Title>
            <Close onClick={onClick}><FontAwesomeIcon icon={faTimes} size='2x'/></Close>
        </TitleDiv>
        <Content>받는 사람 : </Content>
        <TitleSend>
            <Search type = "text" placeholder ="검색..."/>
        </TitleSend>
        <Content>추천</Content>
        <PVdiv>
        </PVdiv>
        <TitleDiv><SendButton>보내기</SendButton></TitleDiv>
      </PopupDiv>
    </ModalDiv>
  );
}

export default Modal;