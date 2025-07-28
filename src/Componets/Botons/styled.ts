import styled from "styled-components";

export const ButtonArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0;


  @media (max-width: 600px) {
    button {
      white-space: nowrap;     /* Evita quebra de linha no texto do botão */
      font-size: 12px;         /* Diminui o tamanho da fonte nos botões */
      padding: 12px 64px;
      width: 256px;
    }
  }
`;