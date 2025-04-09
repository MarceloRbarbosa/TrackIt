import { useState } from "react"
import styled from "styled-components"


function Footer(){
    return(
        <Bottom>
            <Habitos>
                {/* <icone></icone> */}
                <h1>Hábitos</h1>
            </Habitos>
            <Hoje>
                {/* <icone></icone> */}
                <h2>Hoje</h2>
            </Hoje>
        </Bottom>
       )
}

export default Footer


const Bottom = styled.div`
    
    display: flex;
    width: 100%;
    height: 65px;
    position: fixed;
    bottom: 0%;
`

const Habitos = styled.button`
    width: 50%;
    height: 100%;
    border: none;
    background-color: #52b6ff;

    h1{ 
        font-size: 18px;
        font-weight: 400;
        font-family: "Lexend Deca", sans-serif;
        color: white;

    }
`

const Hoje = styled.button`
    width: 50%;
    height: 100%;
    border: none;
    background-color: white;

    h2{
        font-size: 18px;
        font-weight: 400;
        font-family: "Lexend Deca", sans-serif;
        color: #d4d4d4;
    }
`