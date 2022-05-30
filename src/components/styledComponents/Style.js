import styled from "styled-components"

export default function Style({children}){
    return<Container>{children}</Container>
}

const Container = styled.div`
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
.top {
    display: flex;
  justify-content:space-between;
  align-items: flex-start;
  margin: 0px 10px;
  flex-direction: column;
}
span{
    font-size: 18px;
    color:#666666 ;
}

.top span{
    color: #bababa;
    font-size: 18px;
    margin-top: 5px;
}

.top button{
      width: 40px ;
      height: 35px;
      background: #52B6FF;
      color:#ffffff;
      font-size: 27px;
      border: 0;
      border-radius: 4.64px;
      cursor: pointer;
      margin: 20px;
}
.card{
    min-height: 100px;
    min-width: 340px;
    border-radius: 5px;
    margin: 5px 10px;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    padding: 10px;
    flex-direction: column;
    margin-bottom: 20px;
    #cancel{
        background-color: #fff;
        color: #52B6FF;
        border: none;
    }

}
.title{
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.title img{
    cursor: pointer;
}
.card img{
    width: 13px;
    height: 15px;
}
.card-button{
    display: flex;
}
.card button{
    width: 84px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #d5d5d5;
    padding: 8px;
    font-family: 'Lexend Deca';
    font-size: 16px;
    outline: none;
    background: #52b6ff;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.card input{
    width: 303px;
    height: 45px;
    border: 1px solid #d4d4d4;
} 

.card input::placeholder{
  color: #dbdbdb;
  font-size: 20px ;
}
.card span{
    font-size: 12.98px;
    color: #666666
}
  
.card p{
    color: #666666;
    font-size: 19.98px;
    margin: 5px 0;
}
.card .title{
    color: #666666;
    font-size: 19.98px;
}
`