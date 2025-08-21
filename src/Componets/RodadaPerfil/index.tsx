import { ContainerSite } from "../../styled";
import {
  ContainerRodada,
  TituloRodada,
  TextRodada,
  RodadaItem,
  RodadaTextWrapper,
  RodadaImage,
  FullWidthButton,
  CenteredContainer,
} from "./styled";

import rodada1 from "../../assets/atividadefoto/rodada1.jpg";
import rodada2 from "../../assets/atividadefoto/rodada2.jpg";

const RodadaBody = () => {
  return (
    <ContainerSite>
      <TituloRodada>Rodada de Negócio</TituloRodada>

      <ContainerRodada>
        <RodadaItem>
          <RodadaTextWrapper>
            <TextRodada>
              A Rodada de Negócios é uma oportunidade única para empreendedores
              se conectarem, trocarem experiências e gerarem parcerias estratégicas.
            </TextRodada>
          </RodadaTextWrapper>
          <RodadaImage src={rodada1} alt="Rodada 1" />
        </RodadaItem>

        <RodadaItem reverse>
          <RodadaTextWrapper>
            <TextRodada>
              A edição anterior contou com dezenas de participantes e rendeu
              excelentes frutos para os negócios locais, fortalecendo a rede de
              colaboração entre empresas.
            </TextRodada>
          </RodadaTextWrapper>
          <RodadaImage src={rodada2} alt="Rodada 2" />
        </RodadaItem>
<CenteredContainer>

        <FullWidthButton>Inscreva-se</FullWidthButton>
</CenteredContainer>
      </ContainerRodada>
    </ContainerSite>
  );
};

export default RodadaBody;
