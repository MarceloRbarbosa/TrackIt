import React, { useState } from "react"
import styled from "styled-components"
import Logo from '../assets/image/Logo.png'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



function Login({setToken}){
   const [email, setEmail] = useState ('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   function handleSubmit(e){
      e.preventDefault()
      const body = { email, password }

      axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`, body)
            .then( res => {
               setToken(res.data.token)
               navigate('/habitos')})
            .catch(err => alert(err.response.data.message))
   }

   return (
    <Main>
    <Img src= {Logo} />
      <Inputs onSubmit={handleSubmit}>
         <InputButton>
            <Information
               name="email" type="email" placeholder="email" onChange={e => setEmail(e.target.value)}  value={email} required
            />
         </InputButton>
         <InputButton>
            <Information 
               name="senha" type="password"  placeholder="senha" onChange={e => setPassword(e.target.value)} value={password} required
            />
         </InputButton>
         <InputButton>
            <Enter type="submit" />
         </InputButton>  
      </Inputs>
      <TextLink to="/cadastro">Não tem uma conta? Cadastre-se !</TextLink>
    </Main>
      
   ) 
}

export default Login

const Img = styled.img`
   margin-bottom: 20px;
   margin-top: 50px;
`

const Main = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: white;
`
const InputButton = styled.div`
   display: flex;
   margin-bottom: 5px;
`

const Inputs = styled.form`
display: flex;
flex-direction: column;
align-items: center;

   width: 100%;
`

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
`

const Enter = styled.input`
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
`
const TextLink = styled(Link)`
   font-family: "Lexend Deca", sans-serif;
   font-weight: 400;
   font-size: 14px;
   text-decoration: underline;
   color: #52b6ff;
`