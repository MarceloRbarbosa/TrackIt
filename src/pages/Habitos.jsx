import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title";
import MainContent from "../components/MainContent";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import UserContext from "../Contexts/UserContext";
import { ThreeDots } from "react-loader-spinner";

function Habitos() {
  const [products, setProducts] = useState(null);
  const [showNewHabit, setShowNewHabit] = useState(false);
  const navigate = useNavigate();
  const { token } = useContext(UserContext);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,
        config
      )
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err.response.data));
  }, [token, Navigate]);

  if (products === null) {
    return (
      <ThreeDots
        height="13"
        width="51"
        radius="9"
        color="#52b6ff"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    );
  }

  return (
    <>
      <Header />
      <Title
        onClick={() => {
          if (!showNewHabit) setShowNewHabit(true);
        }}
      />
      <MainContent showNewHabit={showNewHabit} setShowNewHabit={setShowNewHabit}/>
      <Footer />
    </>
  );
}

export default Habitos;
