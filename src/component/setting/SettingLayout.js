import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Edit from './Edit';
import Navigation from '../main/Navigation';
const Div=styled.div`
  display:flex;
  justify-content:center;
  margin-top:80px;
`
const Div_=styled.div`
  border:solid 1px #dbdbdb;
  width:50%;
  min-width:50px;
`
const MarginDiv=styled.div`
  margin:32px auto;
`
const MarginDiv_=styled.div`
  margin-top:80px;
  display:flex;
  justify-content:center;
`
function SettingLayout({children}) {
  return(
    <Div>
      <Navigation/>
       <Menu></Menu>
       <Div_>
          <MarginDiv>
            {children}
          </MarginDiv>
       </Div_>
    </Div>
  )
}

export default SettingLayout;