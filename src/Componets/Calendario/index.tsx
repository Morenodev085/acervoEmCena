import { ContainerSite } from "../../styled";
import CardCalendario from "../CardCalendario";
import { CardRow, TextoDia } from "./styled";
import { pieces } from "../../data/peices";
import type { Piece } from "../../data/types";

const diasCalendario = Array.from({ length: 13 }, (_, i) => 16 + i); // Dias 16 a 28

const Calendario = () => {
  // Todas as peças
  const todasPecas = [...pieces];

  // Peças estudantis com showInList === true
  const estudantisShowTrue = pieces.filter(
    (p) => p.type.toLowerCase() === "estudantil" && p.showInList === true
  );

  // Map para evitar duplicatas
  const mapaPecas = new Map<number, Piece>();
  todasPecas.forEach(p => mapaPecas.set(p.id, p));
  estudantisShowTrue.forEach(p => mapaPecas.set(p.id, p));

  const pecasFiltradas = Array.from(mapaPecas.values());

  // Organizar por dia
  const pecasPorDia: Record<number, Piece[]> = {};

  pecasFiltradas.forEach((piece) => {
    if (!pecasPorDia[piece.data]) {
      pecasPorDia[piece.data] = [];
    }
    pecasPorDia[piece.data].push(piece);
  });

  return (
    <ContainerSite>
      {diasCalendario.map((dia) => (
        <div key={dia}>
          <TextoDia>Dia {dia} de Setembro</TextoDia>
          <CardRow>
            {(pecasPorDia[dia] || []).map((piece) => (
              <CardCalendario
                key={piece.id}
                title={piece.title}
                companyName={piece.companyName ?? ""}
                city={piece.city ?? ""}
                uf={piece.uf ?? "RJ"}
                description={piece.description}
                type={piece.type}
                local={piece.local}
                date={piece.data}
                time={piece.time}
                duration={piece.duration ?? ""}
              />
            ))}
          </CardRow>
        </div>
      ))}
    </ContainerSite>
  );
};

export default Calendario;
