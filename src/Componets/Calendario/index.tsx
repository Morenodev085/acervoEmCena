import { ContainerSite } from "../../styled";
import CardCalendario from "../CardCalendario";
import { TextoDia, TextoEstilizado } from "./styled";
import { pieces } from "../../data/peices";
import { colorMap } from "../../data/types";
import type { Piece } from "../../data/types";

const diasCalendario = Array.from({ length: 13 }, (_, i) => 16 + i); // 16 a 28

const Calendario = () => {
    const pecasPorDia: Record<number, Piece[]> = {};

    pieces.forEach((piece) => {
        if (!pecasPorDia[piece.data]) {
            pecasPorDia[piece.data] = [];
        }
        pecasPorDia[piece.data].push(piece);
    });

    return (
        <ContainerSite>
            <TextoEstilizado>Programação Completa</TextoEstilizado>

            {diasCalendario.map((dia) => (
                <div key={dia}>
                    <TextoDia>Dia {dia} de Setembro</TextoDia>

                    {(pecasPorDia[dia] || []).map((piece) => (
                        <CardCalendario
                            key={piece.id}
                            title={piece.title}
                            description={piece.description}
                            borderColor={colorMap[piece.type]}
                        />
                    ))}
                </div>
            ))}
        </ContainerSite>
    );
};

export default Calendario;
