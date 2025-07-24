import styled, { createGlobalStyle } from "styled-components";

interface ButtonProps {
  ButtonColor?: string
}
export const colors = {
    black: "#000000",
    brown: "#593F3D",
    cream: "#F5E1BB",
    green: "#969654",
    pink: "#CC6699",
    purple: "#953572",
    white: "#FFFFFF",
    yellow: "#FCAC56",
    grey: "	#C0C0C0"
}

export const GlobralStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: ${colors.black};
        color: ${colors.white};
}
`
export const ContainerSite = styled.div`
    max-width: 1280px;
    margin-left: auto;        /* centraliza horizontalmente */
    margin-right: auto;
    padding-left: 1rem;       /* espaço lateral */
    padding-right: 1rem;
`
export const Button = styled.button<ButtonProps>`
  padding: 0.5rem 6.0rem;
  margin: 12px;
  border-radius: 16px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: ${colors.white};
  /* color: ${({ ButtonColor }) => ButtonColor || '#fff'}; */
  background-color: ${({ ButtonColor }) => ButtonColor || '#fff'};
//   border: 2px solid ${({ ButtonColor }) => ButtonColor || '#fff' };
  
text-shadow:
    -1px -1px 0 #000,
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;

  &:hover {
    opacity: 0.85;
  }
`;