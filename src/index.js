import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot is used instead of ReactDOM.render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
