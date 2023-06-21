import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/routes/App';
import './sass/Main.scss';


import { BrowserRouter } from 'react-router-dom';

import Header from './Layout/Header/Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
          <Header/>
          <main>
          <App/>
          </main>
    </BrowserRouter>
  </React.StrictMode>
);
