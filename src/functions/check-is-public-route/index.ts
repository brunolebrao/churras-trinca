import { APP_ROUTES } from 'constants/app-router';

export const checkIsPublicRoute = (pathname: string): boolean => {
  const publicRoutes = Object.values(APP_ROUTES.public);
  return publicRoutes.includes(pathname);
};
