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
                    <p>O Caruru, comida ancestral de origem africana, será oferecido ao público do festival como símbolo de saúde, alegria e prosperidade, marcando a grande celebração de encerramento do evento. A música fica por conta do Samba das Yabás, tradicional roda de samba da cidade, em uma noite gratuita e imperdível.</p>
                </TextSimplesEncerramento>
            </ContainerEncerramento>
        </ContainerSite>
    )
}

export default SectionFestaYaba