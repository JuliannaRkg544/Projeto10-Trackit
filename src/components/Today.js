import Header from "./Header";
import UserContext from "./Context/UserContext";
import { useContext } from "react";
import styled from "styled-components"

export default function Today(){
    const {user} = useContext(UserContext)
    return(
        <Style>
            <Header />
             <p>Meus Hábitos</p>
        </Style>
    )
}

const Style = styled.div`
margin-top: 90px;
margin-bottom: 70px;
display:flex;
justify-content: center;
align-items: start;
flex-direction: column;
p{
    color: #126BA5;
    font-size: 22.98px;
}
p label{
    color: #BABABA;
    font-size: 16px;
    margin-top: 4px;
}
`
const Top = styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;
span{
    color: #bababa;
    font-size: 18px;
    margin-top: 5px;
}
p.green {
    color: #8fc549;
  }
`
const HabitCard = styled.div`
  Height: 94px;
  width: 340px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  margin: 10px;
  margin-top: 20px;
  
p{
    color: #666666;
    font-size: 12.98px;
}
.title{
    color: #666666;
    font-size: 19.98px;
}
`
const CheckMark = styled.div`
  width:69px;
  height:69px;
  background-color:#E7E7E7;
  padding:15px;
`