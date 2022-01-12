import React, {useEffect, useState, useRef} from "react";
import styled from "styled-components";

function SendMessageBox(props){
    const{
        user_account,
        targetUser,
        targetUserProfile,
        roomNames,
        messageData,
        setMessageData,
    } = props;
    const [message, setMessage] = useState("");
    const [scroll, setScroll] = useState("0");

    const messagesEndRef = useRef(null);

    const scrollToBottom = () =>{
        messagesEndRef.current.scrollIntoView({block : "end"});
    };
    useEffect(scrollToBottom, [messageData]);

  const onScroll = (e) => {
    e.stopPropagation();
    const scrollTop = messagesEndRef.current.scrollTop;

    setScroll(scrollTop);
  };
    const imageStyle = {
        width : "35px",
        height : "35px",
        marginRight : "15px",
        borderRadius : "50%",
    };

    return (
        <SendMessageBoxs>
            <SendMessageContainer>
                <UserInfoContainer>
                    <UserProfile>
                        <span>{targetUser}</span>
                    </UserProfile>
                    <i className = "icon far fa-question-circle"/>
                </UserInfoContainer>
                <ScrollContainer onScroll = {onScroll}>
                    {messageData?.map((item,index) => {
                        const {created_at, message} = item;
                        return (
                            <>
                              <MessageContainer key={index}>
                                <MessageList>
                                  {item.user_account === user_account ? (
                                    <PostUserContainer>
                                      <p>{created_at}</p>
                                      <PostUser need={message.length > 20}>
                                        <Span>{message}</Span>
                                      </PostUser>
                                    </PostUserContainer>
                                  ) : (
                                    <SendUserContainer>
                                      <SendUser need={message.length > 20}>
                                        <Span>{message}</Span>
                                      </SendUser>
                                      <p>{created_at}</p>
                                    </SendUserContainer>
                                  )}
                                </MessageList>
                              </MessageContainer>
                            </>
                        );
                    })}
                    <div ref = {messagesEndRef}/>
                </ScrollContainer>
            </SendMessageContainer>
        </SendMessageBoxs>
    )
}

export default SendMessageBox;

const SendMessageBoxs = styled.div`
  width: 650px;
  height: 60px;
  border-bottom: 1px solid #c7c7c7;
`;

const SendMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 830px;
`;

const ScrollContainer = styled.div`
  height: 680px;
  overflow: scroll;
  overflow-x: hidden;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 550px;
  margin: 10px auto;
`;

const MessageList = styled.div``;

const PostUserContainer = styled.div`
  display: flex;
  float: right;
  align-items: flex-end;
  p {
    font-size: 11px;
    color: #5c5c5c;
    display: none;
  }
  &:hover p {
    display: block;
  }
`;

const PostUser = styled.div`
  float: right;
  word-wrap: ${(props) => props.need && "break-word"};
  max-width: ${(props) => props.need && "240px"};
  max-height: ${(props) => props.need && "100%"};
  border-radius: 20px;
  background-color: #f2f2f2;
  padding: 8px 12px;
`;

const Span = styled.span`
  font-size: 14px;
`;

const SendUserContainer = styled.div`
  display: flex;
  float: left;
  align-items: flex-end;
  p {
    font-size: 11px;
    color: #5c5c5c;
    display: none;
  }
  &:hover p {
    display: block;
  }
`;

const SendUser = styled.div`
  float: left;
  word-wrap: ${(props) => props.need && "break-word"};
  max-width: ${(props) => props.need && "240px"};
  max-height: ${(props) => props.need && "100%"};
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  background-color: #fff;
  padding: 8px 12px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  width: 90%;
  .icon {
    margin-top: 4px;
    font-size: 25px;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 15px;
    font-weight: bold;
  }
`;
