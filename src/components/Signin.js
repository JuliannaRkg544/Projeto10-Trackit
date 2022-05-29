import Container from "./styledComponents/Container";
import UserContext from "./Context/UserContext";

import logo from "../assets/imgs/logo.png"

import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import Loading from "./Loading";


export default function Signin() {
    const navigate = useNavigate()
    const URL_POST = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"

    const { setUser } = useContext(UserContext);
    const [disabled, setDisabled] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const body = {
        email: email,
        name: name,
        image: image,
        password: password,
    }


    function signin(event) {
        event.preventDefault();
        setDisabled(true)

        axios.post(URL_POST, body).then((response) => {
            const { data } = response;
            setUser(data);
            navigate("/");
        }).catch((error) => {
            console.log(error.response)
            alert("humm, algo está errado")
            setDisabled(false)
        })


    }

    return (
        <Container disable={disabled}>
            <img src={logo} alt="Logo" ></img>

            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} disable={disabled} ></input>
            <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} disable={disabled} ></input>
            <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} disable={disabled} ></input>
            <input type="url" placeholder="Foto" value={image} onChange={e => setImage(e.target.value)} disable={disabled} ></input>
            <button onClick={signin} disabled={disabled}>{disabled ? <Loading /> : "Cadastrar"}</button>
            <Link to={"/"} > <span>Já tem uma conta? Faça login</span></Link>
        </Container>
    )

}