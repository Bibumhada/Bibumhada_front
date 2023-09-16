import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect } from 'react';
import AppRoutes from 'router/AppRoutes';
import { AppLayout } from 'styles/AppLayout';
import { GlobalStyle } from 'styles/GlobalStyle.js';
import AsyncBoundary from 'components/common/AsyncBoundary';
import Loading from 'pages/Loading/Loading';

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
      <AsyncBoundary errorFallback={<>...error</>} suspenseFallback={<>...loading</>}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <GlobalStyle />
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </AsyncBoundary>
    </QueryClientProvider>
  );
}

export default App;
