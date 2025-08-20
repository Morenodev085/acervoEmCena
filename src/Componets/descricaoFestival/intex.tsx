import { ContainerSite } from "../../styled"
import { ContainerDescricaoInverted, ImageDescricao, TextSimples, TituloSimples } from "./styled"

import Kao from '../../assets/kaHome.jpg'

const DescricaoSimplesComImagem = () => {
    return (
        <ContainerSite>
            <ContainerDescricaoInverted>
                <TextSimples>
                    <TituloSimples>Maioridade Artística <br />18 anos de existência</TituloSimples>
                    <p>
                        Em 2025, completamos dezoito edições consecutivas. Ao longo desse período, o Niterói em Cena trouxe para a cidade grandes nomes do teatro nacional e diversas atrações internacionais.
                        Nesta edição, temos a honra de receber artistas de seis estados brasileiros 
                        (Alagoas, Bahia, Minas Gerais, Pernambuco, Rio de Janeiro e São Paulo), além de representantes de três países da 
                        América Latina (Argentina, Chile e Peru).
                        Vamos oferecer quatro Atividades Formativas e uma Rodada de Negócios, que conectará artistas e produtores a gestores culturais.
                    </p>
                </TextSimples>
                <ImageDescricao>
                    <img src={Kao} alt="Imagem sobre o festival" />
                </ImageDescricao>

            </ContainerDescricaoInverted>
        </ContainerSite>
    )
}

export default DescricaoSimplesComImagem
