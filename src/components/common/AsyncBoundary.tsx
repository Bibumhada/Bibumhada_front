import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Component, FunctionComponent, ReactElement, ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

type Props = {
  children: ReactNode;
  errorFallback: ReactElement<unknown, string | FunctionComponent | typeof Component> | null;
  suspenseFallback?: ReactElement<unknown, string | FunctionComponent | typeof Component> | null;
};

function AsyncBoundary(props: Props) {
  const { children, errorFallback, suspenseFallback } = props;
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary fallback={errorFallback} onReset={reset}>
      <Suspense fallback={suspenseFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;
