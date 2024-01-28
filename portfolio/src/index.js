// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Background from './components/background';
import '../src/components/background.css';

// Create a root for the Background component
const backgroundRoot = ReactDOM.createRoot(document.getElementById('background-root'));

backgroundRoot.render(
  <React.StrictMode>
    <Background />
  </React.StrictMode>
);

// Create a root for the App component
const appRoot = ReactDOM.createRoot(document.getElementById('app-root'));

appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
