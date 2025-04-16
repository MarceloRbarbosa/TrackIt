import React, { useState, useContext } from "react";
import styled from "styled-components";
import UserContext from "../Contexts/UserContext";
import NewHabitsContext from "../Contexts/NewHabitsContext";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

function NewHabits({ setShowNewHabit, setHabits }) {
  const { newHabit, setNewHabit, selected, setSelected } =
    useContext(NewHabitsContext);
  const { token } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const days = [
    { label: "D", name: "domingo" },
    { label: "S", name: "segunda" },
    { label: "T", name: "terca" },
    { label: "Q", name: "quarta" },
    { label: "Q", name: "quinta" },
    { label: "S", name: "sexta" },
    { label: "S", name: "sabado" },
  ];

  function handleCancel() {
    setShowNewHabit(false);
  }

  function handleSave() {
    if (!newHabit.trim() || selected.length === 0) {
      alert("Preencha o nome do hábito e selecione pelo menos um dia.");
      return;
    }

    const body = {
      name: newHabit,
      days: selected.map((day) => days.findIndex((d) => d.name === day)),
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    setLoading(true);

    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        body,
        config
      )
      .then((res) => {
        setHabits((prev) => [...prev, res.data]);
        setShowNewHabit(false);
        setNewHabit("");
        setSelected([]);
      })
      .catch((err) => {
        alert(err.response.data.message || "Erro ao salvar Habito");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function toggleDay(e, name) {
    e.preventDefault();
    if (selected.includes(name)) {
      setSelected(selected.filter((day) => day !== name));
    } else {
      setSelected([...selected, name]);
    }
  }

  return (
    <AddHabits>
      <form>
        <NameInput
          id="name"
          name="name"
          placeholder="nome do hábito"
          onChange={(e) => setNewHabit(e.target.value)}
          value={newHabit}
          disabled={loading}
          required
        />
        <Buttons>
          {days.map((d, index) => (
            <Button
              key={index}
              type="button"
              selected={selected.includes(d.name)}
              onClick={(e) => toggleDay(e, d.name)}
              disabled={loading}
              required
            >
              {d.label}
            </Button>
          ))}
        </Buttons>
      </form>
      <Confirm>
        <Cancel onClick={handleCancel} disabled={loading}>
          Cancelar
        </Cancel>
        <Save onClick={handleSave} disabled={loading}>
          {loading ? (
            <ClipLoader
              color="#52b6ff"
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            "Salvar"
          )}
        </Save>
      </Confirm>
    </AddHabits>
  );
}

export default NewHabits;

const AddHabits = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px 10px 10px;
  height: 180px;
  background-color: white;
  position: relative;
  border-radius: 5px;
`;

const NameInput = styled.input`
  height: 45px;
  width: 80%;
  border: 1px solid #d4d4d4;
  margin: 20px 10px 10px 10px;

  &::placeholder {
    font-family: "Lexend Deca", sans-serif;
    color: #dbdbdb;
    font-size: 20px;
    font-weight: 400;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 5px;
  margin: 0px 10px 10px 10px;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  background-color: ${(props) => (props.selected ? "#cfcfcf" : "#ffffff")};
  color: ${(props) => (props.selected ? "#ffffff" : "#cfcfcf")};
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 20px;
`;

const Confirm = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
const Cancel = styled.button`
  font-size: 16px;
  font-weight: 400;
  background-color: WHITE;
  color: #52b6ff;
  width: 69px;
  height: 20px;
  border: none;
  font-family: "Lexend Deca", sans-serif;
`;
const Save = styled.button`
  width: 84px;
  height: 35px;
  border-radius: 4.64px;
  border: 1px solid #52b6ff;
  background-color: #52b6ff;
  font-family: "Lexend Deca", sans-serif;
  color: white;
  font-size: 16px;
  font-weight: 400;
  margin-left: 30px;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;
