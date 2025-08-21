import { ContainerSite } from "../../styled"
import encerramento from "../../assets/encerramentoFestival.jpeg"
import { ContainerEncerramento, ImageEncerramento } from "./styled"

const SectionFestaYaba = () => {
    return (
        <ContainerSite>
            <ContainerEncerramento>
                <ImageEncerramento>
                    <img src={encerramento} alt="" />
                </ImageEncerramento>
                <div>
                    <h4>festa de encerramento</h4>
                    <p>nononononononononononononononononononononononononononononono</p>
                </div>
            </ContainerEncerramento>
        </ContainerSite>
    )
}

export default SectionFestaYaba