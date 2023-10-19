import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
    border: 1px solid #000;
    background-image: linear-gradient(
        to bottom,
        transparent,
        ${theme.colors.mainBg}
      ),
      url(/img/bg.png);
    width: 100vw;
    height: 100vh;
  `}
`
