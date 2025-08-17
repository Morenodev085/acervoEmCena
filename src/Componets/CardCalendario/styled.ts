// src/components/CardCalendario/styled.js
import styled from "styled-components";
import { colorMap, type PieceType } from "../../data/types";
import { colors } from "../../styled";

type CardProps = {
  type: PieceType;
};
type ButtonProps = {
  type: PieceType;
};

// =================================================================
// ADAPTAÇÃO DOS SEUS COMPONENTES EXISTENTES
// =================================================================
export const CardCalendariBody = styled.div<CardProps>`
  background-color: #000;
  border: 3px solid ${({ type }) => colorMap[type]};
  border-radius: 8px;
  padding: 24px;
  width: 412px;
  color: white;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  display: flex;              /* MUDANÇAS AQUI */
  flex-direction: column;     /* MUDANÇAS AQUI */
  min-height: 320px;          /* MUDANÇAS AQUI */

  @media (max-width: 600px) {
    padding: 12px;
    width: 100%;
    min-height: auto;
  }
`;

export const TituloCard = styled.h4<CardProps>`
  font-size: 24px;
  margin-bottom: 8px;
  color: ${({ type }) => colorMap[type]};
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 600px) {
    font-size: 16px;
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: white;
  margin: 4px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const InfoBotaoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  .local {
    font-size: 14px;
    color: white;
    flex: 1;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    .local {
      width: 100%;
    }
  }
`;

export const SaibaMaisButton = styled.button<ButtonProps>`
  background-color: ${({ type }) => colorMap[type]};
  border: none;
  color: ${colors.black};
  padding: 8px 16px;
  border-radius: 4px;

  font-size: 14px;
  font-weight: bold;
  align-self: flex-end;
  transition: background-color 0.3s;

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 4px 8px;
  }
`;

export const Divider = styled.hr<CardProps>`
  border: none;
  border-top: 1px solid ${({ type }) => (type ? colorMap[type] : "#444")};
  margin: 16px 0;

  @media (max-width: 600px) {
    margin: 8px 0;
  }
`;

// =================================================================
// NOVOS ELEMENTOS ADICIONADOS PARA O DESIGN DA IMAGEM
// =================================================================

export const ContentWrapperCard = styled.div`
  display: flex;              /* MUDANÇAS AQUI */
  flex-direction: column;     /* MUDANÇAS AQUI */
  justify-content: space-between; /* MUDANÇAS AQUI */
  flex-grow: 1;               /* MUDANÇAS AQUI */
  width: 100%;
  overflow: hidden;
  padding-bottom: 12px;       /* MUDANÇAS AQUI */
`;


export const SubtitleCard = styled.h2<CardProps>`
  font-size: 16px;
  font-weight: normal;
  color: ${({ type }) => colorMap[type]};
  margin: 4px 0 0 0;
`;

export const LocationInfoBlockCard = styled.div<CardProps>`
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
`;

export const InfoRowCard = styled.div<CardProps>`
  display: flex;
  align-items: center;
  color: ${({ type }) => colorMap[type]};
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }

  svg {
    margin-right: 12px;
    font-size: 18px;
  }
`;

export const FooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DurationTextCard = styled.span<CardProps>`
  display: flex;
  align-items: center;
  color: ${({ type }) => colorMap[type]};

  svg {
    margin-right: 8px;
  }
`;
