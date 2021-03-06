import { Link } from "react-router-dom"
import styled from "styled-components"

import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer({percentage}){

    

    return (
        <Style>
           <Link to={"/habits"} > <button>Hábitos</button></Link>
           <Link to={"/today"} >
               <div >
               <CircularProgressbar
                    value={percentage}
                    text={"Hoje"}
                    styles={buildStyles({
                        textColor: "#FFF",
                        trailColor: "#52b6ff",
                        pathColor: "#FFF",
                       
                    })}
                    />
               </div>
            </Link> 
           <Link to={"/history"} >  <button>Histórico</button></Link>
        </Style>
    )

}

const Style = styled.div`
width: 100vw;
height: 70px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
background-color: #fff;
display: flex;
justify-content: space-around;
align-items: center;

button{
    color: #52b6ff;
    font-size: 18px;
    border: none;
    background-color: #fff;
    cursor: pointer;
    
}

div{
  width: 91px ;
  height: 91px;
  border-radius: 50%;
  background-color: #52b6ff;
  color: #fff;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
a{
    text-decoration: none;
}

`