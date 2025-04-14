import React from "react";
import styled from "styled-components";
import CheckIcon from '@mui/icons-material/Check';
import { useContext } from "react";
import UserContext from "../Contexts/UserContext";
import axios from "axios";


function Tracks({id, title, currentSequence, done, recordSequence, setHabits}){
    const { token } = useContext(UserContext);


    function toggleCheckHabit() {     
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config)
        .then(() => {
            setHabits((prevHabits) =>
              prevHabits.map(h =>
                h.id === id ? { ...h, done: true } : h
              )
            );
        })
        .catch((err) => {
            console.log(err);
            alert("Erro ao marcar hábito como feito.");
          });
        }
   return (
        <Box>
            <Registry>
                <h1>{title}</h1>
                <Sequence>Sequência atual: {currentSequence} dias</Sequence>
                <Record>Seu recorde: {recordSequence} dias</Record>
            </Registry>
            <Button  $done={done} onClick={toggleCheckHabit}>
                <CustomCheckIcon  />
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
    border-radius: 5px;
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
`

const Button = styled.button`
    width: 69px;
    height: 69px;
    border-radius: 5px;
    border: 1px solid #e7e7e7 ;
    background-color: ${(props) => (props.$done ? "#8FC549" : "#EBEBEB")};
    margin: 15px 10px 0px 0px;

`

const CustomCheckIcon = styled(CheckIcon)`
    color: #ffffff;
`


const Sequence = styled.span`
     font-family: "Lexend Deca", sans-serif;
        color: #666666;
        font-weight: 400;
        font-size: 13px;
        margin: 0px 0px 0px 5px
`
const Record = styled.span`
     font-family: "Lexend Deca", sans-serif;
        color: #666666;
        font-weight: 400;
        font-size: 13px;
        margin: 0px 0px 0px 5px
`