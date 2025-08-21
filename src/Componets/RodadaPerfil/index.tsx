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
import { Link } from "react-router-dom";

const RodadaBody = () => {
  return (
    <ContainerSite>
      <TituloRodada>Rodada de Negócio</TituloRodada>

      <ContainerRodada>
        <RodadaItem>
          <RodadaTextWrapper>
            <TextRodada>
              A RODADA DE NEGÓCIOS do 18° Niterói em Cena - Festival Internacional de Teatro é um espaço exclusivo para conectar produtores, artistas, curadores de festivais, programadores de centros culturais, diretores de teatros e gestores culturais com o objetivo de fortalecer a circulação de projetos culturais de Artes Cênicas, estabelecer parcerias estratégicas e proporcionar novas oportunidades de trabalho.
              <br /><br />Durante o evento, os participantes terão a oportunidade de:
            </TextRodada>
            <TextRodada>
              <br />- Apresentar e discutir projetos culturais com programadores de festivais e diretores de equipamentos culturais, visando ampliar a visibilidade e o alcance das iniciativas artísticas; <br /><br />
              - Explorar novas possibilidades de difusão e apoio para espetáculos, iniciativas de formação e outras ações culturais, criando oportunidades para o crescimento e a sustentabilidade dos projetos; <br /> <br />
              - Estabelecer colaborações e parcerias que possam garantir a circulação de projetos em diferentes contextos e mercados; <br /> <br />
              - Debater formas inovadoras de financiamento e apoio, que contribuam para a viabilização e expansão de projetos culturais de forma sustentável.
            </TextRodada>
          </RodadaTextWrapper>
          <RodadaImage src={rodada1} alt="Rodada 1" />
        </RodadaItem>
            <TextRodada>
              Este é um ambiente estratégico e a oportunidade ideal para quem busca ampliar sua rede de contatos e estabelecer parcerias comerciais capazes de impulsionar a circulação de produtos culturais, fomentar o desenvolvimento de propostas artísticas já em andamento e estimular soluções inovadoras para os setores de Teatro, Dança e Circo. Para tal, dividimos os interessados em participar do evento em duas categorias:.
            </TextRodada>
        <RodadaItem reverse>
          <RodadaTextWrapper>
            <TextRodada><br />
              1) VENDEDORES: <br /> <br />
              - Artistas de Teatro, Dança e Circo que tenham espetáculos prontos e se inscreverem na Rodada de Negócios do 18º Niterói em Cena, por meio do formulário que está disponível no site do festival, até o dia 20/09/2025; <br />
              - Pessoas convidadas pela produção do 18º Niterói em Cena – Festival Internacional de Teatro para participarem da Rodada de Negócios. <br />
            </TextRodada>
            <TextRodada>
              <br />2) COMPRADORES: <br /> <br />

              - Curadores e programadores de festivais de Teatro, Dança e Circo que se inscreverem na Rodada de Negócios do 18º Niterói em Cena, por meio do formulário que estará disponível no site do festival, até o dia 20/09/2025;<br />

              - Diretores de equipamentos culturais, públicos ou privados, que se inscreverem na Rodada de Negócios do 18º Niterói em Cena, por meio do formulário que estará disponível no site do festival, até o dia 20/09/2025;<br />

              - Gestores culturais do setor público ou privado que se inscreverem na Rodada de Negócios do 18º Niterói em Cena, por meio do formulário que estará disponível no site do festival, até o dia 20/09/2025.<br />
            </TextRodada>
          </RodadaTextWrapper>
          <RodadaImage src={rodada2} alt="Rodada 2" />
        </RodadaItem>
        <TextRodada>

          <br/>Todo artista de Teatro, Dança ou Circo pode participar da Rodada de Negócios, mesmo aqueles que não integrarão a programação da 18ª edição do Niterói em Cena. Não há limitação territorial para a inscrição, no entanto, a Rodada de Negócios é presencial e não haverá possibilidade de participação online.
          A Rodada de Negócios foi pensada para ser um espaço eficiente e dinâmico, promovendo o encontro direto entre quem faz a arte e quem investe ou potencializa seu alcance no mercado cultural.
        </TextRodada>
        <CenteredContainer>

          <FullWidthButton ><Link to={"https://docs.google.com/forms/d/e/1FAIpQLSfOfLQ36ZBnfuhAhvYJdhj5DEyznJzws96sMCZFcPiEJdi-Zw/viewform?usp=dialog"}>Inscreva-se</Link></FullWidthButton>
        </CenteredContainer>
      </ContainerRodada>
    </ContainerSite>
  );
};

export default RodadaBody;
