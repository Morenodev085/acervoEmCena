import { styled } from "styled-components";

export const ButtonArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0;

  /* ✅ Ajuste para manter botões lado a lado no desktop */
  button {
    width: 350px;             /* Tamanho fixo no desktop */
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    button {
      white-space: nowrap;
      font-size: 12px;
      padding: 12px 64px;
      width: 256px;
    }
  }
`;
