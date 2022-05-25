import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login";
import Signin from "./Signin";
import UserContext from "./Context/UserContext";
import { useState } from "react";
import Habits from "./Habits";
import History from "./History";
import Today from "./Today";

export default function App() {
    const [user, setUser] = useState("");
    return (
     <UserContext.Provider value={{user,setUser}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/signin" element={<Signin/>} />
                <Route path="/habits" element={<Habits/>}/>
                <Route path="/today" element={<Today/>}/>
                <Route path="/history" element={<History/>}/>
            </Routes>
        </BrowserRouter>
     </UserContext.Provider>
    )
}