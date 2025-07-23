import styled from 'styled-components'

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  overflow: hidden;
  
`

export const FadeImage = styled.img<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;              /* agora é responsivo */
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  padding-top: 128px; /* espaço para elemento flutuante no topo */
`
