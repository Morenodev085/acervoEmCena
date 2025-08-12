import styled from "styled-components";
import { colors } from "../../styled";



export const TextoEstilizado = styled.h2`
    font-size: 32px;
    color: ${colors.black}; /* Cor do texto */

    /* padding: 10px; */

  /* Efeito de borda ao redor do texto usando text-shadow */
    text-shadow:
    -1px -1px 0 ${colors.white},
    1px -1px 0 ${colors.white},
    -1px  1px 0 ${colors.white},
    1px  1px 0 ${colors.white};
`;

export const TextoDia = styled.h3`
padding: 16px;
font-size: 32px;
@media (max-width: 768px) {
  font-size: 24px;
}
`

export const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;