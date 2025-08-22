import { pieces } from "../../data/peices";
import CardCalendario from "../CardCalendario";
import { ContainerSite } from "../../styled";
import { CardRow, TextoDia } from "./styled";

// Dias do calendário: 16 a 28 de setembro
const diasCalendario = Array.from({ length: 13 }, (_, i) => 16 + i);

// Títulos legíveis por tipo de peça
const titulosPorTipo: Record<string, string> = {
    estudantil: "MOSTRA ESTUDANTIL",
    longa: "MOSTRA PEÇAS",
    curta: "MOSTRA CENAS CURTAS",
    rodada: "RODADA DE NEGÓCIOS",
    atividade: "ATIVIDADES FORMATIVAS",
    rua: "MOSTRA RUA",
};

// Função para converter o horário em valor numérico para ordenação
const parseHora = (hora: string | number): number => {
    if (typeof hora === "number") return hora;
    if (hora.includes(":")) {
        const [h, m] = hora.split(":").map(Number);
        return h + m / 60;
    }
    return parseInt(hora);
};

const Calendario = () => {
    const pecasPorDia: Record<number, typeof pieces> = {};

    // Agrupa as peças por dia
    pieces.forEach((piece) => {
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
                        {(pecasPorDia[dia] || [])
                            .sort((a, b) => parseHora(a.time) - parseHora(b.time))
                            .map((piece) => (
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
                                    tipoTitulo={
                                        typeof piece.type === "string"
                                            ? titulosPorTipo[piece.type.toLowerCase()] || piece.type
                                            : piece.type
                                    }
                                    classif={piece.classif ?? "livre"}
                                />
                            ))}
                    </CardRow>
                </div>
            ))}
        </ContainerSite>
    );
};

export default Calendario;
