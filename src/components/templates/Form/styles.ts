import styled, { css } from 'styled-components';

export const RadioGroup = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
`;
export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;
  width: 100%;
`;
export const ContentPeople = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.6rem;
  width: 100%;
`;
export const Error = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `};
`;
