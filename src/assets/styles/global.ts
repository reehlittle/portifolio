import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }


  html, body, input, button,  #root {
    min-height: 100%;
    width: 100%;
    font: 14px Roboto;
    font-weight: 100;
  }

  body{
    background: rgb(48,23,52);
    background: radial-gradient(circle, rgba(48,23,52,1) 0%, rgba(40,25,55,1) 48%, rgba(23,17,39,1) 100%);-webkit-font-smoothing: antialiased !important;
  }

  #root {
    height: 100vh;
    overflow: auto;
  }

  button {
    cursor: pointer;
  }

`;
