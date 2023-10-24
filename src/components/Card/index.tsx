import React from 'react';

import { Button } from 'components/Button';
import { Collapse } from 'components/Collapse';

import * as S from './styles';

import dayjs from 'dayjs';
import { EventType } from 'pages/Agenda/types';

type CardProps = {
  children?: React.ReactNode;
  event: EventType;
  onClick?: () => void;
  handleDelete?: () => void;
};

export const Card = ({ event, onClick, handleDelete }: CardProps) => {
  return (
    <S.Card>
      <S.Content>
        <S.CardHeader>
          <S.CardTitle>{event.name}</S.CardTitle>
          {/* <S.CardDate>{event.date}</S.CardDate> */}
          <S.CardDate>{dayjs(event.date).format('DD/MM/YYYY')}</S.CardDate>
          <S.CardCategory>{event.description}</S.CardCategory>
        </S.CardHeader>
        <S.CardBody>
          <S.CardCategory>Valor sugerido:</S.CardCategory>
          <S.CardAmount>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(Number(event.amount ? event.amount : 0))}
          </S.CardAmount>
          <S.CardCategory>
            {event.category === 'SEMBEBIDAS' ? 'Sem Bebidas' : 'Com Bebidas'}
          </S.CardCategory>
        </S.CardBody>
      </S.Content>

      <Collapse title={`Pessoas - ${event.peoples.length}`}>
        {event.peoples.map((people) => (
          <S.CardPeople key={people.name}>
            <S.CardPeopleName>{people.name}</S.CardPeopleName>
            <S.CardPeopleAmount>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(Number(people.amount ? people.amount : 0))}{' '}
            </S.CardPeopleAmount>
          </S.CardPeople>
        ))}
        <S.Divider />
        {event.peoples.length > 0 && (
          <S.CardPeople>
            <S.CardPeopleName>Total</S.CardPeopleName>
            <S.CardPeopleAmount>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(
                event.peoples.reduce((acc, curr) => {
                  return acc + Number(curr.amount ? curr.amount : 0);
                }, 0)
              )}
            </S.CardPeopleAmount>
          </S.CardPeople>
        )}
      </Collapse>
      <S.Footer>
        <Button onClick={handleDelete} color="danger">
          Excluir
        </Button>
        <Button onClick={onClick} color="primary">
          Editar
        </Button>
      </S.Footer>
    </S.Card>
  );
};
