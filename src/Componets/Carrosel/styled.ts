import styled from 'styled-components'

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 900px;
  overflow: hidden;
    @media (max-width: 768px) {

        height: 400px;
    }
`

export const FadeImage = styled.img<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* padrão para telas maiores */
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  padding-top: 128px; /* espaço para elemento flutuante no topo */

  @media (max-width: 768px) {
    object-fit: contain; /* mostra a imagem inteira em telas menores */
    padding-top: 64px;   /* ajusta o espaço no topo se necessário */
    background-color: black; /* opcional: evita espaços em branco */
  }
`;

