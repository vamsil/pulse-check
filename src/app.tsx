import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppHeader from './components/appHeader';


import logo from './logo.svg';

import './app.scss';
import AppRoutes from './routes';

function App() {
  return (

    <div className="app">
      <BrowserRouter>
        <AppHeader />
        <main>
            <AppRoutes />
        </main>
        <footer></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
