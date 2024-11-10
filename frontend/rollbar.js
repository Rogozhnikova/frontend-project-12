import React from 'react';
import { Provider, ErrorBoundary } from '@rollbar/react'; // Provider imports 'rollbar'

const rollbarConfig = {
  accessToken: 'b1951860a77945ad9ebe4ac338a15715',
  environment: 'testenv',
};

function TestError() {
  const a = null;
  return a.hello();
}

// Provider instantiates Rollbar client instance handling any uncaught errors or unhandled promises in the browser
// ErrorBoundary catches all React errors in the tree below and logs them to Rollbar
export default function App() {
  return (
    <Provider config={rollbarConfig}>
      <ErrorBoundary>
        <TestError />
      </ErrorBoundary>
    </Provider>
  );
}