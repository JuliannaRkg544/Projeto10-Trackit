import Header from "./Header";
import Footer from "./Footer";

import UserContext from "./Context/UserContext";
import HabitsContext from "./Context/HabitsContext";

import Style from "./styledComponents/Style";
import styled from "styled-components"
import check from "../assets/imgs/Vector-check.png"

import { useEffect, useState, useContext } from "react";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt-br"


export default function Today() {
    const { user } = useContext(UserContext)
    const {habits, setHabits, addHabit, setAddHabbit} = useContext(HabitsContext)
    const [todayHabits, setTodayHabits] = useState([])
    const token = localStorage.getItem("token")
    const habitsNames = localStorage.getItem("habitsNames")
    const habitsNameArr = JSON.parse(habitsNames);
    

    useEffect(()=>{
     const URL_GET = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
     const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    axios.get(URL_GET,config).then(response =>{setTodayHabits(response.data)
    console.log("today habits ",response.data)
    }).catch(err=>{console.log("vish..", err.response)})
    },[])

    if (todayHabits.length>0){
        return(
            <>
            <Header />
            <Style>
                
                <div className="top">
                    <p> {dayjs().locale('PT-BR').format('dddd, DD/MM')} </p>
                </div>
                    { todayHabits.map((hab,index)=>{ return( 
                        <div className="card" key={index} style={{flexDirection:"row", justifyContent:"space-between"}} >
                        <div className="text" > <p> {hab.name} </p> <span>Sequência atual: 4 dias</span> </div>
                    <CheckMark> <img src={check}/> </CheckMark>
                </div>)
            })} 

            </Style>
            <Footer />
        </>
        )
    } else return<>  <Header /> <Footer /></> 
}
const CheckMark = styled.div`
  width:69px;
  height:69px;
  background-color:#8FC549;
  padding:15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  img{
      width: 35px;
      height: 28px;
  }
`

