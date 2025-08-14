import { useParams } from "react-router-dom";
// import { pieces } from "../../data/peices";
import { ContainerSite } from "../../styled";
import { DivListtaMostra, DivTitulo, TituloMostraPage } from "./styled";

const MostraPage = () => {
  const { type } = useParams();

  // const pecasFiltradas = pieces.filter(
  //   (piece) => piece.type.toLowerCase() === type?.toLowerCase()
  // );

  const titulosPorTipo: Record<string, string> = {
    estudantil: "Mostra Estudantil",
    longa: "Mostrar peças",
    curta: "Mostra Cenas Curtas",
    rodada: "Rodada de Negócios",
    formativa: "Atividades Formativas",
    rua: "Mostra Rua"
  };

  return (
    <ContainerSite>
      <DivListtaMostra>
        <DivTitulo>
          <TituloMostraPage>{titulosPorTipo[type?.toLowerCase() || ""] || "Tipo não encontrado"}</TituloMostraPage>
          <p>A lista de eventos destinada a {titulosPorTipo[type?.toLowerCase() || ""] || "tipo não encontrado"} todas as estradas sao francas e de loivre acesse, consilte a classificacao etaria</p>
        </DivTitulo>
      </DivListtaMostra>
    </ContainerSite>
  );
};

export default MostraPage;
