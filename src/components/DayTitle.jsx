import React from "react";
import styled from "styled-components";




function DayTitle() {
  const today = new Date();
  const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  const dayName = weekdays[today.getDay()];
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");

  return <Title>{`${dayName}, ${day}/${month}`}</Title>;
}

export default DayTitle;

const Title = styled.div`
  margin-top: 100px;
  margin-left: 15px;
  font-size: 23px;
  font-weight: 400;
  font-family: "Lexend Deca", sans-serif;
  color: #126ba5;
`;
