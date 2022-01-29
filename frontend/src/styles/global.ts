import { createGlobalStyle, css } from 'styled-components';

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

  ${({ theme }) => css`
    body,
    input {
      font: 16px 'Poppins', sans-serif;
      background-color: ${theme.colors.mainBg};
    }
  `}

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
