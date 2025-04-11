import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";

function Title({ onClick }) {
  return (
    <Main>
      <p>Meus hábitos</p>
      <button onClick={onClick}>
        <CustomAddIcon />
      </button>
    </Main>
  );
}

export default Title;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  margin-top: 80px;

  p {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 23px;
    color: #126ba5;
    margin-left: 15px;
  }

  button {
    width: 40px;
    height: 35px;
    border: 1px solid #52b6ff;
    border-radius: 4.64px;
    background-color: #52b6ff;
    margin-right: 15px;
  }
`;
const CustomAddIcon = styled(AddIcon)`
  color: #ffffff;
`;
