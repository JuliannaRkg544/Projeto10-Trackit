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
import { ThemeProvider } from "styled-components";


export default function Today() {
    const [todayHabits, setTodayHabits] = useState([])
    const [selected, setSelected] = useState(false)
    let percecentHabitsDone ;
   

    const { user } = useContext(UserContext)
    const {habits, setHabits, addHabit, setAddHabbit} = useContext(HabitsContext)

    const token = localStorage.getItem("token")
    // const habitsNames = localStorage.getItem("habitsNames")
    // const habitsNameArr = JSON.parse(habitsNames);
    

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
    },[selected])

    function toglleHabit(id,done,index){
        // setMarked(!(todayHabits[index].done))
        // console.log(todayHabits[index].done)
        //event.preventDefault();
        
        todayHabits[index].done = !(todayHabits[index].done);
        const action = done ? "uncheck" : "check";
        console.log("done ", done, " id ", id)

        const URL_POST = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${action}`

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        
        axios.post(URL_POST,{}, config).then(() => {
            setSelected(!selected)
            console.log("foi ",done)}
        ).catch(err=>{console.log("vish..", err.response); setSelected(false) })

    }

    function renderPercent(){
       let length= todayHabits.length
       let contPercent = 0
       
       todayHabits.map((hab)=> {if(hab.done){contPercent++} console.log("porcentagem ",contPercent) })
       
       percecentHabitsDone =  parseInt((contPercent/length)*100);
       if(contPercent === 0){
           return<p>Nenhum hábito concluído ainda</p>
       }
       else {
           return <p> {percecentHabitsDone}% dos hábitos concluídos </p>
       }

    }

    if (todayHabits.length>0){
        return(
            <>
            <Header />
            <Style>
                
                <div className="top">
                    <p> {dayjs().locale('PT-BR').format('dddd, DD/MM')} </p>
                </div>
                    { todayHabits.map((hab,index)=>{ return( 
                        <div className="card" key={index} style={{flexD968irection:"row", justifyContent:"space-between"}} >
                        <div className="text" style={{display:"flex" ,flexDirection:"column"}}>
                         {renderPercent()}
                        <p> {hab.name} </p>
                         <span>Sequência Atual: {hab.currentSequence}</span> 
                         <span>Seu Recorde: {hab.highestSequence}</span> 
                         </div>
                         <ThemeProvider theme={hab.done? color :invertedColor}>
                         <CheckMark  onClick={()=>toglleHabit(hab.id, hab.done,index)}>
                         <img src={check}/> </CheckMark>
                         </ThemeProvider>
                    
                </div>)
            })} 

            </Style>
            <Footer percentage ={percecentHabitsDone} />
        </>
        )
    } else return<>  <Header/><Footer/> </> 
}
const CheckMark = styled.div`
  width:69px;
  height:69px;
 
  padding:15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${props => props.theme.dfColor};
  cursor: pointer;

  img{
      width: 35px;
      height: 28px;
  }

`
const color = {
    dfColor: '#8FC549',
};

const invertedColor = {
    dfColor: '#EBEBEB',
};



