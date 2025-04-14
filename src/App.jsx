import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Habitos from "./pages/Habitos";
import Hoje from "./pages/Hoje";
import UserContext from "./Contexts/UserContext";
import NewHabitsContext from "./Contexts/NewHabitsContext";

function App() {
  const [newHabit, setNewHabit] = useState("");
  const [selected, setSelected] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  return (
    <NewHabitsContext.Provider value={{ newHabit, setNewHabit, selected, setSelected}}>
      <UserContext.Provider value={{ user, setUser, token, setToken }}>
        <BrowserRouter>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/habitos" element={<Habitos />} />
            <Route path="/hoje" element={<Hoje />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </NewHabitsContext.Provider>
  );
}

export default App;

