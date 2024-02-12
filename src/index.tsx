import React from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import i18n from './i18n';
import reportWebVitals from './reportWebVitals';
import './index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nextProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
