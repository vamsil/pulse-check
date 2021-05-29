import React, { createContext, useState } from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import AppHeader from './components/appHeader';
import AccessManagment from './components/modules/AccessManagment';
import Admin from './components/modules/Admin';
import PulseCheck from './components/modules/PulseCheck';
import Home from './components/modules/Home';
import './app.scss';
import Dashboard from './components/dashboard/index';


interface IContext {
  searchKeyword: string;
  setSearchKeyword: any;
}
const menuObject =[{name:"Home",link:"/",id:0},
  {name:"Pulse Check",link:"/pulseCheck",id:1},
  {name:"Access Management",link:"/accessManagement",id:2},
  {name:"Admin",link:"/admin",id:3}];
export const AppContext = createContext<IContext>({ searchKeyword: '', setSearchKeyword: () => { } });

function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <div className="app">
      <BrowserRouter>
        <AppContext.Provider value={{ searchKeyword, setSearchKeyword }}>
          <AppHeader />
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/pulseCheck"  component={Dashboard} />
            <Route path="/accessManagement" exact component={AccessManagment} />
            <Route path="/admin" exact component={Admin} />
          </main>
          <footer></footer>
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
