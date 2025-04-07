import React, { useState } from "react"
import styled from "styled-components"
import Logo from '../image/Logo.png'

function Cadastro(){
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState('')
    const [name , setName] = useState ('')
    const [photo, setPhoto] = useState('')

    function SignUp(){
        console.log ({
            email: email,
            senha: password,
            nome: name,
            foto: photo,
        })
    }

    return (
        <Main>
            <Img src= {Logo} />
            <InputGroup onChange={SignUp} >
                <InputButton>
                    <Information
                    name="email" type="email" placeholder="email" onChange={e => setEmail(e.target.value)} value={email} required
                    />
                </InputButton>
                <InputButton>
                    <Information 
                    name="senha" type="password"  placeholder="senha" onChange={e => setPassword(e.target.value)} value={password} required
                    />
                </InputButton>
                <InputButton>
                    <Information 
                    name="name" placeholder="nome" onChange={e => setName(e.target.value)} value={name} required
                    />
                </InputButton>
                <InputButton>
                    <Information 
                    name="photo"  placeholder="foto" onChange={e => setPhoto(e.target.value)} value={photo}  required
                    />
                </InputButton>
                <InputButton>
                    <Enter>Cadastrar</Enter>
                </InputButton>  
            </InputGroup>
            <TextLink>Já tem uma conta ? faça login!</TextLink>
        </Main>
    )
}

export default Cadastro

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

const InputGroup = styled.form`
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
`
const TextLink = styled.span`
   font-family: "Lexend Deca", sans-serif;
   font-weight: 400;
   font-size: 14px;
   text-decoration: underline;
   color: #52b6ff;
`