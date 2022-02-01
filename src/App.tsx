import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from './components/dashboard/Routes';
import { fetchRates } from './helpers/fetchRates';
import './App.css';
import { fetchAllAccounts } from './components/accounts/accountsSlice';
import { IAccount } from './types/types';

class App extends Component {
  componentDidMount() {
    fetchRates();
    fetchAllAccounts();
  }

  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchAllAccounts: () => dispatch(fetchAllAccounts()),
});

export default connect(null, mapDispatchToProps)(App);
