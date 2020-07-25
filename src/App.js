import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseReducer1 from './UseReducer/UseReducer1';
import UseRedcer2 from './UseReducer/UseRedcer2';
import Calculator from './Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <UseReducer1 />
      <UseRedcer2 />
      <Calculator />
    </div>
  );
}

export default App;
