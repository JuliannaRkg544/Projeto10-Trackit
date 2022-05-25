import Header from "./Header";
import UserContext from "./Context/UserContext";
import { useContext } from "react";
import styled from "styled-components"
import dayjs from "dayjs";
import "dayjs/locale/pt-br"
import Footer from "./Footer";

export default function Today() {
    const { user } = useContext(UserContext)
    return (
        <>
            <Header />
            <Style>
                <Top>
                    <p> {dayjs().locale('PT-BR').format('dddd, DD/MM')} </p>
                </Top>
                <HabitCard>
                    <CheckMark></CheckMark>
                </HabitCard>
                <HabitCard>
                    <CheckMark></CheckMark>
                </HabitCard>
            </Style>
           <Footer/>
        </>
    )
}

const Style = styled.div`
margin-top: 90px;
margin-bottom: 70px;
display:flex;
justify-content: center;
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
align-items: flex-start;
justify-content: flex-start;
margin: 20px 10px;
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
  height: 94px;
  min-width: 340px;
  border-radius: 5px;
  margin: 5px 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  
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