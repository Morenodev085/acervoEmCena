import { ContainerSite } from "../../styled"
import { ContainerDescricaoInverted, ImageDescricao, TextSimples, TituloSimples } from "./styled"

import Kao from '../../assets/kaHome.jpg'

const DescricaoSimplesComImagem = () => {
    return (
        <ContainerSite>
            <ContainerDescricaoInverted>
                <TextSimples>
                    <TituloSimples>Niterói em Cena é!</TituloSimples>
                    <p>
                        O festival nasceu com o objetivo de democratizar o acesso à cultura e incentivar novos talentos das artes cênicas. A cada edição, mais artistas, coletivos e espectadores se envolvem nesse grande movimento teatral.
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
