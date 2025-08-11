import styled from "styled-components";
import { colorMap, type PieceType } from "../../data/types";
import { colors } from "../../styled";

type CardProps = {
  type: PieceType;
};
type ButtonProps = {
  type: PieceType;
};

export const CardCalendariBody = styled.div<CardProps>`
  background-color: #000;
  border: 1px solid ${({ type }) => colorMap[type]};
  border-radius: 8px;
  margin-top: 12px;
  padding: 16px;
  display: flex;
  width: 412px;
  height: 256px; // FIXO
  color: white;
  font-weight: bold;
  font-size: 32px;

  @media (max-width: 600px) {
    height: 128px;
    font-size: 16px;
    padding: 12px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const TituloCard = styled.h4`
  font-size: 24px;
  margin-bottom: 8px;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Descricao = styled.p`
  font-size: 16px;
  color: white;
  margin: 4px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Mostra até 2 linhas */
  -webkit-box-orient: vertical;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Divider = styled.hr<{ type?: PieceType }>`
  border: none;
  border-top: 1px solid ${({ type }) => (type ? colorMap[type] : "#444")};
  margin: 16px 0;

  @media (max-width: 600px) {
    margin: 8px 0;
  }
`;

export const SaibaMaisButton = styled.button<ButtonProps>`
  background-color: ${colors.black};
  border: 1px solid ${({ type }) => colorMap[type]};
  color: ${colors.white};
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  align-self: flex-end;

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 4px 8px;
  }
`;
