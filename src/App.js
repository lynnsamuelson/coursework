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
      <h1 className="pageTitle">Mrs. Cunningham's Class</h1>
      <div className="flex">
        <div className="left">
        <Day className="left" />
        </div>
        <div className="right">
          <Favorites />
        </div>
      </div>
    </div>
  );
}

export default App;
