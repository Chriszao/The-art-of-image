import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  font-family: 'Poppins', sans-serif;

  body, input, button {
    font: 16px 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyles;
