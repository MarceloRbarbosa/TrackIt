import React, { useContext, useEffect, useState } from "react"
import Header from '../components/Header'
import Footer from "../components/Footer"
import Title from "../components/Title"
import MainContent from "../components/MainContent"
import axios from "axios"
import perfilLogo from "../assets/image/logo.png"
import { Navigate, useNavigate } from "react-router-dom"
import UserContext from "../Contexts/UserContext"


function Habitos(){
    const [image , setImage]= useState(perfilLogo)
    const [products, setProducts] = useState(null)
    const navigate = useNavigate()
    const {token} = useContext(UserContext);


    useEffect(()=> {
        if(!token){
            navigate("/")
        }
    },[])

    useEffect(()=> {
        const config ={
            headers: {
                Authorization:`Bearer ${token}`
            }
        }
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, config)
            .then(res => setProducts(res.data) )
            .catch( err => console.log(err.response.data))
    }, [token, navigate])

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