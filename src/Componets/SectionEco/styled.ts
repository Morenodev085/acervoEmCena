import { styled } from "styled-components";
import { colors } from "../../styled";

export const TextSimples = styled.div`
  flex: 1;
  text-align: justify;

  p {
    margin-top: 1rem;
    font-size: 1.1rem;
    color: ${colors.cream};
    line-height: 1.6;
  }
`
export const ImageEco = styled.div`
  flex: 1;
  text-align: center;
  border: 8px;


  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`
export const TituloSimples = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  color: ${colors.yellow};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.68rem;
  }
`
export const ContainerEco = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row; /* INVERTE a posição dos elementos */
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    flex-direction: column-reverse; /* Empilha no mobile */
  }`