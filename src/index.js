import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.js';
import App from './App';
import {createGlobalStyle} from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <createGlobalStyle />
    <App />
  </React.StrictMode>
);


