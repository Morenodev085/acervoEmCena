import styled from "styled-components";
import { colors } from "../../styled";

export const FooterContainer = styled.div`
  background-color: #1C1C1C;
  padding: 1.5rem;
  margin-top: 256px;
  `;

export const InfoFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${colors.grey};
  max-width: 1280px;
  margin: 0 auto;


  a {
    display: flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;

    font-size: 1rem;
  }

  p {

    font-size: 1rem;
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
