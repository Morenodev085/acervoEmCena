import styled from "styled-components";
import { colors } from "../../styled";

export const TiTuloSection = styled.h2`
  text-align: center;
color: ${colors.cream};
  
  .top, .bottom {
      display: block;
    }
    
    .top {
        font-size: 2.8rem;
        font-weight: 400;
    }
    
    .bottom {
        font-size: 3.8rem;
        font-weight: 700;
        color: ${colors.green};
    }
    @media (max-width: 768px) {
    .top {
      font-size: 1.68rem; // 40% menor
    }

    .bottom {
      font-size: 2.28rem; // 40% menor
    }
  }
    `

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap; // torna responsivo
  margin-top: 24px;
  `

export const TextContent = styled.div`
  flex: 1;
  text-align: center;

  button {
    margin-top: 1rem;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    color: white;
    border: 1px solid ${colors.green};
    border-radius: 8px;
    cursor: pointer;
    width: 80%;
  }
`

export const ImageContent = styled.div`
  flex: 1;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`