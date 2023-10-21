'use client';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: local('Poppins Light'), local('Poppins-Light'),
          url('/fonts/poppins-v19-latin-300.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Poppins Regular'), local('Poppins-Regular'),
          url('/fonts/poppins-v19-latin-regular.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
          url('/fonts/poppins-v19-latin-600.woff2') format('woff2');
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.mainBg};
    }
  `}
`;
export default GlobalStyle;