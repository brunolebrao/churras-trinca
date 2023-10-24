import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`;
export const TextArea = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    height: 10rem;
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
    border: 0.1rem solid ${theme.colors.gray};
    background: ${theme.colors.lightGray};
    color: ${theme.colors.black};
    resize: none;
    font-size: ${theme.font.sizes.small};

    &:focus {
      outline: none;
      border-color: ${theme.colors.darkGray};
    }
  `}
`;
