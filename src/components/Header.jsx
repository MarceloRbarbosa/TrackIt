import { useContext, useState } from "react"
import styled from "styled-components"
import UserContext from "../Contexts/UserContext"

function Header(){
    const {user}= useContext(UserContext);

    return(
     <TopBar>
        <p>TrackIt </p>
        <img src={user.image}/>
     </TopBar>
    )
}

export default Header


const TopBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0%;
    background-color: #126ba5;

    p {
        font-family: "Playball", cursive;
        font-weight: 400;
        font-size: 40px;
        color: white;
        padding: 5px;
        margin-left: 10px;
    }

    img { 
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
        padding: 5px;
        margin-right: 10px;
    }
`