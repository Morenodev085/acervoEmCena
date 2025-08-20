import Buttons from "../../Componets/Botons"
import FadeCarousel from "../../Componets/Carrosel"
import DescrcaoFestival from "../../Componets/descricaoFestival/intex"
import Footer from "../../Componets/footer"
import Header from "../../Componets/Header"
import SectionCalendar from "../../Componets/SectionCalendar"
import SectionFestaYaba from "../../Componets/SectionFesta"

const Home = () => {
    return (
        <>
            <Header />
            <FadeCarousel />
            <Buttons />
            <DescrcaoFestival/>
            <SectionCalendar />
            <SectionFestaYaba/>
            <Footer />
        </>
    )
}

export default Home