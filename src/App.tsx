import FadeCarousel from "./Componets/Carrosel"
import Footer from "./Componets/footer"
import Header from "./Componets/Header"
import { GlobralStyle } from "./styled"



function App() {


  return (
    <>
      <GlobralStyle />
      <Header />
      <FadeCarousel/>
      <Footer />
    </>
  )
}

export default App
