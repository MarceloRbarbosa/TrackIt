import { useState } from "react"
import styled from "styled-components"
import perfilLogo from "../assets/image/logo.png"

function Header(){
    const [image , setImage]= useState(perfilLogo)

    return(
     <Top>
        <p>TrackIt </p>
        <img src={image}/>
     </Top>
    )
}

export default Header


const Top = styled.div`
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