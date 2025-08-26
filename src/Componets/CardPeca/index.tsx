import type { FC } from "react";
import {
  CardContainer,
  CardTitulo,
  CardDescricao,
  CardImageWrapper,
  CardInfoWrapper,
  CardFooter,
  BotaoInscricao,
  InfoGroup,
} from "./styled";
import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import type { PieceType } from "../../data/types";

// Interface da peça
export interface Peca {
  id: number;
  title: string;
  description: string; // agora com tags HTML como <br />
  type: PieceType;
  data: number;
  local: string;
  time: string | number;
  img: string;
  e?: string; // link de inscrição (opcional)
  classif: string;
}

// Props do componente
interface CardPecaListaProps {
  peca: Peca;
  reversed?: boolean;
}

const CardPecaLista: FC<CardPecaListaProps> = ({ peca, reversed = false }) => {
  const horarioFormatado = `${peca.time}${typeof peca.time === 'number' ? 'h' : ''}`;
  const classificacao = peca.classif?.trim() ? peca.classif : "Livre";

  return (
    <CardContainer reversed={reversed} pieceType={peca.type}>
<CardImageWrapper>
  {peca.img ? (
    <img
      src={peca.img}
      alt={`Imagem da peça ${peca.title}`}
      loading="lazy"
    />
  ) : null}
</CardImageWrapper>

      <CardInfoWrapper>
        <CardTitulo>{peca.title}</CardTitulo>

        {/* 🔽 Renderizando HTML na descrição */}
        <CardDescricao
          dangerouslySetInnerHTML={{ __html: peca.description }}
        />

        <CardFooter>
          <InfoGroup>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>{peca.local}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCalendarAlt />
              <span>
                {peca.data} de {peca.type === "Estudantil" ? "agosto" : "setembro"}, às {horarioFormatado}
              </span>
            </div>
            <div className="flex items-center gap-2">
<span>
  {peca.type === "Estudantil"
    ? ""
    : `Classificação Indicativa: ${classificacao}`}
</span>
            </div>
          </InfoGroup>

          {(peca.type === "Atividade" || peca.type === "Estudantil") && peca.e && (
            <a href={peca.e} target="_blank" rel="noopener noreferrer">
              <BotaoInscricao pieceType={peca.type}>
                {peca.type === "Estudantil" ? "Selecionados" : "Inscreva-se"}
              </BotaoInscricao>
            </a>
          )}
        </CardFooter>
      </CardInfoWrapper>
    </CardContainer>
  );
};

export default CardPecaLista;
