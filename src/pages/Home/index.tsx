import Buttons from "../../Componets/Botons"
import Calendario from "../../Componets/Calendario"
import FadeCarousel from "../../Componets/Carrosel"
import Footer from "../../Componets/footer"
import Header from "../../Componets/Header"

const Home = () => {
    return (
        <>
            <Header />
            <FadeCarousel />
            <Buttons />
            <Calendario/>
            <Footer />
        </>
    )
}

export default Home