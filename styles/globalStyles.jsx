import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Title';
    src: url('/assets/fonts/Quicksand/Quicksand-VariableFont_wght.ttf') format('truetype');
  }
  @font-face {
    font-family: "Body";
    src: url('/assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf') format('truetype');
  }
  body{
    background: ${({ theme }) => theme.colors.bodyBg};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.50s linear;
    line-height: 1.5em; 
    font-family: 'Body', sans-serif;
    font-size: 15px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Title', sans-serif;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.headingText};
    line-height: 1.5em;
  }
  h1{
    font-size: 50px;
  } 
  h2{
    font-size: 40px;
  } 
  h3{
    font-size: 30px;
  } 
  h4{
    font-size: 26px;
  } 
  h5{
    font-size: 22px;
  } 
  h6{
    font-size: 18px;
  }
  button{
    font-family: 'Body', sans-serif;
    text-transform: uppercase;
    border-radius: 7px;
    padding: 8px 25px;
    border: none;
  }
  a {
    color: ${({ theme }) => theme.colors.link};
  }
`;
