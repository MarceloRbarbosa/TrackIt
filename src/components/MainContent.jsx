import React from "react";
import styled from "styled-components";
import NewHabits from "./NewHabits";

function MainContent({ showNewHabit, setShowNewHabit, habits, setHabits }) {
  return (
    <BoxContainer>
      {showNewHabit && (
        <NewHabits setShowNewHabit={setShowNewHabit} setHabits={setHabits} />
      )}
      {habits.length === 0 ? (
        <Mensage>
          <span>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </span>
        </Mensage>
      ) : (
        habits.map((habit, index) => (
          <HabitTrack key={index}>
            <HabitSpan>{habit.name}</HabitSpan>
            <DaysContainer>
              {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => (
                <Day key={dayIndex} selected={habit.days.includes(dayIndex)}>
                  {["D", "S", "T", "Q", "Q", "S", "S"][dayIndex]}
                </Day>
              ))}
            </DaysContainer>
          </HabitTrack>
        ))
      )}
    </BoxContainer>
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

const HabitTrack = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 15px 10px 15px;
  height: 91px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 15px;
  margin-top: 10px;
`;

const HabitSpan = styled.span`
  font-family: "Lexend Deca", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #666666;
`;

const DaysContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 10px;
`;

const Day = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.selected ? "#cfcfcf" : "#ffffff")};
  color: ${(props) => (props.selected ? "#ffffff" : "#dbdbdb")};
  font-family: "Lexend Deca", sans-serif;
  font-size: 20px;
`;

const BoxContainer = styled.div`
  margin-bottom: 80px;
`;
