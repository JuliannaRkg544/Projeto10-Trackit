import Footer from "./Footer"
import Header from "./Header"
import Loading from "./Loading"
import CreateHabit from "./CreateHabit"

import Style from "./styledComponents/Style"
import styled from "styled-components"
import trashIcon from "../assets/imgs/Vectortrash.png"

import UserContext from "./Context/UserContext"
import HabitsContext from "./Context/HabitsContext"

import axios from "axios"
import { useEffect, useState, useContext } from "react"


export default function Habits() {
    const {habits, setHabits, addHabit, setAddHabbit} = useContext(HabitsContext)
    const { user } = useContext(UserContext)

    const token = localStorage.getItem("token")

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        axios.get(URL, config).then(response => { setHabits(response.data)
        }
        ).catch(err => { console.log("deu ruim no get dos hábitos", err.response.data) })

    }, [addHabit])
    function renderHabits() {
        return (
            habits.map((habit,index) => {
                return <div className="card" key={index} >
                    <div className="title" >
                    <p>{habit.name}</p>
                    <img src={trashIcon} onClick={()=>deleteHabit(habit.id,habit.name)} />
                    </div>
                    <Weekdays>
                        {habit.days.map((day,index) => {
                            if (day === 7) { return <div className="weekday"><p>D</p></div> }
                            else if (day === 1) { return <div className="weekday"><p>S</p></div> }
                            else if (day === 2) { return <div className="weekday"><p>T</p></div> }
                            else if (day === 3 || day === 4) { return <div className="weekday"><p>Q</p></div> }
                            else if (day === 5 || day === 6) { return <div className="weekday"><p>S</p></div> }
                        })}
                    </Weekdays>

                </div>
            })
        )
    }

    function deleteHabit(id,hab){
        const token = localStorage.getItem("token")
        const  URL_DELETE = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        axios.delete(URL_DELETE,config).then(console.log("deletei o habito ", hab)).catch(err => {console.log(err.response)})

            let newHabits = habits.filter((h)=>h.id!==id)
            setHabits(newHabits) 
    }

    return (
        <>
            <Header />
            <Style>
                <div className="top">
                    <p>Meus Hábitos</p>
                    <button onClick={() => { setAddHabbit(!addHabit); console.log("addhabit", addHabit) }} >+</button>
                </div>
                {addHabit ? <CreateHabit/> : <></>}
                {habits.length > 0 ? renderHabits() :
                    <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
                }
            </Style>
            <Footer />
        </>
    )
}



const Weekdays = styled.div` 
display: flex;

.weekday{
    width: 30px;
    height: 30px;
    color: #dbdbdb;
    border: solid 1px #d4d4d4;
    border-radius: 3px;
    margin: 10px 3px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}


`