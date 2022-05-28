import { Link, useNavigate } from "react-router-dom"

import logo from "./../assets/imgs/logo.png"
import Container from "./styledComponents/Container"

import UserContext from "./Context/UserContext"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import Loading from "./Loading"


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
    
        if(disabled){
            axios.post(URL_POST,body).then(response => {
                const {data} = response;
                setUser(data);
                localStorage.setItem("foto",data.image)
                localStorage.setItem("token",data.token)
            navigate("/today")
        }).catch(err=>{console.log("deu erro", err.response); alert(err.response.data.message)})
        }

    function login(event){
        event.preventDefault();
        setDisabled(true)
      }
    return (
        <Container disabled={disabled}>
            <img src={logo}/>
            <input type="email" placeholder="Email" value={email} onChange={e=> setEmail(e.target.value)} disabled={disabled} ></input>
            <input type="password" placeholder="Senha" value={password} onChange={e=>setPassword(e.target.value)}
             disabled={disabled} style={disabled? {backgroundColor: "green"}:{backgroundColor: "blue"}}  ></input>
            <button onClick={login} > {disabled?<Loading/> :"Entrar"}</button>
            <Link to={"/signin"} ><span>Não tem conta? Cadastre-se</span></Link>
        </Container>
    )
}

