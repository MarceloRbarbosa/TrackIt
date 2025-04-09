import React from "react";
import styled from "styled-components";
import simbol from "../assets/image/+.png";


function Title(){
    return(
        <Main>
            <p>Meus hábitos</p>
            <button>
                <img src={simbol}/>
            </button>
        </Main>

    )
}

export default Title


const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    margin-top: 80px;

    p{
        font-family: "Lexend Deca", sans-serif;
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
        margin-left: 15px;
    }

    button {
        width: 40px;
        height: 35px;
        border: 1px solid #52B6FF;
        border-radius: 4.64px;
        background-color: #52B6FF;
        margin-right: 15px;    
    }
`