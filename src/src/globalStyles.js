import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
    --font-base: 'Cormorant Garamond', serif;
    --font-alt: 'Open Sans', sans-serif;
    --color-gold: #fdd13a;
    --color-black: #0C0C0C;
    --color-gray: #545454;
    --color-crimson: #F5EFDB;
    --color-grey: #AAAAAA;
    --color-white: #FFFFFF;
    --color-golden:#dda120;
    --transition:0.5s  all ease ;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /* font-family:var(--font-base); */
    scroll-behavior:smooth;

  }
  body,html{
    max-width: 100%;
    overflow-x: hidden;
  }
  a {
    color: unset;
    text-decoration: none;
  }
  button{
    font-family:  var(--font-base);
  }
  @keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}

`