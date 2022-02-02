/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
import Dashboard from './components/dashboard/Routes';
// import { fetchRates } from './helpers/fetchRates';
import './App.css';
import { fetchAccounts, fetchRates } from './components/accounts/accountsSlice';

type TProps = {
  getRates: any
}

class App extends Component <TProps, {}> {
  componentDidMount() {
    const { getRates } = this.props;
    getRates();
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
  getRates: () => dispatch(fetchRates()),
  fetchAccounts: () => dispatch(fetchAccounts()),
});

export default connect(null, mapDispatchToProps)(App);
