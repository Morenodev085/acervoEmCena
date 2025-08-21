import { ContainerSite } from "../../styled"
import {  ContainerEco, ImageEco, TextSimples, TituloSimples } from "./styled"

const SectionEco = () => {
    return (
        <ContainerSite>
            <ContainerEco>
            <ImageEco>
                <img src="https://cdn.pixabay.com/photo/2020/05/29/18/28/log-5236152_1280.jpg" alt="" />
                </ImageEco> 
            <TextSimples>
                <TituloSimples>Proposta ecologica</TituloSimples>
                <p>O Niterói em Cena – Festival Internacional de Teatro está comprometido com os Objetivos de Desenvolvimento Sustentável (ODS) da ONU, promovendo ações culturais que unem diversidade, educação, inclusão e sustentabilidade. Ao democratizar o acesso à cultura (ODS 4), o festival oferece ao público a chance de vivenciar produções teatrais variadas, que dialogam com diferentes linguagens e contextos sociais. <br/>

Ao valorizar a cultura local e envolver a comunidade, o evento fortalece a identidade cultural e o senso de pertencimento (ODS 11), contribuindo para o desenvolvimento de cidades mais inclusivas, resilientes e sustentáveis.<br/>

Além disso, o festival adota práticas conscientes para reduzir seu impacto ambiental (ODS 13), como a separação e reciclagem de resíduos, e incentiva o uso de transporte sustentável por meio da Nikity Bike, oferecendo ingressos gratuitos a quem chega de bicicleta.<br/>

Dessa forma, o Niterói em Cena não apenas celebra a arte, mas também reafirma seu papel na construção de um futuro mais justo, inclusivo e ecologicamente responsável.<br/></p>
            </TextSimples>
            </ContainerEco>
        </ContainerSite>
    )
}

export default SectionEco