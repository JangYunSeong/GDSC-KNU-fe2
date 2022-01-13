import React from 'react';
import styled from 'styled-components';

const TextDiv=styled.div`
  width:100%;
`
const Div=styled.div`
  width:80%;
  margin:0 auto;
`
const Title=styled.h1`
  font-size:24px;
  margin-bottom:15px;
`
const P1=styled.p`
  font-size:16px;
  margin-bottom:20px;
  line-height:1.37;
`
const P2=styled.p`
  font-size:16px;
  line-height:1.37;
  margin-bottom:25px;
`
const CallDiv=styled.div`
  width:100%;
`
const CallTitle=styled.h1`
  font-size:16px;
  border-bottom:solid 1px #dbdbdb;
  font-weight:bold;
  padding-bottom:10px;
`
const PriDiv=styled.div`
  width:100%;
  padding:20px 10px;
  font-weight:600;
`
const Name=styled.h1`
  margin-bottom:10px;
  font-size:16px;
`
const Phone=styled.h1`
  font-size:16px;
`

function ContactHistory() {
  return (
    <Div>
    <TextDiv>
      <Title>연락처 관리</Title>
      <P1>Instagram에 업로드한 연락처 리스트입니다. 동기화된 연락처를 삭제하려면 모두 삭제를 누르세요. 기기 설정으로 이동하여 연락처에 대한 액세스 권한을 해제하지 않는 한 다음번에 Instagram이 연락처를 동기화할 때 연락처가 다시 업로드됩니다.</P1>
      <P2>업로드한 연락처 정보는 Instagram이 회원님에게 친구를 추천하거나 이용 환경을 개선하는 데 사용됩니다. 이 연락처 정보는 회원님만 볼 수 있습니다.</P2>
    </TextDiv>
    <CallDiv>
      <CallTitle>동기화된 연락처 3개</CallTitle>
      <PriDiv>
        <Name>홍길동</Name>
        <Phone>01012345678</Phone>
      </PriDiv>
      <PriDiv>
        <Name>홍길동</Name>
        <Phone>01012345678</Phone>
      </PriDiv>
      <PriDiv>
        <Name>홍길동</Name>
        <Phone>01012345678</Phone>
      </PriDiv>
    </CallDiv>
    </Div>
  );
}

export default ContactHistory;