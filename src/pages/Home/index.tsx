import Buttons from "../../Componets/Botons"
import FadeCarousel from "../../Componets/Carrosel"
import Footer from "../../Componets/footer"
import Header from "../../Componets/Header"
import SectionCalendar from "../../Componets/SectionCalendar"

const Home = () => {
    return (
        <>
            <Header />
            <FadeCarousel />
            <Buttons />
            <SectionCalendar />
            <Footer />
        </>
    )
}

export default Home