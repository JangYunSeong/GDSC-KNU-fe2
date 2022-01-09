import React,{useState} from 'react';
import styled from 'styled-components';
import Modal from '../component/newPost/modal';
import Story from '../component/activeStatus/story';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare} from '@fortawesome/free-regular-svg-icons';
import { faCog, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const PostIcon=styled.div`
  position:absolute;
  right: 200px;
  top: 20px;
`
const SettingIcon=styled.div`
  position:absolute;
  right: 100px;
  top: 20px;
`
const MainLayout=styled.div`
  width:100vw;
  height:100vh;
  padding-top: 200px;
 `
function Main() {
  const [modal,setModal]=useState(false)
  function onPost(){
    setModal(true)
  }
  function onClose(){
    setModal(false)
  }
  function onSetting(){
    window.location.assign("/setting/edit")
  }
  return (
    <MainLayout>
        <PostIcon>{modal?<FontAwesomeIcon icon={faPlusCircle} size='2x'/>:<FontAwesomeIcon onClick={onPost} icon={faPlusSquare} size='2x'/>}</PostIcon>
        {modal?<Modal onClose={onClose}></Modal>:null}
        <Story></Story>
        <SettingIcon><FontAwesomeIcon onClick={onSetting} icon={faCog} size='2x'></FontAwesomeIcon></SettingIcon>
    </MainLayout>
  );
}

export default Main;