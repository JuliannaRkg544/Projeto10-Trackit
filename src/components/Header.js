import styled from "styled-components"
import trackit from "./../assets/TrackIt.png"
import UserContext from "./Context/UserContext";
import { useContext } from "react";

export default function Header() {
    const { user } = useContext(UserContext)
    console.log("imagem",user.image)
    return (
        <Style>
            <img src={trackit}/>
            <img id="profile" src={user.image} />
        </Style>
    )
}

const Style = styled.div`
width: 100%;
height: 70px;
background-color: #126BA5;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
top:0;
left: 0;
right: 0;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

img{
    width: 97px;
    height: 40px;
    margin: 15px;
}
#profile{
    width: 51px;
    height: 51px;
    border: none;
    border-radius: 98.5px;
    margin:5px;
    
}

`