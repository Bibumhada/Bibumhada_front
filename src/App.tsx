import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AsyncBoundary from 'components/common/AsyncBoundary';
import AppRoutes from 'router/AppRoutes';
import { AppLayout } from 'styles/AppLayout';
import { GlobalStyle } from 'styles/GlobalStyle.js';
import Error from 'pages/Error/Error';
import { RecoilRoot } from 'recoil';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  useEffect(() => {
    //debounce추가
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
      <RecoilRoot>
        <AsyncBoundary errorFallback={<Error />} suspenseFallback={<>...loading</>}>
          <ReactQueryDevtools initialIsOpen={false} />
          <AppLayout>
            <AppRoutes />
          </AppLayout>
        </AsyncBoundary>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
