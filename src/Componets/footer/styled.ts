import styled from "styled-components";
import { colors } from "../../styled";

export const FooterContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

 img {
    width: 100%;
    max-width: 1528px;
    height: auto;               /* Mantém a proporção da imagem */
    object-fit: contain;        /* Garante que a imagem inteira seja visível */
    object-position: center;
    display: block;
    padding: 0 1rem;            /* Pequeno espaço lateral (opcional) */
  }

  @media (max-width: 768px) {
    img {
      height: auto;              /* altura automática para manter proporção */
      max-height: none;          /* remove o limite anterior */
      object-fit: contain;       /* mostra a imagem inteira, sem cortes */
      padding: 0 1rem;           /* adiciona um pequeno respiro lateral se quiser */
    }
  }
`;
export const InfoFooter = styled.div`
  background-color: #1c1c1c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.grey};
  width: 100%;
  padding: 1rem 6rem;

  a {
    display: flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    font-size: 1rem;
    color: inherit;
  }

  p {
    font-size: 1rem;
  }

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
`;
