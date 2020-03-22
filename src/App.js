import React from 'react';
import './App.css';
import Day from './Components/Day'
import Favorites from './Components/Favorites'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <div className="App">
      <h1 className="pageTitle">Cunningham's Class</h1>
      <div className=" row flex">
        <div className="column left">
        <Day className="left" />
        </div>
        <div className="column right">
          <Favorites />
        </div>
      </div>
    </div>
  );
}

export default App;
