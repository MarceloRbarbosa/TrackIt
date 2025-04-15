import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

dayjs.locale("pt-br");


function DayTitle() {
  const today = dayjs();
  const dateFormat = today.format("dddd, DD/MM")
  const shortDay = dateFormat.replace(/-feira/, "");
  
  const capitalizedDate = dateFormat.charAt(0).toUpperCase() + shortDay.slice(1);

  return <Title>{capitalizedDate}</Title>;
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
