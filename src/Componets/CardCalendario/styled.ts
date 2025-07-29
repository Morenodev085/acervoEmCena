import { styled } from "styled-components";

interface CardProps {
  borderColor?: string;
}

export const CardCalendariBody = styled.div<CardProps>`
  background-color: #000;
  border: 2px solid gray;
  border-radius: 8px;
  margin-top: 12px;
  padding: 16px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  transition: all 0.3s ease;
  max-width: 200px;

  @media (max-width: 600px) {
    min-height: 80px;
    padding: 12px;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`;

export const Descricao = styled.p`
  font-size: 14px;
  color: #ccc;

  @media (max-width: 600px) {
    display: none; /* ou font-size: 12px; se quiser manter */
  }
`;
export const SaibaMaisButton = styled.button`
  background-color: white;
  color: black;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 4px 8px;
  }
`;