import styled from "styled-components"

export default function Container({children}){
    return <Style>{children}</Style>
} 

const Style = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #fff;
height: 100vh;

input{
    width: 303px ;
    height: 45px;
    margin: 3px 0;
    color: #000;
    border: 1px solid #dbdbdb;
    border-radius: 4.64px;
}
button{
    width: 303px ;
    height: 45px;
    margin: 3px 0;
    color: #fff;
    font-size: 21px;
    border-radius: 4.64px;
    background-color: #52B6FF;
    border: none;
    margin-bottom: 25px;
}
button:disabled {
    background-color: ${props => props.disabled ? "#f2f2f2" : "#52B6FF"};
  }
img{
  width: 180px;
  height: 180px;
}
span{
    color: #52B6FF;
    font-size: 14px;
}
a{
    color: #52B6FF;
}
input:disabled {
    background-color: ${props => props.disabled ? "#f2f2f2" : "#FFF"};
  }

`