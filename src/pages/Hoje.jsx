import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DayTitle from "../components/DayTitle";
import Tracks from "../components/Tracks";
import UserContext from "../Contexts/UserContext";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

function Hoje() {
  const { token } = useContext(UserContext);
  const [habits, setHabits] = useState(null);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,
        config
      )
      .then((res) => setHabits(res.data))
      .catch((err) => console.log(err.response?.data || err.message));
  }, [token]);

  if (habits === null) {
    return (
      <ClipLoader
      color="#52b6ff"
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    );
  }
  return (
    <>
      <Header />
      <DayTitle />
      {habits.map((habit) => (
        <Tracks
          key={habit.id}
          title={habit.name}
          currentSequence={habit.currentSequence}
          done={habit.done}
          recordSequence={habit.highestSequence}
          setHabits={setHabits}
          id={habit.id}
        />
      ))}
      <Footer />
    </>
  );
}

export default Hoje;
