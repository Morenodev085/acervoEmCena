import { FooterContainer, InfoFooter } from "./styled";
import { CiInstagram } from "react-icons/ci";
import barra from "../../assets/barraDelogo.jpg";

const Footer = () => {
    return (
        <FooterContainer>
            <img src={barra} alt="Barra com logotipos dos patrocinadores" />

            <InfoFooter>
                <a
                    href="https://instagram.com/niteroiemcena"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2"
                >
                    <CiInstagram size={20} />
                    @niteroiemcena
                </a>

                <p className="text-sm">
                    &copy; 2025 Niterói em Cena. Todos os direitos reservados.
                </p>
            </InfoFooter>
        </FooterContainer>
    );
};

export default Footer;
