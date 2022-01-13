import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPhotoVideo} from '@fortawesome/free-solid-svg-icons';

const ModalDiv=styled.div`
  width:100vw;
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
  height: 500px;
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
  height:10%;
  border-bottom:solid 1px lightgray;
  display:flex;
  align-items:center;
  justify-content:center;
`
const Title=styled.h1`
  font-weight:700;
  font-size:1.1rem;
`
const PVdiv=styled.div`
  padding:24px;
  width:100%:
  height:100%;
  display:flex;
  align-items:center; //정렬안들어가는 이유?
  justify-content:center;
  padding-top:100px;
`
const PVicon=styled.div`
  margin-bottom:20px;
`
const PVtext=styled.div`
  font-size:1.5rem;
  font-weight:300;
  margin-bottom:20px;
`
const PVbutton=styled.button`
  border:none;
  border-radius:4px;
  color:white;
  font-size:0.875rem;
  font-weight:600;
  background-color:#0095f6;
  padding: 5px 9px;
`
function Modal({onClose}) {
  function onClick(){
    onClose()
  }
  return (
    <ModalDiv>
      <PopupDiv>
        <TitleDiv><Title>새 게시물 만들기</Title></TitleDiv>
        <PVdiv>
        <div>
        <PVicon><FontAwesomeIcon icon={faPhotoVideo} size='5x'/></PVicon>
        <PVtext>사진과 동영상을 여기에 끌어다 놓으세요</PVtext>
        <PVbutton>컴퓨터에서 선택</PVbutton>
        </div>
        </PVdiv>
      </PopupDiv>
      <Close onClick={onClick}><FontAwesomeIcon icon={faTimes} size='2x'/></Close>
    </ModalDiv>
  );
}

export default Modal;