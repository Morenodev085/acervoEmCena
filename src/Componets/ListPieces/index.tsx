import { useParams } from "react-router-dom";
// import { pieces } from "../../data/peices";
import { ContainerSite } from "../../styled";

const MostraPage = () => {
  const { type } = useParams();

  // const pecasFiltradas = pieces.filter(
  //   (piece) => piece.type.toLowerCase() === type?.toLowerCase()
  // );

  return (
    <ContainerSite>
      <div>
        <h2>Peças do tipo: {type}</h2>
      </div>
    </ContainerSite>
  );
};

export default MostraPage;
