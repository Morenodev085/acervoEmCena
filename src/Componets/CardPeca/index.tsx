import type { FC } from "react";
import {
  CardContainer,
  CardTitulo,
  CardDescricao,
  CardImageWrapper,
  CardInfoWrapper,
  CardFooter,
} from "./styled";
import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import type { PieceType } from "../../data/types";

export interface Peca {
  id: number;
  title: string;
  description: string;
  type: PieceType;
  data: number;  // agora número mesmo
  local: string;
  time: number;  // também número
  img: string;
}

interface CardPecaListaProps {
  peca: Peca;
  reversed?: boolean;
}

const CardPecaLista: FC<CardPecaListaProps> = ({ peca, reversed = false }) => {
  return (
    <CardContainer reversed={reversed} pieceType={peca.type}>
      <CardImageWrapper>
        <img src={peca.img} alt={`Imagem da peça ${peca.title}`}  loading="lazy" />
      </CardImageWrapper>

      <CardInfoWrapper>
        <CardTitulo>{peca.title}</CardTitulo>
        <CardDescricao>{peca.description}</CardDescricao>
        <CardFooter>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>{peca.local}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRegCalendarAlt />
            <span>
              {peca.data} de setembro às {peca.time}h
            </span>
          </div>
        </CardFooter>
      </CardInfoWrapper>
    </CardContainer>
  );
};

export default CardPecaLista;
