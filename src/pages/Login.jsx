import React, { useContext, useState } from "react";
import styled from "styled-components";
import Logo from "../assets/image/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../Contexts/UserContext";
import { ThreeDots } from "react-loader-spinner";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser, setToken } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const body = { email, password };

    axios
      .post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`,
        body
      )
      .then((res) => {
        setUser(res.data);
        setToken(res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("token", res.data.token);
        navigate("/hoje");
      })
      .catch((err) => {
        alert(err.response.data.message);
        setEmail("");
        setPassword("");
      })
      .finally(() => setLoading(false));
  }

  return (
    <Main>
      <Img src={Logo} />
      <Inputs onSubmit={handleSubmit}>
        <InputButton>
          <Information
            name="email"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={loading}
            required
          />
        </InputButton>
        <InputButton>
          <Information
            name="senha"
            type="password"
            placeholder="senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={loading}
            required
          />
        </InputButton>
        <InputButton>
          <Enter type="submit" disabled={loading}>
          {loading ? (
            <ThreeDots
              height="13"
              width="51"
              radius="9"
              color="#ffffff"
              ariaLabel="three-dots-loading"
              visible={true}
            />
          ) : (
            "Enviar"
          )}
          </Enter>
        </InputButton>
      </Inputs>
      <TextLink to="/cadastro">Não tem uma conta? Cadastre-se !</TextLink>
    </Main>
  );
}

export default Login;

const Img = styled.img`
  margin-bottom: 20px;
  margin-top: 50px;
`;

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;
const InputButton = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const Inputs = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const Information = styled.input`
  width: 300px;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #d4d4d4;

  &::placeholder {
    font-size: 20px;
    font-weight: 400;
    font-family: "Lexend Deca", sans-serif;
    line-height: 100%;
    letter-spacing: 0%;
    color: #dbdbdb;
  }
`;

const Enter = styled.button`
  width: 300px;
  height: 45px;
  border-radius: 5px;
  background-color: #52b6ff;
  color: white;
  font-family: "Lexend Deca", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  border: none;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;

`;
const TextLink = styled(Link)`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-decoration: underline;
  color: #52b6ff;
`;
