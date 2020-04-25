import React from 'react';
import './App.css';
import Favorites from './Components/Favorites'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <div className="App">
      <Favorites />
    </div>
  );
}

export default App;
