import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Habitos from './pages/Habitos'
import Hoje from './pages/Hoje'




function App() {
const [token, setToken] = useState()
  return (
    <BrowserRouter>
      <GlobalStyles />
          <Routes>
            <Route path='/' element={<Login setToken={setToken}/>}/>
            <Route path='/cadastro' element ={<Cadastro/>}/>
            <Route path ='/habitos' element = {<Habitos token={token}/>}/>
            <Route path='/hoje' element = {< Hoje />}/>
          </Routes>
     </BrowserRouter>
  )
}

export default App
