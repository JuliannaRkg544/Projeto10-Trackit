import Habits from "./Habits";
import History from "./History";
import Login from "./Login";
import Signin from "./Signin";
import Today from "./Today";

import HabitsContext from "./Context/HabitsContext";
import UserContext from "./Context/UserContext";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function App() {
    const [user, setUser] = useState("");
    const [habits, setHabits] = useState([]);
    const [addHabit, setAddHabbit] = useState(false)

    let habitsNames = habits.map((hab)=>hab.name)
    localStorage.setItem("habitsNames",JSON.stringify(habitsNames))


    return (
        <UserContext.Provider value={{ user, setUser }}>
            <HabitsContext.Provider value={{ habits, setHabits, addHabit, setAddHabbit }} >
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/habits" element={<Habits />} />
                        <Route path="/today" element={<Today />} />
                        <Route path="/history" element={<History />} />
                    </Routes>
                </BrowserRouter>
            </HabitsContext.Provider>
        </UserContext.Provider>
    )
}