import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import Main from './routes/main.jsx'; // Asegúrate de que la ruta sea correcta

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main/> {/* Main ya incluye el <Router> */}
  </React.StrictMode>
);


