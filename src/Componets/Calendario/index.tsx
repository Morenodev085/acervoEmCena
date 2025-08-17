import { pieces } from "../../data/peices";
import CardCalendario from "../CardCalendario";
import { ContainerSite } from "../../styled";
import { CardRow, TextoDia } from "./styled";

const diasCalendario = Array.from({ length: 13 }, (_, i) => 16 + i);

const titulosPorTipo: Record<string, string> = {
    estudantil: "Mostra Estudantil",
    longa: "Mostrar Peças",
    curta: "Mostra Cenas Curtas",
    rodada: "Rodada de Negócios",
    formativa: "Atividades Formativas",
    rua: "Mostra Rua",
};

const Calendario = () => {
    const pecasPorDia: Record<number, typeof pieces> = {};

    pieces.forEach((piece) => {
        if (
            !pecasPorDia[piece.data]
        ) {
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
                                uf={piece.uf ?? ""}
                                description={piece.description}
                                type={piece.type}
                                local={piece.local}
                                date={piece.data}
                                time={piece.time}
                                duration={piece.duration ?? ""}
                                // Aqui passamos o título amigável do tipo
                                tipoTitulo={
                                    typeof piece.type === "string"
                                        ? titulosPorTipo[piece.type.toLowerCase()] || piece.type
                                        : piece.type
                                }

                            />
                        ))}
                    </CardRow>
                </div>
            ))}
        </ContainerSite>
    );
};

export default Calendario;
