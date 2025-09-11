import styled from "styled-components";
import { colors } from "../../styled";



export const TitutloRodad = styled.h3`
font-size: 3rem;
font-weight: bold;
margin-top: 24px;

 @media (max-width: 768px) {
    font-size: 1.75rem;
  }

`
export const CardCorpo = styled.div`
height: 320px;
width: 220px;
background-color: ${colors.cream};
border-radius: 4px;
display: flex;
flex-direction: column;
align-items: center; /* centraliza horizontalmente */
margin-top: 16px;

@media (max-width: 768px) {
    
    height: 240px;
    width: 180px;
  }
`

export const ImgRodadaCard = styled.img`
    height: 180px;
    width: 180px;
  border-radius: 50%;
  border: 2px solid black;
  object-fit: cover;
  margin-top: 8px;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`
export const NomeCardRodada = styled.h4`
color: #000;
font-weight: bold;
font-size: 1.50rem;
@media (max-width: 768px) {
    font-size: 1.25rem;

}
`

export const DescricaoCardRodada = styled.p`
color: ${colors.black};
margin-top: 8px;
font-size: 0.90rem;
@media (max-width: 768px){
    font-size: 0.75rem;

}
`