import styled from "styled-components";
import { colorMap, type PieceType } from "../../data/types";
import { colors } from "../../styled";

interface CardContainerProps {
  pieceType: PieceType;
  reversed?: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: ${({ reversed }) => (reversed ? "row-reverse" : "row")};
  background-color: black;
  border-radius: 12px;
  border: 3px solid ${({ pieceType }) => colorMap[pieceType]};
  padding: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  color: ${({ pieceType }) => colorMap[pieceType]};
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardImageWrapper = styled.div`
  flex: 1.5;
  max-width: 512px;
  margin: 0 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 768px) {
    margin: 0 0 1rem 0;
    max-width: 100%;
  }
`;

export const CardInfoWrapper = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: ${colors.cream};
`;

export const CardTitulo = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
`;

export const CardDescricao = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  white-space: pre-line;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 0.95rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

interface BotaoInscricaoProps {
  pieceType: PieceType;
}

export const BotaoInscricao = styled.button<BotaoInscricaoProps>`
  background-color: transparent;
  color: ${colors.cream};
  border: 2px solid ${({ pieceType }) => colorMap[pieceType]};
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ pieceType }) => colorMap[pieceType]};
    color: black;
  }
`;
