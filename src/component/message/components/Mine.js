import React, {useState} from "react";
import styled from "styled-components";
import { ReactComponent as New} from "../../../images/newmessage.svg";
import { ReactComponent as Vicon} from "../../../images/vicon.svg";

function Mine(props){
    const {userNames, sendUserInfo} = props;
    const [show,setShow] = useState(false);

    return(
        <Mines>
            <div className = "Select">
                <option value = "">{userNames}</option>
                <Vicon/>
            </div>
            <IconBox onClick = {() => setShow(true)}>
                <New className = "icon"/>
            </IconBox>
        </Mines>
    );
}

export default Mine;

const Mines = styled.div`
    display : flex;
    width : 349px;
    height : 60px;
    padding : 0 20px;
    font-weight : bold;
    border-bottom : 1px solid #c7c7c7;
    border-right : 1px solid #c7c7c7;

    .Select{
        display : flex;
        align-items : center;
        margin : 20px auto;
        font-size : 16px;
        border : none;
        outline : none;
    }
`;
const IconBox = styled.div`
    .icon {
        font-size : 24px;
        margin-top : 15px;
        cursor : pointer;
    }
`;