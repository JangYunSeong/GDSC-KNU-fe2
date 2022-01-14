import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPhotoVideo} from '@fortawesome/free-solid-svg-icons';

const ModalDiv=styled.div`
  width:50%;
  height:100%;
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
  width: 350px;
  height: 360px;
  background-color:white;
  border-radius:12px;
  text-align:center;
  animation:${blowUpModal} 0.3s cubic-bezier(0.165,0.84,0.44,1) forwards;
`
const Close=styled.div`
  color:white;
  position:absolute;
  top:20px;
  right:20px;
`
const TitleDiv=styled.div`
  height:50px;
  font : apple-system;
  font-size:0.9rem;
  font-family : "Montserrat", sans-serif;
  border-bottom:solid 1px lightgray;
  display:flex;
  align-items:center;
  justify-content:center;
`
const TitleDivRed=styled.div`
  height:50px;
  color : #ED4956;
  font-size:0.9rem;
  font-family : "Montserrat", sans-serif;
  border-bottom:solid 1px lightgray;
  display:flex;
  align-items:center;
  justify-content:center;
`
const LastDiv=styled.div`
  height:50px;
  display:flex;
  font-size:0.9rem;
  font-family : "Montserrat", sans-serif;
  align-items:center;
  justify-content:center;
`
const Title=styled.h1`
  font-weight:700;
  font-size:1.1rem;
`
function Modal({onClose}) {
  function onClick(){
    onClose()
  }
  return (
    <ModalDiv>
      <PopupDiv>
        <TitleDivRed>신고</TitleDivRed>
        <TitleDivRed>팔로우 취소</TitleDivRed>
        <TitleDiv>게시물로 이동</TitleDiv>
        <TitleDiv>공유 대상...</TitleDiv>
        <TitleDiv>링크 복사</TitleDiv>
        <TitleDiv>퍼가기</TitleDiv>
        <LastDiv onClick = {onClose}>취소</LastDiv>
      </PopupDiv>
    </ModalDiv>
  );
}

export default Modal;