import React from "react";
import styled from "styled-components";
import Group from "../assets/image/Group.png";

function Tracks(){

    
   return (
        <Box>
            <Registry>
                <h1>Ler Capitulo 1</h1>
                <h2>Sequencia atual : 3 dias</h2>
                <h2>seu recorde : 5 dias</h2>
            </Registry>
            <Button>
                <img src={Group} />
            </Button>
        </Box>
)
}


export default Tracks

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100px;
    margin: 10px 10px 10px 10px;
    background-color: white;
    border: 1px solid #e7e7e7;
`

const Registry = styled.div`
    display:flex ;
    flex-direction: column;
    
    h1{
        font-family: "Lexend Deca", sans-serif;
        font-size: 20px; 
        font-weight: 400;
        color: #666666;
        margin: 5px 0px 10px 5px
    }
    
    h2{
        font-family: "Lexend Deca", sans-serif;
        color: #666666;
        font-weight: 400;
        font-size: 13px;
        margin: 0px 0px 0px 5px
    }
`

const Button = styled.button`
    width: 69px;
    height: 69px;
    border-radius: 5px;
    border: 1px solid #e7e7e7 ;
    background-color: #e7e7e7;
    margin: 15px 10px 0px 0px;

`