import React, { useState } from "react"
import styled from "styled-components"
import Logo from '../image/Logo.png'



function Login(){
   const [email, setEmail] = useState ('');

   function handleSubmit(e){
      e.preventDefault()
      console.log({
         email: email,
      })
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
               name="senha" type="password"  placeholder="senha"  required
            />
         </InputButton>
         <InputButton>
            <Enter type="submit" />
         </InputButton>  
      </Inputs>
      <TextLink>Não tem uma conta? Cadastre-se !</TextLink>
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
const TextLink = styled.span`
   font-family: "Lexend Deca", sans-serif;
   font-weight: 400;
   font-size: 14px;
   text-decoration: underline;
   color: #52b6ff;
`