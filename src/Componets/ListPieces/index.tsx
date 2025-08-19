import { useState } from "react";
import { useParams } from "react-router-dom";
import { pieces } from "../../data/peices";
import { ContainerSite } from "../../styled";
import {
  Desculpas,
  DivListtaMostra,
  DivTitulo,
  TituloMostraPage
} from "./styled";
import CardPecaLista from "../../Componets/CardPeca"; // Confirma caminho/nome

// Títulos correspondentes a cada tipo (rota)
const titulosPorTipo: Record<string, string> = {
  estudantil: "Mostra Estudantil",
  longa: "Mostra Peças",
  curta: "Mostra Cenas Curtas",
  rodada: "Rodada de Negócios",
  atividade: "Atividades Formativas",
  rua: "Mostra Rua",
};

const MostraPage = () => {
  const { type } = useParams();
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 6;

  const tipoNormalizado = type?.toLowerCase() || "";
  const tituloMostra = titulosPorTipo[tipoNormalizado] || "Tipo não encontrado";

  // Aqui filtra todas as peças do tipo, exceto as que tem showInList === true
  const pecasFiltradas = pieces.filter(
    (peca) =>
      peca.type.toLowerCase() === tipoNormalizado &&
      peca.showInList !== true
  );

  const totalPaginas = Math.ceil(pecasFiltradas.length / itensPorPagina);
  const indiceUltimoItem = paginaAtual * itensPorPagina;
  const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;
  const pecasPaginaAtual = pecasFiltradas.slice(indicePrimeiroItem, indiceUltimoItem);

  const handleMudarPagina = (novaPagina: number) => {
    if (novaPagina >= 1 && novaPagina <= totalPaginas) {
      setPaginaAtual(novaPagina);
    }
  };

  return (
    <ContainerSite>
      <DivListtaMostra>
        <DivTitulo>
          <TituloMostraPage>{tituloMostra}</TituloMostraPage>
          
        </DivTitulo>

        {pecasPaginaAtual.length > 0 ? (
          pecasPaginaAtual.map((peca, index) => (
            <CardPecaLista
              key={peca.id}
              peca={{ ...peca, img: peca.image || "" }}
              reversed={index % 2 === 1}
            />
          ))
        ) : (
          <Desculpas>Ops, nenhum evento encontrado no momento. Mas não se preocupe novos eventos serão atualizados em breve!</Desculpas>
        )}

        <div className="mt-6 flex flex-col items-center gap-2">
          <div className="flex justify-center items-center gap-4">
            <button
              className="px-4 py-2 bg-black border border-gray-400 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
              onClick={() => handleMudarPagina(paginaAtual - 1)}
              disabled={paginaAtual === 1}
            >
              Anterior
            </button>

            <button
              className="px-4 py-2 bg-black border border-gray-400 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
              onClick={() => handleMudarPagina(paginaAtual + 1)}
              disabled={paginaAtual === totalPaginas}
            >
              Próxima
            </button>
          </div>

          <span className="text-gray-700">
            Página <strong>{paginaAtual}</strong> de <strong>{totalPaginas}</strong>
          </span>
        </div>
      </DivListtaMostra>
    </ContainerSite>
  );
};

export default MostraPage;
