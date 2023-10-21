import React from 'react';

import { Container } from 'components/Container';

import * as S from './styles';
import { LayoutProps } from './types';

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <Container>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
      </S.Wrapper>
      {children}
    </Container>
  );
};
