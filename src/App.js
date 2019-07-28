import React from 'react';
import logo from './logo.svg';
import './App.css';

import AppManager from './AppManager';
import ComponentUsingSwitched from './components/ComponentUsingSwitched';

function App() {
  return (
    <div className="App">
      <AppManager>
        <ComponentUsingSwitched />
      </AppManager>
    </div>
  );
}

export default App;
