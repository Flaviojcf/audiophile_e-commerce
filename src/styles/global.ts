import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
     
    }

    body {
        color: ${(props) => props.theme.colors.black};
        background: ${(props) => props.theme.colors["white-100"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: Manrope,'sans-serif';
        font-weight: 500;
        font-size: 0.9375rem;
    }

    button {
        cursor: pointer;
    }

    h1 {
        font: 700 3.5rem;
        line-height: 58px;
        letter-spacing: 2px;
    }

    h2 {
        font: 700 2.5rem;
        line-height: 44px;
        letter-spacing: 1.5px;
    }

    h3 {
        font: 700 2rem;
        line-height: 36px;
        letter-spacing: 1.15px;
    }

    h4 {
        font: 700 1.5rem;
        line-height: 38px;
        letter-spacing: 2px;
    }

    h5 {
        font: 700 1.5rem;
        line-height: 33px;
        letter-spacing: 1.7px;
    }

    h6 {
        font: 700 1.125rem;
        line-height: 24px;
        letter-spacing: 1.3px; 
    }
`;
