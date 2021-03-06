import './login.css'; 
import React from 'react';
import Logo from './pictures/logingif.gif';
import Appstore from './pictures/appstoredownload.JPG';
import Google from './pictures/googleplaydownload.JPG';

function Login(){

    function onSignup(){
        window.location.assign("./Signup");
    }
    function onMain(){
        window.location.assign("/");
    }
    return(
    <>
        <head>
            <title>Instagram</title>
            <link rel="stylesheet" href="./login.css" />
        </head>
        <body>
            <div class="container">
            <div class="blank"></div>
            <div class="loginpic">
                <img class="gif" src={Logo}/>
            </div>

            <div class="loginspace">
            <div class="top">
                <h1 class="instafont">Instagram</h1>
                <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                <input type="text" placeholder="비밀번호"/>
                <button class="loginbtn" onClick = {onMain}>로그인</button>
                <div class="or">또는</div>
            <div class="facebooklogin"><a class="facebooklogin" href="#">Facebook으로 로그인</a></div>
            <div class="forgetpw"><a class="forgetpw" href="https://www.instagram.com/accounts/password/reset/">비밀번호를 잊으셨나요?</a></div>
            </div>
        <div class="middle">
          계정이 없으신가요? <a onClick = {onSignup}>가입하기</a>
        </div>
        <div class="bottom">
          앱을 다운로드하세요.<br />
          <img class="download" src={Appstore}/>
          <img class="download" src={Google}/>
        </div>
      </div>

      <div class="blank"></div>
    </div>
    <div class="link">
      <a class="graylink" href="https://about.facebook.com/meta">Meta</a>
      <a class="graylink" href="https://about.instagram.com/">소개</a>
      <a class="graylink" href="https://about.instagram.com/blog">블로그</a>
      <a class="graylink" href="https://about.instagram.com/about-us/careers">채용 정보</a>
      <a class="graylink" href="https://help.instagram.com/">도움말</a>
      <a class="graylink" href="https://developers.facebook.com/docs/instagram">API</a>
      <a class="graylink" href="https://help.instagram.com/519522125107875">개인정보처리방침</a>
      <a class="graylink" href="https://help.instagram.com/581066165581870">약관</a>
      <a class="graylink" href="https://www.instagram.com/directory/profiles/">인기 계정</a>
      <a class="graylink" href="https://www.instagram.com/directory/hashtags/">해시태그</a>
      <a class="graylink" href="https://www.instagram.com/explore/locations/">위치</a>
      <a class="graylink" href="https://www.instagram.com/web/lite/">Instagram Lite</a> <br />
      <a class="graylink" href="https://www.instagram.com/topics/beauty/">뷰티</a>
      <a class="graylink" href="https://www.instagram.com/topics/dance-and-performance/">댄스</a>
      <a class="graylink" href="https://www.instagram.com/topics/fitness/">피트니스</a>
      <a class="graylink" href="https://www.instagram.com/topics/food-and-drink/">식음료</a>
      <a class="graylink" href="https://www.instagram.com/topics/home-and-garden/">집 및 정원</a>
      <a class="graylink" href="https://www.instagram.com/topics/music/">음악</a>
      <a class="graylink" href="https://www.instagram.com/topics/visual-arts/">시각 예술</a>
      <br />
      <h2 class="year">© 2022 Instagram from Meta</h2>
        </div>
    </body>
    </>
    );

}

export default Login;
