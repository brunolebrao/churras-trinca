import styled, { css } from 'styled-components'

export const Loading = styled.div`
  ${({ theme }) => css`
    width: ${theme.spacings.small};
    height: ${theme.spacings.small};
    border: 2px solid ${theme.colors.mainBg};
    border-bottom-color: ${theme.colors.black};
    border-radius: 50%;
    display: inline-block;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`
