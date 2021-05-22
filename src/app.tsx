import React, { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppHeader from './components/appHeader';

import './app.scss';
import AppRoutes from './routes';

interface IContext {
  searchKeyword: string;
  setSearchKeyword: any;
}

export const AppContext = createContext<IContext>({ searchKeyword: '', setSearchKeyword: () => { } });

function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <div className="app">
      <BrowserRouter>
        <AppContext.Provider value={{ searchKeyword, setSearchKeyword }}>
          <AppHeader />
          <main>
            <AppRoutes />
          </main>
          <footer></footer>
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
