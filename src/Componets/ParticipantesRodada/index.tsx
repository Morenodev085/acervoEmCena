import { ContainerSite } from "../../styled"
import { presencas } from "../../data/presenca"
import { CardCorpo, DescricaoCardRodada, ImgRodadaCard, ListaCards, NomeCardRodada, TitutloRodad } from "./styled"


export interface Presencas {
    nome: string
    img: string
    descricao: string
}
const ListaParte = () => {
    return (
        <ContainerSite>
            <TitutloRodad>Compradores confirmados:</TitutloRodad>
            <div>
                <ListaCards>
                    {presencas.map((pessoa, index) => (
                        <li key={index}>
                            <CardCorpo>
                                <ImgRodadaCard src={pessoa.img} alt={pessoa.nome} />
                                <NomeCardRodada>{pessoa.nome}</NomeCardRodada>
                                <DescricaoCardRodada>{pessoa.descricao}</DescricaoCardRodada>
                            </CardCorpo>
                        </li>
                    ))}
                </ListaCards>
            </div>
        </ContainerSite>
    )
}

export default ListaParte;