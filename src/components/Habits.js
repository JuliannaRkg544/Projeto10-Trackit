import Footer from "./Footer"
import Header from "./Header"
import Loading from "./Loading"
import CreateHabit from "./CreateHabit"

import Style from "./styledComponents/Style"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import trashIcon from "../assets/imgs/Vectortrash.png"

import UserContext from "./Context/UserContext"
import HabitsContext from "./Context/HabitsContext"

import axios from "axios"
import { useEffect, useState, useContext } from "react"


export default function Habits() {
    const { habits, setHabits, addHabit, setAddHabbit } = useContext(HabitsContext)
    const { user } = useContext(UserContext)

    const token = localStorage.getItem("token")

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        axios.get(URL, config).then(response => {
            setHabits(response.data)
        }
        ).catch(err => { console.log("deu ruim no get dos hábitos", err.response.data) })

    }, [addHabit])

    function renderHabits() {
        const weekDays = [
            { letter: 'D', number: 0 },
            { letter: 'S', number: 1 },
            { letter: 'T', number: 2 },
            { letter: 'Q', number: 3 },
            { letter: 'Q', number: 4 },
            { letter: 'S', number: 5 },
            { letter: 'S', number: 6 }
        ];
        
        return (
            habits.map((habit, index) => {
                return <div className="card" key={index} >
                    <div className="title" >
                        <p>{habit.name}</p>
                        <img src={trashIcon} onClick={() => deleteHabit(habit.id, habit.name)} />
                    </div>
                    <Weekdays>
                        {weekDays.map((day) => {
                            return <div className="weekday">
                                <ThemeProvider theme={habit.days.includes(day.number) ? invertedColor : color} >
                                    <Span>{day.letter}</Span>
                                 </ThemeProvider>
                            </div>

                        })}
                    </Weekdays>
                </div>
            })
        )
    }

    function deleteHabit(id, hab) {
        const token = localStorage.getItem("token")

        const URL_DELETE = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

     if(window.confirm("Você realmente deseja apagar esse hábito?")){
         axios.delete(URL_DELETE, config).then(console.log("deletei o habito ", hab)).catch(err => { console.log(err.response) })
 
         let newHabits = habits.filter((h) => h.id !== id)
         setHabits(newHabits)
 
     }
     }

    return (
        <>
            <Header />
            <Style>
                <div className="top">
                    <p>Meus Hábitos</p>
                    <button onClick={() => { setAddHabbit(!addHabit); console.log("addhabit", addHabit) }} >+</button>
                </div>
                {addHabit ? <CreateHabit /> : <></>}
                {habits.length > 0 ? renderHabits() :
                    <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
                }
            </Style>
            <Footer />
        </>
    )
}


const Span = styled.div`
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

const Weekdays = styled.div` 
display: flex;

.weekday{
    width: 30px;
    height: 30px;
    color: #dbdbdb;
    background-color: #dbdbdb;
    border: solid 1px #d4d4d4;
    border-radius: 3px;
    margin: 10px 3px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}


`