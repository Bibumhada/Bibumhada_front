import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AsyncBoundary from 'components/common/AsyncBoundary';
import AppRoutes from 'router/AppRoutes';
import { AppLayout } from 'styles/AppLayout';
import { GlobalStyle } from 'styles/GlobalStyle.js';
import Error from 'pages/Error/Error';
import { RecoilRoot } from 'recoil';
import Loading from 'pages/Loading/Loading';
import ReactGA from 'react-ga4';
import RouteChangeTracker from 'util/RouteChangeTracker';

if (process.env.REACT_APP_GOOGLE_ANALYTICS) {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
}

if (process.env.NODE_ENV === 'production') {
  console = window.console || {};
  console.log = function no_console() {};
  console.warn = function no_console() {};
  console.error = function () {};
}

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  RouteChangeTracker();

  useEffect(() => {
    const handleResize = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <AppLayout>
        <RecoilRoot>
          <AsyncBoundary errorFallback={<Error />} suspenseFallback={<Loading message="로딩중" />}>
            <ReactQueryDevtools initialIsOpen={false} />
            <AppRoutes />
          </AsyncBoundary>
        </RecoilRoot>
      </AppLayout>
    </QueryClientProvider>
  );
}

export default App;
