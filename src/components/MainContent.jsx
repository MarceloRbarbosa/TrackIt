import React from "react";
import styled from "styled-components";
import NewHabits from "./NewHabits";

function MainContent({ showNewHabit, setShowNewHabit={setShowNewHabit} }) {
  return (
    <>
      {showNewHabit && <NewHabits />}
      <Mensage>
        <span>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </span>
      </Mensage>
    </>
  );
}

export default MainContent;

const Mensage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 20px;

  span {
    font-size: 18px;
    color: #666666;
  }
`;
