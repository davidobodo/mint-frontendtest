import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, 
  *:before, 
  *:after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: SegoeUI;
    src:
        local("Segoe UI Light"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff2) format("woff2"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff) format("woff"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.ttf) format("truetype");
    font-weight: 100;
}

@font-face {
    font-family: SegoeUI;
    src:
        local("Segoe UI Semilight"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff2) format("woff2"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff) format("woff"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.ttf) format("truetype");
    font-weight: 200;
}

@font-face {
    font-family: SegoeUI;
    src:
        local("Segoe UI"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff2) format("woff2"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff) format("woff"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.ttf) format("truetype");
    font-weight: 400;
}

@font-face {
    font-family: SegoeUI;
    src:
        local("Segoe UI Bold"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff2) format("woff2"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff) format("woff"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.ttf) format("truetype");
    font-weight: 600;
}

@font-face {
    font-family: SegoeUI;
    src:
        local("Segoe UI Semibold"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff2) format("woff2"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff) format("woff"),
        url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.ttf) format("truetype");
    font-weight: 700;
}

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.4rem;
    font-family: 'SegoeUI', sans-serif;
    background-color: #E5E5E5;
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
