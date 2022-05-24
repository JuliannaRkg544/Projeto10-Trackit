import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login";
import Signin from "./Signin";
import UserContext from "./Context/UserContext";
import { useState } from "react";

export default function App() {
    const [user, setUser] = useState("");
    return (
     <UserContext.Provider value={{user,setUser}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/signin" element={<Signin/>} />
            </Routes>
        </BrowserRouter>
     </UserContext.Provider>
    )
}