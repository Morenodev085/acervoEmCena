
import styled from "styled-components";
import { colorMap, type PieceType } from "../../data/types"; // ajuste o caminho
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
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  transition: all 0.3s ease;
  max-width: 412px;
  height: 256px;
  color:${({ type }) => colorMap[type]} ;
  font-weight: bold;
  font-size: 32px;

  @media (max-width: 600px) {
    min-height: 80px;
    padding: 12px;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`;

export const Descricao = styled.p`
  font-size: 16px;


  @media (max-width: 600px) {
    display: none; /* ou font-size: 12px; se quiser manter */
  }
`;
export const SaibaMaisButton = styled.button<ButtonProps>`
  background-color: ${colors.black};
  border: 1px solid ${({ type }) => colorMap[type]} ;
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