import React from 'react'
import { LayoutProps } from './types'
import { Container } from 'components/Container'
import * as S from './styles'

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <Container>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
      </S.Wrapper>
      {children}
    </Container>
  )
}
