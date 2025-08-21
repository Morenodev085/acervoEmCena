import styled, { css } from "styled-components";
import { colors } from "../../styled";

export const ContainerRodada = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px; /* Espaçamento menor entre os blocos */
`;

export const TituloRodada = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 64px;
  margin-bottom: 32px;
  margin-top: 128px;
`;

export const RodadaItem = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  ${({ reverse }) =>
    reverse &&
    css`
      flex-direction: row-reverse;
    `}

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RodadaTextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RodadaImage = styled.img`
  width: 380px;  /* largura fixa */
  height: auto;
  border-radius: 8px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;  /* no mobile, imagem ocupa toda largura */
    margin-bottom: 16px;
  }
`;



export const TextRodada = styled.p`
  font-size: 18px;
  text-align: justify;
  margin: 0; /* Remove espaçamento extra */
  line-height: 1.6;
`;



export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center; /* centraliza horizontalmente */
  align-items: center;     /* centraliza verticalmente */
  padding: 16px;
`;

export const FullWidthButton = styled.button`
  width: 80%;
  padding: 12px 16px;
  background-color: ${colors.black};
  color: white;
  border: 3px solid ${colors.cream};
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${colors.cream};
    color: ${colors.black};
  }
`;
