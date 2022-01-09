import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Edit from './Edit';

const Div=styled.div`
  display:flex;
  justify-content:center;
`
const Div_=styled.div`
  border:solid 1px #dbdbdb;
  width:50%;
  min-width:50px;
`
const MarginDiv=styled.div`
  margin:32px auto;
`

function SettingLayout({children}) {
  return(
    <Div>
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