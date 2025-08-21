import { ContainerSite } from "../../styled"
import encerramento from "../../assets/encerramentoFestival.jpeg"
import { ContainerEncerramento, ImageEncerramento, TextSimplesEncerramento, TituloEncerramentos } from "./styled"

const SectionFestaYaba = () => {
    return (
        <ContainerSite>
            <ContainerEncerramento>
                <ImageEncerramento>
                    <img src={encerramento} alt="" />
                </ImageEncerramento>
                <TextSimplesEncerramento>
                    <TituloEncerramentos>Festa de encerramento</TituloEncerramentos>
                    <p>nononononononononononononononononononononononononononononono</p>
                </TextSimplesEncerramento>
            </ContainerEncerramento>
        </ContainerSite>
    )
}

export default SectionFestaYaba