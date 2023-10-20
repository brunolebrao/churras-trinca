import React from 'react'
import * as S from './styles'
import { useTransactions } from 'services/hooks/useTransaction'

const AgendaTemplate = () => {
  const { transactions } = useTransactions()
  console.log('%c⧭', 'color: #ff0000', transactions)
  return <S.Wrapper>index</S.Wrapper>
}
export default AgendaTemplate
