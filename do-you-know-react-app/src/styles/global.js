import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        font-family: 'Titillium Web', sans-serif;
        font-size: 100%;
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        text-decoration: none;
        
    }


    img {
        width: 100%;
    }

    button{
        cursor: pointer;
    }

    ul, ol, li {
        list-style: none;
    }

 
`;

export const GlobalContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
