import styled from "styled-components"

import HabitsContext from "./Context/HabitsContext"

import axios from "axios"
import { useEffect, useState, useContext } from "react"

export default function CreateHabit() {
    const token = localStorage.getItem("token")

    const [habitDays, setHabitDays] = useState([]);
    const [habitName, setHabitName] = useState("")
    const {habits, setHabits, addHabit, setAddHabbit} = useContext(HabitsContext)
    
    const body = {
        name: habitName,
        days: habitDays
    }

    function postHabit() {
        const URL_POST = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        axios.post(URL_POST, body, config).then((response) => { 
            console.log("todos os habitos ", response.data)
            setAddHabbit(false)
        }).catch((e) => { alert("ocorreu um erro no post do hábito "); console.log(e.response) })

    }
    return (
        <>
            <div className="card" >
                <input placeholder="nome do hábito" type="text" value={habitName} onChange={e => setHabitName(e.target.value)} ></input>
                <Weekdays >
                    <p className="weekday" onClick={() => { setHabitDays([...habitDays, 7]) }} >D</p>
                    <p className="weekday" onClick={() => { setHabitDays([...habitDays, 1]) }} >S</p>
                    <p className="weekday" onClick={() => { setHabitDays([...habitDays, 2]) }} >T</p>
                    <p className="weekday" onClick={() => { setHabitDays([...habitDays, 3]) }} >Q</p>
                    <p className="weekday" onClick={() => { setHabitDays([...habitDays, 4]) }} >Q</p>
                    <p className="weekday" onClick={() => { setHabitDays([...habitDays, 5]) }} >S</p>
                    <p className="weekday" onClick={() => { setHabitDays([...habitDays, 6]) }} >S</p>
                </Weekdays>
                <div className="card-button" >
                    <button onClick={() => setAddHabbit(false)}>cancelar</button>
                    <button onClick={postHabit} > Salvar</button>
                </div>
            </div>
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