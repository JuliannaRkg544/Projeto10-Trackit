import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Style from "./styledComponents/Style"
import styled from "styled-components"
import UserContext from "./Context/UserContext"
import { useContext } from "react"
import axios from "axios"
import { useEffect } from "react"

export default function Habits() {
    const [habits, setHabits] = useState([]);
    const [addHabit, setAddHabbit] = useState(false)
    const {user} = useContext(UserContext)

    const token = localStorage.getItem("token")

    useEffect(()=>{
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        axios.get(URL,config).then(response=>{ setHabits(response.data); console.log("habitos",response.data)}
            ).catch(err=>{console.log("deu ruim no get dos hábitos", err.response.data)})

},[addHabit])
  function renderHabits(){
      console.log("to sendp renderizado")
      return(   
      habits.map((habit)=>{return <div className="card" >
          <p>{habit.name}</p>
          {habit.days.map((day)=>{ 
                           if(day===1){return <Weekdays><p>D</p></Weekdays>  }
                           else if(day===2){return <Weekdays><p>S</p></Weekdays>}
                           else if(day===3){return <Weekdays><p>T</p></Weekdays>}
                           else if(day===4 || day===5){return <Weekdays><p>Q</p></Weekdays>}
                           else if(day===6 || day===7){return <Weekdays><p>S</p></Weekdays>}
                           })} 

      </div>})
 ) }
  
        return (
            <>
                <Header />
                <Style>
                    <div className="top">
                        <p>Meus Hábitos</p>
                        <button onClick={() => { setAddHabbit(!addHabit);console.log("addhabit", addHabit) }} >+</button>
                    </div>
                    {addHabit ? <CreateHabit addHabit={addHabit} setAddHabbit={setAddHabbit} setHabits={setHabits} habits={habits} /> : <></>}
                    {habits.length>0 ? renderHabits() :
                    <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
                    }
                </Style>
                <Footer />
            </>
        )
}

function CreateHabit({ addHabit, setAddHabbit, setHabits, habits }) {
    const {user} = useContext(UserContext)
    const [habitDays,setHabitDays] = useState([]);
    const [habitName, setHabitName] = useState("")
    const body = {
        name: habitName, 
        days: habitDays
    }
    console.log("token", user.token)
    function postHabit(){
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };
           console.log("nome do habito", body)
           axios.post(URL,body,config).then((response)=>{setAddHabbit(false)}
           ).catch((e) =>{alert("ocorreu um erro no post do hábito")})
    
       }
    return (
        <>
            <div className="card" >
                <input placeholder="nome do hábito" type="text" value={habitName} onChange={e=> setHabitName(e.target.value) } ></input>
                <Weekdays >
                    <p className="weekday" onClick={()=>{setHabitDays([...habitDays,1])}} >D</p>
                    <p className="weekday" onClick={()=>{setHabitDays([...habitDays,2])}} >S</p>
                    <p className="weekday" onClick={()=>{setHabitDays([...habitDays,3])}} >T</p>
                    <p className="weekday" onClick={()=>{setHabitDays([...habitDays,4])}} >Q</p>
                    <p className="weekday" onClick={()=>{setHabitDays([...habitDays,5])}} >Q</p>
                    <p className="weekday" onClick={()=>{setHabitDays([...habitDays,6])}} >S</p>
                    <p className="weekday" onClick={()=>{setHabitDays([...habitDays,7])}} >S</p>
                </Weekdays>
               <div className="card-button" >
                <button onClick={()=>setAddHabbit(false)}>cancelar</button>
                <button onClick={postHabit}>salvar</button>
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