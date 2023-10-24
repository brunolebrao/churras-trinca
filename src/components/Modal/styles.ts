import styled from 'styled-components';

export const CloseButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 2.4rem;
`;
