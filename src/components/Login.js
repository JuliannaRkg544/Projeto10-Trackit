import { Link } from "react-router-dom"

import styled from "styled-components"

import logo from "../assets/imgs/logo.png"
import Container from "./styledComponents/Container"

import UserContext from "./Context/UserContext"

export default function Login(){
    
    return (
        <Container>
            <img src={logo}/>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Senha" ></input>
            <button>Entrar</button>
            <Link to={"/signin"} ><span>Não tem conta? Cadastre-se</span></Link>
        </Container>
    )
}

