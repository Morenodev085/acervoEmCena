import styled from "styled-components";
import { colors } from "../../styled";

export const FooterContainer = styled.div`
  margin-top: 32px;
    display: flex;
  flex-direction: column;
  align-items: center; /* centraliza a imagem */
  column-gap: 32px;

  
  img {
    width: 100%;
    max-width: 1228px;
    aspect-ratio: 1228 / 236;     /* mantém proporção da imagem */
    object-fit: cover;            /* preenche, mas pode cortar levemente */
    object-position: center;
    display: block;
  }

  @media (max-width: 768px) {
    img {
      max-height: 180px;       /* menor altura no mobile */
    }
  }
  `;


export const InfoFooter = styled.div`
  background-color: #1C1C1C;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${colors.grey};

  width: 100%; /* ocupa toda a largura da tela */
  padding: 1rem 6rem; /* espaço interno nas laterais */

  a {
    display: flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    font-size: 1rem;
    color: inherit; /* herda a cor definida acima */
  }

  p {
    font-size: 1rem;
  }

  /* Responsivo para telas pequenas */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    text-align: center;

    p {
      font-size: 0.75rem;
    }

    a {
      justify-content: center;
    }
  }



  /* Responsivo para telas pequenas */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Centraliza os filhos horizontalmente */
    gap: 12px;

    p {
      font-size: 0.75rem;
      text-align: center;
    }

    a {
      justify-content: center;
    }
  }
`;
