import { createGlobalStyle } from 'styled-components'
import avertaBold from './fonts/Averta-ExtraBold.woff2'
import averta from './fonts/Averta-normal.woff2'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Averta';
    src: local('Averta'),
    url(${averta}) format('woff2');
  }

  @font-face {
    font-family: 'AvertaBold';
    src: local('Averta Bold'),
    url(${avertaBold}) format('woff');
  }

  html {
    scroll-behavior: smooth;
    background: linear-gradient(180deg, #1F3044 16.37%, #0A111F 59.27%, #162333 100%);
  }

  h2 {
    font-size: 48px !important;
  }

  h3 {
    --font-size: 44px !important;
    line-height: 42px !important;
  }

  a {
    text-decoration: none !important;
  }
`

export default GlobalStyle
