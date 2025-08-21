import styled from "styled-components"
import { colors } from "../../styled"

export const ContainerEncerramento = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 2rem;
flex-wrap: wrap;
margin-top: 24px;

img{
        max-width: 100%;
    height: auto;
    border-radius: 8px;
}
`
export const ImageEncerramento = styled.div`
  flex: 1;
  text-align: center;
  border: 8px;


  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`

export const TituloEncerramentos = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  color: ${colors.pink};

  @media (max-width: 768px) {
    font-size: 1.68rem;
  }
`
export const TextSimplesEncerramento = styled.div`
  flex: 1;
  text-align: center;

  p {
    margin-top: 1rem;
    font-size: 1.1rem;
    color: ${colors.cream};
    line-height: 1.6;
  }
`