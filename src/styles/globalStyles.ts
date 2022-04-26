import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Averta';
    src: local('Averta'),
    url('fonts/Averta-normal.woff2') format('woff2');
  }

  @font-face {
    font-family: 'AvertaBold';
    src: local('Averta Bold'),
    url('/fonts/Averta-ExtraBold.woff2') format('woff');
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    background: linear-gradient(180deg, #1F3044 16.37%, #0A111F 59.27%, #162333 100%);
  }

  a {
    text-decoration: none !important;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
     user-select: none;
  }
`

export default GlobalStyle
