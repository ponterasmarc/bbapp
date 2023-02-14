import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body{
    background: ${({ theme }) => theme.colors.bodyBg};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.50s linear;
    font-family: 'Roboto', sans-serif;
    line-height: 1.5em;
  }  
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Fredoka One', sans-serif;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }
  a {
    color: ${({ theme }) => theme.colors.link};
  }
`;
