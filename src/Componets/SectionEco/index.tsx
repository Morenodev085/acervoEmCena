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
                <p></p>
            </TextSimples>
            </ContainerEco>
        </ContainerSite>
    )
}

export default SectionEco