import styled, { createGlobalStyle } from "styled-components";


const colors = {
    black: "#000000",
    brown: "#593F3D",
    cream: "#F5E1BB",
    green: "#969654",
    pink: "#CC6699",
    purple: "#953572",
    white: "#FFFFFF",
    yellow: "#FCAC56"
}

export const GlobralStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: ${colors.black};
        color: ${colors.white};
}
`
export const Container = styled.div`
    max-width: 1280px;
    margin-left: auto;        /* centraliza horizontalmente */
    margin-right: auto;
    padding-left: 1rem;       /* espaço lateral */
    padding-right: 1rem;
`