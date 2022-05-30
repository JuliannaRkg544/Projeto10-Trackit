import logo from "./../assets/imgs/logo.png"
import Loading from "./Loading"
import Container from "./styledComponents/Container"

import UserContext from "./Context/UserContext"

import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"


export default function Login() {
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [disabled, setDisabled] = useState(false) //disabilita oq?

   //BONUS DO LOCALSTORAGE
    let foto = localStorage.getItem("foto")
    let token =localStorage.getItem("token")
    if (foto!=undefined || token!=undefined){
      navigate("/today")
    }

    const URL_POST = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

    const body = {
        email: email,
        password: password
    }

    function login(event) {
        event.preventDefault();
        setDisabled(true)

        axios.post(URL_POST, body).then(response => {
            const { data } = response;
            setUser(data);
            localStorage.setItem("foto", data.image)
            localStorage.setItem("token", data.token)
            navigate("/today")
        }).catch(err => { console.log("deu erro", err.response); alert(err.response.data.message); setDisabled(false) })
    }

   
    return (
        <Container>
            <img src={logo} />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} disabled={disabled} ></input>
            <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} disabled={disabled}></input>
            <button onClick={login} > {disabled ? <Loading /> : "Entrar"}</button>
            <Link to={"/signin"} ><span>Não tem conta? Cadastre-se</span></Link>
        </Container>
    )
}

