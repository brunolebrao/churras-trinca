'use client';

import { usePathname } from 'next/navigation';

import { ThemeProvider } from 'styled-components';

import { Layout } from './Layout';

import { AuthProvider } from 'context/auth/useAuth';
import { TransactionsProvider } from 'context/events/useEvents';
import { checkIsPublicRoute } from 'functions/check-is-public-route';
import PrivateRoute from 'pages/PrivateRoute';
import { makeServer } from 'services/mirage';
import StyledComponentsRegistry from 'styles/registry';
import theme from 'styles/theme';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

const Providers = (props: React.PropsWithChildren) => {
  const pathName = usePathname();

  const isPublicPage = checkIsPublicRoute(pathName!);
  console.log('%c⧭', 'color: #ff0000', isPublicPage);
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <Layout title="Agenda de Churras">
          <AuthProvider>
            {isPublicPage && props.children}
            {!isPublicPage && (
              <PrivateRoute>
                <TransactionsProvider>{props.children}</TransactionsProvider>
              </PrivateRoute>
            )}
          </AuthProvider>
        </Layout>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
