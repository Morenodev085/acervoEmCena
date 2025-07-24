import { FooterContainer, InfoFooter } from "./styled"
import { CiInstagram } from "react-icons/ci";
import barra from '../../assets/barraDeLogo.png'

const Footer = () => {
    return (

        
            <FooterContainer>
            <img src={barra} alt="" />
                <InfoFooter>
                    <a href="" className="flex  gap-2"><CiInstagram />niteroiemcena</a>
                    <p className="text-sm">&copy; 2025 Niterói em Cena. Todos os direitos reservados </p>
                </InfoFooter>
            </FooterContainer>

        
    )
}

export default Footer