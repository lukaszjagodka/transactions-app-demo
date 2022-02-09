/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from './components/dashboard/Routes';
import './App.css';
import { fetchRates } from './components/accounts/accountsSlice';

type TProps = {
  getRates: Function
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
});

export default connect(null, mapDispatchToProps)(App);
