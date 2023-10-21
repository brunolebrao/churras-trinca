import { useRouter } from 'next/navigation';
import React, { createContext, useCallback, useContext, useState } from 'react';

import { APP_ROUTES } from 'constants/app-router';
import { api } from 'services/api';

type People = {
  id: number;
  name: string;
  amount: number;
};

enum Category {
  'SEMBEBIDAS',
  'COMBEBIDAS'
}

export type EventType = {
  id: number;
  date: string;
  name: string;
  peoples: People[];
  category: Category;
  amount: string;
  createdAt: string;
};
type EventInput = Omit<EventType, 'id' | 'createdAt'>;

export type AuthContextProps = {
  events: EventType[];
  createEvents: (events: EventInput) => Promise<void>;
};
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [event, setEvents] = useState<EventType[]>([]);

  const onSignIn = useCallback(
    async (user: { email: string; password: string }) => {
      setLoading(true);
      await api
        .get('/auth', {
          params: {
            ...user
          }
        })
        .then((response) => {
          console.log('%c⧭', 'color: #00bf00', response);
          setLoading(false);
          setAuth(response.data.token);
          if (response.data.token) {
            localStorage.setItem('userToken', response.data);
            push(APP_ROUTES.private.events);
          } else {
            push(APP_ROUTES.public.login);
          }
        })
        .catch((error) => {
          console.log('%c⧭', 'color: #e50000', error.response.data);
          // setError(error.response.data.errors);
          setLoading(false);
        });
      setUser(user);
      setLoading(false);
    },
    [push]
  );

  return (
    <AuthContext.Provider value={{ auth, user, loading, onSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
