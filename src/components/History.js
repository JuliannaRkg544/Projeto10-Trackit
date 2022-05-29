import Footer from "./Footer";
import Header from "./Header";
import Style from "./styledComponents/Style";

export default function History(){
    return(
        <>
        <Header/>
        <Style>
            <p>Histórico</p>
            <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
        </Style>
        <Footer/>
        </>
    )
}