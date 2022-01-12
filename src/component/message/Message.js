import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MessageBox from "./components/MessageBox";
import Mine from "./components/Mine";
import Navigation from "../main/Navigation";
import SendMessageBox from "./components/SendMessageBox";


function Message() {
  const [toggle, setToggle] = useState(true);
  const [userProfile, setUserProfile] = useState({});
  const [targetUser, setTargetUser] = useState();
  const [targetUserProfile, setTargetUserProfile] = useState();
  const [roomNames, setRoomNames] = useState();
  const [messageData, setMessageData] = useState([]);

  let user_account = userProfile?.user_account;
  return (
    <BackgroundColors>
      <Navigation/>
      <Messages>
          <MessageContainer>
            <SideMenu>
              <Mine userNames = "yuns._.sung"/>
            </SideMenu>
            {toggle ? (
            <MessageBox/>
          ) : (
            <SendMessageBox
              user_account={user_account}
              targetUserProfile={targetUserProfile}
              roomNames={roomNames}
              userProfile={userProfile?.talked_user}
              targetUser={targetUser}
              messageData={messageData}
              setMessageData={setMessageData}
            />
          )}
          </MessageContainer>
      </Messages>
    </BackgroundColors>
  );
}

export default Message;


const BackgroundColors = styled.div`
  width: 100vw;
  height: 1000px;
  z-index: 1;
  background-color: #fafafa;
`;

const Messages = styled.div`
  width: 970px;
  height: 841px;
  margin: 20px auto;
  margin-top : 70px;
  border: 1px solid #c7c7c7;
  background-color: #fff;
  z-index: 3;
`;

const MessageContainer = styled.div`
  display: flex;
`;

const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
`;