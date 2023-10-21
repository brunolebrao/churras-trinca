import React from 'react';

import * as S from './styles';

import { EventType } from 'services/hooks/useTransaction';

type CardProps = {
  children?: React.ReactNode;
  event: EventType;
  onClick?: () => void;
};

export const Card = ({ children, event, onClick }: CardProps) => {
  console.log('%c⧭', 'color: #f200e2', event);
  return (
    <S.Card onClick={onClick}>
      <S.CardHeader>
        <S.CardDate>{event.date}</S.CardDate>
        <S.CardTitle>{event.name}</S.CardTitle>
        <S.CardDate>Pessoas - {event.peoples.length}</S.CardDate>
      </S.CardHeader>
      <S.CardBody>
        <S.CardCategory>
          {event.category === 'SEMBEBIDAS' ? 'Sem Bebidas' : 'Com Bebidas'}
        </S.CardCategory>
        <S.CardAmount>{event.amount}</S.CardAmount>
      </S.CardBody>
    </S.Card>
  );
};
