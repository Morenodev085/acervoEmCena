import { ContainerSite } from "../../styled"
import { TiTuloSection, ContentWrapper, TextContent, ImageContent } from "./styled"

const SectionCalendar = () => {
    return (
        <ContainerSite>
            <ContentWrapper>
                <TextContent>
                    <TiTuloSection>
                        <span className="top">Venha conhecer nossa</span>
                        <span className="bottom">PROGRAMAÇÃO</span>
                    </TiTuloSection>
                    <button>Clicando aqui</button>
                </TextContent>

                <ImageContent>
                    <img src="https://images.pexels.com/photos/9774914/pexels-photo-9774914.jpeg?_gl=1*jt5p6u*_ga*MTk0OTU4ODQ2My4xNzUzMjcyMzIw*_ga_8JE65Q40S6*czE3NTQ0MTYzMDQkbzQkZzEkdDE3NTQ0MTY1NTUkajU5JGwwJGgw" alt="Imagem ilustrativa da programação" />
                </ImageContent>
            </ContentWrapper>
        </ContainerSite>
    )
}

export default SectionCalendar
