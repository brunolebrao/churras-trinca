import styled, { css, DefaultTheme } from 'styled-components';

import { ButtonProps } from '.';

type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'color'>;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.black};
    &:hover {
      filter: brightness(0.8);
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.black};
    &:hover {
      filter: brightness(0.8);
    }
  `,
  tertiary: (theme: DefaultTheme) => css`
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    &:hover {
      filter: brightness(0.8);
    }
  `,
  danger: (theme: DefaultTheme) => css`
    background: ${theme.colors.red};
    color: ${theme.colors.white};
    &:hover {
      filter: brightness(0.8);
    }
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
};

export const Whapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, color }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    cursor: pointer;
    text-decoration: none;

    /* &:hover {
      background: ${theme.colors.darkGray};
    } */

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    ${!!size && wrapperModifiers[size](theme)}
    ${!!color && wrapperModifiers[color](theme)}
    ${fullWidth && wrapperModifiers.fullWidth()}
    ${hasIcon && wrapperModifiers.withIcon(theme)}
  `}
`;
