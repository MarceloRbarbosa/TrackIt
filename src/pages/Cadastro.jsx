import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/image/Logo.png";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function SignUp(e) {
    e.preventDefault();
    setLoading(true);
    const body = { email, name, image, password };

    axios
      .post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`,
        body
      )
      .then(() => navigate("/"))
      .catch((err) => {
        alert(err.response.data.message);
        setLoading(false);
      });
  }

  return (
    <Main>
      <Img src={Logo} />
      <InputGroup onSubmit={SignUp}>
        <Input>
          <Information
            name="email"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={loading}
            required
          />
        </Input>
        <Input>
          <Information
            name="senha"
            type="password"
            placeholder="senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={loading}
            required
          />
        </Input>
        <Input>
          <Information
            name="name"
            placeholder="nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
            disabled={loading}
            required
          />
        </Input>
        <Input>
          <Information
            name="image"
            placeholder="foto"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            disabled={loading}
            required
          />
        </Input>
        <Input>
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
              "Cadastrar"
            )}
          </Enter>
        </Input>
        <TextLink to="/">Já tem uma conta ? faça login!</TextLink>
      </InputGroup>
    </Main>
  );
}

export default Cadastro;

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
const Input = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const InputGroup = styled.form`
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
  display: flex;
  align-items: center;
  justify-content: center;
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
`;
const TextLink = styled(Link)`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-decoration: underline;
  color: #52b6ff;
`;
