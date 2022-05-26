import Header from "./Header";
import UserContext from "./Context/UserContext";
import { useContext } from "react";
import styled from "styled-components"
import dayjs from "dayjs";
import "dayjs/locale/pt-br"
import Footer from "./Footer";
import Style from "./styledComponents/Style";

export default function Today() {
    const { user } = useContext(UserContext)
    return (
        <>
            <Header />
            <Style>
                <div className="top">
                    <p> {dayjs().locale('PT-BR').format('dddd, DD/MM')} </p>
                </div>
                <div className="card">
                    <CheckMark></CheckMark>
                </div>
                <div className="card">
                    <CheckMark></CheckMark>
                </div>
            </Style>
            <Footer />
        </>
    )
}

const CheckMark = styled.div`
  width:69px;
  height:69px;
  background-color:#E7E7E7;
  padding:15px;
`

