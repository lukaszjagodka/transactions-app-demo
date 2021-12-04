/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/function-component-definition */
import React from 'react';
import './App.css';
import AddAccountForm from './components/accounts/AddAccountForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddAccountForm />
      <h1>hello</h1>
    </div>
  );
}

export default App;
