import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title";
import MainContent from "../components/MainContent";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import UserContext from "../Contexts/UserContext";
import ClipLoader from "react-spinners/ClipLoader";

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
      <Title
        onClick={() => {
          if (!showNewHabit) setShowNewHabit(true);
        }}
      />
      <MainContent
        showNewHabit={showNewHabit}
        setShowNewHabit={setShowNewHabit}
        habits={products}
        setHabits={setProducts}
      />
      <Footer />
    </>
  );
}

export default Habitos;
