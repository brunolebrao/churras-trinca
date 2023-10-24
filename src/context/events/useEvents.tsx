import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

import { EventType } from 'pages/Agenda/types';
import { api } from 'services/api';

type EventInput = Omit<EventType, 'id' | 'createdAt'>;

interface EventContextProps {
  children: React.ReactNode;
}

interface EventContextData {
  events: EventType[];
  event?: EventType;
  postEvent: (event: EventInput) => Promise<void>;
  putEvent: (event: EventType) => Promise<void>;
  getEventPerId: (id: number) => void;
  deleteEvent: (id: number) => void;
  setEvent: React.Dispatch<React.SetStateAction<EventType | undefined>>;
}

const EventsContext = createContext<EventContextData>({} as EventContextData);

export function EventsProvider({ children }: EventContextProps) {
  const [events, setEvents] = useState<EventType[]>([]);
  const [event, setEvent] = useState<EventType>();

  useEffect(() => {
    api.get('events').then((response) => setEvents(response.data.events));
  }, []);

  const getEventPerId = useCallback(async (id: number) => {
    await api.get(`events/${id}`).then((response) => {
      if (response.data.event) {
        setEvent(response.data.event);
      }
    });
  }, []);

  const postEvent = useCallback(
    async (eventInput: EventInput) => {
      const response = await api.post('events', {
        ...eventInput,
        createdAt: new Date()
      });
      const { event } = response.data;

      setEvents([...events, event]);
    },
    [events]
  );

  const putEvent = useCallback(async (eventInput: EventType) => {
    const response = await api.patch(`events/${eventInput.id}`, {
      ...eventInput,
      createdAt: new Date()
    });

    const { events } = response.data;

    setEvents(events);
  }, []);

  const deleteEvent = useCallback(async (eventId: number) => {
    const response = await api.delete(`events/${eventId}`);

    const { events } = response.data;

    setEvents(events);
  }, []);

  const contextValue = useMemo(
    () => ({
      postEvent,
      events,
      event,
      getEventPerId,
      setEvent,
      putEvent,
      deleteEvent
    }),
    [postEvent, events, event, getEventPerId, setEvent, putEvent, deleteEvent]
  );

  return (
    <EventsContext.Provider value={contextValue}>
      {children}
    </EventsContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventsContext);

  return context;
}
