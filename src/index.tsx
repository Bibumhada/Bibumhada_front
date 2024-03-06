import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

declare global {
  interface Window {
    kakao: any;
  }
}

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

if (process.env.NODE_ENV === 'production') {
  console = window.console || {};
  console.log = function no_console() {};
  console.warn = function no_console() {};
  console.error = function () {};
}

root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
);
