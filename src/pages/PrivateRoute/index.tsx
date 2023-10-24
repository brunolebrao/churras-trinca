import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import { APP_ROUTES } from 'constants/app-router';
import { getLocalStorage } from 'functions/local-storage';

type PrivateRouteProps = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { push } = useRouter();

  const isUserAuthenticated = getLocalStorage('userToken');

  useEffect(() => {
    if (!isUserAuthenticated) {
      push(APP_ROUTES.public.login);
    }
  }, [isUserAuthenticated, push]);
  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  );
};
export default PrivateRoute;
