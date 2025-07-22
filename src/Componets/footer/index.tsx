import { FooterContainer, InfoFooter } from "./styled"
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
    return (

        <FooterContainer>
            <img src="" alt="" />
            <InfoFooter>
                <p className="text-sm">&copy; 2025 Niterói em Cena. Todos os direitos reservados </p>
                <a href="" className="flex  gap-2"><CiInstagram />niteroiemcena</a>
            </InfoFooter>
        </FooterContainer>
    )
}

export default Footer