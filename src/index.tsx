import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Social from './Social';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Social />
  </React.StrictMode>
);

reportWebVitals();
