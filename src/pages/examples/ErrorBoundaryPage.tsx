import { Suspense } from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';
import SuspenseText from 'src/components/SuspenseText';

// 비동기 처리 관련 예제.
const ErrorBoundaryPage = () => {
  return (
    <ErrorBoundary fallback={<p>실패 화면</p>}>
      <p>errorboundary & suspense example page</p>
      <Suspense fallback={<p>loading...</p>}>
        <SuspenseText />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ErrorBoundaryPage;
