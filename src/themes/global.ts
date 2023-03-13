import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Inter', sans-serif;
                                                
    }

    html, body{
        margin: 0;
        padding: 0;
        height: 100vh;
    }

    h1,h2,h3,h4,h5,h6, p{
        padding: 0;
        margin: 0;
    }

    input{
        border: none;
        background-color: transparent;
        background: transparent;
        outline: none;
    }

    button{
        background-color: transparent;
        border: transparent;
        cursor: pointer;
    }
`;
