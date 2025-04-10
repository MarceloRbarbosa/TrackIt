import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Habitos from './pages/Habitos'
import Hoje from './pages/Hoje'
import UserContext from './Contexts/UserContext'




function App() {
const [token, setToken] = useState(localStorage.getItem("token"))
const [user , setUser] = useState(localStorage.getItem('user'))

  return (
  <UserContext.Provider value={{user, setUser, token, setToken}}>
    <BrowserRouter>
      <GlobalStyles />
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/cadastro' element ={<Cadastro />}/>
            <Route path ='/habitos' element = {<Habitos />}/>
            <Route path='/hoje' element = {< Hoje />}/>
        </Routes>
    </BrowserRouter>
  </UserContext.Provider>
  )
}

export default App
