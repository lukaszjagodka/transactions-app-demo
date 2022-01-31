import React, { Component } from 'react';
import Dashboard from './components/dashboard/Routes';
import { fetchRates } from './helpers/fetchRates';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetchRates();
  }

  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
