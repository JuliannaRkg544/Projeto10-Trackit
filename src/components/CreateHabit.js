import styled from "styled-components"

import HabitsContext from "./Context/HabitsContext"

import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { ThemeProvider } from "styled-components"

export default function CreateHabit() {
    const token = localStorage.getItem("token")

    const [habitDays, setHabitDays] = useState([]);
    const [habitName, setHabitName] = useState("")
    const [marked, setMarked] = useState(false)
    const { habits, setHabits, addHabit, setAddHabbit } = useContext(HabitsContext)

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

    const weekDays = [
        { letter: 'D', number: 7 },
        { letter: 'S', number: 1 },
        { letter: 'T', number: 2 },
        { letter: 'Q', number: 3 },
        { letter: 'Q', number: 4 },
        { letter: 'S', number: 5 },
        { letter: 'S', number: 6 }
    ];

    function mark(day) {
        setHabitDays([...habitDays, day])
        if (habitDays.includes(day)) {
            let newHabitDays = habitDays.filter((habDay) => habDay !== day)
            setHabitDays(newHabitDays)
        }

    }
    return (
        <>
            <div className="card" >
                <input placeholder="nome do hábito" type="text" value={habitName} onChange={e => setHabitName(e.target.value)} ></input>
                <Weekdays > {weekDays.map((day, index) => {
                    return <div className="weekday" onClick={() => mark(day.number)} >
                        {console.log(habitDays)}
                        <ThemeProvider theme={habitDays.includes(day.number) ? invertedColor : color} key={index}>
                            <Theme>{day.letter}</Theme>
                        </ThemeProvider>
                    </div>

                })} </Weekdays>
                <div className="card-button" >
                    <button onClick={() => setAddHabbit(false)} id="cancel" >cancelar</button>
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
    cursor: pointer;
    
}


`
const Theme = styled.div`
color: ${props => props.theme.dfColor};
background-color: ${props => props.theme.dfBack};
display: flex;
justify-content: center;
align-items: center;
width: 29px;
 height: 28px;
    

`

const color = {
    dfColor: '#D4D4D4',
    dfBack: '#FFFFFF'
};

const invertedColor = {
    dfColor: '#FFFFFF',
    dfBack: '#D4D4D4'
};