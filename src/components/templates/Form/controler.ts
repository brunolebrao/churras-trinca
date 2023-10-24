import { EventType, People } from 'pages/Agenda/types';

export const initialValues: EventType = {
  amount: undefined,
  category: 'SEMBEBIDAS',
  createdAt: '',
  date: '',
  id: 0,
  name: '',
  peoples: []
};

export const initialValuesPeople: People = {
  name: '',
  amount: undefined,
  id: 0
};
