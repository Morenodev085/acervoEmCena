import { ContainerSite } from "../../styled"
import { presencas } from "../../data/presenca"
import { CardCorpo, DescricaoCardRodada, ImgRodadaCard, NomeCardRodada, TitutloRodad } from "./styled"


export interface Presencas {
    nome: string
    img: string
    descricao: string
}
const ListaParte = () => {
    return (
        <ContainerSite>
            <TitutloRodad>Demandantes confirmados:</TitutloRodad>
            <div>
                <ul>
                    {presencas.map((pessoa, index) => (
                        <li key={index}>
                            <CardCorpo>
                                <ImgRodadaCard src={pessoa.img} alt={pessoa.nome} />
                                <NomeCardRodada>{pessoa.nome}</NomeCardRodada>
                                <DescricaoCardRodada>{pessoa.descricao}</DescricaoCardRodada>
                            </CardCorpo>
                        </li>
                    ))}
                </ul>
            </div>
        </ContainerSite>
    )
}

export default ListaParte;