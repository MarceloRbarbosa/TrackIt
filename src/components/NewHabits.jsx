import React, { useState } from "react";
import styled from "styled-components";


function NewHabits(){
     const [newHabit, setNewHabit]=([]);
     const days = [
        {label: "D", name:"domingo"},
        { label: "S", name: "segunda" },
        { label: "T", name: "terca" },
        { label: "Q", name: "quarta" },
        { label: "Q", name: "quinta" },
        { label: "S", name: "sexta" },
        { label: "S", name: "sabado" }
    ]  
        
        const [selected, setSelected] = useState([]);

        function toggleDay(name){
            if (selected.includes(name)){
               setSelected(selected.filter((day) => day !== name));
            } else {
                setSelected([...selected, name]);
            }
            }
        
    return(
        <AddHabits>
            <form>
                <NameInput id='name' name="name" placeholder="nome do hábito" onChange={e => setNewHabit(e.target.value)} value={newHabit} required/>
                <Buttons>
                    {days.map((d , index)=>
                   <Button 
                        key ={index} 
                        selected = {selected.includes(d.name)}
                        onClick ={()=> toggleDay(d.name)}
                        required
                    >
                        <WeekDay>{d.label}</WeekDay>
                    </Button>
                )}
                </Buttons>
            </form>
            <Confirm>
                <Cancel>Cancelar</Cancel>
                <Save>Salvar</Save>
            </Confirm>
            
        </AddHabits>
    );
}

export default NewHabits



const AddHabits = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 10px 10px 10px;
    height:180px;
    background-color: white;
    position: relative;
`

const NameInput = styled.input`
    height: 45px;
    width: 80%;
    border: 1px solid #d4d4d4;
    margin: 20px 10px 10px 10px;
    
    &::placeholder{
        font-family: "Lexend Deca", sans-serif;
        color: #dbdbdb;
        font-size: 20px;
        font-weight: 400;
    }
`

const Buttons = styled.div`
    display: flex;
    gap: 5px;
    margin: 0px 10px 10px 10px;
` 

const Button = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    background-color: white;
`

const WeekDay = styled.span`
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #dbdbdb;
`

const Confirm = styled.div`
    position: absolute;
    bottom: 20px;
    right: 20px;
    
`
const Cancel = styled.button`
font-size: 16px;
font-weight: 400;
background-color: WHITE;
color: #52b6ff;
width: 69px;
height: 20px;
border:none;
font-family: "Lexend Deca", sans-serif;
`
const Save = styled.button`
    width: 84px;
    height: 35px;
    border-radius: 4.64px;
    border: 1px solid #52b6ff;
    background-color:#52b6ff;
    font-family: "Lexend Deca", sans-serif;
    color: white;
    font-size: 16px;
    font-weight: 400;
    margin-left: 30px;
`