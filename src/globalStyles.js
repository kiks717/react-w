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
    font-family: 'Cormorant Garamond', serif;
    scroll-behavior:smooth;
  }
  a {
    color: unset;
    text-decoration: none;
  }
`