import Buttons from "../../Componets/Botons"
import FadeCarousel from "../../Componets/Carrosel"
import DescrcaoFestival from "../../Componets/descricaoFestival/intex"
import Footer from "../../Componets/footer"
import Header from "../../Componets/Header"
import SectionCalendar from "../../Componets/SectionCalendar"

const Home = () => {
    return (
        <>
            <Header />
            <FadeCarousel />
            <Buttons />
            <DescrcaoFestival/>
            <SectionCalendar />
            <Footer />
        </>
    )
}

export default Home