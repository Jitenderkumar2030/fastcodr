import React from 'react';  
import ReactDOM from 'react-dom/client';  
import App from './App';  
import '../global.css';

import { getRouteComponent } from './router';

const path = window.location.pathname;
const Component = getRouteComponent(path);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {Component}
  </React.StrictMode>
);