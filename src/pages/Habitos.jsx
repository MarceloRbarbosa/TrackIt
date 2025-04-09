import React, { useEffect, useState } from "react"
import Header from '../components/Header'
import Footer from "../components/Footer"
import Title from "../components/Title"
import MainContent from "../components/MainContent"
import axios from "axios"
import perfilLogo from "../assets/image/logo.png"
import styled from "styled-components"

function Habitos({token}){
    const [image , setImage]= useState(perfilLogo)
    const [products, setProducts] = useState(null)
   


    useEffect(()=> {
        const config ={
            headers: {
                Authorization:`Bearer ${token}`
            }
        }
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, config)
            .then(res => setProducts(res.data) )
            .catch( err => console.log(err.response.data))
    }, [])

    if (products === null){
        return <div> Carregando ...</div>
    }

    return (
    <>
        <Header />
        <Title />
        <MainContent />
        <Footer />
    </>
    )
}

export default Habitos