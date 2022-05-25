import { Link, useNavigate } from "react-router-dom"

import logo from "../assets/imgs/logo.png"
import Container from "./styledComponents/Container"

import UserContext from "./Context/UserContext"
import { useContext, useEffect, useState } from "react"
import axios from "axios"


export default function Login(){
    const {user,setUser} = useContext(UserContext)
    const [password, setPassword] = useState("")
    const [email,setEmail] = useState("")
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(false)
    const URL_POST = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
    const body = {
        email: email,
        password: password
    }

    useEffect(()=>{
        if(disabled){
        axios.post(URL_POST,body).then(response => {
            const {data} = response;
            setUser(data);
            console.log("dtat ",data)
            console.log("sou do contexto",user)
            navigate("/today")
        }).catch(err=>{console.log("deu erro", err.response)})
        }
    },[disabled])
    function login(event){
        event.preventDefault();
        setDisabled(true)
      }
    return (
        <Container>
            <img src={logo}/>
            <input type="email" placeholder="Email" value={email} onChange={e=> setEmail(e.target.value)} disabled={disabled} ></input>
            <input type="password" placeholder="Senha" value={password} onChange={e=>setPassword(e.target.value)} disabled={disabled} ></input>
            <button onClick={login} > {disabled?"carregando":"entrar"}</button>
            <Link to={"/signin"} ><span>Não tem conta? Cadastre-se</span></Link>
        </Container>
    )
}

