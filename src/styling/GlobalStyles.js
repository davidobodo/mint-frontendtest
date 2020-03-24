import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, 
  *:before, 
  *:after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.4rem;
    font-family: sans-serif;
    background-color: #f7f8fa;
  }

  h1{
    font-size: 24px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  }

  h2{
      font-size: 18px;
      font-weight: 300;
  }

  h3{
      font-size: 14px;
      font-weight: 300;
  }

  h4{
      font-size: 12px;
      font-weight: 300;
  }

  h5{
      font-size: 11px;
      font-weight: 300;
  }

  h6{
      font-size: 10px;
      font-weight: 300;
  }

  p{
      font-size: 15px;
      font-weight: normal;
      line-height: 24px;
      color: $paragraph-color;
  }

`;
