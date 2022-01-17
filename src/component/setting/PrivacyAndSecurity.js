import { faLevelDownAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';

const EnDiv=styled.div`
  
`
const Title=styled.h2`
  font-size:24px;
  font-weight:400;
  line-height:27px;
`
const Div=styled.div`
  border-bottom:1px solid #dbdbdb;
  margin-bottom:22px;
  padding-bottom:22px;
  width:80%;
  margin:0 auto;
`
const Input=styled.input`

`
const Label=styled.label`
  font-weight:600;
  font-size:14px;
`
const Text=styled.div`
  color:#8e8e8e;
  font-size:14px;
  font-weight:400;
  line-height:20px;
  margin-top:8px;
`
const Blue=styled.h2`
  color:#0095f6;
  font-size:14px;
  font-weight:bold;
  line-height:18px;
`
const A =styled.a`
  color:#0095f6;
  margin-left:5px;
  font-size:14px;
`

function PrivacyAndSecurity() {
  return (
    <EnDiv>
      <Div>
        <Title>계정 공개 범위</Title>
        <Input type='checkbox' id='t1'></Input>
        <Label for='t1'>비공개 계정</Label>
        <Text>계정이 비공개 상태인 경우 회원님이 승인한 사람만 Instagram에서 회원님의 사진과 동영상을 볼 수 있습니다. 기존 팔로워는 영향을 받지 않습니다.</Text>
      </Div>
      <Div>
        <Title>활동 상태</Title>
        <Input type='checkbox' id='t2'></Input>
        <Label for='t2'>활동 상태 표시</Label>
        <Text>Instagram 앱에서 최근 활동한 시간 정보가 회원님이 팔로우하는 계정 및 메시지를 보낸 모든 사람에게 표시됩니다. 이 설정을 해제하면 다른 계정의 활동 상태를 볼 수 없습니다.</Text>
      </Div>
      <Div>
        <Title>스토리 공유</Title>
        <Input type='checkbox' id='t3'></Input>
        <Label for='t3'>공유 허용</Label>
        <Text>사람들이 회원님의 스토리를 메시지로 공유할 수 있습니다.</Text>
      </Div>
      <Div>
        <Title>댓글</Title>
        <Blue>댓글 설정 수정</Blue>
      </Div>
      <Div>
        <Title>내가 나온 사진</Title>
        <div>
          <Input type='radio' id='t4'></Input>
          <Label for='t4'>자동으로 추가</Label>
        </div>
        <Input type='radio' id='t5'></Input>
        <Label for='t5'>수동으로 추가</Label>
        <Text>회원님이 나온 사진을 프로필에 추가할 방법을 선택하세요. 회원님이 나온 사진에 대해<A herf='https://help.instagram.com/1874272716133511'>더 알아보기</A></Text>
      </Div>
      <Div>
        <Title>계정 데이터</Title>
        <Blue>계정 데이터 보기</Blue>
      </Div>
      <Div>
        <Title>2단계 인증</Title>
        <Blue>2단계 인증 설정 수동</Blue>
      </Div>
      <Div>
        <Title>데이터 다운로드</Title>
        <Blue>다운로드 요청</Blue>
      </Div>
      <Div>
        <Title>개인정보 및 보안 도움말</Title>
        <Blue>지원</Blue>
      </Div>
    </EnDiv>
  );
}

export default PrivacyAndSecurity;