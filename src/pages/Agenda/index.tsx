import { useCallback, useEffect, useState } from 'react';

import { Card } from 'components/Card';

import * as S from './styles';

import { api } from 'services/api';
import { EventType } from 'services/hooks/useTransaction';

const AgendaTemplate = () => {
  // const { transactions } = useTransactions();
  // console.log('%c⧭', 'color: #ff0000', transactions);
  const [events, setEvents] = useState<EventType[]>([]);

  const getEvent = useCallback(async () => {
    await api.get('events').then((response) => {
      console.log('%c⧭', 'color: #1d5673', response);
      setEvents(response.data.events);
    });
  }, []);

  useEffect(() => {
    getEvent();
  }, [getEvent]);
  return (
    <S.Wrapper>
      {events.map((event) => (
        <Card
          key={event.id}
          event={event}
          onClick={() => alert('Para outra pagina')}
        />
      ))}
    </S.Wrapper>
  );
};
export default AgendaTemplate;
