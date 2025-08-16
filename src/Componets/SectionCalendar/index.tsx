import { Link } from "react-router-dom"
import { ContainerSite } from "../../styled"
import { TiTuloSection, ContentWrapper, TextContent, ImageContent } from "./styled"

import chacco from '../../assets/chaccoNariz.jpg'


const SectionCalendar = () => {
    return (
        <ContainerSite>
            <ContentWrapper>
                <TextContent>
                    <TiTuloSection>
                        <span className="top">Venha conhecer nossa</span>
                        <span className="bottom">PROGRAMAÇÃO</span>
                    </TiTuloSection>
                    <Link to="/programacao">
                    <button >Programação Completa</button>
                    </Link>
                </TextContent>

                <ImageContent>
                    <img src={chacco} alt="Imagem ilustrativa da programação" />
                </ImageContent>
            </ContentWrapper>
        </ContainerSite>
    )
}

export default SectionCalendar
