import React from 'react';
import App from './App';
import SubscribePage from './SubscribePage';
import SubscribeSuccessPage from './SubscribeSuccessPage';
import SubscribeErrorPage from './SubscribeErrorPage';

export function getRouteComponent(path: string) {
  switch (path) {
    case '/subscribe':
      return <SubscribePage />;
    case '/subscribe/success':
      return <SubscribeSuccessPage />;
    case '/subscribe/error':
      return <SubscribeErrorPage />;
    default:
      return <App />;
  }
}
