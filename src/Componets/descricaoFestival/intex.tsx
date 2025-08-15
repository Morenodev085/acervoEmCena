import { ContainerSite } from "../../styled"
import { ContainerDescricaoInverted, ImageDescricao, TextSimples, TituloSimples } from "./styled"

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
                    <img src="https://images.pexels.com/photos/169524/pexels-photo-169524.jpeg?_gl=1*fn1g8e*_ga*MTk0OTU4ODQ2My4xNzUzMjcyMzIw*_ga_8JE65Q40S6*czE3NTUyMTk3MjMkbzckZzEkdDE3NTUyMTk3MzgkajQ1JGwwJGgw" alt="Imagem sobre o festival" />
                </ImageDescricao>

            </ContainerDescricaoInverted>
        </ContainerSite>
    )
}

export default DescricaoSimplesComImagem
